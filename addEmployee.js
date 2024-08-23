document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  function generateRandomFiveDigitNumber() {
    return Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
  }

  document
    .getElementById("submitBtn")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      console.log("Submit button clicked");

      try {
        const randomNumber = generateRandomFiveDigitNumber();
        console.log(`Generated UID: ${randomNumber}`);

        document.getElementById(
          "uid"
        ).innerText = `Employee UID: ${randomNumber}`;

        const nameVal = document.getElementById("name").value;
        const emailVal = document.getElementById("email").value;
        const addrVal = document.getElementById("addr").value;
        const phoneVal = document.getElementById("phoneNo").value;
        const dobVal = document.getElementById("DoB").value;
        const dojVal = document.getElementById("DoJ").value;
        const salaryVal = document.getElementById("sal").value;
        const desgVal = document.getElementById("desg").value;

        console.log(`Collected values: 
        Name: ${nameVal}, Email: ${emailVal}, Address: ${addrVal}, 
        Phone: ${phoneVal}, DOB: ${dobVal}, DOJ: ${dojVal}, 
        Salary: ${salaryVal}, Designation: ${desgVal}`);

        const newEmployee = {
          uid: randomNumber,
          name: nameVal,
          email: emailVal,
          address: addrVal,
          phone: phoneVal,
          dob: dobVal,
          doj: dojVal,
          salary: salaryVal,
          designation: desgVal,
        };

        // Send employee data to the server
        const response = await fetch("http://localhost:3000/addEmployee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmployee),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
        console.log("Server response:", data);

        // Display employee data on the page
        document.getElementById("nameDisp").innerText = `Name: ${nameVal}`;
        document.getElementById("post").innerText = `Designation: ${desgVal}`;
        document.getElementById(
          "salaryDisp"
        ).innerText = `Salary: ${salaryVal}`;
        document.getElementById("doj").innerText = `DOJ: ${dojVal}`;
        document.getElementById("dob").innerText = `DOB: ${dobVal}`;
        document.getElementById("mail").innerText = `Email: ${emailVal}`;
        document.getElementById("phNo").innerText = `Phone No: ${phoneVal}`;
        document.getElementById("address").innerText = `Address: ${addrVal}`;

        document.getElementById("dispDIV").style.display = "flex";
      } catch (error) {
        console.error("Error:", error);
      }
    });

  document.getElementById("confirmBtn").addEventListener("click", () => {
    console.log("Confirm button clicked");
    document.getElementById("dispDIV").style.display = "none";
    document.getElementById("addMoreDIV").style.display = "flex";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("addr").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("DoB").value = "";
    document.getElementById("DoJ").value = "";
    document.getElementById("sal").value = "";
    document.getElementById("desg").value = "";
  });

  document.getElementById("addMore").addEventListener("click", () => {
    console.log("Add more button clicked");
    document.getElementById("addMoreDIV").style.display = "none";
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    console.log("Back button clicked");
    window.location.href = "adminPage.html";
  });

  document.getElementById("listDirect").addEventListener("click", () => {
    console.log("List direct button clicked");
    window.location.href = "empList.html";
  });
});
