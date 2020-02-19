import item from './item.js';

let items = [];
let hideCheckedItems = false;


function findByID(id){
 items.find(id);
 return id;
}

function addItem(name){
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch(error){
    console.log('This is wrong!');
  }
}

function findAndToggleChecked(id){
  let toggle = this.findByID(id);
  toggle.checked = !toggle.checked;
}

function findAndUpdateName(id, newName){
  try{
    item.validateName(newName);
    this.findByID(id);
  }
  catch(error){
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items=this.items.filter(item => item.id !==id);
}

export default{
  items,
 hideCheckedItems,
 findByID,
 addItem,
 findAndToggleChecked,
 findAndUpdateName,
 findAndDelete,
};
