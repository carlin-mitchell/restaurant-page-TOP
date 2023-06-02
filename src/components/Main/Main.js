import View from "../View";

const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  main.appendChild(View("A"));
  main.appendChild(View("B"));
  main.appendChild(View("C"));
  main.appendChild(View("D"));
  return main;
};

export default Main;
