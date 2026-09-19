import type { Event } from "../types/event.types";
import article1 from "../../../assets/article1.png";
import article2 from "../../../assets/article2.png";
import article3 from "../../../assets/article3.png";

export const events: Event[] = [
  {
    title: "Summit de CEOs 2025",
    date: "15 Sep 2025 - 19:00",
    location: "Gran Salón Presidente, Ciudad de México",
    participants: 247,
    capacity: 300,
    status: "PRÓXIMO",
    category: "Negocios",
    image: article2
  },
  {
    title: "Night Frequency Vol. 3",
    date: "22 Ago 2025 - 22:00",
    location: "Club Social Condesa, Ciudad de México",
    participants: 238,
    capacity: 250,
    status: "PRÓXIMO",
    category: "Música",
    image: article1
  },
  {
    title: "Avant Sessions — Underground",
    date: "30 Ago 2025 - 23:00",
    location: "Nave 51, Fábrica de Arte, Ciudad de México",
    participants: 112,
    capacity: 180,
    status: "PRÓXIMO",
    category: "Música",
    image: article3
  },
  {
    title: "Gala L'Oréal Paris México",
    date: "10 Oct 2025 - 20:00",
    location: "Palacio de Bellas Artes, Ciudad de México",
    participants: 423,
    capacity: 500,

    status: "PRÓXIMO",
    category: "Moda & Belleza",
    image: article3
  },
  {
    title: "Kazakh Yuvelir Exhibition Night",
    date: "05 Sep 2025 - 18:30",
    location: "Centro Cultural Universitario, Ciudad de México",
    participants: 310,
    capacity: 400,
    status: "PRÓXIMO",
    category: "Arte & Cultura",
    image: ""
  },
  {
    title: "Cena de Gala — Rachel Foundation",
    date: "18 Oct 2025 - 20:30",
    location: "Quinta Jardín de Luz, Monterrey",
    participants: 96,
    capacity: 120,
    status: "PRÓXIMO",
    category: "Beneficencia",
    image: ""
  },
];