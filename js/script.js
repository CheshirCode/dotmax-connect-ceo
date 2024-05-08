document.querySelector("#searchCard").oninput = function () {
  let val = this.value.trim();
  val.charAt(0).toUpperCase() + val.slice(1);

  let searchItems = document.querySelectorAll(".searchCard .phone__card");
  if (val != "") {
    searchItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    searchItems.forEach(function (elem) {
      elem.classList.remove("hide");
    });
  }
};
