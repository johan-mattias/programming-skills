let year: number;
console.log(11)
let y_value = 11
console.log(y_value)
let a_value = 23
let b_value = 7
let c_value = a_value - b_value
console.log(c_value)
a_value = 24
b_value = 11
if (a_value > b_value) {
    console.log(a_value)
} else {
    console.log(b_value)
}

let count = 9
let timer = 3
if (timer != 3) {
    count = 12
} else {
    count = 5
}

console.log(count)
let points = 7
let player_name = "lasse"
let player_number = 11
if (player_number > 10) {
    if (player_name == "lasse") {
        points = points + 3
    } else {
        points = points + 2
    }
    
} else {
    points = points + 1
}

console.log(points)
let class_1 = "art"
let class_2 = "english"
if (class_1 == "art" && class_2 == "biology") {
    year = 2
} else if (class_1 == "art" || class_2 == "english") {
    year = 3
}

console.log(class_2 + year)
let x_value = 23
y_value = 3
let z_value = 43
if (x_value + y_value >= z_value) {
    console.log(x_value + z_value)
} else {
    console.log(z_value + y_value)
}

let center = true
let top = true
let left = false
let right = false
let bottom = true
if (center == false) {
    if (left == false && right == false) {
        console.log("player two win row")
    } else {
        console.log("player one win row")
    }
    
} else if (center == true) {
    if (top == true && bottom == true) {
        console.log("player one win column")
    } else {
        console.log("player two win column")
    }
    
}

a_value = 6
b_value = 8
c_value = (a_value * a_value + b_value * b_value) / 10
console.log(c_value)
