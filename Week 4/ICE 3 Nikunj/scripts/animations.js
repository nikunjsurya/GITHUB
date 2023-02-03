console.log("animation.js loaded")

function fadeInOutTo()
{
    $('.red-box').fadeOut(2000);
    $('.red-box').fadeIn().fadeTo(1000, 25);

    // $('.red-box').fadeIn(1000);

    // $('.red-box').fadeIn().fadeTo(1000, .3);

    // $('.red-box).fadeToggle(1000);
    // $('.red-box).fadeToggle(1000);
}

function hideElement()
{
    // Toggle display - left corner.
    $('.green-box').hide(1000);
    $('.green-box').show(1000);

    // Sides up and down.
    $('.green-box').slideUp(1000);
    $('.green-box').slideDown(1000);

    // Toogle slide state.
    $('.green-box').slideToggle(1000);
    $('.green-box').slideToggle(1000);
}


function chainAnimations()
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
chainAnimations();