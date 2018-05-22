(function($){
    "use strict";
    
    console.log('loaded ');
    $('.nav-link').on('click', function () {
        console.log('clicked c ...');
    });
   
}) ( window.jQuery );

$(document).ready(function() {
    console.log('loaded custom script q...')
    "use strict";
    $('.nav-link').on('click', function () {
        console.log('clicked q ...');
    });
});
