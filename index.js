function produceDrivingRange(blockRange){
  return function(newblockRange){
     if (blockRange > 10){
       let result = 10 - blockRange
       return `${result} blocks out of range`
     }
     else if (blockRange < 10){
       let result = blockRange - 10
       return `within range by ${result}`
     }
  }
}
function produceTipCalculator(tip){
  return function(producetip){
    return tip * producetip
  }
}
