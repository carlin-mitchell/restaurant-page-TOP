import screen from "../logic/ScreenController";

const NavButton = (buttonID) => {
  const button = Object.assign(document.createElement("button"), {
    id: `toggle-view-${buttonID}`,
    innerText: `View ${buttonID}`,
    onclick: function () {
      screen.toggleView(this.id);
    },
  });

  return button;
};

export default NavButton;
