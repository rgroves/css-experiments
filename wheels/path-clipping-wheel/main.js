(function () {
  let rotation = 0;
  let isSpinning = false;

  function wheelClickHandler(event) {
    if (isSpinning) return;

    let spinSeconds = 10 + Math.floor(Math.random() * 10);
    isSpinning = true;

    let rotationInterval = setInterval(function () {
      rotation = (rotation + 5) % 360;
      wheel.style.transform = "rotate(" + rotation + "deg)";
    }, 50);

    setTimeout(function () {
      clearInterval(rotationInterval);
      isSpinning = false;
    }, 1000 * spinSeconds);
  }

  let wheel = document.getElementById("wheel");
  wheel.addEventListener("click", wheelClickHandler);
})();
