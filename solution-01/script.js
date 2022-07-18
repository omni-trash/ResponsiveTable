var containerElement = document.getElementById("container");
var messageElement   = document.getElementById("message");

// observe element sizing
var resizeObserver = new ResizeObserver(resizeObserverCallback);
resizeObserver.observe(containerElement);

// calculates the width in rem units and add css classes to the container
function resizeObserverCallback(entries) {
  // for each entry (maybe one is enough)
  for (let entry of entries) {
    handleEntry(entry);
  }

  function handleEntry(entry) {
    // sizing container
    var element  = entry.target;

    // 1rem = 16px (default if not set)
    var remPx    = Math.round(parseFloat(getComputedStyle(document.documentElement).fontSize));
    var remUnits = (element.clientWidth / remPx) >> 0;
    var stepSize = 10;
    var from     = 20;
    var to       = 120;

    // TODO
    // Problem: 
    // - flickering when recalc layout forced and scrollbar becomes visible

    for (var i = from; i <= to; i = i + stepSize) {
      var classNameUnder = "rem-under-" + i;
      var classNameOver  = "rem-over-"  + i;

      element.classList.remove(classNameUnder);
      element.classList.remove(classNameOver);

      if (remUnits < i) {
        element.classList.add(classNameUnder);
      }

      if (remUnits > i) {
        element.classList.add(classNameOver);
      }
    }

    var classes = element.classList.value.split(/\s/).sort((a, b) => (a < b));
    messageElement.innerHTML = remUnits + " rem units<br/><br/>" + classes.join("<br>");
  }
}
