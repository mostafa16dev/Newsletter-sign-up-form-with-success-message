const handleSubmit = (formThis) => {
    const element = formThis.email;
    if (!validateEmail(element.value)) {
        document.getElementById('invalid-email').style.display = 'block';
        const elementStyle = element.style;
        elementStyle.opacity = 1;
        elementStyle.border = "1px solid hsl(4, 100%, 67%)";
        elementStyle.backgroundColor = "#FFE8E6";
        elementStyle.color = "hsl(4, 100%, 67%)"
    }
    else {
        document.getElementById('register-card').style.display = "none";
        document.getElementById('current-email').textContent = element.value;
        document.getElementById('success-card').style.display = "grid";
    }
    return false;
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};