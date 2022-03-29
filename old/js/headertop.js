$(document).ready(function(){

    $('#search-icon').click(function(){
        $(this).toggleClass('bi-x-lg');
        $('#search-box').toggleClass('active');
    });
});