const widScreen = window.innerWidth;
const heiScreen = window.innerHeight;
let popup = document.querySelector(".popup");

function sizing() {
  widGap = (widScreen - widScreen * 0.8) / 2;
  strWidGap = widGap.toString();

  heiGap = (heiScreen - heiScreen * 0.8) / 2;
  strHeiGap = heiGap.toString();

  // popup.style.setProperty("left", strWidGap);

  popup.style["left"] = strWidGap + "px";
  popup.style["top"] = strHeiGap + "px";

  if (widScreen > 1300) {
    popup.style["left"] = "25%";
    popup.style["top"] = "30%";
  }
}

sizing();

// for rotating
window.addEventListener("orientationchange", function () {
  window.location.reload();
});
