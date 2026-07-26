const text = document.getElementById("text");
const language = document.getElementById("language");
const voice = document.getElementById("voice");

const languages = [
{name:"English (US)",code:"en-US"},
{name:"English (UK)",code:"en-GB"},
{name:"Hindi",code:"hi-IN"},
{name:"Bengali",code:"bn-IN"},
{name:"Gujarati",code:"gu-IN"},
{name:"Marathi",code:"mr-IN"},
{name:"Punjabi",code:"pa-IN"},
{name:"Tamil",code:"ta-IN"},
{name:"Telugu",code:"te-IN"},
{name:"Kannada",code:"kn-IN"},
{name:"Malayalam",code:"ml-IN"},
{name:"Odia",code:"or-IN"},
{name:"Urdu",code:"ur-PK"},
{name:"Arabic",code:"ar-SA"},
{name:"Chinese",code:"zh-CN"},
{name:"Japanese",code:"ja-JP"},
{name:"Korean",code:"ko-KR"},
{name:"Russian",code:"ru-RU"},
{name:"French",code:"fr-FR"},
{name:"German",code:"de-DE"},
{name:"Spanish",code:"es-ES"},
{name:"Italian",code:"it-IT"},
{name:"Portuguese",code:"pt-PT"},
{name:"Turkish",code:"tr-TR"},
{name:"Thai",code:"th-TH"},
{name:"Vietnamese",code:"vi-VN"}
];

languages.forEach(lang => {
  let option = document.createElement("option");
  option.value = lang.code;
  option.textContent = lang.name;
  language.appendChild(option);
});

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voice.innerHTML = "";

  voices.forEach((v, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = v.name;
    voice.appendChild(option);
  });
}

speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function speak() {
  speechSynthesis.cancel();

  let speech = new SpeechSynthesisUtterance(text.value);

  speech.lang = language.value;
  speech.voice = voices[voice.value];
  speech.rate = document.getElementById("rate").value;
  speech.pitch = document.getElementById("pitch").value;
  speech.volume = document.getElementById("volume").value;

  speechSynthesis.speak(speech);
}

function stopVoice() {
  speechSynthesis.cancel();
}

function copyText() {
  navigator.clipboard.writeText(text.value);
  alert("Text Copied");
}

function clearText() {
  text.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
