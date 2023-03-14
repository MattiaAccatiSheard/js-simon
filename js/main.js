// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9: 30 di domani mattina!
// Qui trovate HTML e CSS ed alcuni esempi di stamattina(trovato l'easter egg?). cercate di analizzarli per capire come intervenire sul countdown.
// https://github.com/TizianoN/timing-funcitons
//     Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno ?
//     Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto ?
//     Da quanti millisecondi è composto un secondo ?
//     Quanti millisecondi mi separano da domani alle 9: 30 ?
//     Esiste un oggetto JS in grado di gestire le date ?
//     Esistono dei metodi per trasformare una data in millisecondi ?
//     Buon divertimento e a lunedì!(modificato) 
// GitHubGitHub
// GitHub - TizianoN / timing - funcitons
// Contribute to TizianoN / timing - funcitons development by creating an account on GitHub. (36 kB)

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const mSecondEl = document.getElementById("msecond")
const titleEl = document.getElementById("title");

const ZdaysEl = document.getElementById("z-days");
const ZhoursEl = document.getElementById("z-hours");
const ZminutesEl = document.getElementById("z-minutes");
const ZsecondsEl = document.getElementById("z-seconds");
const ZmSecondEl = document.getElementById("z-mseconds")
const ZtitleEl = document.getElementById("z-title");

// ESEMPIO 1: PASTA
// titleEl.innerHTML = "Butta la pasta!";
// let secondsPasta = 5;
// buttaLaPasta();
// const clockPasta = setInterval(buttaLaPasta, 1000);
// function buttaLaPasta() {
//     secondsPasta--;
//     secondsEl.innerHTML = (secondsPasta < 10) ? '0' + secondsPasta : secondsPasta;
//     if (secondsPasta <= 0) {
//         clearInterval(clockPasta);
//         confetti({
//             particleCount: 100,
//             spread: 160
//         });
//     }
// }

// ESEMPIO 2: CRONOMETRO
titleEl.innerHTML = "Cronometro";
let startTime = performance.now();
let totalSeconds = 0;
const clockCronometro = setInterval(stampaTempoTrascorso, 1000);

stampaTempoTrascorso();
ZstampaTempoTrascorso();
function stampaTempoTrascorso() {
    ++totalSeconds;

    const seconds = totalSeconds % 60;
    const minutes = parseInt((totalSeconds / 60) % 60);
    const hours = parseInt((totalSeconds / 60 / 60) % 24);
    const days = parseInt((totalSeconds / 60 / 60 / 24));

    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    daysEl.innerHTML = (days < 10) ? "0" + days : days;
}
// console.log();


// 2: CRONOMETRO CON MILLISECONDI
// titleEl.innerHTML = "Cronometro";
// let totalSeconds = 0;
const ZclockCronometro = setInterval(ZstampaTempoTrascorso, 10);
function ZstampaTempoTrascorso() {
    let currentTime = performance.now();
    // let startTime = currentTime;
    let elapsedTime = currentTime;


    let seconds = parseInt((elapsedTime / 1000) % 60);
    let minutes = parseInt((elapsedTime / 1000 / 60) % 60);
    let hours = parseInt((elapsedTime / 1000 / 60 / 60) % 24);
    let days = parseInt((elapsedTime / 1000 / 60 / 60 / 24));
    let milliseconds = parseInt(elapsedTime % 1000);

    ZsecondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    ZminutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    ZhoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    ZdaysEl.innerHTML = (days < 10) ? "0" + days : days;
    ZmSecondEl.innerHTML = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;
}

// ESEMPIO 3: OROLOGIO
// stampaOraAttuale()
// const clockOrologio = setInterval(stampaOraAttuale, 1000);
// titleEl.innerHTML = "Orologio";
// function stampaOraAttuale() {
// 	const now = new Date();

// 	const seconds = now.getSeconds() // Get the second (0-59)
// 	const minutes = now.getMinutes() // Get the minute (0-59)
// 	const hours = now.getHours() //Get the hour (0-23)
// 	const days = now.getDay() // Get the day as number (0-6)

// 	secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
// 	minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
// 	hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
// 	daysEl.innerHTML = (days < 10) ? "0" + days : days;
// }

// ESEMPIO 4: DATES MILLISECONDS
// const now = new Date();
// const tomorrow = new Date("2023-02-04 12:00");

// console.log("today: " + now.getTime());
// console.log("tomorrow: " + tomorrow.getTime());


// countdown
// const countDown = new Date("2023-02-14 11:30 ").getTime();

// const clockDown = setInterval(conteggio, 1000);

// function conteggio() {
//     const now = new Date().getTime();

//     const differenza = countDown - now;

//     const days = Math.floor(differenza / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((differenza % (1000 * 60)) / 1000);

//     secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
//     minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
//     hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
//     daysEl.innerHTML = (days < 10) ? "0" + days : days;

//     if (differenza < 0) {
//         clearInterval(clockDown);
//         confetti({
//             particleCount: 100,
//             spread: 160
//         });
//     }

// }