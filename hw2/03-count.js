// Add your code here

const input = document.getElementById('userInput');
const textField = document.getElementById('text');
const highlightedText = document.getElementById('highlightedText');

const handleKeyDown = function handleUserKeyDown() {
  if (input.value === '') {
    textField.style.display = 'block';
    highlightedText.style.display = 'none';
  } else {
    const searchTerm = input.value.trim();
    const searchRegex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
    const searchContent = textField.innerHTML;
    const highlightedContent = searchContent.replace(searchRegex, '<mark>$&</mark>');
    highlightedText.innerHTML = highlightedContent;
    textField.style.display = 'none';
    highlightedText.style.display = 'block';
  }
};

input.addEventListener('keyup', handleKeyDown);
