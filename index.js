function produceDrivingRange(blockRange){
  return function(newblockRange){
    return blockRange > newblockRange
  }
}
