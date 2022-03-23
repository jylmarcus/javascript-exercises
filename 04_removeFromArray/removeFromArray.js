const removeFromArray = function(array, ...toRemove) {
  for (i=0; i < toRemove.length; i++) {
    for (j = array.length-1; j >= 0; j--){
      if (array[j] === toRemove[i]){
        array = array.splice(j,1);
      }
    }
  }
};

//ask sheng siong to call annie from acs

// Do not edit below this line
module.exports = removeFromArray;
