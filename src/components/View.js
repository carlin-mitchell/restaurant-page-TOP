const View = (viewID) => {
  const view = Object.assign(document.createElement("div"), {
    id: `view-${viewID}`,
    className: `${viewID} view hidden`,
  });

  return view;
};

export default View;
