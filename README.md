# SafeDiary • Landing Page

> **SafeDiary** es una aplicación de diario emocional, rutinas y acceso a atención psicológica profesional, diseñada por **MindCluster**.

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/Status-Completed-success.svg)](#)
[![Design: Safe%20Diary%20Warmth](https://img.shields.io/badge/Design%20System-Safe%20Diary%20Warmth-00685f.svg)](#)

---

## 🌿 Descripción del Proyecto

La landing presenta el recorrido desde la reflexión personal hasta la atención profesional. Usa la marca original y pantallas de referencia del producto; explica que el diario permanece privado y que compartir contexto con un especialista es una decisión del paciente.

---

## Características de la landing

- Presenta el producto con textos concretos y un diseño basado en la guía visual de SafeDiary.
- Usa el logo original del proyecto en la cabecera, el pie y el favicon.
- Muestra cinco capturas del prototipo actual (Inicio, Diarito, Rutinas, Psicólogos y Mis citas). Al pasar el cursor sobre el carrusel, cambia de pantalla y sigue avanzando cada 3 segundos; también admite flechas, teclado y desplazamiento táctil.
- Acompaña las funciones con fotografías de referencia que no representan a usuarios ni profesionales de SafeDiary.
- Explica diario, resúmenes, rutinas, atención profesional y consentimiento sin simular funcionalidades ya disponibles.
- Conserva la selección de idioma español/inglés, el equipo y las preguntas frecuentes.
- Identifica planes y precios como referencias de un producto en desarrollo; no incluye enlaces de descarga ficticios.

Las fotografías de funciones proceden de Pexels: [diario](https://www.pexels.com/photo/relaxed-journaling-by-the-window-in-natural-light-33359325/), [reflexión](https://www.pexels.com/photo/woman-checking-text-in-notebook-in-daylight-7256740/), [rutinas](https://www.pexels.com/photo/flexible-woman-doing-yoga-at-home-6193554/) y [atención](https://www.pexels.com/photo/psychologist-talking-to-a-patient-9065249/). Se usan como imágenes ilustrativas bajo la [licencia de Pexels](https://www.pexels.com/license/).

---
## 📁 Estructura del Proyecto

```text
SafeDiary_Landing_Page/
├── .gitignore                      # Exclusión de archivos locales y temporales
├── LICENSE                         # Licencia MIT
├── README.md                       # Documentación del proyecto
├── index.html                      # Landing page principal (único HTML en raíz)
├── components/                     # Componentes compartidos reutilizables
│   ├── header.html                 # Barra de navegación principal y menú móvil
│   └── footer.html                 # Pie de página y promesa de privacidad
├── pages/
│   └── terms.html                  # Términos y condiciones editorial
└── assets/
    ├── css/
    │   ├── variables.css           # Tokens heredados
    │   ├── main.css                # Estilos base y componentes existentes
    │   └── landing-refresh.css     # Marca y secciones actualizadas
    ├── js/
    │   ├── app.js                  # Inicializador principal y manejo de eventos
    │   ├── i18n/
    │   │   ├── es.js               # Diccionario en español
    │   │   ├── en.js               # Diccionario en inglés
    │   │   ├── terms-es.js         # Textos de términos en español
    │   │   ├── terms-en.js         # Textos de términos en inglés
    │   │   └── i18n.js             # Motor reactivo de internacionalización
    │   └── components/
    │       ├── include.js          # Inyector de componentes compartidos
    │       ├── mockups.js          # Carrusel de pantallas de la aplicación
    │       ├── team.js             # Carrusel de integrantes con placeholders
    │       └── faq.js              # Acordeón de preguntas frecuentes
    └── images/
        ├── safediary-logo.jpeg     # Logo original de SafeDiary
        ├── mockups/               # Capturas de referencia de la aplicación
        └── placeholders/           # Avatares vectoriales para los integrantes
            ├── member-1.svg
            ├── member-2.svg
            ├── member-3.svg
            ├── member-4.svg
            └── member-5.svg
```

---

## 🚀 Cómo Ejecutar Localmente

Dado que el proyecto utiliza módulos estándar de JavaScript (`ES Modules`), debe ser servido mediante un servidor HTTP local para evitar restricciones de CORS del protocolo `file://`.

### Opción 1: Live Server (VS Code / Antigravity IDE)
1. Haz clic derecho sobre `index.html`.
2. Selecciona **"Open with Live Server"**.

### Opción 2: Python (Nativo)
```bash
python -m http.server 3000
```
Luego abre tu navegador en `http://localhost:3000`.

### Opción 3: Node.js (npx serve)
```bash
npx serve .
```

---

## 👥 Equipo MindCluster

Proyecto universitario desarrollado para el curso de Aplicaciones Móviles por el equipo **MindCluster**.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).
