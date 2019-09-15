/*
JavaScript Image slideshow:
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free JavaScript here!
*/

// Start slider
var slideimages=new Array()
var slidelinks=new Array()

function slideshowimages(){
    for (i=0; i < slideshowimages.arguments.length; i++){
        slideimages[i] = new Image()
        slideimages[i].src = slideshowimages.arguments[i]
    }
}

function slideshowlinks(){
    for (i=0; i < slideshowlinks.arguments.length; i++)
    slidelinks[i]=slideshowlinks.arguments[i]
}

function gotoshow(){
    if (!window.winslide||winslide.closed)
    winslide = window.open(slidelinks[whichlink])
else
    winslide.location=slidelinks[whichlink]
    winslide.focus()
}

slideshowimages("images/15.jpg","images/1.jpg","images/5.jpg", "images/3.jpg", "images/8.jpg")
//slideshowlinks("http://food.epicurious.com/run/recipe/view?id=13285","http://food.epicurious.com/run/recipe/view?id=10092","http://food.epicurious.com/run/recipe/view?id=100975","http://food.epicurious.com/run/recipe/view?id=2876","http://food.epicurious.com/run/recipe/view?id=20010")

//configure the speed of the slideshow, in miliseconds
var slideshowspeed=2000

var whichlink=0
var whichimage=0
function slideit(){
    if (!document.images)
    return
        document.images.slide.src=slideimages[whichimage].src
        whichlink=whichimage
    if (whichimage<slideimages.length-1)
        whichimage++
    else
        whichimage=0
        setTimeout("slideit()",slideshowspeed)
}
slideit()
// End Slider


