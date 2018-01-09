// The store for created elements
var resultElements = {
  items: [{}]
};

var filesTempate = document.getElementById('files-template').innerHTML;
var compiledFilesTemplate = Handlebars.compile(filesTempate);

function updatedHtml () {
  return document.getElementById('created-items').innerHTML = compiledFilesTemplate(resultElements);
}

// Constructor for brand new items
function Item (name, isFolder) {
  this.name = name,
  this.isFolder = isFolder,
  this.date = new Date().toLocaleString()
};

function renameItem (index) {
  newName = prompt('Enter new name');
  resultElements.items[index].name = newName;
  updatedHtml();
};

function deleteItem (index) {
  resultElements.items.splice(index, 1);
  updatedHtml();
};

function createFolder () {
  var name = prompt('Enter folder name');
  var item = new Item(name, true);

  resultElements.items.push(item);
  updatedHtml();
  console.log(resultElements.items);
};

function createFile () {
  var name = prompt('Enter file name');
  var item = new Item(name, false);

  resultElements.items.push(item);
  updatedHtml();
};

function applyFilters() {
  var pickedDate = document.getElementById('date').value;
  console.log(pickedDate);
};

// Add ivents listners
document.getElementById('newFile').addEventListener('click', createFile);
document.getElementById('newFolder').addEventListener('click', createFolder);
document.getElementById('apply').addEventListener('click', applyFilters)
