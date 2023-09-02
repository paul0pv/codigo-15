"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const destination = document.querySelector("#header");
  const main = document.querySelector("#main");

  let mobile_bg = 'bg-[url("./assets/home/background-home-mobile.jpg")]';
  let desktop_bg = 'md:bg-[url("./assets/home/background-home-desktop.jpg")]';

  main.classList.add(mobile_bg);
  main.classList.add(desktop_bg);

  destination.addEventListener("click", () => {
    desktop_bg =
      'md:bg-[url("./assets/destination/background-destination-desktop.jpg")]';
    main.classList.add(desktop_bg);
  });
});
