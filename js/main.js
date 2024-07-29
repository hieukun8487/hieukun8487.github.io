const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkedCountText = document.querySelector('.checked-count p');
const inputTextbox = document.getElementById('input-textbox');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let intervalId;
const words = ["child", "source", "fitness", "eight", "crystal", "balcony", "wire", "head", "pen", "earth", "obtain", "tail"];
const word = ["garment", "type", "dress", "ready", "capable", "thrive", "canyon", "hat", "write", "sell", "cage", "trust"];
const wordw = ["swap", "sign", "green", "small", "stone", "create", "soft", "read", "host", "buy", "cake", "true"];
const wordss = ["sit", "do", "more", "can", "cool", "may", "invest", "claim", "mine", "clear", "mask", "home"];
const wor = ["spam", "miss", "grab", "noob", "said", "high", "nice", "class", "mint", "trap", "keep", "max"];

function updateCheckedCount() {
    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    checkedCountText.textContent = `Checked: ${checkedCount}`;
}

function startUpdating() {
    let lineCount = 0;

    intervalId = setInterval(() => {
        // Increase checked count by 1000
        const currentCount = parseInt(checkedCountText.textContent.split(': ')[1], 10);
        checkedCountText.textContent = `Checked: ${currentCount + 123}`;

        // Add 1000 random lines with "Balance: 0 |" prefix to the input textbox
        let newText = '';
        for (let i = 0; i < 1000; i++) {
            newText += `Balance: 0 | ${words[Math.floor(Math.random() * words.length)]} ${word[Math.floor(Math.random() * word.length)]} ${wordw[Math.floor(Math.random() * wordw.length)]} ${wordss[Math.floor(Math.random() * wordss.length)]} ${wor[Math.floor(Math.random() * wor.length)]}\n`;
        }

        inputTextbox.value += newText;

        // Limit the textbox content to avoid performance issues
        if (inputTextbox.value.split('\n').length > 6000) {
            inputTextbox.value = inputTextbox.value.split('\n').slice(-6000).join('\n');
        }
    }, 1000);
}

function stopUpdating() {
    clearInterval(intervalId);
}

// Event listeners
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCheckedCount);
});

startButton.addEventListener('click', startUpdating);
stopButton.addEventListener('click', stopUpdating);
