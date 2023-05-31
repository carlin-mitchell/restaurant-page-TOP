import screen from "../logic/ScreenController";

const NavButton = (buttonID) => {
  const button = Object.assign(document.createElement("div"), {
    id: `toggle-view-${buttonID}`,
    innerText: `View ${buttonID}`,
    classList: "nav-button un-selectable-text ",
    onclick: function () {
      screen.toggleView(this.id);
    },
  });

  return button;
};

export default NavButton;
