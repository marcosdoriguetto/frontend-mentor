const doneProjects = ['faq-accordion-card-main', 'ping-coming-soon-page-master', 'profile-card-component-main'];

const listProjects = document.querySelector('ul');

const formatText = text => {
    return text
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

doneProjects.forEach(name => {
    const createLi = document.createElement('li');

    createLi.innerHTML = `
        <a href="./${name}/index.html">
            <img src="./${name}/design/desktop-design.jpg" alt="${name}" />
            <p>${formatText(name)}</p>
        </a>
    `;

    listProjects.appendChild(createLi);
})

