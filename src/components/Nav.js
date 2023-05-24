import NavButton from "./NavButton";

const Nav = () => {
  const nav = Object.assign(document.createElement("nav"), {});

  nav.appendChild(NavButton("A"));
  nav.appendChild(NavButton("B"));
  nav.appendChild(NavButton("C"));
  nav.appendChild(NavButton("D"));

  return nav;
};

export default Nav;
