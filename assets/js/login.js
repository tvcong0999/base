const loginForm = {
    email: document.querySelector("#login-email"),
    password: document.querySelector("#login-password"),
    submit: document.querySelector("#login-submit")
};

loginForm.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://localhost:8080/user/signin";

    fetch(login, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: loginForm.email.value,
            password: loginForm.password.value
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
                alert("Lỗi, vui lòng kiểm tra lại!");
            }
        })
        .catch((err) => {
            console.log(err);
        });
});