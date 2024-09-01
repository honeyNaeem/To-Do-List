var inputBx = document.querySelector("#inputBx");
var list = document.querySelector("#list");
var listItemNew = [];

inputBx.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(this.value)
        this.value = "";
        saveData();
    }
})

let addItem = inputBx => {

    if (listItemNew && listItemNew.length > 0) {
        listItemNew.push({ name: inputBx, isSelect: false });
    } else {
        listItemNew = [];
        listItemNew.push({ name: inputBx, isSelect: false })
    }
    saveData();

}
function saveData() {
    localStorage.setItem('data', JSON.stringify(listItemNew));
    showData();
}
function showData() {

    listItemNew = JSON.parse(localStorage.getItem('data'));
    console.log(listItemNew);
    list.innerHTML = "";
    listItemNew.forEach((entity, i) => {
        list.innerHTML += `<li class="${entity.isSelect && "done"}" onclick="toggle(${i})">${entity.name}<i onclick="removeData(${i})"></i></li>`
    })
}


function removeData(index) {
    listItemNew.splice(index, 1);
    saveData();
}

function toggle(index) {
    listItemNew[index].isSelect = !listItemNew[index].isSelect;
    saveData();
}
showData();