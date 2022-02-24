let safeToProceed = true;
if (safeToProceed) {
  console.log('You shall pass!');
} else {
  console.log('You shall not pass!');
}

//
let speedLimit = 55;

function amISpeeing(speed) {
  if (speed >= speedLimit) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
amISpeeing(53);
amISpeeing(73);

//------------------------------------------
//switch
let color = 'green';

switch (color) {
  case 'yellow':
    console.log('yellow color');
    break;
  case 'red':
    console.log('red color');
    break;
  case 'green':
    console.log('green color');
    break;
  case 'blue':
    console.log('blue color');
    break;
  default:
    console.log('no known color');
    break;
}
// ------> if
let color = 'green';

if (color == 'yellow') {
  console.log('yellow color');
} else if (color == 'red') {
  console.log('red color');
} else if (color == 'green') {
  console.log('green color');
} else if (color == 'blue') {
  console.log('blue color');
} else {
  console.log('no known color');
}

//--------------------------------------------
// if
let number = 20;

if (number > 10) {
  console.log('yes');
} else {
  console.log('nope');
}

// ---> switch
switch (number > 10) {
  case true:
    console.log('yes');
    break;
  case false:
    console.log('nope');
    break;
}

//--------
let loginStatus = false;

if (name == 'Admin') {
  loginStatus = 'true';
}
