"use strict";
let input = document.getElementById('input');
let button = document.getElementById('button');
let lst = document.getElementById('lst');
const add = () => {
    let li = document.createElement('li');
    li.textContent = input.value;
    //edit
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = () => {
        let val = prompt('edit it ', li === null || li === void 0 ? void 0 : li.textContent);
        li.textContent = val;
    };
    //delete
    let deletButton = document.createElement('button');
    deletButton.textContent = 'Delete';
    deletButton.className = 'delete-button';
    deletButton.onclick = function () {
        var _a, _b, _c;
        (_c = (_b = (_a = deletButton === null || deletButton === void 0 ? void 0 : deletButton.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(div2);
    };
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.appendChild(editButton);
    div1.appendChild(deletButton);
    div2.appendChild(li);
    div2.appendChild(div1);
    if (input.value.length > 0) {
        lst === null || lst === void 0 ? void 0 : lst.appendChild(div2);
    }
    input.value = '';
};
//# sourceMappingURL=script.js.map