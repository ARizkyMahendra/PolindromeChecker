function Palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

function checkPalindrome() {
    var inputText = document.getElementById('inputText').value;
    var resultElement = document.getElementById('result');

    if (Palindrome(inputText)) {
        resultElement.textContent = inputText + " adalah Kata polindrome!";
    } else {
        resultElement.textContent = inputText + " adalah kata bukan palindrome.";
    }
}