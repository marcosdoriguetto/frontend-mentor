const getQuestions = document.querySelectorAll(".faq--question")
getQuestions.forEach((question) => question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
        question.classList.toggle("active")
    } else {
        getQuestions.forEach(question => question.classList.remove("active"))
        question.classList.add("active")
    }
}))