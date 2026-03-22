# Pixel & Friends - Web Application

Esta es la implementación completa según el Documento de Requisitos (PRD).

## Tecnologías usadas
- HTML5 Semántico
- CSS3 (Vanilla) con diseño Glassmorphism, Gradientes y Neón
- JavaScript Vanilla para manipulación dinámica y estado.

## Características
1. **Inicio:** Información del club, hero image dinámica, horarios, con modal interactivo.
2. **Juegos:** Renderizado dinámico de un array de juegos en JS. Filtro interactivo por plataforma.
3. **Eventos:** Renderizado dinámico de un array de eventos. Manejo de plazas libres calculando automáticamente a partir de los datos en LocalStorage generados por el registro interactivo de usuarios.
4. **Prompts:** Todos los prompts cargados dinámicamente y con funcionalidad portapapeles.
5. **Assets:** Control de audio en la esquina y hero background optimizado.

## Instalación y Despliegue
1. Clona o descarga los archivos en tu PC.
2. Abre la carpeta en Visual Studio Code.
3. Inicia **Live Server** (Extensión de VS Code recomendado) haciendo click en "Go Live" en la barra inferior.
4. Se abrirá el proyecto en `http://localhost:5500`. (Nota: No abrir haciendo doble click en el index.html ya que algunas funcionalidades como LocalStorage o módulos pueden comportarse distinto en protocolo 'file://').

## Estructura de archivos
- `index.html`: Estructura principal, navegación y modales.
- `style.css`: Estilización moderna, colores neón y glassmorphism.
- `main.js`: Lógica de UI dinámica y data arrays.
- `assets/`: Directorio donde debe residir la imagen `hero_background.png` que se utiliza en la cabecera.

**Nota:** La imagen de fondo generada con la herramienta debe colocarse dentro de la carpeta `assets` bajo el nombre `hero_background.png` para que cargue correctamente.
