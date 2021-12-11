
// Loading page
$(document).ready(function() {  
    let colorWidth = $(".color-box").outerWidth();
    $("#optionBox").animate({left:`-${colorWidth}`} , 0)
    $("#loading .spin").fadeOut(1000 , ()=>{
        $("#loading .spin").parent().fadeOut(1000,()=>{
            $("#loading").remove(); 
            $("body").css("overflow-y" , "auto")
        })
    });
})

// End loading Page

//Choose Color 

$("#toggole-btn").click(function() {
    let colorWidth = $(".color-box").outerWidth();

    if ($("#optionBox").css("left") == "0px") {
        $("#optionBox").animate({left:`-${colorWidth}`} , 1000)
    }else{
        $("#optionBox").animate({left:`0px`} , 1000)
    }
    
})

let colorItem = $(".colorItem")
colorItem.eq(0).css("backgroundColor" , "red")
colorItem.eq(1).css("backgroundColor" , "lightgreen")
colorItem.eq(2).css("backgroundColor" , "blue")
colorItem.eq(3).css("backgroundColor" , "#09c")
colorItem.eq(4).css("backgroundColor" , "darkblue")


colorItem.click(function(e) {
    let bgColor = $(e.target).css("backgroundColor");
    $(".carousel-control-icons , .progress-bar ").css("color" , bgColor)
    $(".info-box .btn ").css("backgroundColor" , bgColor)
    $(".about-container .progress-bar ").css("backgroundColor" , bgColor)

    $(".navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link").css("color" , bgColor);
    $(".navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link").hover(function() {
        $(this).css("color" , bgColor);  
    }, function() {
        $(this).css("color", "black");
    });

    $(".nav-icon").hover(function() {
        $(this).css("color" , bgColor);  
    }, function() {
        $(this).css("color", "black");
    });

    $(".social").hover(function() {
        $(this).css("backgroundColor" , bgColor);  
    }, function() {
        $(this).css("color", "black");
    });

    $(".social").hover(function() {
        $(this).css("opacity" , .5);
        $("h5").css("color" , "black") 
    }, function() {
        $(this).css("opacity", 0);   
    });

    $(".services .item span ").css("border" ,"8px solid " + bgColor)
    $(".services border ").css("color" , bgColor + " !important")
    $(".services .item ").hover(function() {
        $("span").css("backgroundColor" , "white"); 
        $(".services i").css("color" , "black"); 
    });

    $(".icon i").css("color" , bgColor)

    $(".text h4").hover(function() {
        $(this).css("color" , bgColor);
    }, function() {
        $(this).css("color", "black");   
    }); 

    $(".send button").css("backgroundColor" , bgColor)
    
})

// End Choose Color