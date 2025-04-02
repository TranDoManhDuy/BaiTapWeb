const theReason = []
const blockContent = document.querySelector('.content-reason-about')

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        blockContent.innerText = data[0].body
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

const blockContent2 = document.querySelector('.slider-content-about')
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        blockContent2.innerText = data[3].body
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

const canvas = document.querySelector("#layer");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const snowflakes = [];
let windStrength = 0;

function updateWind() {
    windStrength = Math.sin(Date.now() / 3000) * 2; // Hiệu ứng gió dao động
    setTimeout(updateWind, 100);
}
updateWind();

class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 3 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
        this.x += this.speedX + windStrength * 0.3;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;
        
        if (this.y > canvas.height) {
            this.y = -this.radius;
            this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.font = `${this.radius * 5}px Arial`;
        ctx.fillStyle = "white";
        ctx.fillText("❄", -this.radius * 2.5, this.radius * 2.5);
        ctx.restore();
    }
}

function createSnowflakes(count) {
    for (let i = 0; i < count; i++) {
        snowflakes.push(new Snowflake());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((flake) => {
        flake.update();
        flake.draw();
    });
    requestAnimationFrame(animate);
}

createSnowflakes(100);
animate();