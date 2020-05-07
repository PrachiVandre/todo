// Step 1
var inputValue = document.querySelector('.input');
var wrapper = document.querySelector('.wrap');
var addbutton = document.querySelector('.add');
var todo = [];


var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);
//step 2
class Item {
    constructor(name) {
        this.createItem(name);
    }
    //step3
    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        // step 4
        var input = document.createElement('input');
        input.type = "text";
        input.classList.add('item_input');
        input.disabled = true;
        input.value = name;

      

        //step 6
        var remove = document.createElement('button');
        remove.classList.add('remove','fa','fa-remove');
        // remove.innerHTML = "REMOVE";
        remove.addEventListener('click',()=>this.remove(itemBox, name));


          //step 5 
          var edit = document.createElement("button");
          edit.classList.add('edit','fa','fa-edit');
          // edit.innerHTML = "EDIT";
          edit.addEventListener('click',()=>this.edit(input, name));

        //step7
        wrapper.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
    }

    edit(input){
      /* step 8 */input.disabled = !input.disabled;
    }
    remove(itemBox){
     /* step 9 */ wrapper.removeChild(itemBox);
    }
}
/* to call class - MAIN*/ 
new Item("Yoga");

// var editclass = document.querySelector('.edit');

// console.log(editclass);

function check(){
    if(inputValue.value != ""){
        new Item(inputValue.value);
        todo.push(inputValue.value);
        window.localStorage.setItem('todo',JSON.stringify(todo));
        inputValue.value = "";
    }
}
addbutton.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which == 13){
        check();
    }
});