

print(11)

y_value = 11
print(y_value)

a_value = 23
b_value = 7
c_value = a_value - b_value
print(c_value)

a_value = 24
b_value = 11
if(a_value > b_value):
    print(a_value)
else:
    print(b_value)

count = 9
timer = 3
if(timer != 3):
    count = 12
else:
    count = 5
print(count)


points = 7
player_name = "lasse"
player = 11
if(player > 10):
    if(player_name == "lasse"):
        points = points + 3
    else:
        points = points + 2
else:
    points = points + 1
print(points)

class_1 = "art"
class_2 = "english"
if(class_1 == "art" and class_2 == "biology"):
    year = "two"
elif(class_1 == "art" or class_2 == "english"):
    year = "three"
print(class_2 + "_" + year)

x_value = 23
y_value = 3
z_value = 43
if(x_value + y_value >= z_value):
    print(x_value + z_value)
else:
    print(z_value + y_value)

center = True
top = True
left = False
right = False
bottom = True
if(center == False):
    if(left == False and right == False):
        print("player two win row")
    else:
        print("player one win row")
elif(center == True):
    if(top == True and bottom == True):
        print("player one win column")
    else:
        print("player two win column")
        
a_value = 6
b_value = 8 
c_value = (a_value*a_value + b_value*b_value)**(1/2)
print(c_value)


first = 21
second = 8
third = 13
if(first < second and first > third):
    print(first)
elif(second < first and second > third):
    print(second)
elif(third < first and third > second):
    print(third)


value = 0
for count in range(5):
    value = value + count
print(value)

#program with loop and variable

x_position = 4
y_position = 7

for value in range(4):
    x_position = x_position + value
    y_position = y_position + value

print ("x: " + x_position + ", y: " + y_position)


#program with list and loop (smallest value)

number_list = [21, 8, 53, 13, 35]
result = 100
for value in number_list:
    if value < result:
        result = value
print(result)


#program with loop and string

color_list = ["red", "white", "blue", "green"]
color_in_string = ""

for color in color_list:
    color_in_string = color + ", " + color_in_string
print(color_in_string)

#program with stoplight

first_light = "green"
second_light = "yellow"
third_light = "off"

if(third_light == "red"):
    third_light = "off"
    second_light = "off"
    first_light = "green"
elif(second_light == "yellow" and first_light == "off"):
    third_light = "red"
    second_light = "off"
    first_light = "off"
elif(first_light == "green"):
    third_light = "red"
    second_light = "yellow"
    first_light = "off"
print(first_light + ", " + second_light + ", " + third_light)
    
    

#bonus abstract


















        









