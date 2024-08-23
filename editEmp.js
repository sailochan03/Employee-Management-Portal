document.addEventListener("DOMContentLoaded", () => {
  const editForm = document.getElementById("editForm");
  const editStatus = document.getElementById("editStatus");

  // Retrieve employee data from sessionStorage
  const employeeData = JSON.parse(sessionStorage.getItem("editEmployee"));

  if (employeeData) {
    // Populate form with existing employee data
    document.getElementById("editUID").value = employeeData.uid;
    document.getElementById("editName").value = employeeData.name;
    document.getElementById("editEmail").value = employeeData.email;
    document.getElementById("editAddr").value = employeeData.address || "";
    document.getElementById("editPhoneNo").value = employeeData.phone || "";
    document.getElementById("editDoB").value = employeeData.dob || "";
    document.getElementById("editDoJ").value = employeeData.doj || "";
    document.getElementById("editSal").value = employeeData.salary || "";
    document.getElementById("editDesg").value = employeeData.designation || "";

    // Handle form submission
    editForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Update employee details
      const updatedEmployee = {
        uid: employeeData.uid,
        name: editForm.editName.value.trim(),
        email: editForm.editEmail.value.trim(),
        address: editForm.editAddr.value.trim(),
        phone: editForm.editPhoneNo.value.trim(),
        dob: editForm.editDoB.value,
        doj: editForm.editDoJ.value,
        salary: editForm.editSal.value.trim(),
        designation: editForm.editDesg.value.trim(),
      };

      try {
        const response = await fetch(
          `http://localhost:3000/employees/${updatedEmployee.uid}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEmployee),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update employee");
        }

        editStatus.innerText = "Employee details edited successfully.";
        editStatus.style.color = "green";
      } catch (error) {
        console.error("Error updating employee:", error);
        editStatus.innerText = "Error updating employee.";
        editStatus.style.color = "red";
      }
    });
  } else {
    editStatus.innerText = "Employee data not found.";
    editStatus.style.color = "red";
  }
});
