interface NavLink {
  label: string;
  href: string;
}
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "By Types", href: "/types" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pokemon", href: "/pokemon" },
];

export default navLinks;
