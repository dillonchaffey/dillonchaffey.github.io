$(document).ready(function () {



    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            moveChar('n');
        }
        else if (e.keyCode == '40') {
            moveChar('s')
        }
        else if (e.keyCode == '37') {
            moveChar('w')
        }
        else if (e.keyCode == '39') {
            moveChar('e')            
        }
    }

});