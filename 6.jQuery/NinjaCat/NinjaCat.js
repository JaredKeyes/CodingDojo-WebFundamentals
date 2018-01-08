$(document).ready(function() {
    $("img").click(function(){
        $(this).attr('placeholder', $(this).attr('src'));
        $(this).attr('src', $(this).attr('alt'));
        $(this).attr('alt', $(this).attr('placeholder'));
    });
});
