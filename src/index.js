import "./style.css";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

const content = Object.assign(document.createElement("div"), {
  className: "content",
});

document.body.appendChild(content);

const header = document.createElement("header");

content.appendChild(header);
content.appendChild(Main());
content.appendChild(Footer());
