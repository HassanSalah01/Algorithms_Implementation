# Kadane's Algorithm
<br> 

### you are given an array and you want To get the max sub Array in it 
 
<br> 


# Example :

## [-1,5,-3,7,2]

### -1 is a Sub Array
### -1,5 is a Sub Array
### -1,5,-3 is a Sub Array
### -3,7,2 is a Sub Array
### -Even The Dull Array is a Sub Array

<br>

## Kadane's Algorithm Tell You To start but pushing arr[0] into a newArr and after this step you have two option 

## if current arr + the perv of the new arr is bigger than current , push them Else push Current 

## Example :

<br>

## [-1,5,-3,7,2]
## newArr = [-1 ] we check (-1+5)>5 if yes we push (-1+5) if No We push 5 
