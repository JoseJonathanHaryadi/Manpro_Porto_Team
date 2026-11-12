document.addEventListener("DOMContentLoaded", () => {
    // 1. ENHANCE KONTEN SECARA DINAMIS (Ikon & Badge)
    const hobbyEl = document.getElementById("hobby-text");
    if (hobbyEl) hobbyEl.innerHTML = `<span>🎮</span> ${hobbyEl.textContent}`;

    const spiritEl = document.getElementById("spirit-text");
    if (spiritEl) spiritEl.innerHTML = `<span>🐈‍⬛</span> ${spiritEl.textContent}`;

    const skillsTitle = document.getElementById("skills-title");
    if (skillsTitle) skillsTitle.innerHTML = `<span>⚡</span> ${skillsTitle.textContent}`;

    const backBtn = document.getElementById("back-btn");
    if (backBtn) backBtn.innerHTML = `<span>←</span> ${backBtn.textContent}`;

    // Tambahkan badge tahun/event pada setiap kartu aktivitas
    document.querySelectorAll(".activity-desc").forEach((desc, index) => {
        const badge = document.createElement("span");
        badge.className = "activity-badge";
        badge.textContent = index === 0 ? "EVENT • 2026" : "ORGANISASI • 2026";
        desc.prepend(badge);
    });

    // 2. FITUR LIGHTBOX (Klik gambar untuk memperbesar)
    const lightbox = document.createElement("div");
    lightbox.id = "img-lightbox";
    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    document.querySelectorAll("#avatar-img, .activity-img").forEach((img) => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // 3. ANIMASI SCROLL REVEAL
    const sections = document.querySelectorAll("#hero-section, #bio-section, .activity-card, #profile-footer");
    sections.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((el) => observer.observe(el));
});