import services from "../../../public/assets/service.png";
import networks from "../../../public/assets/networks.png";
import compliance from "../../../public/assets/compliance.png";
import { StaticImageData } from "next/image";

export interface IActivities {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}

export const activities: IActivities[] = [
  {
    id: 1,
    title: "Products & Services",
    image: services,
    description:
      "A range of garments including T-shirts, Polo shirts, Tank Tops, Sweatshirts, Jogging suits, Skirts, Trousers, Shorts, Shirts, Blouses, Underwear, and Sweaters.",
  },
  {
    id: 2,
    title: "Supplier Network",
    image: networks,
    description:
      "A robust network of core and backup vendors ensures flexibility, reliability, and seamless delivery, meeting the demands of various markets and clients.",
  },
  {
    id: 3,
    title: "Compliance",
    image: compliance,
    description:
      "Partner factories adhere to globally recognized standards such as WRAP, ETI, BSCI, and SA8000, ensuring ethical practices and high-quality production processes.",
  },
];
