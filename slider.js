$$(".image-slider").forEach(function (slider) {
  //create the extra div
  //wrap it around the first image
  let div = document.createElement("div");
  let img = slider.querySelector("img");
  slider.insertBefore(img, div);
  div.appendChild(img);
  // create the slider
  let range = document.createElement("input");
  range.type = "range";
  range.oninput = function () {
    div.style.width = this.value + "%";
  };
  slider.appendChild(range);
});
