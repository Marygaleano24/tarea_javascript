function emailValidation() {
    const form = document.getElementById('form');
    const emailField = document.getElementById('email');
    const confirmEmailField = document.getElementById('email_confirm');

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (emailField.value !== confirmEmailField.value) {
            confirmEmailField.classList.add('error');
            const element = document.createElement('p')
            const message = document.createTextNode("Eメールが一致しません")
            form.appendChild(element);
            element.appendChild(message);
            element.classList.add("alert");
            setTimeout(() => {
                form.removeChild(element)
            }, 3000);
        } else {
            confirmEmailField.classList.remove('error');
            form.submit();
        }
    });

    emailField.addEventListener('input', () => {
        if (emailField.value === confirmEmailField.value) {
            confirmEmailField.classList.remove('error');
        }
    });

    confirmEmailField.addEventListener('input', () => {
        if (emailField.value === confirmEmailField.value) {
            confirmEmailField.classList.remove('error');
        }
    });
};

window.onload = emailValidation;
