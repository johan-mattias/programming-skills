let year: string;
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
let player = 11
if (player > 10) {
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
    year = "two"
} else if (class_1 == "art" || class_2 == "english") {
    year = "three"
}

console.log(class_2 + "_" + year)
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
c_value = (a_value * a_value + b_value * b_value) ** (1 / 2)
console.log(c_value)
let first = 21
let second = 8
let third = 13
if (first < second && first > third) {
    console.log(first)
} else if (second < first && second > third) {
    console.log(second)
} else if (third < first && third > second) {
    console.log(third)
}

let value = 0
for (count = 0; count < 5; count++) {
    value = value + count
}
console.log(value)
// program with loop and variable
let x_position = 4
let y_position = 7
for (value = 0; value < 4; value++) {
    x_position = x_position + value
    y_position = y_position + value
}
console.log("x: " + x_position + ", y: " + y_position)
// program with list and loop (smallest value)
let number_list = [21, 8, 53, 13, 35]
let result = 100
for (value of number_list) {
    if (value < result) {
        result = value
    }
    
}
console.log(result)
// program with loop and string
let color_list = ["red", "white", "blue", "green"]
let color_in_string = ""
for (let color of color_list) {
    color_in_string = color + ", " + color_in_string
}
console.log(color_in_string)
// program with stoplight
let first_light = "green"
let second_light = "yellow"
let third_light = "off"
if (third_light == "red") {
    third_light = "off"
    second_light = "off"
    first_light = "green"
} else if (second_light == "yellow" && first_light == "off") {
    third_light = "red"
    second_light = "off"
    first_light = "off"
} else if (first_light == "green") {
    third_light = "red"
    second_light = "yellow"
    first_light = "off"
}

console.log(first_light + ", " + second_light + ", " + third_light)
