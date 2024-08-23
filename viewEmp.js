document.addEventListener("DOMContentLoaded", () => {
  // Retrieve employee details from sessionStorage
  const employeeData = sessionStorage.getItem("viewEmployee");
  if (employeeData) {
    const employee = JSON.parse(employeeData);

    // Update DOM elements with employee details
    document.getElementById("uid").innerText = employee.uid;
    document.getElementById("nameDisp").innerText = employee.name;
    document.getElementById("mail").innerText = employee.email;
    document.getElementById("address").innerText =
      employee.address || "Not provided";
    document.getElementById("phNo").innerText =
      employee.phone || "Not provided";
    document.getElementById("dob").innerText = employee.dob || "Not provided";
    document.getElementById("doj").innerText = employee.doj || "Not provided";
    document.getElementById("salaryDisp").innerText = employee.salary;
    document.getElementById("post").innerText = employee.designation;
  }
});
