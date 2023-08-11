const textareaE1 = document.querySelector(".textarea");
const txtToSpeechE1 = document.querySelector(".txtToSpeechBtn");
const speekerIcon = document.querySelector(".speekerIcon");

let speaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textareaE1.value;
  if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }
  if (synth.speaking && speaking) {
    txtToSpeechE1.innerText = "Pause";
    synth.resume();
    speaking = false;
    speekerIcon.innerHTML = "&#128266";
  } else {
    txtToSpeechE1.innerText = "Resume";
    synth.pause();
    speaking = true;
    speekerIcon.innerHTML = "&#128264";
  }
  setInterval(() => {
    if (!synth.speaking && !speaking) {
      speaking = true;
      txtToSpeechE1.innerText = "Text To Speech";
    }
  });
};
txtToSpeechE1.addEventListener("click", textToSpeech);
