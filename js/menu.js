(() => {
    const menuBtn = document.querySelector('[data-menu-btn]');
    const menuContent = document.querySelector('[data-menu-content]');

    menuBtn.addEventListener('click', () => {
        const ariaExpanded = menuBtn.getAttribute('aria-expanded') === "true" || false;
        menuBtn.setAttribute('aria-expanded', !ariaExpanded);
        menuBtn.classList.toggle('is-open');
        menuContent.classList.toggle('is-open');
    })
})();