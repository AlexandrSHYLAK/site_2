console.log("Привет, мир!");
arr = [1, 3, 7, 8, 10]
target_el = 8;
res = "NO"

function find(arr, target_el){
  for (let idx = 0; idx < arr.length; idx++) {

    if (arr[idx] == target_el) {
      res = 'YES'
    }
  }
    return console.log(res)
  }
find(arr, target_el)





