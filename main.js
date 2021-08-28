var SpeechRecognition = window.webkitSpeechRecognition;

var image;
var link;
var recognition = new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTMl = "";
    recognition.start();
}


recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
    document.getElementById("textbox").innerHTML = Content
}


function speak(){
    var synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    window.alert("Say cheese!!!!!")
    setTimeout(function(){
        takeSnapshot();
        save()
    }, 5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});
var camera = document.getElementById("cam");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = "<img id='selfieimg' src='"+data_uri+"' style='margin-bottom=30px;'>";
    })
}
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfieimg").src;
    link.href=image;
    link.click()
}