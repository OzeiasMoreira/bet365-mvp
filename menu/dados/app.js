document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('aside ul li');

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          document.querySelector('aside ul li.active').classList.remove('active');
          item.classList.add('active');
          document.querySelector('section h1').textContent = item.textContent;
      });
  });
});
