class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(input) {
    return input - this.startDate.getFullYear() - 1
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }


  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hor = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let verStart = eastWest.indexOf(this.beginningLocation.horizontal)
    let verEnd = eastWest.indexOf(this.endingLocation.horizontal)
    let ver = Math.abs(verStart - verEnd)
    return hor + ver
  }

  estimatedTime(peak) {
    let min;
    peak ? min = 2 : min = 3
    return this.blocksTravelled() / min
  }


}
