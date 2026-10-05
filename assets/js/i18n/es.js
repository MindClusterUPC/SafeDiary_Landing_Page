import { esTerms } from './terms-es.js';

export const es = {
  ...esTerms,
  // Brand & Header
  brandName: "SafeDiary",
  brandTagline: "por MindCluster • Tu rincón de paz",
  navSpace: "Tu Espacio",
  navBreathing: "Paz Interior",
  navWellness: "Momentos de Calma",
  navPrivacy: "Privacidad Sagrada",
  navTeam: "Equipo",
  navFaq: "Preguntas",
  btnStartJournal: "Comenzar mi diario",

  // Hero Section
  heroBadge: "Tu rincón seguro • Libre de juicios • 100% privado",
  heroTitlePrefix: "¿Cómo te sientes hoy?",
  heroTitleAccent: "Tómate un momento para ti.",
  heroSubtitle: "Un espacio íntimo donde ser tú mismo, ordenar tus pensamientos al final del día y encontrar paz con una taza de té.",
  journalHeaderMeta: "Reflexión de hoy • Solo para tus ojos",
  journalEncryptionPill: "Cifrado en tu dispositivo",
  journalPlaceholder: "Hoy he sentido que el día se me escapaba de las manos, pero quiero agradecer este momento de calma...",
  btnRecordVoice: "Grabar nota de voz",
  btnVoiceRecording: "GRABANDO...",
  btnInspiration: "Inspiración para escribir",
  btnSaveReflection: "Guardar reflexión",
  reflectionSavedFeedback: "Guardado con cariño en la memoria de tu dispositivo. Nadie más tiene acceso.",
  reflectionSavedSub: "Tu refugio intacto",

  // Supportive Pills (Bajo el diario)
  pillPrompt1: "Hablar con calma",
  pillPrompt2: "Reflexión matutina",
  pillPrompt3: "Soltar la sobrecarga",
  trustPillar1: "Sin servidores leyendo tus cartas",
  trustPillar2: "Claves en tu móvil",
  trustPillar3: "Diseñado para sanar",

  // Reassurance Bar (4 horizontal cards)
  reassurance1Title: "Tu candado personal",
  reassurance1Desc: "Cifrado de grado bancario que vive única y exclusivamente en tu móvil.",
  reassurance2Title: "Ejercicios amables",
  reassurance2Desc: "Preguntas guiadas para desenredar el nudo en el pecho paso a paso.",
  reassurance3Title: "Cero publicidad",
  reassurance3Desc: "Tus vivencias no se venden ni se usan para entrenar algoritmos comerciales.",
  reassurance4Title: "Huella y FaceID",
  reassurance4Desc: "Se bloquea al instante cuando sales de la app. Máxima tranquilidad.",

  // Cozy Bento Grid
  bentoTag: "Un espacio pensado para ti",
  bentoTitle: "Tu refugio personal para ordenar tus pensamientos.",
  bentoSubtitle: "Cada rincón de SafeDiary está creado para brindarte serenidad, un ritmo sin prisas y la sensación hogareña de estar a salvo.",
  
  // Voice Card
  voiceTag: "Voz acogedora",
  voiceSession: "Sesión de 4 minutos",
  voiceTitle: "Un diario que te escucha con ternura",
  voiceDesc: "Habla en voz alta cuando las manos estén cansadas. Tu voz se transcribe en tu propio teléfono y el audio se desvanece de inmediato, como un suspiro en una tarde de lluvia.",
  voiceTone: "Tono: Desahogo suave y reconfortante",
  voiceLocalBadge: "100% en tu teléfono",
  voiceQuote: "“Al cerrar el portátil hoy, noté cómo caía el peso en los hombros... pero respiré hondo y puse música suave...”",
  voiceFooter: "Sin telemetría en la nube • Conversación pura",

  // Mood Patterns Card
  moodTag: "Bienestar diario",
  moodTitle: "Descubre tus momentos de calma",
  moodDesc: "Descubre qué días te sientes más sereno y qué hábitos te devuelven la sonrisa, con gráficos amables y sencillos.",
  moodLevelLabel: "Nivel de serenidad",
  moodLevelValue: "+22% de tranquilidad",
  chartDayMon: "Lunes",
  chartDayWed: "Miércoles",
  chartDayFri: "Viernes",
  chartDaySun: "Domingo",
  moodPill1: "Tardes de lectura: +Grounded",
  moodPill2: "Menos sobrepensar",

  // 4-7-8 Breathing Pacer
  breathTag: "Ritmo y paz interior",
  breathTitle: "Respira hondo y suelta la carga",
  breathDesc: "Tómate un descanso consciente con el método 4-7-8. Un ciclo amable para calmar el ritmo cardíaco cuando el día aprieta.",
  breathStateInhale: "Inhala suavemente (4s)",
  breathStateHold: "Sostén el aire con calma (7s)",
  breathStateExhale: "Exhala despacio y suelta (8s)",
  breathStateReady: "Listo para comenzar",
  breathSubInhale: "Siente cómo el pecho se ensancha",
  breathSubHold: "Disfruta de este momento de silencio",
  breathSubExhale: "Libera toda tensión acumulada",
  btnStartExercise: "Iniciar ejercicio de respiración",
  btnPauseExercise: "Pausar ejercicio",

  // Empathetic Note Sharing
  shareTag: "Apoyo y compañía",
  shareSession: "Exportación segura",
  shareTitle: "Comparte tus avances con quien te cuida",
  shareDesc: "Si visitas a un terapeuta o compartes tus reflexiones con un ser querido, genera un resumen ordenado y limpio, protegiendo siempre tus secretos más íntimos.",
  shareFileName: "Resumen_Para_Mi_Sesion.pdf",
  shareStatus: "Listo",
  shareBox1Title: "Tema central",
  shareBox1Value: "Autoexigencia",
  shareBox2Title: "Progreso",
  shareBox2Value: "Más compasión",
  shareBox3Title: "Días de paz",
  shareBox3Value: "5 de 7 días",
  shareFootnote: "Tú decides qué párrafos incluir y qué omitir.",
  btnCreateConsultation: "Crear cuaderno de consulta",

  // Seccion de privacidad
  privacyTag: "Privacidad que te abraza",
  privacyTitle: "Tu privacidad es sagrada y 100% tuya.",
  privacySubtitle: "Las aplicaciones convencionales guardan tus notas en servidores donde empleados o algoritmos pueden leerlas. En SafeDiary, tu intimidad está protegida bajo siete llaves que solo tú tienes.",
  privacyOtherTitle: "Otras notas y diarios en la nube",
  privacyOtherPoint1: "Tus textos se transmiten a bases de datos lejanas con contraseñas maestras de empresa.",
  privacyOtherPoint2: "Se analizan palabras clave para segmentar anuncios y rastrear tu estado emocional.",
  privacyOtherPoint3: "Si sufren una filtración o cambio de dueño, tus diarios pueden quedar expuestos.",
  privacySafeTitle: "SafeDiary",
  privacySafePoint1Title: "Cero conocimiento:",
  privacySafePoint1Text: "Solo tu teléfono tiene la llave matemática para descifrar tus palabras.",
  privacySafePoint2Title: "Inteligencia local:",
  privacySafePoint2Text: "Si usas resúmenes, se ejecutan en el chip de tu móvil sin enviar texto a Internet.",
  privacySafePoint3Title: "Libertad absoluta:",
  privacySafePoint3Text: "Puedes borrar, exportar o guardar una copia física en cualquier instante.",

  // Immersive Journaling Story
  storyTag: "Tu tiempo vale oro",
  storyTitle: "Tus pensamientos más sinceros, sin algoritmos que te juzguen.",
  storySubtitle: "SafeDiary no fue creado para mantenerte enganchado a una pantalla ni para coleccionar ‘likes’. Nació para brindarte un rincón acogedor donde soltar la armadura y reconectar con lo que verdaderamente importa.",
  storyNoteTitle: "Momento de descompresión",
  storyNoteMeta: "Ayer a las 22:45 • Una taza de manzanilla",
  storyNoteSerene: "Sereno",
  storyNoteBody: "“El día fue ajetreado y sentía que no llegaba a todo. Pero sentarme estos cinco minutos en el sofá con la luz tenue me recordó que no tengo que solucionar el mundo en un solo día. Mañana será otro día y merezco descansar.”",
  storyCompassionTag: "Nota de compasión",
  storyCompassionText: "Recuerda cómo cambia tu perspectiva cuando te concedes el permiso de soltar las riendas.",
  stat1Num: "100%",
  stat1Label: "Privado y tuyo",
  stat2Num: "0",
  stat2Label: "Anuncios o distracciones",
  stat3Num: "Paz",
  stat3Label: "A cualquier hora",

  // Team Section (Placeholders)
  teamBadge: "Las personas detrás del refugio",
  teamTitle: "Un equipo comprometido con tu calma y privacidad.",
  teamSubtitle: "Psicólogas, ingenieros de privacidad y diseñadores que creemos firmemente en la tecnología que abraza y no juzga.",
  teamBadgeRole: "Integrante 1",
  teamFooterPledge: "Compromiso de trato humano, sereno y ético",
  teamTabsHelper: "Pulsa en cada perfil para conocer su rol en tu santuario digital",
  teamMembers: [
    {
      id: 1,
      name: "Integrante 1",
      role: "Lorem ipsum dolor sit amet",
      specialty: "Lorem Ipsum",
      image: "assets/images/placeholders/member-1.svg",
      shortName: "Integrante 1",
      badgeRole: "Integrante 1",
      quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      name: "Integrante 2",
      role: "Lorem ipsum dolor sit amet",
      specialty: "Lorem Ipsum",
      image: "assets/images/placeholders/member-2.svg",
      shortName: "Integrante 2",
      badgeRole: "Integrante 2",
      quote: "“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.”",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 3,
      name: "Integrante 3",
      role: "Lorem ipsum dolor sit amet",
      specialty: "Lorem Ipsum",
      image: "assets/images/placeholders/member-3.svg",
      shortName: "Integrante 3",
      badgeRole: "Integrante 3",
      quote: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 4,
      name: "Integrante 4",
      role: "Lorem ipsum dolor sit amet",
      specialty: "Lorem Ipsum",
      image: "assets/images/placeholders/member-4.svg",
      shortName: "Integrante 4",
      badgeRole: "Integrante 4",
      quote: "“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.”",
      bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
      id: 5,
      name: "Integrante 5",
      role: "Lorem ipsum dolor sit amet",
      specialty: "Lorem Ipsum",
      image: "assets/images/placeholders/member-5.svg",
      shortName: "Integrante 5",
      badgeRole: "Integrante 5",
      quote: "“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.”",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa."
    }
  ],

  // Preguntas frecuentes
  faqBadge: "Dudas frecuentes resueltas con claridad",
  faqTitle: "Preguntas Frecuentes",
  faqSubtitle: "Queremos que te sientas con total tranquilidad y transparencia. Si no encuentras tu respuesta, siempre puedes escribirnos con confianza.",
  faqItems: [
    {
      icon: "lock",
      theme: "emerald",
      question: "¿SafeDiary puede leer mis reflexiones o utilizarlas para entrenar IA?",
      answer: "Absolutamente no. SafeDiary utiliza cifrado de cero conocimiento (Zero-Knowledge) de grado militar (AES-256). Tus notas y audios se encriptan directamente en tu teléfono antes de guardarse. Jamás entrenamos inteligencias artificiales ni tenemos acceso a tus palabras."
    },
    {
      icon: "mic",
      theme: "amber",
      question: "¿Cómo funciona el análisis de emociones y el diario de voz?",
      answer: "Tanto el reconocimiento de voz como las transcripciones y métricas de serenidad se procesan en el procesador local (en el chip de tu smartphone). El audio nunca se transmite por internet ni se almacena en la nube."
    },
    {
      icon: "favorite",
      theme: "rose",
      question: "¿Es una alternativa a la terapia psicológica profesional?",
      answer: "No. SafeDiary es una herramienta complementaria de autocuidado, introspección y desahogo diario. Si atraviesas un momento difícil o de crisis, siempre te recomendamos acudir a un profesional de la salud mental colegiado."
    },
    {
      icon: "ios_share",
      theme: "sky",
      question: "¿Puedo exportar o compartir mis notas con mi terapeuta?",
      answer: "Sí. Puedes generar resúmenes en formato PDF protegido por contraseña o en archivos estándar Markdown/JSON cuando desees compartirlos en consulta, decidiendo exactamente qué reflexiones incluir."
    },
    {
      icon: "key",
      theme: "purple",
      question: "¿Qué sucede si pierdo o cambio de teléfono?",
      answer: "Al configurar tu cuenta recibes una Frase de Rescate de 12 palabras. Al ser cifrado sin conocimiento de servidor, esa frase es tu única llave para restaurar tu santuario en un nuevo dispositivo."
    },
    {
      icon: "verified",
      theme: "teal",
      question: "¿SafeDiary tiene anuncios o vende mis datos a terceros?",
      answer: "Cero publicidad, cero rastreadores y cero venta de datos. Nuestro modelo se sostiene únicamente a través de suscripciones de mecenazgo consciente de quienes desean apoyar el proyecto."
    }
  ],

  // Call to Action (Descarga Móvil & QR)
  ctaTag: "Tu momento de calma empieza hoy",
  ctaTitle: "Lleva tu refugio contigo, allá donde vayas.",
  ctaSubtitle: "Descarga SafeDiary para iPhone y Android. Tu santuario personal listo para acompañarte al despertar o antes de dormir.",
  ctaBtnAvailableOn: "Disponible en",
  ctaBtnApple: "Apple App Store",
  ctaBtnDownloadOn: "Descárgalo en",
  ctaBtnGoogle: "Google Play",
  ctaQrTitle: "Escanea con tu móvil",
  ctaQrSubtitle: "Acceso directo e instantáneo",

  // Pie de pagina
  footerDesc: "Un santuario íntimo y sereno, concebido para escribir con honestidad, cuidar de tu bienestar mental y abrazar tus emociones en absoluta privacidad.",
  footerEncryptionActive: "Cifrado de extremo a extremo activo",
  footerPromiseTitle: "Nuestra promesa contigo",
  footerPromiseText: "Creemos que tus pensamientos son sagrados. Ningún empleado, servidor remoto o sistema automatizado tiene acceso a tus escritos. Tú eres el único dueño de tu historia.",
  footerBadgeGdpr: "Cumplimiento RGPD",
  footerBadgePrivacy: "Privacidad Total",
  footerCopyright: "© 2026 MindCluster Technologies Inc.",
  footerMadeWithLove: "Hecho con cariño para mentes conscientes.",
  footerTermsLink: "Términos y Condiciones",
  footerPrivacyLink: "Política de Privacidad",

  // Terms and Conditions Page
  termsBadge: "Marco Legal y Compromiso Ético",
  termsTitle: "Términos y Condiciones de Uso",
  termsSubtitle: "Transparencia, respeto a la privacidad y pautas para una comunidad segura y reflexiva.",
  termsBackToHome: "← Volver a la Landing",
  termsLastUpdated: "Última actualización: Octubre de 2026",
  termsSections: [
    {
      title: "1. Aceptación de los Términos",
      content: "Al acceder y utilizar SafeDiary, producto desarrollado por MindCluster, aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con alguna parte, te recomendamos suspender el uso de la aplicación."
    },
    {
      title: "2. Naturaleza del Servicio y No Sustitución Médica",
      content: "SafeDiary es una herramienta de journaling, mindfulness y reflexión personal preventiva. No constituye, bajo ninguna circunstancia, un diagnóstico médico, psicoterapia clínica ni un servicio de atención para urgencias de salud mental. Si experimentas una crisis emocional severa, te recomendamos acudir con profesionales de la salud o líneas de atención especializada."
    },
    {
      title: "3. Privacidad y Soberanía de los Datos",
      content: "Tu privacidad es nuestra prioridad absoluta. Toda la información ingresada (textos, grabaciones de voz, registros emocionales) se almacena y procesa localmente en tu dispositivo. MindCluster no comercializa tus datos, no crea perfiles publicitarios ni comparte tu intimidad con terceras partes."
    },
    {
      title: "4. Propiedad Intelectual",
      content: "Todos los contenidos de tus reflexiones son de tu exclusiva propiedad. Los elementos de diseño, logotipos, código fuente y la marca SafeDiary son propiedad intelectual de MindCluster y están protegidos por las leyes aplicables de derechos de autor y licencias de software libre correspondientes."
    },
    {
      title: "5. Modificaciones y Actualizaciones",
      content: "MindCluster se reserva el derecho de actualizar estos términos para reflejar mejoras en la aplicación o adaptaciones normativas. Cualquier cambio sustancial será comunicado a través de nuestra plataforma."
    }
  ]
};
