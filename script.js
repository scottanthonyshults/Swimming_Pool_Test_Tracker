function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  dd = checkTime(dd);
  mm = checkTime(mm);

  let divTime = document.getElementById('time');
  divTime.innerHTML = `${h}:${m}:${s} (24 hr time)`;
  let divDate = document.getElementById('date');
  divDate.innerHTML = `${dd}/${mm}/${yyyy} (mm/dd/yyyy)`;


  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
startTime();
