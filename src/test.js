function duplicates(array) {
  if (array.length < 2) {
    return 0;
  }
  let totalDuplicates = 0;
  let currentPointer = 0;
  for (let pointer = 0; pointer < array.length; pointer++) {
    for (let findMe = 0; findMe < array.length; findMe++) {
      if(array[currentPointer] === array[findMe]) {
        totalDuplicates++;
      }
    }
  }
}

if(duplicates([2, 3, 4, 4, 5]) === 1 {

};

