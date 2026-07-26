document.addEventListener("DOMContentLoaded", () => {
    const bookNavLinks = document.querySelectorAll('.glass-nav-links a[href="#book"]');
    const footerBookButton = document.querySelector("#book .glass-book-button");

    if (!bookNavLinks.length || !footerBookButton) {
        return;
    }

    const triggerButtonFlash = () => {
        footerBookButton.classList.remove("book-button-flash");
        void footerBookButton.offsetWidth;
        footerBookButton.classList.add("book-button-flash");
    };

    bookNavLinks.forEach((link) => {
        link.addEventListener("click", triggerButtonFlash);
    });

    footerBookButton.addEventListener("animationend", () => {
        footerBookButton.classList.remove("book-button-flash");
    });
});
