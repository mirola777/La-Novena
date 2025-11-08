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
    event: "808",
    backgroundImage: "/assets/artists/juanone1.JPG",
    profileImage: "/assets/artists/juanone2.JPG",
    spotify:
      "https://open.spotify.com/intl-es/artist/3xe1fd5uyPEOhXky8O6xxC?si=5v2C7qfHRTGEkccvmTgFQA",
    instagram: "https://www.instagram.com/freejuanone/?__pwa=1",
  },
  {
    id: "2",
    name: "Beleuve",
    description:
      "Productor visionario que fusiona sonidos electrónicos con la esencia del rap clásico, creando atmosferas únicas.",
    genre: "Hip Hop",
    event: "808",
    backgroundImage: "/assets/artists/beleuve2.jpg",
    profileImage: "/assets/artists/beleuve1.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/4ddoETHVB138u7HVWsj9QO?si=fT7mSgMQTZicnBtaNIiNjQ",
    instagram: "https://www.instagram.com/beleuvee/?__pwa=1",
  },
  {
    id: "3",
    name: "Xkarlex",
    description:
      "Lírico incendiario con un estilo único que combina trap melódico con mensajes profundos del underground.",
    genre: "Trap",
    event: "808",
    backgroundImage: "/assets/artists/xkarlex2.jpg",
    profileImage: "/assets/artists/xkarlex1.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/0S9Pso1CDm5omKJXQqEild?si=klvSAQEOSS27F4i7fvSDUw",
    instagram: "https://www.instagram.com/xkarlex_/?__pwa=1",
  },
  {
    id: "4",
    name: "Khatarsis de la Soul",
    description:
      "Colectivo que explora los límites del soul y el hip hop, llevando el público a un viaje emocional intenso.",
    genre: "Soul Hip Hop",
    event: "808",
    backgroundImage: "/assets/artists/katharsis1.jpg",
    profileImage: "/assets/artists/katharsis2.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/59f9kXbdGuM6EDKEtwpeu7?si=jzVGzD_BS0Kj8w_Cn49O9A",
    instagram: "https://www.instagram.com/katharsisdelasoul/?__pwa=1",
  },
  {
    id: "5",
    name: "Jacko",
    description: "La misma vuelta, pero mas facil.",
    genre: "Trap",
    event: "AM",
    backgroundImage: "/assets/artists/jacko1.jpeg",
    profileImage: "/assets/artists/jacko2.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/6aJHStGhn53zB9k4dhyIR3?si=_pp8ZCzWT1S8zdXx-BuKzQ",
    instagram: "https://www.instagram.com/jackaotic/?__pwa=1",
  },
  {
    id: "6",
    name: "JPSSND",
    description:
      "Artista innovador que mezcla elementos del reggaeton underground con beats experimentales.",
    genre: "Urbano Experimental",
    event: "808",
    backgroundImage: "/assets/artists/jp2.jpg",
    profileImage: "/assets/artists/jp1.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/6WgiOO4ma4Wqrdyfvg8Kck?si=8qYMtRzwSRqvYL7cB_fhtg",
    instagram: "https://www.instagram.com/jpssnd/?__pwa=1",
  },
  {
    id: "7",
    name: "Icee Fran",
    description: "Algo fresco, algo único, llegando desde el cometa.",
    genre: "Trap",
    event: "808",
    backgroundImage: "/assets/artists/fran1.jpeg",
    profileImage: "/assets/artists/fran2.jpeg",
    spotify:
      "https://open.spotify.com/intl-es/artist/5vNa6nTxz2lwJaa5OO0FgB?si=iw95BT1QQNSd5DBYzb3VNw",
    instagram: "https://www.instagram.com/iceefran/?__pwa=1",
  },
  {
    id: "8",
    name: "Saint Madonna",
    description:
      "Artista conceptual que bendice el hip hop con sonidos celestiales y letras que trascienden.",
    genre: "Alternativo Rock",
    event: "AM",
    backgroundImage: "/assets/artists/saintmadonna1.jpg",
    profileImage: "/assets/artists/saintmadonna2.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/5pjzKgJ1qKQK2G2eCm4VBt?si=2-0bViaJQmyMsUBGh3sXYg",
    instagram: "https://www.instagram.com/saintmadonna.x/?__pwa=1",
  },
  {
    id: "9",
    name: "Time Disorder",
    description:
      "Proyecto que distorsiona el tiempo y el espacio a través de beats complejos y narrativas futuristas.",
    genre: "Metal",
    event: "AM",
    backgroundImage: "/assets/artists/timedisorder1.jpeg",
    profileImage: "/assets/artists/timedisorder2.jpeg",
    spotify:
      "https://open.spotify.com/intl-es/artist/2FR5Qk9Dbv6isYx1jIeZbv?si=AUsZJbRESpaQR29kXAnPRg",
    instagram: "https://www.instagram.com/time_disorder/?__pwa=1",
  },
  {
    id: "10",
    name: "Enigma la Leyenda",
    description:
      "Figura misteriosa del underground que trae historias épicas envueltas en melodías hipnóticas.",
    genre: "Rap",
    event: "AM",
    backgroundImage: "/assets/artists/enigma2.jpg",
    profileImage: "/assets/artists/enigma1.jpg",
    spotify:
      "https://open.spotify.com/intl-es/artist/06viAd3ixNHnkWjLglSsLA?si=80E60N_qSI6Ubm5Xr8MASA",
    instagram: "https://www.instagram.com/enigma.la.leyenda/?__pwa=1",
  },
  {
    id: "11",
    name: "DJ en Vivo",
    description:
      "Maestro de las tornamesas que mantiene la energía en su punto máximo con sets únicos e irrepetibles.",
    genre: "DJ Set",
    event: "808",
    backgroundImage: "/assets/artists/dj1.jpg",
    profileImage: "/assets/artists/dj2.jpg",
    spotify: "https://open.spotify.com/artist/djenvivo",
    instagram: "https://instagram.com/djenvivo",
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
    name: "Mirola",
    role: "Co-Organizador Principal",
    description:
      "Visionario detrás de La Novena-1, conectando culturas y creando experiencias inolvidables.",
    instagram: "https://instagram.com/mirola",
  },
  {
    name: "DavidMS",
    role: "Director Creativo",
    description:
      "Mente maestra de la producción, llevando cada detalle a la perfección.",
    instagram: "https://instagram.com/davidms",
  },
  {
    name: "Tussi",
    role: "Coordinador de Artistas",
    description: "El enlace perfecto entre el talento y el escenario.",
    instagram: "https://instagram.com/tussi",
  },
  {
    name: "Andrew",
    role: "Producción Técnica",
    description: "Arquitecto del sonido y la experiencia audiovisual.",
    instagram: "https://instagram.com/andrew",
  },
  {
    name: "Gundam",
    role: "Logística y Operaciones",
    description: "El cerebro detrás de la organización impecable del evento.",
    instagram: "https://instagram.com/gundam",
  },
  {
    name: "Oasis Ticket JPSSND",
    role: "Gestión de Boletas",
    description:
      "Garantizando que cada asistente tenga su lugar en la historia.",
    instagram: "https://instagram.com/oasisticket",
  },
  {
    name: "Meyker",
    role: "Marketing y Comunicaciones",
    description: "Difundiendo la palabra del underground a toda la ciudad.",
    instagram: "https://instagram.com/meyker",
  },
];
