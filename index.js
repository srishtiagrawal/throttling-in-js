// Import stylesheets
import './style.css';

const throlle = function (fun, delay) {
  let last = 0;
  return function (...agrs) {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fun(...agrs);
  };
};

/*
click before throlle implementation

document.getElementById('clickme').addEventListener('click', () => {
  console.log('This is click');
})
*/

// Button click after throttle implementation

document.getElementById('clickme').addEventListener(
  'click',
  throlle(() => {
    console.log('clicked inside throttle fun');
  }, 5000)
);
