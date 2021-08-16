module.exports = function toReadable(number) {
    let zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens = ['blank', 'blank', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety']
    if (number < 10){
        return zeroToNine[number]
    }
    else if (number < 20){
        number = number % 10
        return tenToNineteen[number]
    }
    else if (number < 100){
        temp = Math.floor(number / 10)
        number = number % 10
        if (number === 0){
            return tens[temp]
        }
        return tens[temp] + ' ' + zeroToNine[number]
    }
    else {
        if (number % 100 === 0){
            return zeroToNine[number / 100] + ' hundred'
        }
        else if (number % 100 < 10) {
            return zeroToNine[Math.floor(number / 100)] + ' hundred ' + zeroToNine[number % 100]           
        }
        else if (number % 100 < 20){
            temp = (number - Math.floor(number / 100) * 100) % 10
            return zeroToNine[Math.floor(number / 100)] + ' hundred ' + tenToNineteen[temp]
        }
        else {
            twoNum = number % 100
            tensN = Math.floor(twoNum / 10)
            ones = Math.floor(twoNum % 10)
            if (ones == 0){
                return zeroToNine[Math.floor(number / 100)] + ' hundred ' + tens[tensN]
            }
            return zeroToNine[Math.floor(number / 100)] + ' hundred ' + tens[tensN] + ' ' + zeroToNine[ones]
        }
    }
}
