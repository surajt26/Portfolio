const scriptURL = 'https://script.google.com/macros/s/AKfycbzuCzkNmvaJTEf0xRaeo3yBz2YXwREmUH9UtT8MKuAaFcNVIMw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log("sent"))
    .catch(error => console.error('Error!', error.message))
  validationForm();
})