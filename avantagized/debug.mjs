import { createWriteStream } from 'node:fs';
import { get } from 'node:https';
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    get(url, (res) => {
      console.log('Status:', res.statusCode);
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log('Redirecting to:', res.headers.location);
        get(res.headers.location, (res2) => {
          console.log('Status2:', res2.statusCode);
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}
downloadFile('https://impeccable.style/api/download/bundle/universal', 'test.zip').then(() => console.log('Done')).catch(e => console.error(e));
