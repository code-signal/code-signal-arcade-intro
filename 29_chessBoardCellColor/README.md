---
layout: home
title: 29. Chess Board Cell Color
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[28. Alphabetic Shift](../28_alphabeticShift/README.html)  | [30. Circle of Numbers](../30_circleOfNumbers/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given two cells on the standard chess board, determine whether they have the same color or not.

**Example**

* For <code>cell1 = "A1"</code> and <code>cell2 = "C3"</code>, the output should be
<code>chessBoardCellColor(cell1, cell2) = true</code>.

![](./images/example1.png)

* For <code>cell1 = "A1"</code> and <code>cell2 = "H3"</code>, the output should be
<code>chessBoardCellColor(cell1, cell2) = false</code>.

![](./images/example2.png)

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string cell1**

* **[input] string cell2**

* **[output] boolean**

<code>true</code> if both cells have the same color, <code>false</code> otherwise.

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