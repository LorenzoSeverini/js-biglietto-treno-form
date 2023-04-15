// Js train ticket 

// prevent the form to be submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// reload the page on click header link 
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

// alert for the user 
alert("Hello, welcome to the train ticket generator. Please fill in the form to generate your ticket. Thank you!");

// event for the button generate
var btnGenerate = document.getElementById("generate");
btnGenerate.addEventListener("click",
    
    function () {
        // passenger name
        var passengerName = document.getElementById("name").value;

        // name validation
        if (passengerName == "") {
            alert("Please insert a valid name");
        } else if (passengerName.length < 3) {
            alert("Please insert a name longer than 3 characters");
        } else if (passengerName.length > 40) {
            alert("Please insert a name shorter than 40 characters");
        } else if (passengerName.includes("1")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("2")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("3")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("4")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("5")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("6")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("7")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("8")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("9")) {
            alert("Please insert a valid name");
        } else if (passengerName.includes("0")) {
            alert("Please insert a valid name");
        } 

        // passenger age
        var age = document.getElementById("age").value;

        if (age == "") {
            alert("Please insert a valid age");
        } 
        
        // age discount
        if (age == "Minor") {
            discount = ticketPrice * 0.2; 
            discountType = "Minor price";
        } else if (age =="Over-65") {
            discount = ticketPrice * 0.4;
            discountType = "Over 65 price";
        } else {
            discount = 0;
            discountType = "Full price";
        }
        
        // number of km
        var km = document.getElementById("km").value;

        if( isNaN(km) || km < 1) {
            alert("Please insert a valid number of km");
        } 

        // departure city
        var departure = document.getElementById("departure").value;

        if (departure == "") {
            alert("Please insert a valid departure city");
        }

        // destination city
        var destination = document.getElementById("destination").value;

        if (destination == "") {
            alert("Please insert a valid destination city");
        }

        // check if the values are the same
        if (departure === destination) {
            alert("Departure and destination cities cannot be the same.");;
        } 

        // ticket price calculation
        var ticketPrice = (km * 0.21);
        var discount;
        var discountType;
        var finalPrice = (ticketPrice - discount).toFixed(2);

        // ticket section print
        document.getElementById("departure").innerHTML = departure;
        document.getElementById("destination").innerHTML = destination;
        document.getElementById("passenger").innerHTML = passengerName;
        document.getElementById("discount").innerHTML = discountType;
        document.getElementById("ticketPrice").innerHTML = finalPrice + "€";
        // wagon number
        var wagonNumber = Math.floor(Math.random() * 9) + 1;
        document.getElementById("wagon").innerHTML = wagonNumber;
        // ccp 
        var ccp = Math.floor(Math.random() * 9999) + 1;
        document.getElementById("ccp").innerHTML = ccp;
        // ticket number
        var ticketNumber = Math.floor(Math.random() * 9999999) + 1;
        document.getElementById("ticketNumber").innerHTML = ticketNumber;
        // date
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        document.getElementById("date").innerHTML = day + "/" + month + "/" + year; 
    }
)


// event for the button cancel
var btnGenerate = document.getElementById("cancel");
btnGenerate.addEventListener("click",
    function () {
        // null value
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("age").value = "";
        document.getElementById("passenger").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("ticketPrice").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
        document.getElementById("departure").value = "";
        document.getElementById("destination").value = "";
        document.getElementById("ccp").innerHTML = "";
        document.getElementById("ticketNumber").innerHTML = "";
        document.getElementById("date").innerHTML = "";
    }
)

// Dark mode toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;
const icon = document.querySelector('.fa-solid');

// Listen for a click on the toggle
darkModeSwitch.addEventListener('click', function () {
    if (darkModeSwitch.checked) {
        body.classList.add('mydarkMode');
        icon.classList.add('fa-white');
        localStorage.setItem('mydarkMode', 'on');
    } else {
        body.classList.remove('mydarkMode');
        icon.classList.add('fa-black');
        localStorage.setItem('mydarkMode', 'off');
    }
});

