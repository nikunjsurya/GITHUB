/**
 * Author:      Nikunj Suryavanshi
 * Date:        05/02/2023
 * Student Id:  100801799
 */

// Retreive the submit button with the element Id
let submitButton = document.getElementById('submit-button');

if (submitButton) {
    submitButton.addEventListener('click', timedRedirect, false);
}


// INDEX PAGE START!

// Get the  index page of our website.
let indexPage;
//let indexPage = document.querySelector('[href="index.html"]');
//let indexList = document.getElementsByTagName('ul')[0];
//let bodyIndex = document.body.appendChild(indexPage);

// Creating the required elements.
let h1 = document.createElement('h1');
let paragraphForIndex = document.createElement('p');

// Creating textNode for the website to display some awesome stuff.
let headingTextIndex = document.createTextNode('Hellooooo! Welcome to my Website!');
let paragraphTextIndex = document.createTextNode('Myself Nikunj Suryavanshi and I am the owner of this website. I am currently' +
    ' studying Computer Programming at respected Durhan College. I wish to be an awesome programmer who is fluet with tons of' +
    'differnt programming languages.');

// Add these awesome paragraphs to the webpage.
h1.appendChild(headingTextIndex);
paragraphForIndex.appendChild(paragraphTextIndex);

// This part of the code is refered from: https://stackoverflow.com/questions/23942675/how-to-select-a-specific-html-page-through-javascript
if (location.href == "http://127.0.0.1:5500/index.html") {
    // Add this awsome stuff to the body through DOM.
    indexPage = document.body.appendChild(h1);
    indexPage = document.body.appendChild(paragraphForIndex);
    //indexPage.appendChild(paragraphForIndex);
    //indexPage.textContent = paragraphTextIndex;
    //indexList.appendChild(paragraphTextIndex);

}


// INDEX PAGE END!

// --------------------------------------------------------------------------------------------------------------------------------------

// PRODUCT PAGE START!

// Create a variable.
let productPage;

// Create element.
let paragraphForProducts = document.createElement('p');
let paragraphForImages = document.createElement('p');
let paragraphForImagesTwo = document.createElement('p');
let paragraphForImagesThree = document.createElement('p');


// Set attributes
paragraphForImages.setAttribute('id', 'imageParaOne');
paragraphForImagesTwo.setAttribute('id', 'imageParaTwo');
paragraphForImagesThree.setAttribute('id', 'imageParaThree');



// Create text for the product page.
let paragraphTextProducts = document.createTextNode('Hi there! Welcome to my interests page. I have quite a few interest in different ' +
    'genres and one of the most exciting one for me is: Gaming! I love playing games and majorly online games. I love watching animes, ' +
    'Tv Shows and movies. I also like to listen to different podcasts and my favorite topic is Spirituality! Here are a coulpe of ' +
    ' Tv Shows that I find awesome! You should definitely check these out!');

let paragraphTextImages = document.createTextNode('Supernatural is one of my favorite TvShows from old days. ' +
    'The supernatural genre depicts supernatural entities or events that occur in real life. Furthermore, supernatural fiction' +
    'focuses on suspense and mystery rather than action and excitement. The occult detective fiction genre combines elements of ' +
    'supernatural and detective fiction.');

let paragraphTextImagesTwo = document.createTextNode('Alice in borderland is another exciting TvShow that depcits an element of ' +
    'Science fiction, Thriller, Drama, Survival, and twist. It recently launched its second season which blew my mind off. This show will'
    + ' get you into the series with its first episode.');

let paragraphTextImagesThree = document.createTextNode('1899 is an amazing series produced by the creators of Dark (which BTW was an masterpiece) ' +
    'the show will keep you in suspense till the last episode which will make you binge watch the whole season. The only sad thing is that'
    + ' after revealing the information in the last episode, the show has decided to stop continuing which really broke me a part.');

// Add the text to the product page.
paragraphForProducts.appendChild(paragraphTextProducts);
paragraphForImages.appendChild(paragraphTextImages);
paragraphForImagesTwo.appendChild(paragraphTextImagesTwo);
paragraphForImagesThree.appendChild(paragraphTextImagesThree);

// Ensure that the paragraph is added to this specific page.
if (location.href == "http://127.0.0.1:5500/products.html") {
    productPage = document.body.appendChild(paragraphForProducts);
    productPage = document.body.appendChild(paragraphForImages);
    productPage = document.body.appendChild(paragraphForImagesTwo);
    productPage = document.body.appendChild(paragraphForImagesThree);
}

document.getElementById("interestPage").innerHTML = "Interests";



// PRODUCT PAGE END!

// --------------------------------------------------------------------------------------------------------------------------------------

// SERVICES PAGE START!

// Create a variables for the body.
let servicesPage;

// Create elements for the services page.
let paragraphForServices = document.createElement('p');
let paragraphForServicesImage = document.createElement('p');
let paragraphForServicesImageTwo = document.createElement('p');
let paragraphForServicesImageThree = document.createElement('p');


// Set attributes
paragraphForServicesImage.setAttribute('id', 'servicesParaOne');
paragraphForServicesImageTwo.setAttribute('id', 'servicesParaTwo');
paragraphForServicesImageThree.setAttribute('id', 'servicesParaThree');


// Create text for the product page.
let paragraphTextServices = document.createTextNode('Hi there! Welcome to my services page. I offer three services primarily ' +
    'Web Development, Android Development, and Game Development. I am pretty good with these development services. However, I am mostly ' +
    'comfortable with the backend development of these services. That said, I still have a team of front-end developers who can get your ' +
    ' work done! My main languages are: JAVA, JAVASCRIPT, REACT, PYTHON, and .NET');

let paragraphTextServicesImage = document.createTextNode('WEB DEVELOPMENT: I am pretty good with these development services and I can get' +
    ' your website running live with out any problem. I offer fullstack development services and can create your website from scratch' +
    'Plus you dont have to worry about purchasing domain-specific services, I have it covered for you.');

let paragraphTextServicesImageTwo = document.createTextNode('ANRDOID DEVELOPMENT: I can develop the applications you wish to develop ' +
    ' through Java. There are a lot of different options available for you to develop your applications and I have them covered for you.');

let paragraphTextServicesImageThree = document.createTextNode('GAME DEVELOPMENT: Apart from that, I have a good connections with developers' +
    ' that can create video games and a few of my contacts are working with Ubisoft, Nintendo, and Electronic Arts. Below is the link to my resume:');


// Add the text to the product page.
paragraphForServices.appendChild(paragraphTextServices);
paragraphForServicesImage.appendChild(paragraphTextServicesImage);
paragraphForServicesImageTwo.appendChild(paragraphTextServicesImageTwo);
paragraphForServicesImageThree.appendChild(paragraphTextServicesImageThree);


// Ensure that the paragraph is added to this specific page.
if (location.href == "http://127.0.0.1:5500/services.html") {
    servicesPage = document.body.appendChild(paragraphForServices);
    servicesPage = document.body.appendChild(paragraphForServicesImage);
    servicesPage = document.body.appendChild(paragraphForServicesImageTwo);
    servicesPage = document.body.appendChild(paragraphForServicesImageThree);
}

// SERVICES PAGE END!

// --------------------------------------------------------------------------------------------------------------------------------------

// CONTACT PAGE START!

/**
 * This is the fucntion to redirect the user to the index.html page or called home after three seconds
 * while printing the data to the console.
 * @param {} e 120,
 */
function timedRedirect(e) {
    e.preventDefault();

    e.stopPropagation();

    let emailAddress = document.getElementById('ExampleAddresInput').value;

    let contact = document.getElementById('ContactNumberInput').value;

    let firstName = document.getElementById('FirstNameInput').value;

    let lastName = document.getElementById('LastNameInput').value;

    let shortMessage = document.getElementById('ShortMessageInput').value;

    console.log("Name: " + firstName + " " + lastName + "\nEmailAddress: " + emailAddress + "\nContact: " + contact + "\nMessage:" + shortMessage);

    setTimeout(function () {

        window.location.href = "index.html";

    }, 3000);

}

// CONTACT PAGE END!

// --------------------------------------------------------------------------------------------------------------------------------------

// ABOUT PAGE START!


// Using only JavaScript, added another link to the Navbar above named Human Resources, that sits between About Us and Contact Us.
//let navBar = document.getElementsByTagName('ul')[0];
//let aboutUs = document.querySelector("li")[3];
// let navBar = document.querySelector("li");
// let aboutUs = document.querySelector("nav ul li:nth-child(2)");

// let humanResourcesLink = document.createElement("li");
// let humanResources = document.createTextNode("Human Resources");

// humanResourcesLink.appendChild(humanResources);

// navBar.insertBefore(humanResourcesLink, aboutUs.nextSibling);


// Creating a variable for the about us page.
let aboutUs;


// Create an element for the about us page.
let paragraphForAboutUs = document.createElement('p');

// Set attributes.
paragraphForAboutUs.setAttribute('id', 'paraOfAboutUs');

let paragraphTextAboutUs = document.createTextNode('I am Nikunj Suryavanshi. I like playing video games and its one of my hobbies.' +
    ' However, I am mostly interested in Spirituality, and regarding the meaning of life. Apart from all this hard and fast life, I ' +
    'seek peace and contentment. I wish to visit all the spritual palces in the world. One Fun fact: I am an SEO Content Writer ' +
    ' and I have written articles that used to rank in top 10 seraches of the goolge search engine.');


paragraphForAboutUs.appendChild(paragraphTextAboutUs);

// Ensure that the paragraph is added to this specific page.
if (location.href == "http://127.0.0.1:5500/about.html") {
    aboutUs = document.body.appendChild(paragraphForAboutUs);
}


// Below part of the code is referenced from the ICE 4 code that professor provdied.

import * as userClass from "./class.js"
import * as formValidation from "./form.js"

$(function () {
    let errorDiv = `<div class="errorMessage"></div>`;

    $(errorDiv).appendTo("#first-group");
    $(errorDiv).appendTo("#last-group");
    $(errorDiv).appendTo("#username-group");
    $(errorDiv).appendTo("#email-group");
    $(errorDiv).appendTo("#pass1-group");
    $(errorDiv).appendTo("#pass2-group");
});

// if the submit button is on the page
if ($("#inputButton")) {

    $("#inputButton").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();
        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class memebers work in calling the validation
        const unvalidated_user = new userClass.User(
            // get the first name input
            $("#inputFirstName").val(),
            // get the last name input
            $("#inputLastName").val(),
            // get the username input
            $("#inputUsername").val(),
            // get the email input
            $("#exampleInputEmail1").val(),
            // get the password input
            $("#exampleInputPassword1").val()
        );

        // validate first name
        $("#first-group").children(".errorMessage").html(formValidation.validateFirst(unvalidated_user.firstName));

        // validate last name
        $("#last-group").children(".errorMessage").html(formValidation.validateLast(unvalidated_user.lastName));

        // validate  username
        $("#username-group").children(".errorMessage").html(formValidation.validateUsername(unvalidated_user.username));

        // validate email
        $("#email-group").children(".errorMessage").html(formValidation.validateEmail(unvalidated_user.email));

        // validate confirm password
        let error = formValidation.validatePassword(unvalidated_user.password, $("#exampleInputPasswordConfirm").val());
        $("#pass1-group").children(".errorMessage").html(error);
        $("#pass2-group").children(".errorMessage").html(error);


        console.log(`User Details: ${unvalidated_user.displayUser()}`)

        // setTimeout(function () {

        //     $(this).closest('form').find("input[type=text], input[type=password], input[type=email], textarea").val("");
    
        // }, 3000);

        //$(this).closest('form').find("input[type=text], input[type=password], input[type=email], textarea").val("");


    });
}


if ($("#btnSubmit")) {

    $("#btnSubmit").click(function (e) {
        e.preventDefault();
        console.log(($("#exampleInputEmail1").val()), ($("#exampleInputPassword1").val()));

});
}

// Below line of code adapts and utilizes code from Shane Blake @ https://stackoverflow.com/questions/6364289/clear-form-fields-with-jquery .
if ($("#inputReset")) {
    $("#inputReset").click(function (e) {
        e.preventDefault();
        $(".errorMessage").html("<div></div>");

        // This part is entirely from Shane Blake @ https://stackoverflow.com/questions/6364289/clear-form-fields-with-jquery .
        $(this).closest('form').find("input[type=text], input[type=password], input[type=email], textarea").val("");

    });
}
