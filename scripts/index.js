


//Store Data
// let username = "Lester Blake";
// let profilePicture = "./assets/images/man.png";
// let jobTitle = "Software Engineer";

//DOM Manipulation
let usernameElement = document.querySelectorAll(".data-username");
usernameElement.innerText = username; 

for(let i=0; i < usernameElement.length; i++) {
    usernameElement[i].innerText = username;
}

let jobTitleElement = document.querySelector(".data-jobtitle");
jobTitleElement.innerText = jobTitle;

let profilePictureElement = document.querySelector(".data-profile-picture");
profilePictureElement.src = profilePicture;

//Next step is to store this in an object and execute

//Stretch!
//Target the element
//store the element in some temp variable
//add/remove/update element

//Create an element
//.appendChild

//17 June - Functions and Event Handling Challenge
//2. Create userProfile Object
let userProfile = {
    username:"", 
    profilePicture:"",
    jobTitle:""
}; 

function loadUserProfile() {

    let usernameElement = document.querySelectorAll(".data-username");
    let jobTitleElement = document.querySelector(".data-jobtitle");
    let profilePictureElement = document.querySelector(".data-profile-picture");

    usernameElement.innerText = userProfile.username; 
    jobTitleElement.innerText = userProfile.jobTitle;
    profilePictureElement.src = userProfile.profilePicture;

    console.log("Loading User Profile...")
}

window.onload = function(e) {loadUserProfile(e)}

//5. Create post on the invoke of the function for browser load


