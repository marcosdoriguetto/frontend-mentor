const inputEmail = document.querySelector('.article--input');
const button = document.querySelector('.article--button');

const validateEmail = email => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Email inserido está correto!";
    } else {
        return "Email inválido, por favor verifique o campo acima!";
    }
}

const classResponse = div => {
    if (div.textContent === "Email inserido está correto!") {
        inputEmail.style.borderColor = "green";
        div.style.color = "green";
    } else {
        inputEmail.style.borderColor = "red";
        div.style.color = "red";
    }
}

button.onclick = () => {
    const getArticleEmail = document.querySelector('.article--email');
    if (!document.querySelector(".article--email--response")) {
        let createP = document.createElement('p');
        createP.classList.add("article--email--response");
        createP.textContent = validateEmail(inputEmail.value);
        classResponse(createP);
        getArticleEmail.appendChild(createP);
    } else {
        let getP = document.querySelector(".article--email--response");
        getP.textContent = validateEmail(inputEmail.value);
        classResponse(getP);
    }
}


