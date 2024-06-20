import { MdTaskAlt } from "react-icons/md";
import { BiTask, BiUserCircle } from "react-icons/bi";

export const publicRoutes = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "About", path: "/about" },
];

export const privateRoutes = [
  { name: "Events", path: "/events", icon: <MdTaskAlt className="w-5 h-5" /> },
  { name: "Add", path: "/events/new", icon: <BiTask className="w-5 h-5" /> },
  {
    name: "Profile",
    path: "/profile",
    icon: <BiUserCircle className="w-5 h-5" />,
  },
];
