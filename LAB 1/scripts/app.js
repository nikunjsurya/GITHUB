/**
 * Author:      Nikunj Suryavanshi
 * Date:        05/02/2023
 * Student Id:  100801799
 */
/**
 * This is the fucntion to redirect the user to the index.html page or called home after three seconds
 * while printing the data to the console.
 * @param {} e 120,
 */
function timedRedirect(e) {
    e.preventDefault();

    e.stopPropagation();

    let contactEmail = document.getElementById('exampleInputEmail1').value;

    let contactPassword = document.getElementById('exampleInputPassword1').value;

    console.log("Email: " + contactEmail + " Password: " + contactPassword);

    setTimeout(function () {

        window.location.href = "index.html";

    }, 3000);

}

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
if(location.href == "http://127.0.0.1:5500/products.html"){
    productPage = document.body.appendChild(paragraphForProducts);
    productPage = document.body.appendChild(paragraphForImages);
    productPage = document.body.appendChild(paragraphForImagesTwo);
    productPage = document.body.appendChild(paragraphForImagesThree);
}

document.getElementById("interestPage").innerHTML = "Interests";



                                                   // PRODUCT PAGE END!

