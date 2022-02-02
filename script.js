// Получаем элементы : div для заданий, input для ввода задания
const toDoItems = document.getElementsByClassName("toDoItems")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

// Обработка для добавления задания по нажатию клавиши enter
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        addItem();
    }
});

// Функция добавления элемента в список заданий
function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fa fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function() {
        checkIcon.style.color = "limegreen";
    });

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function() {
        divParent.remove();
    });

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}