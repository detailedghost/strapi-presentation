"use strict";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import "./style.css";
import md5 from "md5";

import Reveal from "reveal.js";

const deck = new Reveal();
deck.initialize({
  hash: true,
  slideNumber: true,
});

const IMG_LOC = `https://gravatar.com/avatar/${md5("burgosdante@gmail.com")}`;
Array.from(document.querySelectorAll(".profile-img")).forEach(
  (el) => (el.src = IMG_LOC)
);
