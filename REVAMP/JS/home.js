const elements = [
  {
    name: "Daniel M",
    qualification: "PhD",
    experience: 9,
    rating: "4",
    id: "1",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1203995945/photo/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=Hk-dqLqHXyYa4aTqjieXNk9-HQSE8WEYUAjA1sXsy_s=",
    specialisation: "Dentist",
  },
  {
    name: "John David",
    qualification: "PhD",
    language: "",
    experience: 3,
    rating: "",
    id: "2",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=",
    specialisation: "Pathologist",
  },
  {
    name: "Ajayi Racheal",
    qualification: "PhD",
    language: "",
    experience: 7,
    rating: "",
    id: "3",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1366374033/photo/shot-of-a-young-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=N0oQFd_0VKs3Q2o2YLCR5hTBNIVHqdiHsh2SaTKhPoM=",
    specialisation: "Dietician",
  },
  {
    name: "Daud Abdullah",
    qualification: "PhD",
    language: "",
    experience: 5,
    rating: "",
    id: "4",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1203995945/photo/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=Hk-dqLqHXyYa4aTqjieXNk9-HQSE8WEYUAjA1sXsy_s=",
    specialisation: "Surgeon",
  },
  {
    name: "David Mark",
    qualification: "PhD",
    language: "",
    experience: 4,
    rating: "",
    id: "5",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1315185798/photo/happy-and-smiling-african-american-male-doctor-wearing-white-coat-working-on-tablet-computer.jpg?s=612x612&w=0&k=20&c=1zHqqzGFjRNeLrtsjNhI2ArSznBedKC-0rGeT9xUUDc=",
    specialisation: "gnaecologist",
  },
  {
    name: "Lilian Sunday",
    qualification: "MBBS",
    language: "",
    experience: 6,
    rating: "",
    id: "6",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1385105471/photo/portrait-of-professional-confident-young-doctor-in-white-coat.jpg?s=612x612&w=0&k=20&c=94sDWruI49DlBhMulAc-f6ANmaFSxln6O1z0xNvkrTw=",
    specialisation: "Dentist",
  },
  {
    name: "Godwin Micheal",
    qualification: "BDA",
    language: "",
    experience: 6,
    rating: "",
    id: "7",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1216536570/photo/friendly-african-male-therapist-posing-over-white-background.jpg?s=612x612&w=0&k=20&c=lWOaEgfS1Pl7PGMDJjEnTuUK7pF9sZXJcRJq8vZ8ypk=",
    specialisation: "Dentist",
  },
  {
    name: "Prince Praise",
    qualification: "M.Sc",
    language: "",
    experience: 8,
    rating: "",
    id: "8",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1026567568/photo/in-it-for-the-good-of-your-health.jpg?s=612x612&w=0&k=20&c=kwMDiKRWS6cJixCxRJcGULopiSi5PfGQmzmK6X_QLgA=",
    specialisation: "Radiologist",
  },
  {
    name: "Abba Adamu",
    qualification: "PhD",
    language: "",
    experience: 3,
    rating: "",
    id: "9",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/510948317/photo/confident-male-doctor.jpg?s=612x612&w=0&k=20&c=Hi06hZmzscAOCkY6jgC6Vko5c79UH-8jfGxX99GqN4Y=",
    specialisation: "Paediatrician",
  },
  {
    name: "Raymond Daniel",
    qualification: "M.Sc",
    language: "",
    experience: "5",
    rating: "",
    id: "10",
    category: "experts",
    image:
      "https://media.istockphoto.com/id/1186418579/photo/portrait-of-a-smiling-scientist-at-laboratory.jpg?s=612x612&w=0&k=20&c=IwomzfBNlgZvXXUh9hIMB4NTJetLFMHF6QZtnmqt6qo=",
    specialisation: "Cardiologist",
  },

  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "1",
    category: "Patient",
    image:
      "https://www.istockphoto.com/photo/medical-hospital-medium-portrait-african-american-female-medical-doctor-takes-of-gm1388387529-446041487?searchscope=image%2Cfilm",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "2",
    category: "Patient",
    status: "recovered",
    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "3",
    category: "Patient",
    status: "new patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "4",
    category: "Patient",
    status: "patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "5",
    category: "Patient",
    status: "recovered",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "6",
    category: "Patient",
    status: "recovered",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "7",
    category: "Patient",

    status: "new patient",
    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "8",
    category: "Patient",
    status: "patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "9",
    category: "Patient",
    status: "recovered",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "10",
    category: "Patient",
    status: "patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "11",
    category: "Patient",
    status: "patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "12",
    category: "Patient",
    status: "patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "13",
    category: "Patient",
    status: "new patient",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "14",
    category: "Patient",
    status: "recovered",

    image: "",
    review: "",
  },
  {
    name: "Joy Sunday",
    sex: "female",
    experience: "",
    id: "15",
    category: "Patient",
    status: "patient",

    image: "",
    review: "",
  },
];
localStorage.setItem("elements", JSON.stringify(elements))

const healthTips = [
  {
    id: 1,
    healthTip: "Hydrate, hydrate, hydrate! - Water is your body’s best friend.",
  },
  {
    id: 2,
    healthTip: "Move more, sit less – even small steps count!",
  },
  {
    id: 3,
    healthTip:
      "Sleep like a baby – aim for 7-9 hours of quality sleep each night.",
  },
  {
    id: 4,
    healthTip: "Color your plate – the more colorful, the better.",
  },
  {
    id: 5,
    healthTip: "Don’t skip breakfast – fuel your day right from the start.",
  },
  {
    id: 6,
    healthTip: "Say 'no' to smoking – it’s never too late to quit.",
  },
  {
    id: 7,
    healthTip: "Stress less, laugh more – your body will thank you.",
  },
  {
    id: 8,
    healthTip: "Practice portion control – size matters.",
  },
  {
    id: 9,
    healthTip:
      "Snack smart – choose fruits, nuts, or yogurt over chips and candy.",
  },
  {
    id: 10,
    healthTip:
      "Get your heart pumping – aim for at least 30 minutes of exercise most days.",
  },
  {
    id: 11,
    healthTip:
      "Protect your skin – sunscreen is your shield against aging and cancer.",
  },
  {
    id: 12,
    healthTip: "Keep calm and meditate on – find your inner peace daily.",
  },
  {
    id: 13,
    healthTip: "Limit sugar – your teeth and waistline will thank you.",
  },
  {
    id: 14,
    healthTip: "Prioritize mental health – self-care isn’t selfish.",
  },
  {
    id: 15,
    healthTip: "Strengthen your bones – calcium and vitamin D are your allies.",
  },
  {
    id: 16,
    healthTip: "Wash your hands – it’s the simplest defense against germs.",
  },
  {
    id: 17,
    healthTip: "Listen to your body – it knows what it needs.",
  },
  {
    id: 18,
    healthTip:
      "Stay connected – strong relationships are a key to overall well-being.",
  },
  {
    id: 19,
    healthTip: "Limit screen time – give your eyes and mind a break.",
  },
  {
    id: 20,
    healthTip:
      "Be more proactive – schedule regular check-ups and screenings with your doctor.",
  },
];
// function to search for elements with categories equal input value
function search() {
  const mobileSearch = document.getElementById("search-input1").value;
  const desktopSearch = document.getElementById("search-input2").value;
  let displayexperts = document.getElementById("searchedItemContainer");
  displayexperts.innerHTML = "";

  // conditional statement
  if (
    mobileSearch.toLowerCase() == "experts" ||
    desktopSearch.toLowerCase() == "experts"
  ) {
    let searchResult = elements.filter(
      (elements) =>
        elements.category.toLowerCase() == desktopSearch.toLowerCase() ||
        elements.category.toLowerCase() == mobileSearch.toLowerCase()
    );
    searchResult.forEach((item) => {
      let displaySearch = document.createElement("div");
      displaySearch.setAttribute("class", "displaySearch");
      displaySearch.innerHTML += `
    <div>
                    <img style="width: 200px; height: 200px;" src="${item.image}" alt="${item.name}">
                </div>
                    <p>${item.name}</p>
                    <p>${item.specialisation}</p>
                    <p>${item.experience} years experience </p>
                `;
      displayexperts.appendChild(displaySearch);
    });
  } else if (
    desktopSearch.toLowerCase() == "patient" ||
    mobileSearch.toLowerCase() == "patient"
  ) {
    let searchResult = elements.filter(
      (elements) =>
        elements.category.toLowerCase() == mobileSearch.toLowerCase() ||
        elements.category.toLowerCase() == desktopSearch.toLowerCase()
    );
    searchResult.forEach((patient) => {
      let displaySearch = document.createElement("div");
      displaySearch.setAttribute("class", "displaySearch");
      console.log(desktopSearch);
      console.log(mobileSearch);

      displaySearch.innerHTML += `
                    <p>(${patient.id}) name: ${patient.name}</p>
                    <p>status: ${patient.status}</p>
                    <p> sex: ${patient.sex} </p>
                `;
      displayexperts.appendChild(displaySearch);
    });
  } else {
    let displaySearch = document.createElement("div");
    displaySearch.setAttribute("class", "displaySearch");
    displaySearch.innerHTML = `<p style="margin: auto; color:red;" >no result found</p>`;

    displayexperts.appendChild(displaySearch);
  }
}


// to display random health tips when id of a health tip equals the random number generated
const randomNum = Math.floor(Math.random() * 15);
console.log(randomNum);

let displayTips = document.getElementById("tips");
let tip = healthTips.filter((item) => item.id == randomNum);
tip.forEach((item) => {
  displayTips.innerHTML = `${item.healthTip}`;
});


// experts

// generate random number
const randomId = Math.floor(Math.random() * 4 + 2);
let experts = document.getElementById("display-experts");
// to filter elements with category = experts out of the whole elements array and display them dynamically
const expertsElements = elements.filter(
  (elements) => elements.category == "experts" && elements.id * 2 >= randomId
);

// to display first 3 out of the elements with category=experts
expertsElements.slice(0, 3).forEach((elements) => {
  experts.innerHTML += `<div class="col-md-4 col-sm-10 mx-auto d-block" id="experts-image">
<div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                              <img src=${elements.image} style="width: 100%; height: 300px;" class="img-responsive" alt="">

                                   <div class="team-info">
                                        <h3>${elements.name}</h3>
                                        <p>${elements.specialisation}</p>
                                        <p>${elements.qualification}</p>
                                        <p>${elements.experience} years experience</p
                                   </div>
                         </div>
                        </div>`;
});

// function loadUsersFromLocalstorage() {
const storedUsers = localStorage.getItem("users");
if (storedUsers) {
  users = JSON.parse(storedUsers);
}


// function for booking appointment
function book(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  let storedUsers = localStorage.getItem("users");
  let users = JSON.parse(storedUsers);
// booking appointment validation
  let user = users.find((user) => user.email === email);
  if (user) {
    if (user && user.name.toLowerCase() === name.toLowerCase()) {
      console.log("log in successful");
      console.log(user.name);
      localStorage.setItem("index", JSON.stringify(users.id));
      localStorage.setItem("loggedinUser", JSON.stringify(user));
      document.getElementById(
        "message"
      ).innerHTML = `<p style="color: green;">Dear ${user.name}, your apointment booking was successful, we will reach out to you via email for the consultations session. Will you like to access our health tips? click <a style="text-decoration: underline; color:blue;"  href="../pages/health-tips.html">here</a>
</p>`;
    } else {
      console.log("please enter a valid details");
      document.getElementById(
        "message"
      ).innerHTML = `<p style="color: red;"> kindly sign up <a href="./pages/sign-up.html">here</a>
 to book an appointment with us</p>
`;
    }
  } else {
    document.getElementById(
      "message"
    ).innerHTML = `<p style="color: red;"> kindly sign up <a href="./pages/sign-up.html">here</a>
 to book an appointment with us</p>
`;
  }
}

let button = document.getElementById("submit-button");
button.addEventListener("click", book);
