// Animación de escritura en el input
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const googleAnimation = document.getElementById('google-animation');
const googleResults = document.getElementById('google-results');
const resultsList = document.getElementById('results-list');

const searchText = 'Arley Carrascal';
const typingSpeed = 120; // ms por letra
const waitAfterTyping = 700; // ms antes de "buscar"
const waitAfterSearch = 600; // ms antes de mostrar resultados

function typeText(text, cb) {
    let i = 0;
    searchBar.value = '';
    function type() {
        if (i < text.length) {
            searchBar.value += text[i];
            i++;
            setTimeout(type, typingSpeed);
        } else if (cb) {
            setTimeout(cb, waitAfterTyping);
        }
    }
    type();
}

function showResults() {
    googleAnimation.classList.add('hidden');
    googleResults.classList.remove('hidden');
    renderResults();
}

function renderResults() {
    // Ejemplo de proyectos
    const projects = [
        { title: 'Portafolio Web', link: 'https://ejemplo.com', desc: 'Proyecto de portafolio personal.' },
        { title: 'Tienda Online', link: 'https://ejemplo.com', desc: 'E-commerce de ejemplo.' },
        { title: 'Blog de Tecnología', link: 'https://ejemplo.com', desc: 'Blog sobre desarrollo y tecnología.' },
        { title: 'App de Tareas', link: 'https://ejemplo.com', desc: 'Aplicación para gestión de tareas.' },
        { title: 'Juego Interactivo', link: 'https://ejemplo.com', desc: 'Juego web simple y divertido.' }
    ];
    resultsList.innerHTML = '';
    projects.forEach(proj => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <a class="result-title" href="${proj.link}" target="_blank">${proj.title}</a>
            <a class="result-link" href="${proj.link}" target="_blank">${proj.link}</a>
            <div class="result-desc">${proj.desc}</div>
        `;
        resultsList.appendChild(item);
    });
}

// Iniciar animación al cargar
window.addEventListener('DOMContentLoaded', () => {
    typeText(searchText, () => {
        // Simular click en buscar
        searchBtn.classList.add('active');
        setTimeout(() => {
            searchBtn.classList.remove('active');
            setTimeout(showResults, waitAfterSearch);
        }, 400);
    });
});
