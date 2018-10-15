var selectElementsStartingWithA = function(array) {
    var thatArray = array.filter(function(letter) {
        return letter.charAt(0) === "a";
     });
     return thatArray;
}

var selectElementsStartingWithVowel = function(array) {
    
    var thatArray = array.filter(function(letter) {

        let vowelArray = ["a", "e", "i", "o", "u"];

        for (let index = 0; index < vowelArray.length; index++) {
            if (letter.charAt(0) ===  vowelArray[index]){
                return letter
            }
        }
     });
     return thatArray;
}

var removeNullElements = function(array) {
    for (let index = 0; index < array.length; index++) {
        if ( array[index] === null) {
            array.splice(index, 2);
        }
    }
    return array
}

var removeNullAndFalseElements = function(array) {
    
    for (let index = 0; index < array.length; index++) {
        if ( array[index] === null) {
            array.splice(index, 3);
        }
    }
    console.log(array)
    return array
}

var reverseWordsInArray = function(array) {

    let array2 = new Array()
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        var splitString = element.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        array2[index] = joinArray;
    }
    console.log(array)
    return array2
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
