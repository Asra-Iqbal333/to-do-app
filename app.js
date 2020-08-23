var list = document.getElementById("list");

function bucketList() {
    var toDoItems = document.getElementById("to-do-items");

    var li = document.createElement('li');
    var addText = document.createTextNode(toDoItems.value);
    li.appendChild(addText);


    var delButton = document.createElement('button');
    var delText = document.createTextNode('Remove');
    delButton.setAttribute('class', 'btn');
    delButton.setAttribute('onclick', 'delItems(this)')
    delButton.appendChild(delText);


    var editButton = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editButton.setAttribute('class', 'btn');
    editButton.setAttribute('onclick', 'editItems(this)');
    editButton.appendChild(editText);


    li.appendChild(delButton);
    li.appendChild(editButton);
    list.appendChild(li);

    toDoItems.value = "";
    // console.log(li);

}

function delItems(e) {
    e.parentNode.remove();
}

function editItems(e) {
    var userValue = prompt("enter new list", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = userValue;
}

function deleteAll() {
    // list.remove();
    list.innerHTML = "";
}

