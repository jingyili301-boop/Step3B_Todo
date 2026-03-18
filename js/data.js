// ============================================
// PRIORITIES  (like a database "Priority" table)
// ============================================
let priorityList = [
  {"idPriority":"1","priority":"Critical"},
  {"idPriority":"2","priority":"High"},
  {"idPriority":"3","priority":"Medium"},
  {"idPriority":"4","priority":"Low"},
  {"idPriority":"5","priority":"Optional"}
];

// ============================================
// STATUSES  (like a database "Status" table)
// ============================================
let statusList = [
  {"idStatus":"1","status":"To do"},
  {"idStatus":"2","status":"In progress"},
  {"idStatus":"3","status":"Done"},
  {"idStatus":"4","status":"Cancelled"}
];

// ============================================
// CATEGORIES  (like a database "Category" table)
// ============================================
let categoryList = [
  {"idCategory":"1","category":"Personal"},
  {"idCategory":"2","category":"Work"},
  {"idCategory":"3","category":"Shopping"},
  {"idCategory":"4","category":"Health"}
];

// ============================================
// TASKS  (like a database "Tasks" table)
// uses idPriority, idStatus, idCategory as foreign keys
// ============================================
let taskList = [
  {"idTask":"1","title":"Prepare project report","description":"Write the introduction and conclusion sections","creationDate":"2026-03-17","dueDate":"2026-03-20","idPriority":"1","idStatus":"2","idCategory":"2"},
  {"idTask":"2","title":"Buy groceries","description":"Milk, eggs, bread and vegetables","creationDate":"2026-03-17","dueDate":"2026-03-18","idPriority":"3","idStatus":"1","idCategory":"3"},
  {"idTask":"3","title":"Doctor appointment","description":"Annual check-up at 10am","creationDate":"2026-03-17","dueDate":"2026-03-25","idPriority":"2","idStatus":"1","idCategory":"4"}
];

// ============================================
// LOG to browser console (to verify the data)
// ============================================
console.log(taskList);
console.log(priorityList);
console.log(statusList);
console.log(categoryList);