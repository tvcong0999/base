const registerForm = {
    email: document.querySelector("#register-email"),
    password: document.querySelector("#register-password"),
    identifyNumber: document.querySelector("#register-identifyNumber"),
    fullName: document.querySelector("#register-fullName"),
    submit: document.querySelector("#register-submit"),
};

let registerButton = registerForm.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const signup = "http://localhost:8080/user/signup";

    fetch(signup, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: registerForm.email.value,
            password: registerForm.password.value,
            fullName: registerForm.fullName.value,
            identifyNumber: registerForm.identifyNumber.value
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.status) {
                window.open(
                    "../../pages/home.html"
                );
            } else {
                alert('Đăng ký không thành công!');
            }
        })
        .catch((err) => {
            console.log(err);
        });
});