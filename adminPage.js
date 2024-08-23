document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const editBtn = document.getElementById("editBtn");
  const viewBtn = document.getElementById("viewBtn");
  const removeBtn = document.getElementById("removeBtn");
  const searchBtn = document.getElementById("searchBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  addBtn.addEventListener("click", () => {
    window.location.href = "addEmployee.html";
  });

  editBtn.addEventListener("click", toggleSearchDiv);
  viewBtn.addEventListener("click", toggleSearchDiv);
  removeBtn.addEventListener("click", () => {
    window.location.href = "empList.html";
  });

  searchBtn.addEventListener("click", async () => {
    const searchUID = document.getElementById("searchUID").value.trim();
    if (searchUID !== "") {
      try {
        const response = await fetch(
          `http://localhost:3000/employees/search?uid=${searchUID}`
        );
        if (!response.ok) {
          throw new Error("Employee not found.");
        }
        const employee = await response.json();
        // Store employee data in sessionStorage to pass to editEmp.html
        sessionStorage.setItem("editEmployee", JSON.stringify(employee));
        window.location.href = "editEmp.html";
      } catch (error) {
        console.error("Error fetching employee:", error);
        alert("Employee not found.");
      }
    } else {
      alert("Please enter an Employee UID.");
    }
  });

  cancelBtn.addEventListener("click", toggleSearchDiv);

  function toggleSearchDiv() {
    const div = document.getElementById("searchDIV");
    if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
});
