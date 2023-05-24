import screen from "../logic/ScreenController";

const Nav = () => {
  const nav = Object.assign(document.createElement("nav"), {});

  const viewABtn = Object.assign(document.createElement("button"), {
    id: "toggle-view-A",
    innerText: "View A",
    onclick: function () {
      screen.toggleView(this.id);
    },
  });

  nav.appendChild(viewABtn);

  return nav;
};

export default Nav;
