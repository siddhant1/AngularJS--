
app.controller("my-cntrl", function ($scope, factory) {

    $scope.id = 1;
    $scope.arr = [];
    $scope.Display = () => { 
        // $scope.arr.forEach(element => {
        //     if (element.edited) {   
        //         element.id = $scope.id;
        //         element.name = $scope.name;
        //         element.desc = $scope.Desc;
        //         element.url = $scope.url;
        //     }
        // });
        
        var item = new Item($scope.id, $scope.name, $scope.url, $scope.Desc);
        factory.arrayPush(item);
        $scope.arr = factory.arr;
        $scope.id++;
        $scope.name = "";
        $scope.Desc = "";
        $scope.url = "";
    }
    $scope.Toggle = (id) => { 
        $scope.arr.forEach(element => {
            console.log(id);
            if (element.id == id) {
                element.checked = !element.checked;
            }
        });
    }
    $scope.Deletebruh = () => { 
        var newArr = [];
        newArr = $scope.arr.forEach(element => { 
            if (element.checked == false) { 
                newArr.push(element);                
            }
            $scope.arr = newArr;
        });
    }

    $scope.Edit = (id) => { 
        $scope.arr.forEach(element => {

            if (element.id = id) { 
                $scope.id = element.id;
                $scope.name = element.name;
                $scope.Desc = element.desc;
                $scope.url = element.url;
                element.edited = true;
            }
        });
    }
});