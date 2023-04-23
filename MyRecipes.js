const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
});