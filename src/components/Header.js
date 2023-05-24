import Nav from "./Nav";

const Header = () => {
  const header = Object.assign(document.createElement("header", {}));
  header.appendChild(Nav());
  return header;
};

export default Header;
