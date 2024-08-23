document.addEventListener("DOMContentLoaded", () => {
  async function fetchEmployees(url) {
    try {
      console.log(`Fetching data from: ${url}`); // Log URL for debugging
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const employees = await response.json();
      return employees;
    } catch (error) {
      console.error("Error fetching employees:", error);
      return [];
    }
  }

  async function renderEmployeeList(url, searchUID = "") {
    try {
      const employeeList = await fetchEmployees(url);
      const tableBody = document.getElementById("employeeTableBody");
      tableBody.innerHTML = "";

      employeeList.forEach((employee) => {
        if (searchUID === "" || employee.uid === parseInt(searchUID)) {
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
            <td>${employee.uid}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.designation}</td>
            <td>${employee.salary}</td>
            <td><button class="detailsBtn" data-uid="${employee.uid}">Details</button></td>
          `;
          tableBody.appendChild(newRow);

          const detailButton = newRow.querySelector(".detailsBtn");
          detailButton.addEventListener("click", () => {
            sessionStorage.setItem("viewEmployee", JSON.stringify(employee));
            window.location.href = "viewEmp.html";
          });
        }
      });
    } catch (error) {
      console.error("Error rendering employee list:", error);
    }
  }

  renderEmployeeList("http://localhost:3000/employees");

  document.getElementById("searchBtn").addEventListener("click", async () => {
    const searchUID = document.getElementById("searchInput").value.trim();
    let url = "http://localhost:3000/employees";
    if (searchUID !== "") {
      url = `http://localhost:3000/employees/search?uid=${searchUID}`;
    }
    renderEmployeeList(url, searchUID);
  });
});
