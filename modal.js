$(document).ready(function() {  
 
    //select all the a tag with name equal to modal
    $('a[name=modal]').click(function(event) {
        //Cancel the link behaviorv
        event.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');
 
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
 
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
 
        //transition effect
        $(id).fadeIn(500); 
 
    });
 
    //if close button is clicked
    $('.modalwindow .close').click(function (even) {
        //Cancel the link behavior
        event.preventDefault();
        $('.modalwindow').fadeOut(500);
    });             
 
});