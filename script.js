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
    setupNavigation();
}

function renderImages() {
    const images = [
        { src: 'assets/Sin título.png', alt: 'Sin título' },
        { src: 'assets/1.jpg', alt: 'Imagen 1' }
    ];
    resultsList.innerHTML = '';
    resultsList.className = 'images-grid';
    googleResults.classList.add('has-images');
    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'image-item';
        item.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" class="result-image">
            <div class="image-title">${img.alt}</div>
        `;
        resultsList.appendChild(item);
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const filter = link.getAttribute('data-filter');
            if (filter === 'images') {
                renderImages();
            } else {
                resultsList.className = '';
                googleResults.classList.remove('has-images');
                renderResults();
            }
        });
    });
}

function renderResults() {
    // Proyectos del portafolio
    const projects = [
        { title: 'ACME Bank', link: 'https://acme-bank-qsjbggo9r-arleyks-projects.vercel.app/', desc: 'Aplicación bancaria moderna con gestión de cuentas y transacciones.' },
        { title: 'CineMatch', link: 'https://proyecto-peliculas-five.vercel.app/', desc: 'Plataforma de recomendación de películas personalizada basada en cuestionarios.' },
        { title: 'Proyecto SER', link: 'https://proyecto-ser.vercel.app/', desc: 'Sistema de gestión y administración de proyectos.' },
        { title: 'HappyFeet Veterinaria', link: 'https://github.com/arleyk/HappyFeet_Veterinaria_EstupinanArley', desc: 'Sistema de gestión veterinaria con Java, MySQL y arquitectura MVC para administración de mascotas, citas y facturación.' },
        { title: 'JWT Bodegas', link: 'https://github.com/arleyk/jwt_bodegas', desc: 'Sistema de gestión de bodegas con autenticación JWT, desarrollado con Java, JavaScript, HTML y CSS.' }
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
