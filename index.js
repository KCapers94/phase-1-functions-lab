function distanceFromHqInBlocks(someValue) {
    let blocks = someValue - 42
    return Math.abs(blocks)
}
function distanceFromHqInFeet(someValue) {
    let blocks = someValue -42
    return Math.abs(blocks) * 264
}
function distanceTravelledInFeet(start, destination) {
    let blocks = start - destination 
    return Math.abs(blocks) * 264
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination) 
    if(feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * 0.02

    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else if (feet > 2500) {
        return "cannot travel that far"
    }
}
