// declare empty array of users
let users = [];

// function for sign up form validation
function usernew(event) {
  event.preventDefault();
  const username = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const country = document.getElementById("country").value;
  const phone = document.getElementById("number").value;
  const password = document.getElementById("reg-password").value;
  const cPassword = document.getElementById("Cpassword").value;

  // new user object
  let newUser = {
    name: username,
    email: email,
    phone: phone,
    pwd: password,
    cpwd: cPassword,
    country: country,
  };
      const message = document.getElementById("message");

// condition for the form validation
const validation = users.find(item => item.email == email || item.name == username)
  if(!validation ){
     if (phone.length >= 10 && password === cPassword) {
      users.push(newUser);
      let form = document.getElementById("form");
      message.innerHTML = `<span style=" margin:auto; width:95%;"> You have successfully registered! click <a href="../index.html">here</a>
 for booking an apointment, <br> or click <a href="../pages/log-in.html">here</a> to log in </span>`;
      form.classList.add("hide");
    } else if (phone.length >= 10 && password !== cPassword) {
      message.innerHTML = `<span style="color: red; margin:auto; width:95%;">Input a valid phone number and ensure proper password confirmation</span>
`;
    
  }
  }
  else{
    message.innerHTML = `<span style="color: red; margin:auto; width:95%;">user name or email already exist</span>`;

  }
  
   
  // saving users array to localStorage
localStorage.setItem("users", JSON.stringify(users));
}
// adding event listener to the form
let form = document.getElementById("form");
form.addEventListener("submit", usernew);


// Function to load users array from local storage
function loadUsersFromLocalstorage() {
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    console.log(users);
  }
}

window.addEventListener("load", function () {
  loadUsersFromLocalstorage();
});
