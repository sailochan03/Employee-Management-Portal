document.addEventListener("DOMContentLoaded", () => {
  function generateRandomFiveDigitNumber() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  document.getElementById("submitBtn").addEventListener("click", () => {
    const dispDiv = document.getElementById("dispDIV");
    dispDiv.style.display = "flex";

    const randomNumber = generateRandomFiveDigitNumber();
    document.getElementById("uid").innerText = `Employee UID: ${randomNumber}`;

    const nameVal = document.getElementById("name").value;
    const emailVal = document.getElementById("email").value;
    const addrVal = document.getElementById("addr").value;
    const phoneVal = document.getElementById("phoneNo").value;
    const dobVal = document.getElementById("DoB").value;
    const dojVal = document.getElementById("DoJ").value;
    const salaryVal = document.getElementById("sal").value;
    const desgVal = document.getElementById("desg").value;

    document.getElementById("nameDisp").innerText = `Name: ${nameVal}`;
    document.getElementById("mail").innerText = `Email: ${emailVal}`;
    document.getElementById("address").innerText = `Address: ${addrVal}`;
    document.getElementById("phNo").innerText = `Phone No: ${phoneVal}`;
    document.getElementById("dob").innerText = `DOB: ${dobVal}`;
    document.getElementById("doj").innerText = `DOJ: ${dojVal}`;
    document.getElementById("salaryDisp").innerText = `Salary: ${salaryVal}`;
    document.getElementById("post").innerText = `Designation: ${desgVal}`;

    const newEmployee = {
      uid: randomNumber,
      name: nameVal,
      email: emailVal,
      designation: desgVal,
      salary: salaryVal,
    };
    localStorage.setItem("newEmployee", JSON.stringify(newEmployee));
  });
  document.getElementById("confirmBtn").addEventListener("click", function () {
    window.location.href = "empList.html";
  });
});
