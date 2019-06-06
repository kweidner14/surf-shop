// selecting text that will be clicked on
const clear = document.getElementById('clear-distance');

clear.addEventListener('click', e => {
    e.preventDefault();
    // selecting location input and setting value to empty string
    document.getElementById('location').value = '';
    // unchecking first radio button
    document.querySelector('input[type=radio]:checked').checked = false;
});