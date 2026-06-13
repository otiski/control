const h1 = document.getElementById("h1");
const h12 = document.getElementById("h12");
const breakBtn = document.getElementById("swbreaker");

h1.textContent = `${localStorage.getItem("state")}`;
h12.textContent = `${localStorage.getItem("fuelState")}`;
breakBtn.style.backgroundColor = `${localStorage.getItem("breakerState")}`;

document.getElementById("start").onclick = function () {
    if (h12.textContent == "FUEL ACTIVE") {
        h1.textContent = "ON";
        localStorage.setItem("state", "ON");
    } else if (localStorage.getItem("breakerState") == "red") {
        alert("turn of breaker to start");
    } else {
        alert("start fuel to start");
    }
};
document.getElementById("abort").onclick = function () {
    h1.textContent = "OFF";
    localStorage.setItem("state", "OFF");
};
document.getElementById("clear").onclick = function () {
    if (h1.textContent == "ON") {
        alert("Turn off engine to clear!");
    } else if (localStorage.getItem("breakerState") == "red") {
        alert("turn of breaker to start");
    } else {
        h1.textContent = "Clearing, wait 5 minutes before turning back on";
    }
};
document.getElementById("sfuel").onclick = function () {
    if (localStorage.getItem("breakerState") == "red") {
        alert("turn of breaker to start");
    }
    h12.textContent = "FUEL ACTIVE";
    localStorage.setItem("fuelState", h12.textContent);
};
document.getElementById("stfuel").onclick = function () {
    if (h1.textContent !== "ON") {
        h12.textContent = "FUEL INACTIVE";
        localStorage.setItem("fuelState", h12.textContent);
    } else {
        alert("can't turn off fuel while engine is on");
    }
};
document.getElementById("emer").onclick = function () {
    h1.textContent = "OFF";
    h12.textContent = "FUEL INACTIVE";
    breakBtn.style.backgroundColor = "red";
    if (localStorage.getItem("breakerState") == "red") {
        alert("turn of breaker to start");
    }

    localStorage.setItem("fuelState", "FUEL INACTIVE");
    localStorage.setItem("state", "OFF");
    localStorage.setItem("breakerState", "red");
};
document.getElementById("swbreaker").onclick = function () {
    if (localStorage.getItem("breakerState") == "red") {
        breakBtn.style.backgroundColor = "green";
        localStorage.setItem("breakerState", "green");
    } else {
        breakBtn.style.backgroundColor = "red";

        h1.textContent = "OFF";
        h12.textContent = "FUEL INACTIVE";

        localStorage.setItem("fuelState", "FUEL INACTIVE");
        localStorage.setItem("state", "OFF");
        localStorage.setItem("breakerState", "red");
    }
};
