/*
  ============================================
  CONFIGURACION DEL NEGOCIO
  ============================================
  Referencia rápida de todo lo personalizable.
  Edita directamente en index.html y styles.css,
  este archivo es solo una guía.
  ============================================
*/

const NEGOCIO = {
  // --- Datos generales ---
  nombre: "La Casa del Sabor",
  eslogan: "Cocina casera con el sabor de siempre",
  descripcion: "Platillos preparados al momento con ingredientes frescos y recetas de generación en generación.",
  direccion: "Plaza Independencia 811, Montevideo, Uruguay, CP 11000",
  telefono: "(02) 1234-5678",
  email: "hola@casadelsabor.com",
  año: 2026,

  // --- WhatsApp ---
  whatsapp: "59899123456",
  mensajePedido: "Hola, quiero hacer un pedido",
  mensajeReserva: "Hola, quiero hacer una reservación",

  // --- Redes sociales ---
  redes: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },

  // --- Horarios ---
  horarios: {
    "Lunes a Viernes": "9:00 AM — 9:00 PM",
    "Sábado": "10:00 AM — 10:00 PM",
    "Domingo": "10:00 AM — 6:00 PM",
  },

  // --- Ubicación ---
  ubicacion: {
    estacionamiento: "Estacionamiento público a 50 m · $20/hora",
    googleMapsUrl: "https://maps.google.com", // URL al negocio en Google Maps
    // googleMapsEmbed: "URL de embed de Google Maps para el iframe"
  },

  // --- Reseñas (Google Maps) ---
  resenas: {
    puntuacion: 4.8,
    totalResenas: 247,
  },

  // --- Menu ---
  // Categorías: entradas, principales, bebidas, postres
  // Etiquetas dietéticas: meat, vegan, vegetarian, gluten-free
  menu: [
    // Entradas
    { nombre: "Empanadas de Carne", precio: "$90", categoria: "entradas", etiquetas: ["meat"], descripcion: "Empanadas caseras rellenas de carne cortada a cuchillo, cebolla, morrón y aceitunas." },
    { nombre: "Empanadas de Queso", precio: "$80", categoria: "entradas", etiquetas: ["vegetarian"], descripcion: "Empanadas de queso y cebolla gratinadas al horno." },
    { nombre: "Fainá", precio: "$70", categoria: "entradas", etiquetas: ["vegan", "gluten-free"], descripcion: "Fainá finito y crocante, hecho con harina de garbanzo al horno de piedra." },
    { nombre: "Provoleta a la Parrilla", precio: "$120", categoria: "entradas", etiquetas: ["vegetarian", "gluten-free"], descripcion: "Provolone fundido a la parrilla con orégano, ají molido y aceite de oliva." },
    // Principales
    { nombre: "Chivito Canadiense", precio: "$350", categoria: "principales", etiquetas: ["meat"], descripcion: "Lomo al pan con jamón, queso, panceta, huevo frito, lechuga, tomate y mayonesa. Con papas fritas." },
    { nombre: "Asado con Cuero", precio: "$420", categoria: "principales", etiquetas: ["meat", "gluten-free"], descripcion: "Asado a las brasas cocinado lento con cuero. Con ensalada mixta y pan casero." },
    { nombre: "Milanesa Napolitana", precio: "$290", categoria: "principales", etiquetas: ["meat"], descripcion: "Milanesa de ternera gratinada con salsa de tomate, jamón y muzzarella. Con papas fritas o puré." },
    { nombre: "Milanesa de Soja", precio: "$220", categoria: "principales", etiquetas: ["vegan"], descripcion: "Milanesa casera de soja con especias. Con ensalada y papas al horno." },
    { nombre: "Hamburguesa Completa", precio: "$280", categoria: "principales", etiquetas: ["meat"], descripcion: "Medallón casero con lechuga, tomate, cebolla, jamón, queso, huevo, panceta y papas fritas." },
    { nombre: "Pizza Muzzarella", precio: "$250", categoria: "principales", etiquetas: ["vegetarian"], descripcion: "Pizza al molde con abundante muzzarella, salsa de tomate casera y aceitunas." },
    { nombre: "Choripán", precio: "$180", categoria: "principales", etiquetas: ["meat"], descripcion: "Chorizo criollo a la parrilla en pan casero con chimichurri y salsa criolla." },
    { nombre: "Tallarines con Tuco", precio: "$230", categoria: "principales", etiquetas: ["vegetarian"], descripcion: "Tallarines caseros al huevo con salsa tuco de tomate, cebolla, morrón y albahaca." },
    { nombre: "Pamplona", precio: "$380", categoria: "principales", etiquetas: ["meat", "gluten-free"], descripcion: "Carne rellena con morrón, huevo duro, aceitunas y queso, cocida a la parrilla." },
    // Bebidas
    { nombre: "Medio y Medio", precio: "$120", categoria: "bebidas", etiquetas: ["vegan", "gluten-free"], descripcion: "Mitad vino blanco espumoso y mitad vino blanco seco. Servido bien frío." },
    { nombre: "Clericó", precio: "$140", categoria: "bebidas", etiquetas: ["vegan", "gluten-free"], descripcion: "Vino blanco con frutas de estación, naranja, durazno y manzana." },
    { nombre: "Cerveza Artesanal", precio: "$130", categoria: "bebidas", etiquetas: ["vegan"], descripcion: "Cerveza artesanal uruguaya. Rubia, roja o negra. Pinta de 500 ml." },
    // Postres
    { nombre: "Chajá", precio: "$160", categoria: "postres", etiquetas: ["vegetarian"], descripcion: "Bizcochuelo, merengue, crema chantilly y duraznos. El postre uruguayo por excelencia." },
    { nombre: "Martín Fierro", precio: "$120", categoria: "postres", etiquetas: ["vegetarian", "gluten-free"], descripcion: "Dulce de membrillo con queso Colonia. La combinación clásica del campo uruguayo." },
    { nombre: "Flan con Dulce de Leche", precio: "$130", categoria: "postres", etiquetas: ["vegetarian", "gluten-free"], descripcion: "Flan casero cremoso bañado en dulce de leche y crema." },
    { nombre: "Tortas Fritas", precio: "$90", categoria: "postres", etiquetas: ["vegan"], descripcion: "Tortas fritas caseras espolvoreadas con azúcar. Ideales con mate." },
  ],

  // --- Colores (editar en styles.css :root) ---
  // --color-primary: #2d5016 (verde bosque)
  // --color-accent: #c49b1a (dorado)
  // --color-bg: #fafaf7 (crema suave)
  // --color-bg-alt: #f0efe8 (beige)
};

if (typeof module !== 'undefined') module.exports = NEGOCIO;
