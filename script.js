document.getElementById("btn").onclick = function () {
    name = document.getElementById("name").value;
    if (name !== "") {
        localStorage.setItem("Name", name);
        window.location.href = "control.html";
    } else {
        alert("Please put valid name");
    }
};
