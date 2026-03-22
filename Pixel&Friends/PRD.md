Construye una aplicación web para un local social de videojuegos llamado "Pixel & Friends". 
La web debe tener 4 pestañas de navegación:

1. INICIO - Presentación del local, horarios, ubicación y ambiente
2. JUEGOS - Catálogo de juegos disponibles con imágenes, plataformas y plazas libres
3. EVENTOS - Calendario con torneos, noches temáticas y reservas
4. PROMPTS - Página que mostrará el listado completo de prompts usados para crear la web

Tecnologías: HTML5, CSS3 (moderno con efectos glassmorphism y gradientes), JavaScript vanilla.
Diseño: temática gamer pero acogedora, colores morados oscuros con neón azul/rosa.
Debe ser responsive (mobile y desktop).
Crear estructura completa de archivos con carpetas organizadas.


Ahora desarrolla la pestaña INICIO en profundidad:

- Hero section con nombre "Pixel & Friends" y eslogan: "Conectamos jugadores, unimos partidas"
- Sección "Quiénes somos" explicando que es un local físico con PCs, consolas y zona chill
- Horarios: Lunes a Viernes 16:00-00:00, Sábados 12:00-02:00, Domingos 12:00-22:00
- Ubicación con texto: "C/ Gamers, 42 - Barcelona" y un mapa embebido de Google Maps
- Sección "Por qué elegirnos" con 3 cards: Ambiente social, Equipos gaming, Comunidad activa
- Botón destacado "Únete a la comunidad" que abra un modal con formulario de suscripción (nombre, email, juegos favoritos)
- Todo el diseño debe mantener la estética gamer-glassmorphism con gradientes y efectos hover

Implementa las pestañas JUEGOS y EVENTOS con datos dinámicos:

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
- Persistencia local: guardar inscripciones en localStorage

"Crea una imagen para un local social de videojuegos llamado Pixel & Friends. 
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
Duración aproximada: 15 segundos. Música de fondo: synthwave suave."

Una vez generadas la imagen y el audio con las herramientas externas, integra:
- La imagen como hero background en la página de inicio (reemplazando el gradiente actual)
- El audio como un reproductor flotante sutil en la esquina inferior derecha con botón play/pausa
- Opción: que el audio se reproduzca automáticamente al cargar la página solo si el usuario ha interactuado antes (por políticas de navegadores)

Ahora crea la pestaña PROMPTS con los siguientes requisitos:

1. Muestra en formato limpio y legible TODOS los prompts que hemos usado para crear esta web:
   - Prompt 1: Estructura base y navegación
   - Prompt 2: Página de inicio completa
   - Prompt 3: Juegos y eventos con datos dinámicos
   - Prompt 4: Generación de imágenes y audio
   - Prompt 5: Página de prompts y despliegue (este mismo)

2. Cada prompt debe mostrarse dentro de una card con bordes neon, permitiendo copiar al portapapeles con un botón

3. Incluye también los prompts de generación de imagen y audio (los que usamos externamente)

4. Añade un badge o marcador visual indicando qué prompt generó cada sección de la web

5. Finalmente, prepara la web para despliegue:
   - Asegúrate de que todos los archivos están organizados
   - Crea un archivo README.md con instrucciones de instalación y despliegue
   - Configura un servidor básico con Live Server o similar para visualización local


Imagen para web de local de videojuegos social "Pixel & Friends". Estilo ilustración vibrante, paleta morados oscuros con neón azul y rosa. Interior acogedor con jugadores en PCs y consolas, zona de sofás con amigos charlando, iluminación cálida con acentos de neón, carteles retro de videojuegos. Atmósfera social, inclusiva, amigable. Formato 16:9 horizontal. --ar 16:9

Audio presentación local videojuegos. Tono entusiasta, acogedor, juvenil. Voz joven, español neutro. Guión: "Bienvenido a Pixel & Friends, el lugar donde los videojuegos se convierten en amistades. Tenemos PCs gaming, las mejores consolas y un ambiente increíble para conocer gente que comparte tu pasión. Ven solo, vete con amigos. Te esperamos." Duración 15 segundos. Música fondo synthwave suave.