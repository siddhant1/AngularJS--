app.controller("my-cntrl", function($scope, factory) {
  $scope.id = 1;
  $scope.arr = [];
  var editObject = {};
  $scope.Display = () => {
    editObject.checked = true;
    $scope.Deletebruh();
    var item = new Item($scope.id, $scope.name, $scope.url, $scope.Desc);
    factory.arrayPush(item);
    $scope.arr = factory.arr;
    $scope.id++;
    $scope.name = "";
    $scope.url = "";
    $scope.Desc = "";
    filterBruh();
  };
  $scope.Toggle = id => {
    $scope.arr.forEach(element => {
      console.log(id);
      if (element.id == id) {
        element.checked = !element.checked;
      }
    });
  };

  function filterBruh() {
    console.log($scope.arr);
    console.log(factory.arr);
    factory.arr.sort(function(a, b) {
      console.log(a);
      console.log(b);
      return a.id - b.id;
    });
    $scope.arr = factory.arr;
  }
  $scope.Deletebruh = () => {
    var newArr = [];
    newArr = $scope.arr.forEach(element => {
      if (element.checked == false) {
        newArr.push(element);
      }
      $scope.arr = newArr;
      factory.arr = newArr;
    });
  };

  $scope.Edit = object => {
    $scope.arr.forEach(element => {
      if (element.id == object.id) {
        $scope.id = element.id;
        $scope.name = element.name;
        $scope.Desc = element.desc;
        $scope.url = element.url;
        element.edited = true;
        editObject = object;
      }
    });
  };
});
