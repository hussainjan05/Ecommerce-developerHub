const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');


menuBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

document.querySelectorAll('.remove-btn').forEach(btn => {
  btn.addEventListener('click', () => {
      btn.parentElement.remove();
  });
});