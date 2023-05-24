const ScreenController = (() => {
  const toggleView = (buttonID) => {
    const viewID = `view-${buttonID.split("-").slice(-1)}`;
    const allViews = document.querySelectorAll(".view");
    //hide all views
    allViews.forEach((view) => view.classList.add("hidden"));

    //display the target view
    const view = document.querySelector("#" + viewID);
    view.classList.remove("hidden");
  };
  return { toggleView };
})();

export default ScreenController;
