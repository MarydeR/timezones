let honolulutime = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMMM D, YYYY hh:mm:ss a");

let honolulu = document.querySelector("#current-date");
honolulu.innerHTML = `It is ${honolulutime} in Honolulu, Hawaii`;
