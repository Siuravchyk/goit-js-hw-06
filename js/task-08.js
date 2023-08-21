const form = document.querySelector(".login-form");

const submitHandler = (event) => { 
    event.preventDefault();

    const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {

        alert("Please fill in all the fields!");
    } else {

        const info = {
            email: email.value,
            password: password.value
        }

        console.log(info)
        event.currentTarget.reset();
    }
}
form.addEventListener("submit", submitHandler);