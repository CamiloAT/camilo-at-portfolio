import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Projects.css'

const MORE_PROJECTS = [
  {
    id: 'unfollow-spy',
    title: 'UnfollowSpy',
    category: 'Frontend · React · Vite',
    year: '2026',
    description: 'Herramienta 100% local y segura que audita tus seguidores de Instagram directamente en el navegador.',
    fullDescription: 'UnfollowSpy es una herramienta 100% local y segura que audita los seguidores de Instagram directamente en el navegador. El usuario sube su exportación oficial de Meta y la app cruza las listas de seguidores y seguidos al instante, sin contraseñas, sin servidores, sin riesgo de baneos. Incluye análisis cruzado para detectar "traidores", seguimiento de tiempo con marcas UNIX, reportes PDF descargables, modo oscuro con persistencia en localStorage, ordenamiento y búsqueda inteligente, y un tutorial interactivo de 22 pasos.\n\nNació de una necesidad personal, deseaba ver quién dejaba de seguirme en Instagram, pero no habían herramientas gratuitas o que no implicaran baneos de la cuenta. Fue el primer proyecto personal más allá de lo académico, y me enseñó lo que significa construir algo desde cero para resolver un problema real.',
    logo: '/projects/unfollow-spy/unfollow-spy-logo.png',
    accent: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    tags: ['React', 'Vite', 'jsPDF', 'Lucide', 'React Router'],
    collaborators: [],
    github: 'https://github.com/CamiloAT/UnfollowSpy',
    demo: '',
    images: [
      '/projects/unfollow-spy/app-photo-1.webp',
      '/projects/unfollow-spy/app-photo-2.webp',
      '/projects/unfollow-spy/app-photo-3.webp',
      '/projects/unfollow-spy/app-photo-4.webp',
      '/projects/unfollow-spy/app-photo-5.webp',
    ],
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    category: 'Desktop · Java · Swing',
    year: '2023',
    description: 'Juego clasico de Snake con dificultad progresiva, persistencia de puntajes y UI personalizada en Swing.',
    fullDescription: 'Implementacion clasica del juego Snake en Java con dificultad progresiva, sistema de puntajes persistentes y una interfaz grafica construida desde cero con Swing. Incluye tres niveles de dificultad, velocidad progresiva, dashboard de historial y componentes UI personalizados.\n\nA pesar de que no es el primero que desarrolle en Java, es un proyecto al que le tengo mucho cariño. Absolutamente todo fue escrito solo por mi, cada linea, cada palabra y cada decision fue desarrollada exclusivamente por mi desde cero. Lo recuerdo como el primer proyecto importante que realicé.',
    logo: '/projects/snake-game/snake-game-logo.png',
    accent: '#1e40af',
    tags: ['Java', 'Swing', 'Gson', 'JSON'],
    collaborators: [],
    github: 'https://github.com/CamiloAT/snake-game',
    demo: '',
    images: [
      '/projects/snake-game/app-photo-1.webp',
      '/projects/snake-game/app-photo-2.webp',
      '/projects/snake-game/app-photo-3.webp',
    ],
  },
  {
    id: 'pseudorandom-number-generator',
    title: 'Pseudorandom Number Generator',
    category: 'Simulacion · React · Vite',
    year: '2026',
    description: 'Aplicacion web interactiva para generacion, visualizacion y evaluacion estadistica de numeros pseudoaleatorios.',
    fullDescription: 'Aplicacion web moderna e interactiva diseñada para la generacion, visualizacion y evaluacion estadistica de numeros pseudoaleatorios. Permite experimentar con diferentes algoritmos de generacion matematicos y someter los resultados a pruebas rigurosas de uniformidad e independencia. Incluye generador congruencial lineal, generador congruencial multiplicativo y metodo del cuadrado medio, junto con pruebas estadisticas interactivas de Chi-Cuadrado, Kolmogorov-Smirnov y Poker con tooltips educativos y tablas de frecuencia dinamicas. Cuenta con un carrusel de graficas animadas con cinco tipos de visualizacion, comparacion lado a lado de algoritmos con los mismos parametros, interfaz dark mode con animaciones fluidas y un recorrido guiado interactivo.',
    logo: '/projects/pseudorandom-number-generator/pseudorandom-number-generator-logo.png',
    accent: 'linear-gradient(45deg, #7c3aed, #06b6d4)',
    tags: ['React', 'Vite', 'Tailwind', 'Recharts', 'Framer Motion', 'jStat'],
    collaborators: [
      { name: 'Jose Luis Ortega Castillo', github: 'https://github.com/JoseOrtegaUPTC' },
    ],
    github: 'https://github.com/CamiloAT/pseudorandom-number-generator',
    demo: '',
    images: [
      '/projects/pseudorandom-number-generator/app-photo-1.webp',
      '/projects/pseudorandom-number-generator/app-photo-2.webp',
      '/projects/pseudorandom-number-generator/app-photo-3.webp',
      '/projects/pseudorandom-number-generator/app-photo-4.webp',
      '/projects/pseudorandom-number-generator/app-photo-5.webp',
    ],
  },
  {
    id: 'clustered-penalty-predictor',
    title: 'Clustered Penalty Predictor',
    category: 'Machine Learning · Python · FastAPI',
    year: '2026',
    description: 'Pipeline de ML que predice el resultado de penales en futbol y descubre perfiles conductuales entre tiradores.',
    fullDescription: 'Pipeline de Machine Learning que predice el resultado de penales en futbol y descubre perfiles conductuales ocultos entre los tiradores utilizando clasificacion supervisada y clustering no supervisado. Combina un clasificador Random Forest con K-Means para identificar cuatro perfiles conductuales (Cold, Power, Pressure, Inexperienced) a partir de datos historicos, e inyecta el cluster descubierto como feature adicional para mejorar la precision. Incluye interfaz web interactiva con wizard de 3 pasos, animaciones en tiempo real para gol, atajada y fallo, dashboard de evaluacion con matriz de confusion y metodo del codo, y API desplegada en Render.com.\n\nFue un proyecto divertido y diferente, pues combina machine learning con una de mis pasiones que es el futbol. No es el tipico proyecto de adivinar quien gana, sino que explora la conducta de los tiradores y sus perfiles, lo que lo hizo especialmente interesante de desarrollar.',
    logo: '/projects/clustered-penalty-predictor/clustered-penalty-predictor-logo.png',
    accent: '#16a34a',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'Pandas', 'K-Means', 'Random Forest'],
    collaborators: [
      { name: 'Diego Fernando Aguirre Tenjo', github: 'https://github.com/elcokiin' },
    ],
    github: 'https://github.com/CamiloAT/clustered-penalty-predictor',
    demo: 'https://clustered-penalty-predictor.vercel.app/',
    images: [
      '/projects/clustered-penalty-predictor/app-photo-1.webp',
      '/projects/clustered-penalty-predictor/app-photo-2.webp',
      '/projects/clustered-penalty-predictor/app-photo-3.webp',
      '/projects/clustered-penalty-predictor/app-photo-4.webp',
      '/projects/clustered-penalty-predictor/app-photo-5.webp',
      '/projects/clustered-penalty-predictor/app-photo-6.webp',
      '/projects/clustered-penalty-predictor/app-photo-7.webp',
    ],
  },
  {
    id: 'space-orbit-dynamics',
    title: 'Space Orbit Dynamics',
    category: 'Simulacion · Python · NumPy',
    year: '2026',
    description: 'Simulador gravitacional N-Body en tiempo real del sistema Sol-Tierra-Luna con impactos de asteroides e integrador RK4.',
    fullDescription: 'Simulador gravitacional N-Body en tiempo real que modela el sistema Sol-Tierra-Luna con impactos de asteroides interactivos, impulsado por un integrador numerico Runge-Kutta de cuarto orden implementado a mano. Incluye tracking en tiempo real de conservacion de energia mecanica, eventos dinamicos de asteroides con trayectorias hiperbolicas y efectos de explosion animados, controles interactivos con sliders para velocidades y paso de integracion, y una visualizacion pulida con tema de espacio profundo, estrellas estaticas, halos brillantes, capas de atmosfera y estelas de movimiento.',
    logo: null,
    accent: 'radial-gradient(circle at 2% 50%, rgba(255,255,255,1) 0.5px, transparent 0.5px), radial-gradient(circle at 7% 50%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px), radial-gradient(circle at 12% 50%, rgba(255,255,255,0.9) 0.5px, transparent 0.5px), radial-gradient(circle at 18% 50%, rgba(255,255,255,0.5) 0.5px, transparent 0.5px), radial-gradient(circle at 23% 50%, rgba(255,255,255,1) 0.5px, transparent 0.5px), radial-gradient(circle at 29% 50%, rgba(255,255,255,0.7) 0.5px, transparent 0.5px), radial-gradient(circle at 34% 50%, rgba(255,255,255,0.8) 0.5px, transparent 0.5px), radial-gradient(circle at 40% 50%, rgba(255,255,255,0.5) 0.5px, transparent 0.5px), radial-gradient(circle at 45% 50%, rgba(255,255,255,1) 0.5px, transparent 0.5px), radial-gradient(circle at 51% 50%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px), radial-gradient(circle at 56% 50%, rgba(255,255,255,0.9) 0.5px, transparent 0.5px), radial-gradient(circle at 62% 50%, rgba(255,255,255,0.5) 0.5px, transparent 0.5px), radial-gradient(circle at 67% 50%, rgba(255,255,255,1) 0.5px, transparent 0.5px), radial-gradient(circle at 73% 50%, rgba(255,255,255,0.7) 0.5px, transparent 0.5px), radial-gradient(circle at 78% 50%, rgba(255,255,255,0.8) 0.5px, transparent 0.5px), radial-gradient(circle at 84% 50%, rgba(255,255,255,0.5) 0.5px, transparent 0.5px), radial-gradient(circle at 90% 50%, rgba(255,255,255,1) 0.5px, transparent 0.5px), radial-gradient(circle at 96% 50%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px), #1e1547',
    tags: ['Python', 'NumPy', 'Matplotlib', 'RK4', 'N-Body'],
    collaborators: [
      { name: 'Jose Luis Ortega Castillo', github: 'https://github.com/JoseOrtegaUPTC' },
    ],
    github: 'https://github.com/CamiloAT/space-orbit-dynamics',
    demo: '',
    images: [
      '/projects/space-orbit-dynamics/app-photo-1.webp',
      '/projects/space-orbit-dynamics/app-photo-2.webp',
    ],
  },
  {
    id: 'smtp-simulator',
    title: 'SMTP Simulator',
    category: 'Frontend · React · Vite',
    year: '2025',
    description: 'Simulador interactivo del protocolo SMTP con topologia de red drag-and-drop y simulacion en tiempo real.',
    fullDescription: 'Simulador interactivo del protocolo SMTP que permite visualizar y entender como se envian correos paso a paso, desde la configuracion del cliente hasta el destinatario final a traves de servidores relay. Incluye simulacion estatica con pares de comandos/respuestas para aprender los conceptos basicos, simulacion dinamica con canvas drag-and-drop para construir topologias de red personalizadas con clientes y servidores, topologia de ejemplo pre-construida para ejecutar simulaciones al instante, compositor de correos con modal para configurar remitente, destinatario, asunto y mensaje, panel de log en tiempo real con tema oscuro que muestra cada comando y respuesta SMTP secuencialmente, y transiciones de pagina animadas con pantalla de carga.',
    logo: '/projects/smtp-simulator/smtp-simulator-logo.png',
    accent: '#6366f1',
    tags: ['React', 'Vite', 'Tailwind', 'React Router', 'Lucide'],
    collaborators: [
      { name: 'Diego Fernando Aguirre Tenjo', github: 'https://github.com/elcokiin' },
      { name: 'Katlyn Jennelis Galvis Rodriguez', github: 'https://github.com/Katlyng' },
      { name: 'Gabriel Santiago Cely Forero', github: 'https://github.com/Gabigool' },
    ],
    github: 'https://github.com/CamiloAT/smtp-simulator',
    demo: '',
    images: [
      '/projects/smtp-simulator/app-photo-1.webp',
      '/projects/smtp-simulator/app-photo-2.webp',
      '/projects/smtp-simulator/app-photo-3.webp',
      '/projects/smtp-simulator/app-photo-4.webp',
      '/projects/smtp-simulator/app-photo-5.webp',
      '/projects/smtp-simulator/app-photo-6.webp',
    ],
  },
  {
    id: 'native-mobile-resources',
    title: 'Native Mobile Resources',
    category: 'Frontend · Vite · JavaScript',
    year: '2026',
    description: 'Aplicacion web interactiva que explora y demuestra capacidades nativas del navegador para experiencias tipo app movil.',
    fullDescription: 'Aplicacion web interactiva que explora y demuestra capacidades nativas del navegador, acercando la brecha entre sitios web tradicionales y experiencias de aplicaciones moviles nativas. Incluye deteccion de rostros en tiempo real con bounding boxes usando Shape Detection API, escaneo de codigos QR y barras con deteccion automatica de URLs, acceso al sistema de archivos para abrir, editar y guardar archivos de texto e imagenes desde el navegador, grabacion y captura de pantalla con Screen Capture API, grabacion de audio con visualizador de onda en tiempo real usando MediaRecorder y Web Audio API, sensores de dispositivo con representaciones 3D interactivas de orientacion y movimiento, y dibujo multitouch con soporte de mouse.',
    logo: null,
    accent: 'linear-gradient(90deg, #3b82f6, #06b6d4, #10b981, #f472b6)',
    tags: ['Vite', 'HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    collaborators: [
      { name: 'Juan Jose Albornoz Velazco', github: 'https://github.com/juanjoseing' },
      { name: 'Diego Fernando Aguirre Tenjo', github: 'https://github.com/elcokiin' },
    ],
    github: 'https://github.com/CamiloAT/native-movile-resources',
    demo: '',
    images: [
      '/projects/native-mobile-resources/app-photo-1.webp',
      '/projects/native-mobile-resources/app-photo-2.webp',
      '/projects/native-mobile-resources/app-photo-3.webp',
      '/projects/native-mobile-resources/app-photo-4.webp',
    ],
  },
  {
    id: 'block-hashing',
    title: 'Block Hashing for Large Files',
    category: 'Cryptography · Python',
    year: '2026',
    description: 'Funcion de hash criptografica personalizada construida desde cero en Python para procesar archivos grandes en bloques con mecanismos de encadenamiento.',
    fullDescription: 'Funcion de hash criptografica personalizada construida desde cero en Python, diseñada para procesar archivos grandes de forma determinista en bloques con mecanismos de encadenamiento, generando un valor de integridad unico de 256 bits. Implementa compresion personalizada con 32 rondas de mezcla usando operaciones XOR, rotaciones bit a bit y sumas modulares, procesamiento en bloques de 512 bits para manejar archivos grandes sin desbordamiento de memoria, padding Merkle-Damgard para prevenir extension de longitud, validacion automatica del efecto avalancha y benchmarking contra SHA-256 nativo de Python.',
    logo: null,
    accent: '#6b7280',
    tags: ['Python', 'Cryptography', 'Hashing', 'SHA-256'],
    collaborators: [
      { name: 'Diego Fernando Aguirre Tenjo', github: 'https://github.com/elcokiin' },
      { name: 'Katlyn Jennelis Galvis Rodriguez', github: 'https://github.com/Katlyng' },
    ],
    github: 'https://github.com/CamiloAT/aguirre-arias-galvis-hash',
    demo: '',
    images: [],
    cliOutput: `# Bloque 1: Generación de archivos de prueba
generar_archivo("archivo_1mb.txt",    1_048_576 bytes)
generar_archivo("archivo_5mb.bin",    5_242_880 bytes)
generar_archivo("archivo_10mb.txt",  10_557_419 bytes)
modificar_bit("archivo_1mb_mod.txt",  byte_0: 0x41 → 0x40)

# Bloque 2: Cálculo de hashes (512-bit blocks, 32 rounds)
archivo               bloques   tiempo(ms)   hash
archivo_1mb.txt        16385     2094.45    7c8f436d...6b4878e
archivo_5mb.bin        81921    10246.34    87b3168a...178853
archivo_10mb.txt      164960    21007.70    dcc8780a...d4ef5f
archivo_1mb_mod.txt    16385     2054.19    984eb823...3228514

# Bloque 3: Validación del efecto avalancha
original  → 7c8f436dc6bb6d7e34cb9b90e3cd038118813016d0dd9e604ee0649de6b4878e
modificado → 984eb823e8ea97daff018d87b9e4bc2ff04ce7b9f8ed817a83364ca913228514
bits_diferentes: 132 / 256 = 51.56%  ✓ ≈50%

# Bloque 4: Benchmark vs SHA-256
archivo              custom(ms)   sha256(ms)   ratio
archivo_1mb.txt        2094.45       1.79    1172x más lento
archivo_5mb.bin       10246.34       4.36    2353x más lento
archivo_10mb.txt      21007.70       9.90    2121x más lento

# Bloque 5: Resumen técnico
hash_bits: 256  |  block_bits: 512  |  rondas: 32
padding: Merkle-Damgård  |  construccion: Davies-Meyer
seguridad_teorica: ~2^128 colisiones
implementacion: Python puro (sin dependencias externas)`,
  },
  {
    id: 'block-cipher',
    title: 'Custom Block Cipher for Logistics',
    category: 'Cryptography · Python · Tkinter',
    year: '2026',
    description: 'Sistema de cifrado grafico que implementa un algoritmo SPN personalizado para proteger codigos de rastreo en logistica.',
    fullDescription: 'Sistema de cifrado grafico que implementa un algoritmo de bloque personalizado basado en una Red de Sustitucion-Permutacion (SPN), diseñado especificamente para asegurar codigos de rastreo de paquetes en sistemas logisticos heredados. Utiliza manipulaciones de cadenas y operaciones a nivel de bits sobre un alfabeto de 36 caracteres (A-Z, 0-9) con bloques fijos de 20 caracteres. Implementa los principios de Shannon (confusion y difusion) con 32 rondas de sustitucion encadenada y permutacion biyectiva, validacion de efecto avalancha y analisis de resistencia a criptoanalisis diferencial y lineal. Incluye GUI con tkinter para cifrar, generar reportes completos de rondas y analizar difusion.',
    logo: null,
    accent: '#e5e7eb',
    tags: ['Python', 'Tkinter', 'SPN', 'Cryptography'],
    collaborators: [
      { name: 'Diego Fernando Aguirre Tenjo', github: 'https://github.com/elcokiin' },
      { name: 'Katlyn Jennelis Galvis Rodriguez', github: 'https://github.com/Katlyng' },
    ],
    github: 'https://github.com/CamiloAT/block-cipher',
    demo: '',
    images: [],
    cliOutput: `# CIFRADOR DE BLOQUE — LOGISTICA v1.0
# Red de Sustitucion-Permutacion (SPN)

Mensaje original (M) : PKG2024ABCDEF1234
Bloque preparado (M) : PKG2024ABCDEF1234XXX  <- padding a 20 chars

Clave maestra (K0)  : 0x0F0E  (decimal: 3854)
Rondas         (R)  : 32
Bloque         (B)  : 20 caracteres
Modulo         (N)  : 36  (= len(ALPHABET))
Permutacion pi(i)   : (7i+3) mod 20  [biyectiva: mcd(7,20)=1]

-- Ronda  1 ────────────────────────────────────────
   Entrada a la ronda    : PKG2024ABCDEF1234XXX
   Tras S encadenada(S)  : IUGUZTW1XNPWCP4N8TDO
   Tras transposicion(pi): W4TIUWNCNDUZ1PP8OGTX

-- Ronda  8 ────────────────────────────────────────
   Entrada a la ronda    : GVJBHALKKRLE0PIJW011
   Tras S encadenada(S)  : W4ZXRJP3I3JTE4QIYTXT
   Tras transposicion(pi): TQTWXP3EIX4R3J4YTZJI

-- Ronda 32 (FINAL) ────────────────────────────────
   Entrada a la ronda    : OKABYOZYIA8P6YMKX61S
   Tras S encadenada(S)  : E1GZQGNXNM5Y9Y8Y15WU
   Tras transposicion(pi): Y85EZNM9YW1QX5Y1UGGN

Texto cifrado (C) : Y85EZNM9YW1QX5Y1UGGN

# ANALISIS DE DIFUSION (EFECTO AVALANCHA)
Mensaje original  : PKG2024ABCDEF1234XXX
Mensaje modificado: PKG2024ABCDEF1234XXY  <- ultimo char +1

Ciphertext 1 : Y85EZNM9YW1QX5Y1UGGN
Ciphertext 2 : 5AN11SGAAGKEDTBGZXO5

Dif. bits  :  49 / 120 (40.8%)  ideal ~50%
Dif. chars :  20 / 20  (100.0%)  ideal ~80-100%
Evaluacion : BUENO

# ANALISIS POR NUMERO DE RONDAS
   K0 = 0x0F0E fija | 1 char modificado

 Rondas | Chars |  % Chars |   % Bits | Nivel
----------------------------------------------------
      1 |     1 |     5.0% |     0.8% | Nula
      4 |    19 |    95.0% |    37.5% | Alta
      8 |    18 |    90.0% |    35.0% | Alta
     16 |    18 |    90.0% |    37.5% | Alta
     32 |    20 |   100.0% |    40.8% | Alta`,
  },
  {
    id: 'classic-crypto',
    title: 'Classical Cryptography System',
    category: 'Cryptography · Python · CLI',
    year: '2026',
    description: 'Sistema CLI de cifrado y descifrado con algoritmos de Caesar y Vigenere sobre un alfabeto extendido de 99 simbolos.',
    fullDescription: 'Sistema de cifrado y descifrado por linea de comandos que implementa los algoritmos de Caesar y Vigenere sobre un alfabeto extendido de 99 simbolos incluyendo letras, digitos, puntuacion y caracteres especiales. Soporta normalizacion flexible (strict/lax), entrada y salida por archivos o stdin/stdout, y incluye una suite de pruebas automatizadas con 22 casos de prueba. Implementado en Python puro sin dependencias externas.',
    logo: null,
    accent: '#a1a1aa',
    tags: ['Python', 'Caesar', 'Vigenere', 'CLI'],
    collaborators: [
      { name: 'Diego Fernando Aguirre Tenjo', github: 'https://github.com/elcokiin' },
      { name: 'Katlyn Jennelis Galvis Rodriguez', github: 'https://github.com/Katlyng' },
    ],
    github: 'https://github.com/CamiloAT/classic-cryptographic-algorithms',
    demo: '',
    images: [],
    cliOutput: `# CIFRADOR CLASICO — Caesar & Vigenere
# Alfabeto extendido: 99 simbolos (A-Z, a-z, 0-9, puntuacion, especiales)

# Ejecucion 1: Cifrado con Caesar
python cipher.py --cipher caesar --mode enc --key 5 \\
    --in sample_input.txt --out encrypted.txt --normalize lax

  Entrada  : "Hola, Mundo! 2026."
  Clave    : 5 (desplazamiento)
  Salida   : "Mtfq%1Rjsi%35472"

# Ejecucion 2: Descifrado con Vigenere
python cipher.py --cipher vigenere --mode dec --key secreto \\
    --in encrypted.txt --out decrypted.txt --normalize lax

  Entrada  : "Mtfq%1Rjsi%35472"
  Clave    : "secreto"
  Salida   : "Hola, Mundo! 2026."

# Ejecucion 3: Suite de pruebas
python tests.py

  Tests ejecutados : 22
  Tests aprobados  : 22
  Tests fallidos    : 0
  Resultado        : TODOS PASARON ✓

# Resumen tecnico
Alfabeto   : 99 caracteres (A-Z, a-z, 0-9, 33 puntuacion/especiales)
Caesar     : sustitucion monoalfabetica, clave entera (shift)
Vigenere   : sustitucion polialfabetica, clave de texto
Normalizar : strict (elimina invalidos) | lax (preserva todo)
I/O        : archivos (--in/--out) o stdin/stdout
Dependencias: ninguna (stdlib puro)`,
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <div className="projects-page">
      <div className="projects-page__content">
        <motion.div
          className="projects-page__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="projects-page__back">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al portafolio
          </Link>
          <h1 className="projects-page__title">Otros proyectos</h1>
          <p className="projects-page__subtitle">Una vista un poco más amplia de los proyectos más relevantes que he desarrollado a lo largo de mi aprendizaje.</p>
        </motion.div>

        <div className="projects-page__list">
          {MORE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="projects-page__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{ '--project-accent': project.accent }}
            >
              <div className="projects-page__item-line" />
              <div className="projects-page__item-left">
                <span className="projects-page__item-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="projects-page__item-info">
                  <div className="projects-page__item-meta">
                    <span className="projects-page__item-category">{project.category}</span>
                    <span className="projects-page__item-year">{project.year}</span>
                  </div>
                  <h3 className="projects-page__item-title">{project.title}</h3>
                  <p className="projects-page__item-desc">{project.description}</p>
                  <div className="projects-page__item-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects-page__item-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projects-page__item-actions">
                <motion.button
                  className="projects-page__item-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                >
                  More Info
                </motion.button>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-page__item-btn projects-page__item-btn--icon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-page__item-btn projects-page__item-btn--icon"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="projects-page__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="projects-page__modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="projects-page__modal-close" onClick={closeModal}>×</button>

              <div className="projects-page__modal-header">
                <span className="projects-page__modal-category">{selectedProject.category}</span>
                <div className="projects-page__modal-title-row">
                  <h3 className="projects-page__modal-title">{selectedProject.title}</h3>
                  {selectedProject.logo && <img src={selectedProject.logo} alt="" className="projects-page__modal-logo" />}
                </div>
                <span className="projects-page__modal-year">{selectedProject.year}</span>
              </div>

              <div className="projects-page__modal-body">
                <div className="projects-page__modal-info">
                  <div className="projects-page__modal-desc">
                    {selectedProject.fullDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {selectedProject.images.length > 0 && (
                  <div className="projects-page__modal-carousel">
                    <button className="projects-page__modal-arrow projects-page__modal-arrow--left" onClick={prevImage}>‹</button>
                    <div className="projects-page__modal-image">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        className="projects-page__modal-img"
                      />
                    </div>
                    <button className="projects-page__modal-arrow projects-page__modal-arrow--right" onClick={nextImage}>›</button>
                    <div className="projects-page__modal-dots">
                      {selectedProject.images.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`projects-page__modal-dot ${dotIndex === currentImageIndex ? 'projects-page__modal-dot--active' : ''}`}
                          onClick={() => setCurrentImageIndex(dotIndex)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.cliOutput && (
                  <>
                    <span className="projects-page__modal-cli-label">Funcionamiento</span>
                    <div className="projects-page__modal-cli">
                      <div className="projects-page__modal-cli-header">
                      <span className="projects-page__modal-cli-dot projects-page__modal-cli-dot--red" />
                      <span className="projects-page__modal-cli-dot projects-page__modal-cli-dot--yellow" />
                      <span className="projects-page__modal-cli-dot projects-page__modal-cli-dot--green" />
                    </div>
                    <pre className="projects-page__modal-cli-body">{selectedProject.cliOutput}</pre>
                    </div>
                  </>
                )}

                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                  <div className="projects-page__modal-collaborators">
                    <span className="projects-page__modal-collaborators-title">Compañeros de trabajo</span>
                    <div className="projects-page__modal-collaborators-list">
                      {selectedProject.collaborators.map((collab) => (
                        <a
                          key={collab.github}
                          href={collab.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-page__modal-collaborator"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {collab.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="projects-page__modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="projects-page__modal-tag">{tag}</span>
                  ))}
                </div>

                <div className="projects-page__modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="projects-page__modal-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="projects-page__modal-btn projects-page__modal-btn--primary">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
