function produceDrivingRange(blockRange){
  return function(newblockRange){
     if (blockRange < newblockRange){
       let result = newblockRange - blockRange
       return `${result} blocks out of range`
     }
     else if (blockRange > newblockRange){
       let result = blockRange - newblockRange
       return `within range by ${result}`
     }
  }
}
function produceTipCalculator(tip){
  return function(producetip){
    return tip * producetip
  }
}
