
// Mobile menu
$("#show_menu").click ( function(){
    $(this).addClass("hide");
    $("#hide_menu").removeClass("hide");
    $(".main_menu ul").slideDown(500, function() {
        $(this).css("display", "flex");
    });
    
});
$("#hide_menu").click ( function(){
    $(this).addClass("hide");
    $("#show_menu").removeClass("hide");
    $(".main_menu ul").slideUp(500);
});


// Contact Form 
$("#contact_btn").click( function(){
    $("#popup_contact").addClass("popup_contact_show");
});;
$("#xmark").click( function(){
    $("#popup_contact").removeClass("popup_contact_show");
});

