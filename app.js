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
    x = 0
    y = 0
    answer = 0
    document.getElementById('answer').value = parseInt(answer)
    Debug()
}

const Plus = () => {
    console.log("Plus")
    if (x === 0) {
        x = document.getElementById('answer').value
        answer = 0
        document.getElementById('answer').value = parseInt(answer)
    }
    else if (x != 0) {
        y = parseInt(document.getElementById('answer').value)
        answer = parseInt(x) + parseInt(y)
        document.getElementById('answer').value = parseInt(answer)
        x = 0
        y = 0
    }
    else {
        y = document.getElementById('answer').value
    }
    Debug()
}

const Equal = () => {
    if (x != 0 && answer != 0)
    {
        answer = parseInt(x) + parseInt(answer)
        document.getElementById('answer').value = parseInt(answer)
        x = 0
        y = 0
    }
    else {

    }
    console.log("Equal")
    Debug()
}