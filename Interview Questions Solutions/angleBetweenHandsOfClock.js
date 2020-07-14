/*
    https://leetcode.com/explore/featured/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3390/
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    // 5 == ticks between 2 numbers
    // 6 == angle between 2 ticks angleIndividualCell = quarterAngle/5
    // 30 == angle covered in 1 quarter = 360/12
    
    let quartersCoveredByMinHand= Math.floor((12*minutes)/60)
    let ratio = minutes/60, originalAngle = null
    
    if(hour === quartersCoveredByMinHand) {
        // if hour and min hand are nearby then (absolute angle made by hour hand + angle made by hour hand with next number) - (absolute angle made by min hand + angle made by min hand with next number)
        
        originalAngle = (30*hour + 6 * (((quartersCoveredByMinHand + (minutes%5)/5) * 5)/12)) - (quartersCoveredByMinHand *30 + 6*(minutes%5));
    } else if(hour > quartersCoveredByMinHand) {
        // if hour hand is ahead of min hand then (absolute angle made by hour hand + angle made by hour hand with next number) - (absolute angle made by min hand + angle made by min hand with next number) 
        
        originalAngle = (hour*30 + 30*ratio) - (quartersCoveredByMinHand *30 + 6*(minutes%5))
    } else {
        // if hour hand is behind of min hand then (absolute angle made by min hand + angle made by min hand with next number) - (absolute angle made by hour hand + angle made by min hand with next number)
        
        originalAngle = (quartersCoveredByMinHand *30 + 6*(minutes%5)) - hour*30 - 6*(((quartersCoveredByMinHand + (minutes%5)/5) * 5)/12)
    }
    
    return originalAngle > 180 ? 360 - originalAngle : Math.abs(originalAngle)
};