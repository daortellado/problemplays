// Create a request variable and assign a new XMLHttpRequest object to it.

const app = document.getElementById('igEmbed')

var request = new XMLHttpRequest()

request.open('GET', 'https://daortellado.pythonanywhere.com/api/v1/resources/content', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement('div')
    const reg = /(?<=async ).*/
    const newStr = data.replace(reg, "defer src=\"https://platform.instagram.com/en_US/embeds.js\"></script>");
    card.innerHTML = newStr
    console.log(newStr)
    app.appendChild(card)
    }
   else {
    console.log('error')
  }
}

request.send();

// Form

const addUser = (ev)=>{
  ev.preventDefault();
  let user = {
    name: document.getElementById('signup_name').value,
    email: document.getElementById('signup_email').value
  }
  console.log(user)
  document.forms[0].reset();
};

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addUser);
});