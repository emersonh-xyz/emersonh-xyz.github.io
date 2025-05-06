const validateNum = (num) => {

    if (num > 10 || num < 0) {
        return false;
    }

    return true;

}

const getShape = (num) => {

    console.log("Number: ", num)

    let number = parseInt(num);
    let shapeName;
    let isNumberValid = validateNum(number);

    if (!isNumberValid) {
        shapeName = "not valid";
    }

    if (number === 0) {
        shapeName = "Not a Polygon"
    } else if (number === 1) {
        shapeName = "Henagon";
    } else if (number === 2) {
        shapeName = "Digon";
    } else if (number === 3) {
        shapeName = "Trigon";
    } else if (number === 4) {
        shapeName = "Tetragon";
    } else if (number === 5) {
        shapeName = "Pentagon";
    } else if (number === 6) {
        shapeName = "Hexagon";
    } else if (number === 7) {
        shapeName = "Heptagon";
    } else if (number === 8) {
        shapeName = "Octagon";
    } else if (number === 9) {
        shapeName = "Enneagon";
    } else if (number === 10) {
        shapeName = "Decagon";
    }

    alert("Your shape is a " + shapeName)
}
