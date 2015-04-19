window.onload = init;

// Declare variables in global scope
var context;
var bufferLoader;
var beep1;
var beep2;
var playing = false;

// Function Init. Define context for compatible browsers, and load 2 sounds using BufferLoader Class.
function init() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("Web Audio API is not supported in this browser");
    }
    
    // Start loading sounds (beep) Using a function un buffer-loader3.js.
    bufferLoader = new BufferLoader(context,["audio/beep1.wav","audio/beep2.wav"],bufferLoadCompleted);
    bufferLoader.load();
}
function bufferLoadCompleted() {
    console.log("bufferLoadCompleted");
    var bufferList = bufferLoader.bufferList
    beep1 = bufferList[0];
    beep2 = bufferList[1];
    
}


// Aquesta funció crea la font sonora , reb per arguments el Buffer, i time. I sona.
// Primer crea una font del tipus BufferSource ,ja que carreguem un so des d'un directori.
// Asigna el .buffer, al parametre buffer(so) que li passem com argument. ve de la funció de mes avall StartPlayingRithm.
// .conecta la font sonora amb la destinació del context.
// I amb .start sona el so, en funció d'un temps que li passem. 
function PlaySound(buffer, time) {
    source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}


// Plays Rhythm 1
// Aquesta funció determina el ritme
// Primer extreu de l'array bufferList el sons i els asigna una variable,l'argument bufferList ve del boto del index.html
// Determina un temps StartTime
// Un Tempo i una negra
// En acabar dispara una sequencia de PlaySound (funció anterior que fa que soni el so)
function StartPlayingRhythm() {
    console.log(beep1);
    if (playing) {
        playing = false;
        clearInterval(timer);
        source.stop();          
    }else{
        playing = true;
        var startTime = context.currentTime;
        var tempo = 120; // BPM (beats per minute)
        var quarterNoteTime = 60 / tempo; // Determina negres
        var sCompas = quarterNoteTime *4 // Segons que dura un compas.
            
        PlaySound(beep2, startTime);
        PlaySound(beep1, startTime + 1*quarterNoteTime);
        PlaySound(beep1, startTime + 2*quarterNoteTime);
        PlaySound(beep1, startTime + 3*quarterNoteTime);        
       
        timer =  setInterval(function(){         
            startTime = startTime + sCompas;        

            PlaySound(beep2, startTime);
            PlaySound(beep1, startTime + 1*quarterNoteTime);
            PlaySound(beep1, startTime + 2*quarterNoteTime);
            PlaySound(beep1, startTime + 3*quarterNoteTime);
        },sCompas*1000);
    };
};
