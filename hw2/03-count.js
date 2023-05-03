// Add your code here

const input = document.getElementById('userInput');
const textField = document.getElementById('text');
const highlightedText = document.getElementById('highlightedText');

const handleKeyDown = function handleUserKeyDown(event) {
  if (event.keyCode === 13) {
    const searchTerm = input.value.trim();
    const searchRegex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
    const searchContent = textField.innerHTML;
    const highlightedContent = searchContent.replace(searchRegex, '<span style="background-color: yellow;">$&</span>');
    highlightedText.innerHTML = highlightedContent;
    textField.style.display = 'none';
    highlightedText.style.display = 'block';
  }
};

input.addEventListener('keydown', handleKeyDown);
