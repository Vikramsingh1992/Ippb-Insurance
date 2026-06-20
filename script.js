document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const nav = document.querySelector(".site-nav");
  const menuButton = document.querySelector(".nav-toggle");
  const langButton = document.querySelector(".lang-toggle");
  const savedLang = localStorage.getItem("ippb-lang") || "hi";

  body.dataset.lang = savedLang;
  if (langButton) langButton.textContent = savedLang === "hi" ? "HI | EN" : "EN | HI";

  menuButton?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });

  langButton?.addEventListener("click", () => {
    const next = body.dataset.lang === "hi" ? "en" : "hi";
    body.dataset.lang = next;
    localStorage.setItem("ippb-lang", next);
    langButton.textContent = next === "hi" ? "HI | EN" : "EN | HI";
  });

  document.querySelectorAll("form[data-whatsapp-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const message = [
        "नमस्ते, मुझे IPPB x Bajaj Life योजना की जानकारी चाहिए।",
        `नाम: ${data.get("name") || ""}`,
        `मोबाइल: ${data.get("mobile") || ""}`,
        `आयु: ${data.get("age") || ""}`,
        `योजना: ${data.get("plan") || ""}`
      ].join("\n");
      window.location.href = `https://wa.me/919992997558?text=${encodeURIComponent(message)}`;
    });
  });
});

window.showTab = function showTab(name) {
  const target = document.getElementById(`tab-${name}`);
  if (!target) return;
  const group = target.parentElement;
  if (group) {
    group.querySelectorAll('.tab-content').forEach((item) => item.classList.remove('active'));
  }
  target.classList.add('active');
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach((button) => {
    const attr = button.getAttribute('onclick') || '';
    button.classList.toggle('active', attr.includes(`'${name}'`) || attr.includes(`"${name}"`));
  });
};
