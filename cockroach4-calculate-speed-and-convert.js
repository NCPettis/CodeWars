// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
//   100000cm = 1km
//   3600secs = 1hr
  
  imperialSpeed = Math.floor(s / 3600 * 100000)
  return imperialSpeed
  
}