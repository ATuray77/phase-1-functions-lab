// Code your solution in this file!
function distanceFromHqInBlocks(destination, start = 42) {
  if (destination < start) {
    return start - destination;
  }else if (destination > start) {
    return destination - start;
  }
}

function distanceFromHqInFeet(NumOfBlocks) {
  let distance = distanceFromHqInBlocks(NumOfBlocks) * 264;
    return distance;
}


function distanceTravelledInFeet(start, destination) {
  if (destination < start) {
    return (start - destination) * 264;
}else if (destination > start) {
  return (destination - start) * 264;
}
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  }else if (distance >= 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  }else if (distance > 2000 && distance <= 2500) {
    return 25;
  }else 
  return "cannot travel that far";
}