const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const displayGif = document.getElementById('display-gif');
const question = document.getElementById('question');

function moveButton() {
    // We subtract button size so it doesn't move outside the screen
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Moves the "No" button when hovered
// For Desktop
noButton.addEventListener('mouseover', moveButton);

// For Mobile (moves before they can even click it)
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents the actual "click" from happening
    moveButton();
});;

// Changes content when "Yes" is clicked
yesButton.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th! ❤️";
    displayGif.src = "success-gif.gif"; // Make sure to have this file!
    noButton.style.display = 'none';
});
