//slideshow style interval
var autoSwap = setInterval(swap, 3500);

//pause slideshow and reinstantiate on mouseout
$('carousel, span').hover(
    function () {
        clearInterval(autoSwap);
    },
    function () {
        autoSwap = setInterval(swap, 3500);
    });

//global variables
var itemsli = [];
var startItem = 1;
var position = 0;
var itemCount = $('.itemsli').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('.itemsli').each(function (index) {
    itemsli[index] = $(this).text();
});

//swap images function
function swap(action) {
    var direction = action;

    //moving carousel backwards
    if (direction == 'counter-clockwise') {
        var leftitem = $('.left-pos').attr('id') - 1;
        if (leftitem == 0) {
            leftitem = itemCount;
        }

        $('.right-pos').removeClass('right-pos').addClass('back-pos');
        $('.main-pos').removeClass('main-pos').addClass('right-pos');
        $('.left-pos').removeClass('left-pos').addClass('main-pos');
        $('#' + leftitem + '').removeClass('back-pos').addClass('left-pos');

        startItem--;
        if (startItem < 1) {
            startItem = itemCount;
        }
    }

    //moving carousel forward
    if (direction == 'clockwise' || direction == '' || direction == null) {
        function pos(positionvalue) {
            if (positionvalue != 'leftposition') {
                //increment image list id
                position++;

                //if final result is greater than image count, reset position.
                if ((startItem + position) > resetCount) {
                    position = 1 - startItem;
                }
            }

            //setting the left positioned item
            if (positionvalue == 'leftposition') {
                //left positioned image should always be one left than main positioned image.
                position = startItem - 1;

                //reset last image in list to left position if first image is in main position
                if (position < 1) {
                    position = itemCount;
                }
            }

            return position;
        }


        $('#' + startItem + '').removeClass('main-pos').addClass('left-pos');
        $('#' + (startItem + pos()) + '').removeClass('right-pos').addClass('main-pos');
        $('#' + (startItem + pos()) + '').removeClass('back-pos').addClass('right-pos');
        $('#' + pos('leftposition') + '').removeClass('left-pos').addClass('back-pos');

        startItem++;
        position = 0;
        if (startItem > itemCount) {
            startItem = 1;
        }
    }
}

//next button click function
$('#next').click(function () {
    swap('clockwise');
});

//prev button click function
$('#prev').click(function () {
    swap('counter-clockwise');
});

//if any visible items are clicked
$('.itemsli').click(function () {
    if ($(this).attr('class') == 'itemsli left-pos') {
        swap('counter-clockwise');
    }
    else {
        swap('clockwise');
    }
});








let form = document.querySelector(".form");
let emailInput = document.querySelector(".input-clear");
let submit = document.querySelector(".button");
form.addEventListener("submit", e => {
    e.preventDefault();
    let emailValue = emailInput.value
    emailInput.value = "";
}
)


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});