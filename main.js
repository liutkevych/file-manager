(function () {
  function ready () {
// The store for created elements
    var resultElements = {
      items: [{}]
    };

    var filesTempate = document.getElementById('files-template').innerHTML;
    var compiledFilesTemplate = Handlebars.compile(filesTempate);

// Constructor for brand new items
    var Item = function (name, isFolder) {
      this.name = name,
      this.isFolder = isFolder,
      this.date = new Date(),
      remameItem = function () {
        console.log(`Use method remameItem`);
      },
      deleteItem = function () {
        console.log(`Use method deleteItem`);
      }
    }

// Add ivents listners
    document.getElementById('newFile').addEventListener('click', createFolder);
    document.getElementById('newFolder').addEventListener('click', createFolder);
    document.getElementById('apply').addEventListener('click', applyFilters)


    function createFolder () {
      var name = prompt('Enter file name');
      var item = new Item(name, true);

      resultElements.items.push(item);
      document.getElementById('created-items').innerHTML = compiledFilesTemplate(resultElements);
      console.log(resultElements.items);
      console.log(this);
    };

    function applyFilters() {
      var pickedDate = document.getElementById('date').value;
      console.log(pickedDate);
    };

    function rename () {
      console.log(this);
    };
  };
  document.addEventListener("DOMContentLoaded", ready);
}());
