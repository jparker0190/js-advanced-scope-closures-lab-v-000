function produceDrivingRange(blockRange){
  return function(newblockRange){
    return newblockRange > blockRange
  }
}
