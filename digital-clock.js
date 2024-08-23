function clock() {
  let monthNames = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September",
    "October", 
    "November",
    "December"
  ];
  
  let daysNames = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ]; 

  let today = new Date();

  document.getElementById('Date').innerHTML = (daysNames[today.getDay()] + "," + " " + today.getDate() + ' ' + monthNames[today.getMonth()]+ ' ' + today.getFullYear());
  
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  h = h<10? '0'+ h: h;
  m = m<10? '0'+ m: m;
  s = s<10? '0'+ s: s;
  
  document.getElementById('hours').innerHTML= h;
  document.getElementById('minutes').innerHTML= m;
  document.getElementById('seconds').innerHTML= s;
}
let inter= setInterval(clock, 300);