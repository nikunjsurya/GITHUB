/**
 * This is the fucntion to redirect the user to the index.html page or called home after three seconds
 * while printing the data to the console.
 * @param {} e 
 */
function timedRedirect(e)
{
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

if (submitButton)
{
    submitButton.addEventListener('click', timedRedirect, false);
}