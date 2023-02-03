console.log('selectors.js loaded')

function highlight(element)
{
    element.css('background-color', '#fcf30040');
}

function cssSelector()
{
    $('p').css('background-color', '#2a9d8f');

    $('.red-box').css('background-color', '#2a9d8f');

    $('#list').css('font-size', '40px');

    // $('h1, h2').css('color', 'red');

    $('li:even').css('background-color', '#fcf30040');

}

function traversingTheDOM()
{
    // $('#list').prev().css('background-color', '#3a86ff');

    // $('#list').next().css('background-color', '#3a86ff');

    // $('#list').prev().next().css('background-color', '#3a86ff);

    $('#list').find('li').css('background-color', '#3/a86ff');

    // Traverse all the way up through all parents, grandparents, etc.
    $('#list').parents('body').css('font-size', '24px');
    
    // Traverse up 1 level.
    $('#list').parents('div').css('font-size', '24px');

    // $('element').siblings('div > .className');
}


function filtering()
{
    // $('#list').find('li').filter(':even').css('background-color', '#3a56ff');

    $('#list').find('li').filter(function(index) {
        return index % 2 == 0;
    }).css("background-color", "red");
}


function addingReplacingRemoving(){
    $("ul ul:first").append($("<li>I'm going to be the first item of the first sub-list!</li>"));

    $("<li>Now I'm the last element of the first sub-list!!!</li>").appendTo($("ul ul:first"));

    // prepend(), prependTo()

    $('.red-box').after("<div class='red-box'>This is a new red box!</div>");

    let newText = 'Last night, Darth Vader came down from planet Vulcan.';

    $('li').replaceWith(`<li>${newText}</li>`);

    $("<div class='green-box'>Created green box! </div>").replaceAll(".red-box");

    // Avoid
    //$('li').remove();

    // Instead use deatch!
    let detachedLIs = $('li').detach();
    $('body').append(detachedLIs);
}


function chainAnimation()
{
    // $('.blue-box').fadeTo(1000, 0.5);
    // $('.green-box').delay(1000).fadeTo(1000, 0.5);

    // $('.red-box').delay(2000).fadeTo(1000, 0.5).delay(1000).fadeTo(1000, 1.0).delay(1000).fadeOut();

    $('.red-box').fadeTo(1000, .25, function () {
        $('.green-box').fadeTo(1000, .25, function () {
            $('.blue-box').fadeTo(1000, .25);
        });
    });
}

// fadeInOutTo();
// hideElement();
chainAnimation();