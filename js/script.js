// Menu Active JS
$("li").click( function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});
// Mobile menu
$("#show_menu").click ( function(){
    $(this).addClass("hide");
    $("#hide_menu").removeClass("hide");
    $("#mobile_menu").slideDown(500);
});
$("#hide_menu").click ( function(){
    $(this).addClass("hide");
    $("#show_menu").removeClass("hide");
    $("#mobile_menu").slideUp(500);
});


// Contact Form 
$("#contact_btn").click( function(){
    $("#popup_contact").addClass("popup_contact_show");
});;
$("#xmark").click( function(){
    $("#popup_contact").removeClass("popup_contact_show");
});