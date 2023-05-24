import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

const content = Object.assign(document.createElement("div"), {
  className: "content",
});

document.body.appendChild(content);

content.appendChild(Header());
content.appendChild(Main());
content.appendChild(Footer());
