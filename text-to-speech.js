    var speech_result = document.getElementById("convert_text");
    var listening = document.getElementsByTagName("h3")[0];
    
    click_to_record.addEventListener('click',function(){
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "ar-AE";
    recognition.interimResults = true;
    listening.innerHTML = "Listening...";
    
    recognition.addEventListener('result', e => {
        
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        recognition.onstart = function(){
            listening.innerHTML = "Listening...";
        }

        recognition.onspeechend = function (){
                speech_result.innerHTML = transcript;
                listening.innerHTML = "heard successfully";
            
            
            
        
        }
        recognition.onerror = function () {
            listening.innerHTML = "an error occured "
        }


        
    });
    
    recognition.start();

})