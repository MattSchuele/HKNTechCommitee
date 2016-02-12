var menu = document.querySelector('#header');

window.onload = function() {
    updateLogoColor();
};

window.addEventListener('scroll', function() {
    updateLogoColor();
});

function updateLogoColor() {
    if (window.pageYOffset > 0) {
        menu.classList.add('sticky');
        //setLogoColor('black');
    } else if (window.pageYOffset <= 0) {
        menu.classList.remove('sticky');
        //setLogoColor('white');
    }
}

function setLogoColor(color) {
    var elements = document.getElementsByClassName('logo-fill');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = color;
        elements[i].style.fill = color;
    }
}

$('#menu-button').click(function(e) {
    e.preventDefault();

    if ($('#header').hasClass('expanded')) {
        $('#header').removeClass('expanded');
    } else {
        $('#header').addClass('expanded');
    }
});