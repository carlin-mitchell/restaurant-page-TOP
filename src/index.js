import "./style.css";
import Footer from "./components/Footer/Footer";

const content = Object.assign(document.createElement("div"), {
  className: "content",
});

document.body.appendChild(content);

const main = document.createElement("main");
const header = document.createElement("header");

content.appendChild(header);
content.appendChild(main);
content.appendChild(Footer());
