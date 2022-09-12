

var photos = ["img/m.png","img/s.png","img/sm.jpg"]
var imgTag = document.querySelector("img");


var count = 0;


function Next(){
    count++;

    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}


function Prev(){

    count--;

    if(count<0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }

}