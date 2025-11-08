import { Artist, EventInfo, Organizer, PriceItem } from "../types";

export const EVENT_DATE = new Date("2025-12-06T18:00:00");

export const EVENT_INFO: EventInfo = {
  name: "La Novena-1",
  date: "6 de Diciembre 2025",
  location: "Puente de la 4 Sur (Carrera 50C 1 Sur 43)",
  description:
    "La fusion epica del underground: Asado Mistico se une con 808 Fest para crear el evento mas esperado del ano",
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
      "Productor visionario que fusiona sonidos electronicos con la esencia del rap clasico, creando atmosferas unicas.",
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
      "Lirico incendiario con un estilo unico que combina trap melodico con mensajes profundos del underground.",
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
      "Colectivo que explora los limites del soul y el hip hop, llevando el publico a un viaje emocional intenso.",
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
    profileImage: "/assets/artists/jp1.jpeg",
    spotify:
      "https://open.spotify.com/intl-es/artist/6WgiOO4ma4Wqrdyfvg8Kck?si=8qYMtRzwSRqvYL7cB_fhtg",
    instagram: "https://www.instagram.com/jpssnd/?__pwa=1",
  },
  {
    id: "7",
    name: "Icee Fran",
    description: "Algo fresco, algo unico, llegando desde el cometa.",
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
      "Proyecto que distorsiona el tiempo y el espacio a traves de beats complejos y narrativas futuristas.",
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
      "Artista de Medellin con un largo recorrido en los freestyles, respaldado por grandes como Ryan Castro, J Balvin y Dimelo King. Su musica fusiona generos como trap, rap y R&B, contando historias epicas envueltas en melodias hipnoticas.",
    genre: "Trap, Rap, R&B",
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
      "Maestro de las tornamesas que mantiene la energia en su punto maximo con sets unicos e irrepetibles.",
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
    item: "Granizado",
    price: "$15.000",
    description: "Hielo raspado artesanal",
  },
  {
    item: "2 Granizados",
    price: "$25.000",
    description: "Comparte con un amigo",
  },
  {
    item: "Carne con Porcion",
    price: "$15.000",
    description: "Carne, papas, gaseosa y arepa",
  },
  {
    item: "Combo Completo",
    price: "$30.000",
    description: "Granizado + carne con porcion",
  },
  {
    item: "Llaveros Conmemorativos",
    price: "$8.000",
    description: "Edicion La Novena-1",
  },
  {
    item: "Gorras 808 x Asado Mistico",
    price: "$40.000",
    description: "Colaboracion exclusiva",
  },
  {
    item: "Camisetas del Evento",
    price: "$25.000",
    description: "Edicion limitada",
  },
];
export const ORGANIZERS: Organizer[] = [
  {
    name: "Mirola",
    role: "Organizador del Asado Mistico",
    description:
      "La cara del Asado Mistico. Desde 2022 transformo su casa en el epicentro del underground.",
    instagram: "https://www.instagram.com/mirola777/?__pwa=1",
  },
  {
    name: "DavidMS",
    role: "CEO del 808 Fest",
    description:
      "Lider principal del 808 Fest, organizando el mejor urbano underground desde 2022.",
    instagram: "https://www.instagram.com/thekingdavidms/?__pwa=1",
  },
  {
    name: "22ce",
    role: "Equipo ENMED",
    description:
      "El que presta la casa, hace las gestiones complicadas y se mueve en el bajo mundo.",
    instagram: "https://www.instagram.com/22doce__/?__pwa=1",
  },
  {
    name: "Andrew",
    role: "Productor Musical y Sonido",
    description:
      "El productor musical con el que todo el mundo tiene confianza. Encargado del sonido.",
    instagram: "https://www.instagram.com/andreeew._flp/?__pwa=1",
  },
  {
    name: "JPSSND",
    role: "Ingeniero de Sonido",
    description:
      "Junto con Andrew, los locos que mueven el sonido del evento. También te crackea el FL Studio en 5 minutos.",
    instagram: "https://www.instagram.com/jpssnd/?__pwa=1",
  },
  {
    name: "Gundam",
    role: "Jefe de Logistica",
    description:
      "El sujeto de logistica. Trae contactos raros, conoce a todo el mundo. Literalmente te trae 3 enanos sin pensar.",
    instagram: "https://www.instagram.com/gundamsb/?__pwa=1",
  },
  {
    name: "Meyker",
    role: "Director de Streaming",
    description: "Organizando toda la transmision del evento en vivo por Kick.",
    instagram: "https://www.instagram.com/meyker0312/?__pwa=1",
  },
  {
    name: "Oasis Ticket",
    role: "Colaborador y Gestion",
    description:
      "Colaborador del asado en la gestion y organizacion del evento.",
    instagram: "https://www.instagram.com/oasislive_col/?__pwa=1",
  },
];
