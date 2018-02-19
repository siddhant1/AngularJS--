app.factory("factory", function() {
  var object = {
    arr: [],
    arrayPush(object) {
      this.arr.push(object);
    },
    ToggleForDelete(boolean) {
      boolean = !boolean;
    }
  };
  return object;
});
