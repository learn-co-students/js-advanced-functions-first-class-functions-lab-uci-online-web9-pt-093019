// Code your solution in this file!

function returnFirstTwoDrivers(dvrs) {
    const retvar = function(dvrs) {
        return dvrs.slice(0,2)
    }
    return retvar(dvrs)
}

function returnLastTwoDrivers(dvrs) {
    const retvar = function(dvrs) {
        return dvrs.slice(-2)
    }
    return retvar(dvrs)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

function fareDoubler(fare) {
    const dblfare = createFareMultiplier(2)
    return dblfare(fare)
}

function fareTripler(fare) {
    const trplfare = createFareMultiplier(3)
    return trplfare(fare)
}

function selectDifferentDrivers(dvrs, funct) {
    return funct(dvrs)
}
