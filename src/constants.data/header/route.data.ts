import { IPage } from "./interface";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
export const pages: IPage[] = [
  {
    id: 1,
    name: "Home",
    route: "/",
    icon: FaHome,
  },
  {
    id: 2,
    name: "About Us",
    route: "/about-us",
    icon: FaUser,
  },
  {
    id: 3,
    name: "Products",
    route: "/products",
    icon: IoShirtSharp,
  },
  {
    id: 4,
    name: "Our Clients",
    route: "/our-clients",
    icon: FaUsers,
  },
  {
    id: 5,
    name: "Contacts",
    route: "/contacts",
    icon: MdAttachEmail,
  },
];
