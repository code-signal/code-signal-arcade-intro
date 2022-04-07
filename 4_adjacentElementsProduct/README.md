---
layout: home
title: 4. Adjacent elements product
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[3. Check palindrome](../3_checkPalindrome/README.html) | [5. Shape Area](../5_shapeArea/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For <code>inputArray = [3, 6, -2, -5, 7, 3]</code>, the output should be
<code>adjacentElementsProduct(inputArray) = 21</code>.

<code>7</code> and <code>3</code> produce the largest product.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

An array of integers containing at least two elements.

*Guaranteed constraints*:
<code>2 ≤ inputArray.length ≤ 10</code>,
<code>-1000 ≤ inputArray[i] ≤ 1000</code>

* **[output] boolean**

The largest product of adjacent elements.

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