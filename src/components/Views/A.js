const A = () => {
  const view = Object.assign(document.createElement("div"), {
    id: "view-A",
    className: "A view hidden",
    innerText: "View A",
  });

  return view;
};

export default A;
