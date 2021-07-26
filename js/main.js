const lang = 'en-US';
let date = new Date();

let dayNumber = date.getDate();
let dayName = date.toLocaleString(lang,{weekday: 'long'});
let month = date.getMonth();
let monthName = date.toLocaleString(lang,{month: 'long'});
let year = date.getFullYear();

document.getElementById('month').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;