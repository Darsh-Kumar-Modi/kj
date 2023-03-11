status="";
objects = [];
load="<img src='page-load.jpg' height='55px'>"
function preload(){
    img= loadImage("game.jpg");
}
function setup(){
    canvas= createCanvas(550 ,470);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML=load;
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(img,0,0,548,468);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = " Status = Object detected";
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "  " + percent + "%", objects[i].x+11, objects[i].y+11);
            noFill();
            stroke("black");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }

    }

}