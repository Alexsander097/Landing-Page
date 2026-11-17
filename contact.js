const contactForm = document.querySelector("#contact-form");
const nameInput = contactForm.querySelector("#nome");

nameInput.addEventListener("input", () => {
    nameInput.setCustomValidity("");
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (!name) {
        nameInput.setCustomValidity("Informe seu nome para continuar.");
        nameInput.reportValidity();
        return;
    }

    const message = `Olá! Meu nome é ${name} e gostaria de solicitar um orçamento para móveis sob medida.`;
    const whatsappUrl = new URL("https://api.whatsapp.com/send");
    whatsappUrl.searchParams.set("phone", contactForm.dataset.whatsappPhone);
    whatsappUrl.searchParams.set("text", message);

    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
});
