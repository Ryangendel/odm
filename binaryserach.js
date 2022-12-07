const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1; //9

  while (start <= end) {

    //9/2=4.5
    //mid == 7
    //array[mid]==8
    let mid = Math.floor((start + end) / 2);
    
    if (array[mid] === element) {
      return mid;
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(arr, 8));

const whatami=(x)=>{
    if(x<2){
        return x
    }
    return whatami(x-1)+ whatami(x-2)
}