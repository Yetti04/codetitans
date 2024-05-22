function subm(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let storedUsers = localStorage.getItem("users");
  let users = JSON.parse(storedUsers);
//   console.log(users[2].email);

  let user = users.find((user) => user.email === email);
  if (user && user.password === password) {
    console.log("log in successful");
    localStorage.setItem("index", JSON.stringify(users.id))
    window.location.href = "../index.html";
      localStorage.setItem("loggedinUser", JSON.stringify(user));

  } else {
    console.log("please enter a valid details");
  }
}
  // console.log(users);

let form = document.getElementById("form");
form.addEventListener("click", subm);
