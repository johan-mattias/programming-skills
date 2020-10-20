

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
player_number = 11
if(player_number > 10):
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
    year = 2
elif(class_1 == "art" or class_2 == "english"):
    year = 3
print(class_2 + year)

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
c_value = (a_value*a_value + b_value*b_value)/10
print(c_value)











        









