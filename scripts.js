$(document).ready(function() {
    $('#interactive-image').click(function() {
        var currentSrc = $(this).attr('src');
        if(currentSrc === 'https://github.com/imhanyuu/Assignment-2-Hanyu-Wang/blob/main/Assignment%202-Hanyu%20Wang/PC-1.png?raw=true') {
            $(this).attr('src', 'https://github.com/imhanyuu/Assignment-2-Hanyu-Wang/blob/main/Assignment%202-Hanyu%20Wang/PC-2.png?raw=true').show();
            $('.button-9').show();
        }
    });

    $('.button-9').click(function() {

        $('#interactive-image').hide();
        $(this).hide();
        
        $('#final-image').show();
        // Submitted! 
        alert("Submitted!");
    });
});

$(document).ready(function() {

    var backgrounds = ["https://github.com/imhanyuu/Assignment-2-Hanyu-Wang/blob/main/Assignment%202-Hanyu%20Wang/bg-b.png?raw=true", "https://github.com/imhanyuu/Assignment-2-Hanyu-Wang/blob/main/Assignment%202-Hanyu%20Wang/bg-b2.png?raw=true"];
    var currentBackground = 0;

    $('#change-background').click(function() {


        $('body').css('background-image', 'url(' + backgrounds[currentBackground] + ')');
        currentBackground = (currentBackground + 1) % backgrounds.length;
    });
});

$(document).ready(function() {
    $('#hover-image').one('mouseenter', function() {

        $(this).attr('src', 'https://github.com/imhanyuu/Assignment-2-Hanyu-Wang/blob/main/Assignment%202-Hanyu%20Wang/light.png?raw=true');
    });
});

document.getElementById('image-q').addEventListener('click', function() {
    document.getElementById('fullscreen-overlay').style.display = 'flex';
});