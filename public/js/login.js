// Remove dom element from view and the consumed space
const hideContent = function (element) {

  element.className = "invisible";
};

// Remove dom element from view but not the consumed space
const hide  = function (element) {

  element.className = "hidden";
};

const showContent = function (element) {

  element.className = "visible";
};


const loginFormHandler = async function(event) {
  event.preventDefault();
  console.log("loginFormHandler");

  const emailEl = document.querySelector("#email-login");
  const passwordEl = document.querySelector("#password-login");

  if (emailEl && passwordEl) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: emailEl.value.trim(),
        password: passwordEl.value.trim(),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("logged in");
      //document.location.replace('/');
      console.log("response.body", response.body);
      if (response.body.role === "band") {
        document.location.replace("/bands-landing");
      } else {
        document.location.replace("/findABand");
      }
    } else {
      console.log("Failed to login");
      console.log(response);
      alert("Failed to login");
    }
  }
};

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const bandEL = document.getElementById("band").checked;
  const coordEL = document.getElementById("coordinator").checked;
  const organization = document.querySelector('#organization').value.trim();
  const bandEmail = document.querySelector('#bandEmail').value.trim();
  const bandName = document.querySelector('#bandName').value.trim();

  if (coordEL) {
    role = "coordinator";
  }

  if (bandEL) {
    role = "band";
  }

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
<<<<<<< HEAD
        role,
=======
        role, 
        organization,
        bandEmail,
        bandName
>>>>>>> develop
      }),
      headers: { "Content-Type": "application/json" },
    });
<<<<<<< HEAD
    const jsonResponse = await response.json();
    if (response.ok) {
      //console.log(jsonResponse);
      if (jsonResponse.role === "band") {
        document.location.replace("/bands/create");
      } else {
        document.location.replace("/coordinators/create");
=======
    
    const jsonResponse = await response.json(); 
    if (response.ok) {  
      //console.log(jsonResponse);
      if(jsonResponse.role === 'band') {
        document.location.replace('/bands/');
      } else {
        document.location.replace('/coordinators/');
>>>>>>> develop
      }
    } else {
      alert(response.statusText);
    }
  }
}

<<<<<<< HEAD
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

=======
function bandRadioHandler(event) {

  const coordinatorEl = document.querySelector('#coordinator-signup');
  const bandEl = document.querySelector('#band-signup');

  hideContent(coordinatorEl);
  showContent(bandEl);
}

function coordinatorRadioHandler(event) {

  const coordinatorEl = document.querySelector('#coordinator-signup');
  const bandEl = document.querySelector('#band-signup');

  hideContent(bandEl);
  showContent(coordinatorEl);
}

document.querySelector('#band').addEventListener('click', bandRadioHandler);
document.querySelector('#coordinator').addEventListener('click', coordinatorRadioHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
>>>>>>> develop
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
