document.addEventListener("DOMContentLoaded", (event) => {
  const btn = document.getElementById("loginBtn");

  btn.addEventListener("click", () => {
    const uid = document.getElementById("uid");
    const uidVal = uid.value;

    const pass = document.getElementById("pass");
    const passVal = pass.value;

    if (uidVal === "admin123" && passVal === "1234") {
      window.location.href = "adminPage.html";
    } else {
      alert("Invalid User ID or Password");
    }
  });
});
