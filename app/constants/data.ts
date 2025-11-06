import { Artist, EventInfo, Merchandise, Organizer, PriceItem } from "../types";

export const EVENT_DATE = new Date("2025-12-06T18:00:00");

export const EVENT_INFO: EventInfo = {
  name: "La Novena-1",
  date: "6 de Diciembre 2025",
  location: "Puente de la 4 Sur (Carrera 50C 1 Sur 43)",
  description:
    "La fusión épica del underground: Asado Místico se une con 808 Fest para crear el evento más esperado del año",
};

export const ARTISTS: Artist[] = [
  {
    id: "1",
    name: "Juan One",
    description:
      "Maestro del flow underground, Juan One trae beats que sacuden el alma y letras que cuentan la verdadera historia de las calles.",
    genre: "Hip Hop",
    event: "AM",
  },
  {
    id: "2",
    name: "Beleuve",
    description:
      "Productor visionario que fusiona sonidos electrónicos con la esencia del rap clásico, creando atmosferas únicas.",
    genre: "Electronic Hip Hop",
    event: "808",
  },
  {
    id: "3",
    name: "Xkarlex",
    description:
      "Lírico incendiario con un estilo único que combina trap melódico con mensajes profundos del underground.",
    genre: "Trap",
    event: "AM",
  },
  {
    id: "4",
    name: "Khatarsis de la Soul",
    description:
      "Colectivo que explora los límites del soul y el hip hop, llevando el público a un viaje emocional intenso.",
    genre: "Soul Hip Hop",
    event: "AM",
  },
  {
    id: "5",
    name: "Jacko",
    description:
      "Rapero versátil que domina tanto el freestyle como las composiciones, con un flow imparable.",
    genre: "Rap",
    event: "AM",
  },
  {
    id: "6",
    name: "JPSSNO",
    description:
      "Artista innovador que mezcla elementos del reggaeton underground con beats experimentales.",
    genre: "Urban Experimental",
    event: "808",
  },
  {
    id: "7",
    name: "Icee Fran",
    description:
      "MC helado que quema el escenario con rimas afiladas y una presencia escénica magnética.",
    genre: "Rap",
    event: "AM",
  },
  {
    id: "8",
    name: "Saint Madonna",
    description:
      "Artista conceptual que bendice el hip hop con sonidos celestiales y letras que trascienden.",
    genre: "Alternative Hip Hop",
    event: "808",
  },
  {
    id: "9",
    name: "Time Disorder",
    description:
      "Proyecto que distorsiona el tiempo y el espacio a través de beats complejos y narrativas futuristas.",
    genre: "Experimental",
    event: "808",
  },
  {
    id: "10",
    name: "Enigma la Leyenda",
    description:
      "Figura misteriosa del underground que trae historias épicas envueltas en melodías hipnóticas.",
    genre: "Storytelling Rap",
    event: "AM",
  },
  {
    id: "11",
    name: "DJ en Vivo",
    description:
      "Maestro de las tornamesas que mantiene la energía en su punto máximo con sets únicos e irrepetibles.",
    genre: "DJ Set",
    event: "808",
  },
];

export const PRICING: PriceItem[] = [
  {
    item: "Granizado Clásico",
    price: "$8.000",
    description: "Hielo raspado con tu jarabe favorito",
  },
  {
    item: "Granizado Premium",
    price: "$12.000",
    description: "Con leche condensada y extras",
  },
  {
    item: "Carne Asada - Porción",
    price: "$15.000",
    description: "Carne jugosa a la parrilla",
  },
  {
    item: "Combo Completo",
    price: "$25.000",
    description: "Carne + granizado + bebida",
  },
];

export const MERCHANDISE: Merchandise[] = [
  {
    item: "Camiseta La Novena-1",
    price: "$35.000",
    description: "Edición limitada del evento histórico",
  },
  {
    item: "Gorra 808 x Asado Místico",
    price: "$25.000",
    description: "Colaboración exclusiva",
  },
  {
    item: "Stickers Pack",
    price: "$8.000",
    description: "Colección de stickers underground",
  },
  {
    item: "Poster Conmemorativo",
    price: "$15.000",
    description: "Arte oficial del evento",
  },
];

export const ORGANIZERS: Organizer[] = [
  {
    name: "Asado Místico Crew",
    role: "Co-Organizador",
    description:
      "Pioneros en la escena underground, creadores de experiencias únicas que fusionan música y gastronomía.",
  },
  {
    name: "808 Fest Team",
    role: "Co-Organizador",
    description:
      "Especialistas en eventos electrónicos y cultura urbana, llevando el underground a otro nivel.",
  },
];
