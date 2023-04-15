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
        } else if (departure == "Milan") {
            ticketPrice = ticketPrice * 1.1;
        } else if (departure == "Rome") {
            ticketPrice = ticketPrice * 1.2;
        } else if (departure == "Turin") {
            ticketPrice = ticketPrice * 1.3;
        } else if (departure == "Naples") {
            ticketPrice = ticketPrice * 1.4;
        } else if (departure == "Palermo") {
            ticketPrice = ticketPrice * 1.5;
        } else if (departure == "Venice") {
            ticketPrice = ticketPrice * 1.6;
        } else if (departure == "Genoa") {
            ticketPrice = ticketPrice * 1.7;
        } else if (departure == "Bologna") {
            ticketPrice = ticketPrice * 1.8;
        } else if (departure == "Florence") {
            ticketPrice = ticketPrice * 1.9;
        } else if (departure == "Bari") {
            ticketPrice = ticketPrice * 2;
        } else if (departure == "ReggioEmilia") {
            ticketPrice = ticketPrice * 2.1;
        } 

        // destination city
        var destination = document.getElementById("destination").value;
        if (destination == "") {
            alert("Please insert a valid destination city");
        } else if (destination == "Milan") {
            ticketPrice = ticketPrice * 1.1;
        } else if (destination == "Rome") {
            ticketPrice = ticketPrice * 1.2;
        } else if (destination == "Turin") {
            ticketPrice = ticketPrice * 1.3;
        } else if (destination == "Naples") {
            ticketPrice = ticketPrice * 1.4;
        } else if (destination == "Palermo") {
            ticketPrice = ticketPrice * 1.5;
        } else if (destination == "Venice") {
            ticketPrice = ticketPrice * 1.6;
        } else if (destination == "Genoa") {
            ticketPrice = ticketPrice * 1.7;
        } else if (destination == "Bologna") {
            ticketPrice = ticketPrice * 1.8;
        } else if (destination == "Florence") {
            ticketPrice = ticketPrice * 1.9;
        } else if (destination == "Bari") {
            ticketPrice = ticketPrice * 2;
        } else if (destination == "Reggio Emilia") {
            ticketPrice = ticketPrice * 2.1;
        }

        // check if the values are the same
        if (departure === destination) {
            alert("Departure and destination cities cannot be the same.");;
        } 
        
        // ticket price calculation
        var ticketPrice
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

// Check local storage for dark mode preference
if (localStorage.getItem('mydarkMode') === 'on') {
    body.classList.add('mydarkMode');
    darkModeSwitch.checked = true;
    icon.classList.add('fa-white');
} else {
    body.classList.remove('mydarkMode');
    darkModeSwitch.checked = false;
    icon.classList.add('fa-black');
}

// Dark mode toggle event listener
darkModeSwitch.addEventListener('click', () => {
    if (darkModeSwitch.checked) {
        body.classList.add('mydarkMode');
        localStorage.setItem('mydarkMode', 'on');
        icon.classList.remove('fa-black');
        icon.classList.add('fa-white');
    } else {
        body.classList.remove('mydarkMode');
        localStorage.setItem('mydarkMode', 'off');
        icon.classList.remove('fa-white');
        icon.classList.add('fa-black');
    }
});
