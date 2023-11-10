const openHamButton = document.getElementById('open-ham');
const closeHamLabel = document.querySelector('.close-ham');
const hamButtonLabel = document.querySelector('.open-ham');
const menuItems = document.querySelector('.menu');

openHamButton.addEventListener('click', () => {
    menuItems.style.display = 'flex';
     hamButtonLabel.style.display='none';
    closeHamLabel.style.display='block';
});

closeHamLabel.addEventListener('click', (event) => {
    hamButtonLabel.style.display='block';
    menuItems.style.display = 'none';
    closeHamLabel.style.display='none';
});
