document.addEventListener("DOMContentLoaded", (event) => {
  const addBtn = document.getElementById("addBtn");
  const editBtn = document.getElementById("editBtn");
  const viewBtn = document.getElementById("viewBtn");
  const removeBtn = document.getElementById("removeBtn");

  addBtn.addEventListener("click", () => {
    window.location.href = "addEmployee.html";
  });
  editBtn.addEventListener("click", () => {
    var div = document.getElementById("searchDIV");
    if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  });
  viewBtn.addEventListener("click", () => {
    var div = document.getElementById("searchDIV");
    if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  });
  removeBtn.addEventListener("click", () => {
    // window.location.href = "addEmployee.html";
  });
  document.getElementById("cancelBtn").addEventListener("click", function () {
    var div = document.getElementById("searchDIV");
    if (div.style.display === "flex" || div.style.display === "") {
      div.style.display = "none";
    } else {
      div.style.display = "none";
    }
  });
});
