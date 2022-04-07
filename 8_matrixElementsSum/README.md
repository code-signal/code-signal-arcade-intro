---
layout: home
title: 8. Matrix Elements Sum
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[7. Almost Increasing Sequence](../7_almostIncreasingSequence/README.html) | [9. All Longest Strings](../9_allLongestStrings/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, **or any of the rooms below any of the free rooms**.

Given `matrix`, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a `0`).

**Example**

* For
    ```
    matrix = [[0, 1, 1, 2], 
            [0, 5, 0, 0], 
            [2, 0, 3, 3]]
    ```
  -   the output should be
  
    `matrixElementsSum(matrix) = 9`.

<p align="left" >
    <img src="https://codesignal.s3.amazonaws.com/tasks/matrixElementsSum/img/example1.png?_tm=1624661706824" 
    width="400" height="225" style="width: 400px; height: 300px;">
</p> 

There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is `1 + 5 + 1 + 2 = 9`.

* For
```
matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]
```
  -   the output should be
  
    `matrixElementsSum(matrix) = 9`.

<p align="left" >
    <img src="https://codesignal.s3.amazonaws.com/tasks/matrixElementsSum/img/example2.png?_tm=1624661707079" 
    width="400" height="225" style="width: 400px; height: 300px;">
</p> 

Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is `1 + 1 + 1 + 5 + 1 = 9`.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.array.integer matrix**

    A 2-dimensional array of integers representing the cost of each room in the building. A value of 0 indicates that the room is haunted.

    *Guaranteed constraints:*

        1 ≤ matrix.length ≤ 5,

        1 ≤ matrix[i].length ≤ 5,
        
        0 ≤ matrix[i][j] ≤ 10.

* **[output] integer**

    The total price of all the rooms that are suitable for the CodeBots to live in.

**[JavaScript (ES6)] Syntax Tips**

{% highlight javascript linenos=table %}
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
{% endhighlight %}

</div>
<div class="columnSol" markdown="1">

## Solution
------

{% highlight javascript linenos=table %}

{% include_relative solution.js %}

{% endhighlight %}

</div>
</div>