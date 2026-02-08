const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const displayGif = document.getElementById('display-gif');
const question = document.getElementById('question');
// List of messages for the "No" button
const noTransitions = [
    {text:"Are you sure?",img:"u-sure.webp"},
    {text:"Really sure??",img:"really.gif"},
    {text:"Are you positive?",img:"positive.webp"},
    {text:"Pretty please...",img:"pleasee.gif"},
    {text:"Just think about it!",img:"think-about-it.gif"},
    {text:"If you say no, I will be really sad...",img:"really-sad.webp"},
    {text:"I will be very sad...",img:"very-sad.gif"},
    {text:"I will be very very very sad...",img:"very-very-sad.webp"},
    {text:"Ok fine, I will stop asking...",img:"okay.gif"},
    {text:"Just kidding, SAY YES PLEASE! ❤️",img:"please-please-please-beg.gif"}
];

let messageIndex = 0;

// 2. Logic for when "No" is clicked
noButton.addEventListener('click', () => {
    // Change text and image based on the current index
    const currentData = noTransitions[messageIndex];
    noButton.textContent = currentData.text;
    displayGif.src = currentData.img;

    // Increment index for next time (loops back to start if it hits the end)
    messageIndex = (messageIndex + 1) % noTransitions.length;

    // Make the "Yes" button grow bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
    yesButton.style.padding = '20px 40px'; // Also increase padding for better look
});

// 3. Logic for when "Yes" is clicked
yesButton.addEventListener('click', () => {

    yesButton.style.fontSize = '1.2rem'; // Or your original font size
    yesButton.style.padding = '15px 25px'; // Reset to original padding
    noButton.style.display = 'none';
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'block';
    }
    // Change the screen content
    question.innerHTML = "Yay! See you on the 14th! ❤️";
    displayGif.src = "success.webp"; 
    noButton.style.display = 'none'; // Remove the No button

    // 4. Firework Setup
    const container = document.getElementById('fireworks-container');
    
    // Check if the library is loaded correctly via UMD
    const FireworksClass = window.Fireworks && window.Fireworks.default ? window.Fireworks.default : window.Fireworks;
    
    if (FireworksClass) {
        const fireworks = new FireworksClass(container, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 100,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 6,
            intensity: 30,
            flickering: 50,
            lineStyle: 'round',
            hue: { min: 0, max: 360 },
            delay: { min: 30, max: 60 }
        });

        fireworks.start();
    } else {
        console.error("Fireworks library not found. Check your script tag in index.html.");
    }
});