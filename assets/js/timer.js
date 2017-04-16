$(function() {
    rotation = 0;

    function rotate() {
        rotation += 1;
        $('.hand').css({'transform' : 'rotate('+ rotation +'deg)'});
    }

    setInterval(rotate, 50);
    rotate();
});
