//stores data for dummy objects used for testing 
//and for initial implementation

let dummyProject = new Map();
let todoMap = new Map();

dummyProject.set('type', 'project');
dummyProject.set('name', 'Replace Roof');

let quotesTodo = new Map();

quotesTodo.set('type', 'todo');
quotesTodo.set('name', 'Get Three Quotes');
quotesTodo.set('description', 'Call People');
quotesTodo.set('dueDate', '1/31/2099');
quotesTodo.set('priority', 'High');

todoMap.set('quotes', quotesTodo);

let insuranceTodo = new Map();

insuranceTodo.set('type', 'todo');
insuranceTodo.set('name', "File Homeowner's Insurance Claim");
insuranceTodo.set('description', "Call Insurance Company for another opinion");
insuranceTodo.set('dueDate', '1/30/2099');
insuranceTodo.set('priority', 'High');

todoMap.set('insurance', insuranceTodo);

let scheduleTodo = new Map();

scheduleTodo.set('type', 'todo');
scheduleTodo.set('name', "Schedule Roof Installment Date");
scheduleTodo.set('description', "Coordinate with company for install date");
scheduleTodo.set('dueDate', '2/15/2099');
scheduleTodo.set('priority', 'Medium');

todoMap.set('schedule', scheduleTodo);

let warrantyTodo = new Map();

warrantyTodo.set('type', 'todo');
warrantyTodo.set('name', "File Warranty Complaints");
warrantyTodo.set('description', "Monitor roof after install for any issues and file against warranty");
warrantyTodo.set('dueDate', '2/30/2099');
warrantyTodo.set('priority', 'Low');

todoMap.set('warranty', warrantyTodo);

let reviewTodo = new Map();

reviewTodo.set('type', 'todo');
reviewTodo.set('name', "Write Review for Roofing Company");
reviewTodo.set('description', "Write a review describing the quality of work done by the roofers");
reviewTodo.set('dueDate', '3/5/2099');
reviewTodo.set('priority', 'Low');

todoMap.set('review', reviewTodo);

let extendedWarrantyTodo = new Map();

extendedWarrantyTodo.set('type', 'todo');
extendedWarrantyTodo.set('name', "File Warranty Complaints");
extendedWarrantyTodo.set('description', "Review potential warranty claims again after one year");
extendedWarrantyTodo.set('dueDate', '2/30/2100');
extendedWarrantyTodo.set('priority', 'Low');

todoMap.set('extendedWarranty', extendedWarrantyTodo);

export { todoMap };
export { dummyProject };