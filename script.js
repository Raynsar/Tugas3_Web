// Smooth scroll untuk nav
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Toggle light/dark mode
const btnToggle = document.getElementById("toggle-theme");
btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Simulasi submit form
const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !pesan) {
    statusText.textContent = "Nama dan pesan wajib diisi.";
    return;
  }

  statusText.textContent = `Terima kasih, ${nama}. Pesanmu sudah tercatat (simulasi).`;
  form.reset();
});
