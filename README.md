# SafeDiary • Landing Page

> **SafeDiary** es una plataforma y refugio digital para el registro emocional, journaling íntimo y bienestar personal, diseñada por el equipo **MindCluster**.

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/Status-Completed-success.svg)](#)
[![Design: Safe%20Diary%20Warmth](https://img.shields.io/badge/Design%20System-Safe%20Diary%20Warmth-00685f.svg)](#)

---

## 🌿 Descripción del Proyecto

SafeDiary nace como una respuesta acogedora frente a las aplicaciones clínicas frías de salud. Su diseño busca transmitir una sensación hogareña, orgánica y libre de juicios: un rincón seguro para ordenar pensamientos al final de la jornada, realizar pausas conscientes de respiración y hacer seguimiento a tu bienestar sin presiones.

---

## ✨ Características Principales

- **Internacionalización Completa (i18n):**
  - Soporte reactivo e instantáneo para **Español (ES)** e **Inglés (EN)** mediante toggle en el navbar.
  - Persistencia del idioma preferido en `localStorage`.
- **Diseño *Safe Diary Warmth*:**
  - Paleta botánica de teales y mentas (`#00685f`, `#2dd4bf`), lienzos pergamino/piedra suave (`#fcfbf9`) y sombras difusas cálidas.
  - Tipografía moderna con *Plus Jakarta Sans* e iconografía *Material Symbols*.
- **Microinteracciones en el Hero:**
  - Cuaderno íntimo con generador de sugerencias de inspiración para escribir.
  - Simulación interactiva de notas de voz con temporizador/indicador pulsante.
  - Guardado de reflexión con confirmación visual de cifrado local.
- **Paz Interior & Respiración Guiada (4-7-8):**
  - Ejercicio interactivo de regulación nerviosa con visualizador circular animado y cuenta regresiva.
- **Bienestar & Momentos de Calma:**
  - Visualización de tendencias semanales y selector de estados de ánimo (Sereno, Agradecido, Reflexivo, etc.).
- **Privacidad Sagrada:**
  - Sección que expone las garantías de almacenamiento local en el dispositivo, sin anuncios ni venta de datos.
- **Sección Equipo MindCluster:**
  - Estructurada con **placeholders** vectoriales SVG limpios y textos modulares personalizables para los 5 integrantes.
  - Navegación por carrusel con botones Anterior/Siguiente y pestañas de acceso directo.
- **Preguntas Frecuentes (FAQ):**
  - Acordeones colapsables accesibles con apertura suave.
- **Página de Términos y Condiciones:**
  - Documento legal completo y editorial en `pages/terms.html`, totalmente integrado al diseño y con soporte bilingüe.

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
    │   ├── variables.css           # Tokens de diseño (colores, fuentes, sombras, radios)
    │   └── main.css                # Estilos globales, componentes y diseño editorial
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
    │       ├── breathing.js        # Ejercicio de respiración 4-7-8
    │       ├── journal.js          # Interacciones del cuaderno y nota de voz
    │       ├── team.js             # Carrusel de integrantes con placeholders
    │       └── faq.js              # Acordeón de preguntas frecuentes
    └── images/
        ├── logo.svg                # Isotipo vectorial de SafeDiary
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
