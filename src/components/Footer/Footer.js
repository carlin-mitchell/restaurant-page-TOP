import GitHubIcon from "./logos/github-mark-white.png";

const Footer = () => {
  const footer = Object.assign(document.createElement("footer"), {});

  const copyrightContainer = Object.assign(document.createElement("div"), {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${new Date().getFullYear()}`,
  });

  const topContainer = Object.assign(document.createElement("div"), {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Object.assign(document.createElement("a"), {
    className: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: "https://github.com/carlin-mitchell/TicTacToe-TOP",
  });

  const githubIcon = Object.assign(document.createElement("img"), {
    src: GitHubIcon,
  });

  const attributionsLink = Object.assign(document.createElement("div"), {
    className: "attributions-link",
    innerText: `show site attributions`,
    "data-show-attrs": false,
    onclick: function () {
      const attributionsContainer = document.querySelector(
        ".attributions-container"
      );
      if (!this["data-show-attrs"]) {
        attributionsContainer.classList.remove("removed");
        this.innerText = "hide site attributions";
        this["data-show-attrs"] = true;
      } else {
        attributionsContainer.classList.add("removed");
        this.innerText = "show site attributions";
        this["data-show-attrs"] = false;
      }
    },
  });

  const attributionsContainer = Object.assign(document.createElement("div"), {
    className: "attributions-container removed",
  });

  const attributionsList = Object.assign(document.createElement("ul"), {
    className: "attributions-list",
  });

  const listItem = Object.assign(document.createElement("li"));

  const bgImageAttributionLink = Object.assign(document.createElement("a"), {
    innerText: "Background Image By jcomp",
    href: " https://www.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_13807905.htm#query=food&position=13&from_view=search&track=sph",
  });

  githubLink.appendChild(githubIcon);
  copyrightContainer.appendChild(githubLink);
  topContainer.appendChild(topLink);

  listItem.appendChild(bgImageAttributionLink);
  attributionsList.appendChild(listItem);
  attributionsContainer.appendChild(attributionsList);

  footer.appendChild(copyrightContainer);
  footer.appendChild(topContainer);
  footer.appendChild(attributionsLink);
  footer.appendChild(attributionsContainer);

  return footer;
};

export default Footer;
