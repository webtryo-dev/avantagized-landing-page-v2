// Minimal UX: validate required fields and show a friendly confirmation.
// Note: This is a static landing page (no backend). Wire this to your API/service when ready.

const $ = (sel) => document.querySelector(sel);

const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const form = $("#contactForm");
const help = $("#formHelp");

function setHelp(message, tone = "neutral") {
  if (!help) return;
  help.textContent = message;
  help.style.color =
    tone === "success"
      ? "rgba(41, 147, 90, 0.95)"
      : tone === "error"
        ? "rgba(203, 58, 74, 0.95)"
        : "rgba(90, 91, 115, 0.92)";
}

function markInvalid(input, isInvalid) {
  if (!input) return;
  input.setAttribute("aria-invalid", isInvalid ? "true" : "false");
}

function isPhoneValid(value) {
  // Simple, permissive check: at least 7 digits.
  const digits = (value || "").replace(/\D/g, "");
  return digits.length >= 7;
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = $("#name");
  const business = $("#business");
  const phone = $("#phone");

  const errors = [];

  const nameVal = (name?.value || "").trim();
  const bizVal = (business?.value || "").trim();
  const phoneVal = (phone?.value || "").trim();

  const nameBad = nameVal.length < 2;
  const bizBad = bizVal.length < 2;
  const phoneBad = !isPhoneValid(phoneVal);

  markInvalid(name, nameBad);
  markInvalid(business, bizBad);
  markInvalid(phone, phoneBad);

  if (nameBad) errors.push("name");
  if (bizBad) errors.push("business name");
  if (phoneBad) errors.push("phone number");

  if (errors.length) {
    setHelp(`Please enter a valid ${errors.join(", ")}.`, "error");
    return;
  }

  // Static page: show confirmation only.
  setHelp("Thanks! We’ll reach out shortly.", "success");
  form.reset();
});
