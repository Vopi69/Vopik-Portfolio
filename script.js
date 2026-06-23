function toggleTheme() {
    document.body.classList.toggle("light");
}

// jednoduchý hover efekt při scrollu (interaktivita)
document.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.transform = "translateY(0px)";
            card.style.opacity = "1";
        } else {
            card.style.transform = "translateY(20px)";
            card.style.opacity = "0.7";
        }
    });
});
