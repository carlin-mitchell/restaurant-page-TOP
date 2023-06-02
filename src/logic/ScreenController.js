const ScreenController = (() => {
  const toggleView = (buttonID) => {
    const animationTransitionTimeSeconds = (1).toString() + "s";
    const viewId = `view-${buttonID.split("-").slice(-1)}`;
    const viewIdIdentifier = viewId.split("-")[1];

    //hide all views
    const allViews = document.querySelectorAll(".view");
    allViews.forEach((view) => {
      view.classList.add("hidden");
      view.style.animation = "";
    });
    //display the target view
    const view = document.querySelector("#" + viewId);
    view.classList.remove("hidden");
    view.style.animation = `view-animation-${viewIdIdentifier} ${animationTransitionTimeSeconds} forwards`;

    //reset all nav button backgrounds
    const allNavButtons = document.querySelectorAll(".nav-button");
    const clickedNavButton = document.querySelector(`#${buttonID}`);
    //animate the clicked nav button bg color to the corresponding view bg color
    allNavButtons.forEach((button) => (button.style.animation = ""));
    clickedNavButton.style.animation = `nav-button-animation-${viewIdIdentifier} ${animationTransitionTimeSeconds} forwards`;
  };
  return { toggleView };
})();

export default ScreenController;
