


//Store Data
let username = "Lester Blake";
let profilePicture = "./assets/images/man.png";
let jobTitle = "Software Engineer";

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
