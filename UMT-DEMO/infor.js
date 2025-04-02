const blockContent = document.querySelector('.about-text')

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        blockContent.innerText = data[1].body
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

const inputField = document.getElementById("ten");
const inputField2 = document.getElementById("tinnhan");

function validateInput(event) {
    const value = event.target.value;

    if (!regex.test(value)) {
        event.target.value = value.slice(0, -1);
    }
}

inputField.addEventListener("input", validateInput);
inputField2.addEventListener("input", validateInput);