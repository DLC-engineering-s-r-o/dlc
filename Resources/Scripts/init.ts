import { initNav } from "./navigation"
import { initAnim } from "./boxAnim"
import { setCurentYear } from "./year"
import { initEmail } from "./email"

document.addEventListener("DOMContentLoaded", () => {
  initNav()
  initAnim()
  setCurentYear()
  initEmail()
})
