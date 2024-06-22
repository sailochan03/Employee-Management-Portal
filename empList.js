document.addEventListener("DOMContentLoaded", () => {
  const newEmployee = JSON.parse(localStorage.getItem("newEmployee"));

  if (newEmployee) {
    const tableBody = document.querySelector("table tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td>${newEmployee.uid}</td>
            <td>${newEmployee.name}</td>
            <td>${newEmployee.email}</td>
            <td>${newEmployee.designation}</td>
            <td>${newEmployee.salary}</td>
            <td>more</td>
        `;

    tableBody.appendChild(newRow);

    localStorage.removeItem("newEmployee");
  }
});
