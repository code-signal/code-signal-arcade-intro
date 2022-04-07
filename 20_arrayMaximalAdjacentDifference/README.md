---
layout: home
title: 20. Array Maximal Adjacent Difference
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[19. Are Equally Strong](../19_areEquallyStrong/README.html) | [21. Is IPv4 Address](../21_isIPv4Address/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.


**Example**

For <code>inputArray = [2, 4, 1, 0]</code>, the output should be
<code>arrayMaximalAdjacentDifference(inputArray) = 3</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

*Guaranteed constraints*:
<code>3 ≤ inputArray.length ≤ 10</code>,
<code>-15 ≤ inputArray[i] ≤ 15</code>.

* **[output] boolean**

The maximal absolute difference.


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