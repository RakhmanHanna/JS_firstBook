// setTimeout
function showAlert() {
  console.log('moo');
}

let timeoutID = setTimeout(showAlert, 5000);
clearTimeout(timeoutID);

// setInterval
let thingToPrint = '';

function drawText() {
  thingToPrint += '#';
  console.log(thingToPrint);
}
setInterval(drawText, 2000);
clearInterval(internalID);

// requestAnimationFrame
