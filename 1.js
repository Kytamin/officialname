function checking() {
    let a = document.getElementById("massage").value
    if (a === "ECMAScript") {
        document.getElementById("massage").value = "that's Right";
    } else {
        document.getElementById("massage").value="Didn’t know? ECMAScript";
    }
}
