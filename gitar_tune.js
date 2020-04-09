



function tune(arr) {
    // check if input is valid
    if (arr.length !== 6) {
        return "Number of strings must be 6";
    }
    
    let frequency = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41]
    let punctuation = {
        ok: "OK",
        bit_low: ">•",
        bit_high: "•<",
        very_low: ">>•",
        very_high: "•<<",
        zero: " - "
      }; 

    let result_arr = []
    for (let i in arr) {
        if(typeof arr[i] === 'number'){
            let diff_per = frequency[i]/(arr[i]/100)
            if (Math.round(arr[i]) === Math.round(frequency[i], 10)) {
                result_arr.push(punctuation.ok)
            } 
            else if (arr[i] === 0) {
                result_arr.push(punctuation.zero)
            } 
            else if (100 < diff_per && diff_per < 103) {
                result_arr.push(punctuation.bit_low)
            }
            else if (97 < diff_per && diff_per < 100) {
                result_arr.push(punctuation.bit_high)
            }
            else if (diff_per >= 103) {
                result_arr.push(punctuation.very_low)
            } 
            else  {
                result_arr.push(punctuation.very_high)
            }
            
        }
        else {
            return "All frequencies must be numbers";
        }
    }
    return result_arr
}


console.log(tune([0, 246.94, 0, 0, 0, 80]));//[" - ", "OK", " - ", " - ", " - ", ">>•"]
    
console.log(tune([329.63, 246.94, 195, 146, 111, 82.41]));  //["OK", "OK", ">•", ">•", "•<", "OK" ]

console.log(tune([329.63, 246.94, 196, 146.83, 110, 82.41]));  // ["OK", "OK", "OK", "OK", "OK", "OK"]
