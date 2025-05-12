let audio = document.getElementById('sinatraSound');
let powerButton = document.getElementById('power-icon');
let footerText = document.getElementById('song-title');
let articleContainer = document.querySelector(".article-container");
let messageTimeout;
let heartInterval; 

function updateAnimationState() {
    footerText.style.animationPlayState = audio.paused ? "paused" : "running";
}

function showMessageWithDelay() {
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
        articleContainer.style.opacity = "1";
    }, 30000);
}

function hideMessage() {
    clearTimeout(messageTimeout);
    articleContainer.style.opacity = "0";
}

function toggleAudio() {
    powerButton.classList.toggle("active");
    if (audio.paused) {
        audio.play();
        showMessageWithDelay();
    } else {
        audio.pause();
        hideMessage();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    powerButton.addEventListener("click", toggleAudio);
    audio.addEventListener("play", updateAnimationState);
    audio.addEventListener("pause", updateAnimationState);
});

// Function to create hearts
function createHeart() {
    const modal = document.getElementById("accessModal");
    if (modal.classList.contains("show")) return; 

    const heart = document.createElement("span");
    heart.innerHTML = "♥";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.style.fontSize = (Math.random() * 50 + 10) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start the heart animation
function startHearts() {
    if (!heartInterval) { 
        heartInterval = setInterval(createHeart, 200);
    }
}

function stopHearts() {
    clearInterval(heartInterval);
    heartInterval = null;
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("accessModal");
    modal.classList.add("show");
    stopHearts(); 

    modal.addEventListener("click", function(event) {
        if(!event.target.closest(".modal-content")) {
            modal.classList.remove("show");
            startHearts();
        }
    });
});


