const inputEmail = document.querySelector('.article--input');
const button = document.querySelector('.article--button');

const validateEmail = email => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Email enviado com sucesso!"
    } else {
        return "Email inválido, por favor verifique o campo acima!";
    }
}

const classResponse = div => {
    if (div.textContent == "Email enviado com sucesso!") {
        if (document.querySelector('.article--email--response--wrong')) {
            div.classList.remove("article--email--response--wrong");
        }
        if (document.querySelector('.article--input--wrong')) {
            inputEmail.classList.remove("article--input--wrong");
        }
        inputEmail.classList.add("article--input--ok")
        div.classList.add("article--email--response--ok")
    } else {
        if (document.querySelector('.article--email--response--ok')) {
            div.classList.remove("article--email--response--ok");
        }
        if (document.querySelector('.article--input--ok')) {
            inputEmail.classList.remove("article--input--ok");
        }
        inputEmail.classList.add("article--input--wrong");
        div.classList.add("article--email--response--wrong")
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


