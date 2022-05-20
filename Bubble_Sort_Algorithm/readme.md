# Bubbke Sort  : ( Time Complexity = O(n2) )

<br>

# 

### arr = [ 2, 1, 3, 0]
<br>
We  Start From The last Element , Compare it With the element last-1 If The Element Is Small We Swape It Else We Go For The Next Step 

<br>

|Old Array | Conditoin    |      Swap Or no |  The New Array |
|----------|-------------|------|------|
|[ 2, 1, 3, 0]| 0 < 3 | Swap  | [ 2, 1, 0, 3] |
|[2, 1, 0, 3]| 0 < 1 | Swap  | [ 2, 0, 1, 3] |
|[ 2, 0, 1, 3]| 0 < 2 | Swap  | [ 0, 2, 1, 3] |

## And We Keep re-run These Steps Till We Have A Sorted Array 