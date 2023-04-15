let employees = [];
let employeeId = 1;

const addEmployee = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;

  if (!name || !profession || !age) {
    document.getElementById("messages").innerHTML = '<p style="color:red">Error: Please make sure all fields are filled before adding an employee!</p>';
    return;
  }

  employees.push({ id: employeeId, name, profession, age });
  employeeId++;

  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";
  employees.forEach((employee) => {
    const li = document.createElement("li");
    li.innerHTML = `<div style="display: flex;">
    <span style="padding: 15px; border-radius: 5px; border: 1px solid white;margin-left:10px;margin-top: 5px;" class="span1">${employee.id}.&nbsp;&nbsp;&nbsp;  Name: ${employee.name}&nbsp;&nbsp;&nbsp; Profession: ${employee.profession}&nbsp;&nbsp;&nbsp; Age: ${employee.age}</span>
    <span class="span2"> 
    <button class="delete-btn" data-id="${employee.id}">Delete User</button>
    </span>
    </div>`;
    li.style.listStyleType = 'none';
    employeeList.appendChild(li);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteEmployee);
  });

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
  document.getElementById("messages").innerHTML = '<p style="color:lightgreen">Success: Employee added!</p>';
};


const deleteEmployee = (event) => {
  const id = parseInt(event.target.getAttribute("data-id"));

  employees = employees.filter((employee) => employee.id !== id);
  
  const employeeList = document.getElementById("employee-list");
  
  employeeList.innerHTML = "";
  
  employees.forEach((employee) => {
    const li = document.createElement("li");
    li.innerHTML = `<div style="display: flex;">
    <span style="padding: 10px; border-radius: 5px; border: 1px solid white;margin-left:10px;" class="span1">
    ${employee.id}.&nbsp;&nbsp;&nbsp;  Name: ${employee.name}&nbsp;&nbsp;&nbsp; Profession: ${employee.profession}&nbsp;&nbsp;&nbsp; Age: ${employee.age}</span>
    <span class="span2">
     <button class="delete-btn" data-id="${employee.id}">Delete User</button>
     </span>
     </div>`;
    li.style.listStyleType = 'none';
    employeeList.appendChild(li);
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", deleteEmployee);
  });
};

document.getElementById("add-employee-btn").addEventListener("click", addEmployee);
