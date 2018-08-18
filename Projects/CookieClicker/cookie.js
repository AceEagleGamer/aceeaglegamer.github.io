var cookiecount = 0;

// upgrades

var autoClickers = 0;

function update() {
  document.getElementById('text').value = cookiecount;
  document.title = cookiecount + " Cookies";
  document.getElementById('amountAC').innerHTML = "You own " + autoClickers + " Auto Clickers";
  document.getElementById('costAC').innerHTML = ((autoClickers+1) * 12) + " Cookies";
}
function timer() {
  cookiecount += autoClickers;
  update();
}
setInterval(timer,1000)

function buyAutoClicker() {
  if (cookiecount >= ((autoClickers+1) * 12)) {
    cookiecount = cookiecount - ((autoClickers+1) * 12);
    autoClickers += 1;
    update();
  }
}

function addCookie() {
  cookiecount += 1;
  console.log(cookiecount);

  update();
}

function save() {
  localStorage.setItem("cookiecount",cookiecount);
  localStorage.setItem("amountAC", autoClickers);
}

function load() {
  cookiecount = localStorage.getItem("cookiecount");
  cookiecount = parseInt(cookiecount);
  autoClickers = localStorage.getItem("amountAC");
  autoClickers = parseInt(autoClickers);
  update();
}
