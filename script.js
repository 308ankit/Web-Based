// script.js

// Function to compile code
async function compileCode(code, language, difficulty) {
    try {
        // Make API request to compile code
        const response = await fetch('/compile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code, language, difficulty })
        });

        const data = await response.json();
        displayOutput(data.output);
    } catch (error) {
        console.error('Error compiling code:', error);
        displayOutput('Error compiling code. Please try again.');
    }
}

// Function to display output
function displayOutput(output) {
    document.getElementById('output').textContent = output;
}

// Event listener for compile button
document.getElementById('compile-btn').addEventListener('click', () => {
    const code = document.getElementById('code-editor').value;
    const language = document.getElementById('language-select').value;
    const difficulty = document.getElementById('difficulty-select').value;
    compileCode(code, language, difficulty);
});
