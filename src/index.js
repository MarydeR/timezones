let honolulutime = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMMM D, YYYY hh:mm:ss a");

let honolulu = document.querySelector("#current-date");
honolulu.innerHTML = `It is ${honolulutime} in Honolulu, Hawaii`;

let paristenyrs = moment()
  .tz("Europe/Paris")
  .add(10, "year")
  .format("dddd, MMMMM D, YYYY hh:mm:ss a");

let paris = document.querySelector("#future-date");
paris.innerHTML = `In 10 years from now, it will be ${paristenyrs} in Paris, France`;

let localtz = moment.tz.guess();
let localzone = document.querySelector("#local-time-zone");
localzone.innerHTML = localtz;
