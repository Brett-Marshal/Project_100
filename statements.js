SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);

    if (content == "Take my selfie.")
    {
        speak()
        console.log("Taking your selfie --")
    }

    document.getElementById("textbox").innerHTML = content;;
}

function speak()
{
    synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in the next 5 seconds"
    speak_final_output = new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_final_output);
    Webcam.attach(camera)

    setTimeout(function() 
    {
        img_id = "selfie1"
        take_snapshot()
        speak_data = "Taking your Selfie in the next 5 seconds"
        speak_final_output = new SpeechSynthesisUtterance(speak_data);
        synth.speak(speak_final_output);
    }, 5000 );

    setTimeout(function() 
    {
        img_id = "selfie2"
        take_snapshot()
        speak_data = "Taking your Selfie in the next 10 seconds"
        speak_final_output = new SpeechSynthesisUtterance(speak_data);
        synth.speak(speak_final_output);
    }, 10000 );

    setTimeout(function() 
    {
        img_id = "selfie3"
        take_snapshot()
        speak_data = "Taking your Selfie in the next 15 seconds"
        speak_final_output = new SpeechSynthesisUtterance(speak_data);
        synth.speak(speak_final_output);
    }, 15000 );
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:99
});


camera = document.getElementById("camera");

function take_snapshot() 
{
    console.log(img_id);

    Webcam.snap(function(data_url)
    {

        if (img_id == "selfie1")
        {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data_url+"'>"
        }

        if (img_id == "selfie2")
        {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data_url+"'>"
        }

        if (img_id == "selfie3")
        {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data_url+"'>"
        }
    })
}