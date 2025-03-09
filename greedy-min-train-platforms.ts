// Min platforms required in railway station

const arrivals   = [900, 945,   955, 1100, 1500, 1800]
const departures = [920, 1130, 1150, 1200, 1900, 2000]

// combine into an array - arr with A tag and dep with D tag
// [[900, "A"], [920, "D"], [945, "A"], [955, "A"], [1100, "A"], [1130, "D"], [1150, "D"], [1200, "D"], [1500, "A"], [1800, "A"], [1900, "D"], [2000, "D"]] 

//1st approach - v. intuitive ->
const combinedTimes = [...arrivals.map(e => [e, 'A']), ...departures.map(e => [e, 'D'])].sort((a, b) => a[0] - b[0])

// Calculate intersecting trains (/overalapping trains), notice now bellow logic is independent of time... :D
let platformCount = 0
let maxPlatformCount = 0

for(let [time, tag] of combinedTimes) {
    if(tag === 'A') {
        platformCount += 1
        maxPlatformCount = Math.max(maxPlatformCount, platformCount)
    }
    else { // tag === 'D'
        platformCount -= 1
    }
}

console.log(maxPlatformCount)

// 2nd approach - 
// Taking extra space in combinedTimes, how to reduce it? - sort the times in arrivals and departures 
// and 2 pointers technique - if arrivals pointer is smaller than departure, meaning train is arriving hence increase count 
// and if departure pointer time is smaller, train is departing hence decrease the count and keep the track of maxCount in the process

const sortedArrivals = arrivals.sort()
const sortedDepartures = departures.sort()

let p1 = 0, p2 = 0, platformCount = 0, maxPlatformCount = 0


while(p1 < arrivals.length && p2 < departures.length) {
    if(arrivals[p1] <= departures[p2]) {
        platformCount += 1
        maxPlatformCount = Math.max(maxPlatformCount, platformCount)
        p1++
    } else {
        platformCount -= 1
        p2++
    }
}

console.log(maxPlatformCount)
