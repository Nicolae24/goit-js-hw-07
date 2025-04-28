const formElement = document.querySelector(`.login-form`);
formElement.addEventListener(`submit`, formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const email = formElement.elements.email.value.trim();
    const password = formElement.elements.password.value.trim();
    if (email.length === 0 || password.length === 0) {
        alert(`'All form fields must be filled in'`);
        formElement.reset();
        return;
    }
    const formData = {
        email,
        password,
    };

    console.log(formData);
    formElement.reset();
}  
