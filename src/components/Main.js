import A from "./Views/A";

const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  main.appendChild(A());
  return main;
};

export default Main;
