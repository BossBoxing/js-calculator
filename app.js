var x = 0
var y = 0
var answer = 0

const Debug = () => {
    console.log("Debug: ", x, y, answer)
}

const addNumbers = (number) => {
    if (answer === 0) {
        answer = number
        document.getElementById('answer').value = parseInt(answer)
    }
    else {
        answer = answer + '' + number
        document.getElementById('answer').value = parseInt(answer)
    }
    console.log(number)
    Debug()
}

const deleteLastNumber = () => {
    answer = answer.substring(0, answer.length - 1)
    if (answer === NaN) {
        answer = 0
    }
    document.getElementById('answer').value = parseInt(answer)
    Debug()
}

const Plus = () => {
    console.log("Plus")
    if (x === 0) {
        x = document.getElementById('answer').value
        document.getElementById('answer').value = 0
    }
    else {
        y = document.getElementById('answer').value
    }
    Debug()
}

const Equal = () => {
    console.log("Equal")
    Debug()
}