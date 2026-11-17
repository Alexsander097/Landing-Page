const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("click", (event) => {
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
    ) {
        return;
    }

    const link = event.target.closest("a[href]");

    if (!link || link.target && link.target !== "_self" || link.hasAttribute("download")) {
        return;
    }

    const destination = new URL(link.href, window.location.href);

    if (
        destination.origin !== window.location.origin ||
        !/\.html?$/i.test(destination.pathname) ||
        destination.pathname === window.location.pathname
    ) {
        return;
    }

    event.preventDefault();
    document.body.classList.add("page-leaving");

    window.setTimeout(() => {
        window.location.assign(destination.href);
    }, reducedMotionQuery.matches ? 140 : 450);
});
