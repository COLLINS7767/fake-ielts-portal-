function login(event) {
    event.preventDefault();
    const id = document.getElementById("candidateId").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (id === "IND987654" && pass === "Test@1234") {
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Invalid Candidate ID or Password.";
    }
}
