function produceDrivingRange(blockRange){
  return function(newblockRange){
    return blockRange < 10
  }
}
function produceTipCalculator(tip){
  return function(producetip){
    return tip * producetip
  }
}