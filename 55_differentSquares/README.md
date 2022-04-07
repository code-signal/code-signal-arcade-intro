---
layout: home
title: 55. Different Squares
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[54. Sum Up Numbers](../54_sumUpNumbers/README.md)  | [56. Digits Product](../56_digitsProduct/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a rectangular matrix containing only digits, calculate the number of different <code>2 × 2</code> squares in it.


**Example**

For  
{% highlight javascript %}
matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
{% endhighlight %}

the output should be
<code>differentSquares(matrix) = 6</code>.

Here are all <code>6</code> different <code>2 × 2</code> squares:

*   1 2  
    2 2
*   2 1  
    2 2
*   2 2  
    2 2
*   2 2  
    1 2
*   2 2  
    2 3
*   2 3  
    2 1


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.array.integer matrix**

*Guaranteed constraints*:  
<code>1 ≤ matrix.length ≤ 100</code>,  
<code>1 ≤ matrix[i].length ≤ 100</code>,  
<code>0 ≤ matrix[i][j] ≤ 9</code>.


* **[output] integer**

The number of different <code>2 × 2</code> squares in <code>matrix</code>.



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