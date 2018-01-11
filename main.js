// The store for created elements
var resultElements = {
  items: [{}]
};

var filesTempate = document.getElementById('files-template').innerHTML;
var compiledFilesTemplate = Handlebars.compile(filesTempate);


function updatedHtml () {
  return document.getElementById('created-items').innerHTML = compiledFilesTemplate(resultElements);
};

// Constructor for brand new items
function Item (name, isFolder) {
  this.name = name,
  this.isFolder = isFolder,
  this.date = new Date().toLocaleString()
};

// CRUD functions
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
};

function createFile () {
  var name = prompt('Enter file name');
  var item = new Item(name, false);

  resultElements.items.push(item);
  updatedHtml();
};

// Filtering elements
function applyFilters() {
  var pickedDate = document.getElementById('date').value;
  var baseDate = new Date(pickedDate).toLocaleString();
  var filteredElements = {
    items: [{}]
  };

  function filteredHtml () {
    return document.getElementById('created-items').innerHTML = compiledFilesTemplate(filteredElements);
  };

  // Function for filtering by the date of cteating
  function dateFilter () {
    filteredElements.items = resultElements.items.filter(function(item){
      return item.date > baseDate;
    });
    filteredHtml();
  };

  // Function for filtering if element is folder or not
  function typeFilter () {
    filteredElements.items = resultElements.items.filter(function(item){
      return item.isFolder === true;
    });
    filteredHtml();
  };

  function deepFilter() {
    filteredElements.items = resultElements.items.filter(function(item){
      return (item.isFolder === true && item.date > baseDate);
    });
    filteredHtml();
  }

  if (!document.getElementById('showFolders').checked && !document.getElementById('date').value) {
    alert('Please use some filters');
    updatedHtml();
  } else if (!document.getElementById('showFolders').checked) {
    console.log('use dateFilter()');
    dateFilter();
  } else if (!document.getElementById('date').value) {
    console.log('use typeFilter()');
    typeFilter();
  } else {
    console.log('use both filter');
    deepFilter();
  }
};

// Add ivents listners
document.getElementById('newFile').addEventListener('click', createFile);
document.getElementById('newFolder').addEventListener('click', createFolder);
document.getElementById('apply').addEventListener('click', applyFilters)
