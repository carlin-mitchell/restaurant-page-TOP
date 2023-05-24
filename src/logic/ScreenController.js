const ScreenController = (() => {
  const toggleView = (buttonID) => {
    const viewID = `view-${buttonID.split("-").slice(-1)}`;
    const view = document.querySelector("#" + viewID);
    view.classList.toggle("hidden");
  };
  return { toggleView };
})();

export default ScreenController;
