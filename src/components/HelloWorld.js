const HelloWorld = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Hello World";
  h1.classList.add("red");

  return h1;
};

export default HelloWorld;
