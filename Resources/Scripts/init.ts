import { initNav } from "./navigation";
import { initAnim } from "./boxAnim";
import { setCurentYear } from "./year";

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initAnim();
  setCurentYear();
});
