// Get elements from the DOM
const sendBtn = document.querySelector('.send-btn');
const searchBar = document.querySelector('.search-bar');
const tickAnimation = document.querySelector('.tick-animation');

// Hide tick animation on load
tickAnimation.style.display = 'none';

// Handle send button click
sendBtn.addEventListener('click', () => {
  const username = searchBar.value.trim();

  if (username === '') {
    alert('Please enter a username.');
    return;
  }

  // Simulate sending money
  sendMoney(username);
});

function sendMoney(username) {
  // Simulate transaction success
  setTimeout(() => {
    displaySuccess();
  }, 1000);
}

function displaySuccess() {
  // Show success tick animation
  tickAnimation.style.display = 'block';

  // Hide it after 3 seconds
  setTimeout(() => {
    tickAnimation.style.display = 'none';
  }, 3000);
}
