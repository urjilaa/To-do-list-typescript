"use strict";
let input = document.getElementById('input');
let butt = document.getElementById('button');
let ol = document.getElementById('ol');
const add = () => {
    let li = document.createElement('li');
    li.textContent = input.value;
    let editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.className = 'edit';
    editButton.onclick = () => {
        let val = prompt('edit it ', li === null || li === void 0 ? void 0 : li.textContent);
        li.textContent = val;
    };
    let deletButton = document.createElement('button');
    deletButton.textContent = 'delete';
    deletButton.className = 'delete';
    deletButton.onclick = function () { var _a, _b, _c; (_c = (_b = (_a = deletButton === null || deletButton === void 0 ? void 0 : deletButton.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(div2); };
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.appendChild(editButton);
    div1.appendChild(deletButton);
    div2.appendChild(li);
    div2.appendChild(div1);
    if (input.value.length > 0) {
        ol === null || ol === void 0 ? void 0 : ol.appendChild(div2);
    }
    input.value = '';
};
// import "./index.css";
// interface Todo {
//   txt: string;
// }
// class App {
//   private txt: string = "";
//   private tasks: Todo[] = [];
//   private editing: number | null = null;
//   private editedText: string = "";
//   handleChange = (event: Event) => {
//     const target = event.target as HTMLInputElement;
//     this.txt = target.value;
//   };
//   handleKeyPress = (event: KeyboardEvent) => {
//     if (event.key === "Enter") {
//       this.addTask();
//     }
//   };
//   // Add a task
//   addTask = () => {
//     if (this.txt.trim()) {
//       this.tasks.push({ txt: this.txt });
//       this.txt = "";
//     }
//   };
//   // Delete a task
//   deleteTask = (index: number) => {
//     this.tasks = this.tasks.filter((_, taskIndex) => taskIndex !== index);
//   };
//   // Edit a task
//   handleEdit = (index: number) => {
//     this.editing = index;
//     this.editedText = this.tasks[index].txt;
//   };
//   // Save edited task
//   handleSave = (index: number, editedText: string) => {
//     this.tasks = this.tasks.map((task, i) =>
//       i === index ? { ...task, txt: editedText } : task
//     );
//     this.editing = null;
//     this.editedText = "";
//   };
//   render() {
//     return (
//       <div className="header">
//         <h1 className="header">To Do List</h1>
//         <input
//           type="txt"
//           value={this.txt}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//           style={{ padding: "10px", width: "200px" }}
//           placeholder="Add a task"
//         />
//         <button onClick={this.addTask} className="add-button">
//           Add
//         </button>
//         <ul>
//           {/* Editing part */}
//           {this.tasks.map((task, index) => (
//             <li key={index}>
//               {this.editing === index ? (
//                 <>
//                   <input
//                     type="txt"
//                     value={this.editedText}
//                     onChange={(e) => (this.editedText = e.target.value)}
//                   />
//                   <button
//                     onClick={() => this.handleSave(index, this.editedText)}
//                   >
//                     Save
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <div className="container-1">
//                     <div className="txt">{task.txt}</div>
//                     <button onClick={() => this.handleEdit(index)} className="edit-button">
//                       Edit
//                     </button>
//                   </div>
//                 </>
//               )}
//               {/* Deleting part */}
//               <button
//                 onClick={() => this.deleteTask(index)}
//                 className="delete-button"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// const app = new App();
// document.body.appendChild(app.render());
// // interface Task {
// //   id: number;
// //   txt: string;
// //   completed: boolean;
// // }
// // const todoList = document.getElementById('todo-list') as HTMLUListElement;
// // const todoForm = document.getElementById('todo-form') as HTMLFormElement;
// // const todoInput = document.getElementById('todo-input') as HTMLInputElement;
// // let tasks: Task[] = [];
// // let nextId = 1;
// // todoForm.addEventListener('submit', (event) => {
// //   event.preventDefault();
// //   const newTaskText = todoInput.value.trim();
// //   if (newTaskText === '') {
// //     alert('Please enter a task');
// //     return;
// //   }
// //   const newTask: Task = {
// //     id: nextId++,
// //     txt: newTaskText,
// //     completed: false,
// //   };
// //   tasks.push(newTask);
// //   renderTasks();
// //   todoInput.value = '';
// // });
// // function renderTasks() {
// //   todoList.innerHTML = ''; // Clear existing tasks
// //   tasks.forEach((task) => {
// //     const listItem = document.createElement('li');
// //     listItem.classList.add('task');
// //     // const checkbox = document.createElement('input');
// //     // checkbox.type = 'checkbox';
// //     // checkbox.checked = task.completed;
// //     // checkbox.addEventListener('change', () => {
// //     //   task.completed = checkbox.checked;
// //     });
// //     const label = document.createElement('label');
// //     label.textContent = task.txt;
// //     const editButton = document.createElement('button');
// //     editButton.textContent = 'Edit';
// //     editButton.addEventListener('click', () => {
// //       // Implement edit functionality
// //     });
// //     const deleteButton = document.createElement('button');
// //     deleteButton.textContent = 'Delete';
// //     deleteButton.addEventListener('click', () => {
// //       const index = tasks.indexOf(task);
// //       if (index !== -1) {
// //         tasks.splice(index, 1);
// //         renderTasks();
// //       }
// //     });
// //     listItem.appendChild(checkbox);
// //     listItem.appendChild(label);
// //     listItem.appendChild(editButton);
// //     listItem.appendChild(deleteButton);
// //     todoList.appendChild(listItem);
// //   });
// // }
//# sourceMappingURL=script.js.map