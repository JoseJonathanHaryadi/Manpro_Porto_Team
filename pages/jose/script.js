
const bernardButton = document.getElementById("bernardButton");
const bernardImage = document.getElementById("bernardImage");
const bernardMessage = document.getElementById("bernardMessage");

const bernardAudio = new Audio("./audio/bernard-aihihi.mp3");

const messages = [
    "Jangan lupa makan, Mas!",
    "Istirahat dulu, Mas.",
    "Saatnya tidur, Mas!",
    "Kalau sabar gabisa, saatnya sadar.",
    "Aku cuma beruang, ahihihihi!",
    "Ahihihi!"
];

bernardButton.addEventListener("click", function() {

    const randomIndex = Math.floor(Math.random() * messages.length);

    bernardMessage.textContent = messages[randomIndex];

    bernardImage.classList.toggle("bernard-happy");

    bernardMessage.classList.remove("show-message");
    void bernardMessage.offsetWidth;
    bernardMessage.classList.add("show-message");

    bernardAudio.currentTime = 0;

    bernardAudio.play().catch(function(error) {
        console.log("Audio gagal diputar:", error);
    });

});
