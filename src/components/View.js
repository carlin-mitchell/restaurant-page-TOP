const View = (viewID) => {
  const view = Object.assign(document.createElement("div"), {
    id: `view-${viewID}`,
    className: `${viewID} view hidden`,
    innerText: `view-${viewID}`,
  });

  return view;
};

export default View;
