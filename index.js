console.log('bobbyhadz.com');

// ✅ Check if window has focus
if (document.hasFocus()) {
  console.log('✅ window has focus');
} else {
  console.log('⛔️ window does NOT have focus');
}

// ---------------------------------------------

// ✅ Check if window has focus EVERY 1.5 seconds
function checkWindowFocused() {
  if (document.hasFocus()) {
    console.log('✅ window has focus');
    document.body.style.backgroundColor = 'lime';

    document.getElementById('box').textContent =
      'Window has focus';
  } else {
    console.log('⛔️ window does NOT have focus');
    document.body.style.backgroundColor = 'salmon';

    document.getElementById('box').textContent =
      'Window does NOT have focus';
  }
}

setInterval(checkWindowFocused, 1500); // 👉️ check if focused every 1.5 seconds
