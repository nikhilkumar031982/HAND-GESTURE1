//teachablemachine.withgoogle.com/models/LSTqeQLd3

prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

 function snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";

});
 }
 console.log('ml5 version',ml5.version);

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LSTqeQLd3/model.json",modelLoaded);

 function modelLoaded(){
     console.log("modelLoaded");
 }
  function speak(){
     var synth=window.speechSynthesis;
     speak_data_1="The first prediction is "+prediction1;
     speak_data_2="The second prediction is "+prediction2;

     var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
     synth.speak(utterthis);
  }

  function check(){
img=document.getElementById("capture_image");

classifier.classify(img,gotResult);
  }

  function gotResult(error,results){
      if(error){
          console.error(error)
      }
      else{
          console.log(results);
          document.getElementById("result_emoji").innerHTML=results[0].label;
          document.getElementById("result_emoji2").innerHTML=results[1].label;
          prediction1=results[0].label;
          prediction2=results[1].label;
      speak();
     
      if(results[0].label=="VICTORY"){
       document.getElementById("update_emoji").innerHTML="&#9996";
      } 
      if(results[0].label=="AMAZING"){
        document.getElementById("update_emoji").innerHTML="&#128076";
       
       }
       if(results[0].label=="LOSER"){
        document.getElementById("update_emoji").innerHTML="&#128078";
       }

       if(results[0].label=="PUNCH"){
        document.getElementById("update_emoji").innerHTML=">&#128074";
       }

       if(results[0].label=="BEST"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
       }

       if(results[0].label=="HELLO"){
        document.getElementById("update_emoji").innerHTML=">&#9995";
       }

       if(results[0].label=="PLEASE"){
        document.getElementById("update_emoji").innerHTML="&#128591";
       }






       if(results[1].label=="VICTORY"){
        document.getElementById("update_emoji2").innerHTML="&#9996";
       } 
       if(results[1].label=="AMAZING"){
         document.getElementById("update_emoji2").innerHTML="&#128076";
        
        }
        if(results[1].label=="LOSER"){
         document.getElementById("update_emoji2").innerHTML="&#128078";
        }
 
        if(results[1].label=="PUNCH"){
         document.getElementById("update_emoji2").innerHTML=">&#128074";
        }
 
        if(results[1].label=="BEST"){
         document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
 
        if(results[1].label=="HELLO"){
         document.getElementById("update_emoji2").innerHTML=">&#9995";
        }
 
        if(results[1].label=="PLEASE"){
         document.getElementById("update_emoji2").innerHTML="&#128591";
        }

        speak();
    }} 


       