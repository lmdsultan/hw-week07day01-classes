class RunTracker{
    constructor(name,email){
    this.name = name
    this.email = email
    this.allRun = []
}
addRun(date,time,distance){
    this.allRun.push({date:date,time:time, distance:distance})
}
totalDistance(){
    return `${this.allRun.reduce(p,c) => p+c }`
}
longestDistance(){
    return `${this.allRun.reduce(p,c)} => p c.distance? p:c.distane,0} `
}
averageSpeed(){
    let totalTime = this.allRun.reduce((p,c) => p+c.timeTaken, 0)
    let totalDistance  = this.allRun.reduce((p,c)+p+c.distance,0)
    return`${(totalDistance/totalTime).toFixed(1)}`
}
}
const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
runner.totalDistance() 
runner.longestDistance() 
runner.averageSpeed() 