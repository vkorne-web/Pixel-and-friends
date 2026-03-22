const juegosData = [
    { id: 1, name: "Valorant", platform: "PC", spots: 12, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Super Smash Bros. Ultimate", platform: "Switch", spots: 8, img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "EA FC 24", platform: "PS5", spots: 6, img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Halo Infinite", platform: "Xbox", spots: 4, img: "https://images.unsplash.com/photo-1621254425026-c24c7943f721?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "League of Legends", platform: "PC", spots: 10, img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Tekken 8", platform: "PS5", spots: 4, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80" }
];

const eventosData = [
    { id: 'ev1', name: "Torneo Valorant 5v5", date: "Sábado 28", time: "16:00", totalSpots: 20, type: "Torneo" },
    { id: 'ev2', name: "Street Fighter VI Showdown", date: "Domingo 29", time: "18:00", totalSpots: 16, type: "Torneo" },
    { id: 'ev3', name: "Retro Night (SNES & Megadrive)", date: "Viernes 27", time: "21:00", totalSpots: 15, type: "Noche Temática" },
    { id: 'ev4', name: "Conociendo Jugadores - Mixer", date: "Sábado 28", time: "20:00", totalSpots: 30, type: "Noche Temática" }
];

const promptsData = [
    {
        title: "Prompt 1: Estructura base", section: "Base", text: `Construye una aplicación web para un local social de videojuegos llamado "Pixel & Friends". 
La web debe tener 4 pestañas de navegación:

1. INICIO - Presentación del local, horarios, ubicación y ambiente
2. JUEGOS - Catálogo de juegos disponibles con imágenes, plataformas y plazas libres
3. EVENTOS - Calendario con torneos, noches temáticas y reservas
4. PROMPTS - Página que mostrará el listado completo de prompts usados para crear la web

Tecnologías: HTML5, CSS3 (moderno con efectos glassmorphism y gradientes), JavaScript vanilla.
Diseño: temática gamer pero acogedora, colores morados oscuros con neón azul/rosa.
Debe ser responsive (mobile y desktop).
Crear estructura completa de archivos con carpetas organizadas.` },
    {
        title: "Prompt 2: Página inicio", section: "Inicio", text: `Ahora desarrolla la pestaña INICIO en profundidad:

- Hero section con nombre "Pixel & Friends" y eslogan: "Conectamos jugadores, unimos partidas"
- Sección "Quiénes somos" explicando que es un local físico con PCs, consolas y zona chill
- Horarios: Lunes a Viernes 16:00-00:00, Sábados 12:00-02:00, Domingos 12:00-22:00
- Ubicación con texto: "C/ Gamers, 42 - Barcelona" y un mapa embebido de Google Maps
- Sección "Por qué elegirnos" con 3 cards: Ambiente social, Equipos gaming, Comunidad activa
- Botón destacado "Únete a la comunidad" que abra un modal con formulario de suscripción (nombre, email, juegos favoritos)
- Todo el diseño debe mantener la estética gamer-glassmorphism con gradientes y efectos hover` },
    {
        title: "Prompt 3: Juegos dinámicos", section: "Juegos", text: `Implementa las pestañas JUEGOS y EVENTOS con datos dinámicos:

PESTAÑA JUEGOS:
- Mostrar mínimo 6 juegos en cards con: nombre, imagen placeholder, plataforma (PC/PS5/Xbox/Switch), plazas disponibles (4-12)
- Filtro por plataforma (todos/PC/PS5/Xbox/Switch) usando JavaScript
- Cada juego debe tener botón "Reservar plaza" que muestre alerta con confirmación
- Los datos de juegos deben estar en un array en JavaScript (para fácil modificación)

PESTAÑA EVENTOS:
- Mostrar mínimo 4 eventos: 2 torneos (Valorant, Street Fighter) y 2 noches temáticas (Retro Night, Conociendo Jugadores)
- Cada evento debe tener: nombre, fecha, hora, plazas totales, plazas libres
- Formulario de inscripción a eventos con: nombre, email, evento seleccionado (dropdown)
- Los datos de eventos también deben estar en un array JavaScript
- Persistencia local: guardar inscripciones en localStorage` },
    {
        title: "Prompt 4: Imágenes y audio", section: "Assets", text: `"Crea una imagen para un local social de videojuegos llamado Pixel & Friends. 
Estilo: ilustración vibrante con paleta de morados oscuros, neón azul y rosa.
Escena: interior acogedor con jugadores en PCs y consolas, una zona de sofás con amigos charlando, 
iluminación cálida con acentos de neón, carteles retro de videojuegos en las paredes.
Atmósfera: social, inclusiva, amigable. Formato horizontal 16:9 para usar como hero image."

"Genera un audio de presentación para un local de videojuegos. 
Tono: entusiasta, acogedor, juvenil.
Voz: joven, neutral en género, español neutro.
Guión:
'Bienvenido a Pixel & Friends, el lugar donde los videojuegos se convierten en amistades. 
Tenemos PCs gaming, las mejores consolas y un ambiente increíble para conocer gente que comparte tu pasión. 
Ven solo, vete con amigos. Te esperamos.'

Una vez generadas la imagen y el audio con las herramientas externas, integra:
- La imagen como hero background en la página de inicio (reemplazando el gradiente actual)
- El audio como un reproductor flotante sutil en la esquina inferior derecha con botón play/pausa` },
    {
        title: "Prompt 5: Prompts extra", section: "Prompts", text: `Ahora crea la pestaña PROMPTS con los siguientes requisitos:

1. Muestra en formato limpio y legible TODOS los prompts que hemos usado para crear esta web
2. Cada prompt debe mostrarse dentro de una card con bordes neon, permitiendo copiar al portapapeles con un botón
3. Incluye también los prompts de generación de imagen y audio (los que usamos externamente)
4. Añade un badge o marcador visual indicando qué prompt generó cada sección de la web
5. Finalmente, prepara la web para despliegue:
   - Asegúrate de que todos los archivos están organizados
   - Crea un archivo README.md con instrucciones de instalación y despliegue
   - Configura un servidor básico con Live Server o similar para visualización local` }
];

document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.add('active');
        });
    });

    const modal = document.getElementById('modal-unete');
    document.getElementById('btn-unete').addEventListener('click', () => modal.style.display = 'block');
    document.querySelector('.close-modal').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target == modal) modal.style.display = 'none'; });

    document.getElementById('join-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Solicitud enviada!');
        modal.style.display = 'none';
        e.target.reset();
    });

    const gamesGrid = document.getElementById('games-grid');
    function renderGames(platform = 'all') {
        gamesGrid.innerHTML = '';
        const filtered = platform === 'all' ? juegosData : juegosData.filter(g => g.platform === platform);
        filtered.forEach(game => {
            const card = document.createElement('div');
            card.className = 'card game-card glass-panel neon-border-blue';
            card.innerHTML = `
                <img src="${game.img}" alt="${game.name}" class="game-img">
                <div class="game-info">
                    <span class="badge">${game.platform}</span>
                    <h3>${game.name}</h3>
                    <div class="spots">Plazas libres: <strong>${Math.floor(Math.random() * game.spots) + 1}/${game.spots}</strong></div>
                    <button class="btn-neon btn-blue w-100" onclick="alert('¡Reservado ${game.name}!')">Reservar Plaza</button>
                </div>
            `;
            gamesGrid.appendChild(card);
        });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGames(btn.getAttribute('data-platform'));
        });
    });
    renderGames();

    const eventsList = document.getElementById('events-list');
    const evSelect = document.getElementById('ev-select');
    let registrations = JSON.parse(localStorage.getItem('pixel_registrations') || '[]');

    eventosData.forEach(ev => {
        const regCount = registrations.filter(r => r.eventId === ev.id).length;
        const freeSpots = ev.totalSpots - regCount;

        eventsList.insertAdjacentHTML('beforeend', `
            <div class="event-card glass-panel">
                <div class="event-details">
                    <span class="badge">${ev.type}</span>
                    <h4>${ev.name}</h4>
                    <p>📅 ${ev.date} | ⏰ ${ev.time}</p>
                </div>
                <div class="event-spots">
                    <span>${freeSpots}</span>
                    <small>libres</small>
                </div>
            </div>
        `);

        if (freeSpots > 0) {
            const option = document.createElement('option');
            option.value = ev.id;
            option.textContent = `${ev.name} (${ev.date})`;
            evSelect.appendChild(option);
        }
    });

    document.getElementById('evento-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const evId = document.getElementById('ev-select').value;
        const nombre = document.getElementById('ev-nombre').value;
        const email = document.getElementById('ev-email').value;

        registrations.push({ eventId: evId, nombre, email });
        localStorage.setItem('pixel_registrations', JSON.stringify(registrations));

        document.getElementById('ev-msg').style.display = 'block';
        setTimeout(() => location.reload(), 1500);
    });

    const promptsList = document.getElementById('prompts-list');
    promptsData.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'prompt-card glass-panel neon-border-pink';
        card.innerHTML = `
            <div class="prompt-badge">${p.section}</div>
            <h3 class="mb-10">${p.title}</h3>
            <pre id="prompt-${idx}">${p.text}</pre>
            <button class="btn-neon btn-blue mt-10" onclick="navigator.clipboard.writeText(document.getElementById('prompt-${idx}').innerText); alert('Copiado!');">📋 Copiar al portapapeles</button>
        `;
        promptsList.appendChild(card);
    });

    const btnAudio = document.getElementById('btn-play-audio');
    const audioEl = document.getElementById('bg-audio');
    let isPlaying = false;
    btnAudio.addEventListener('click', () => {
        if (isPlaying) { audioEl.pause(); btnAudio.textContent = '▶ Play'; }
        else { audioEl.play(); btnAudio.textContent = '⏸ Pause'; }
        isPlaying = !isPlaying;
    });
});
