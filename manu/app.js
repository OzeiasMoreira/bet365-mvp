document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.sidebar ul li');
  
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.sidebar ul li.active').classList.remove('active');
            item.classList.add('active');
            document.querySelector('.main').textContent = item.textContent;
        });
    });
  });