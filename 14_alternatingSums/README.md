---
layout: home
title: 14. Alternating Sums
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[13. Reverse Parentheses](../13_reverseParentheses/README.html) | [15. Add Border](../15_addBorder/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Several people are standing in a row and need to be divided into two teams. The first person goes into *team* 1, the second goes into *team* 2, the third goes into *team* 1 again, the fourth into *team* 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of *team* 1, and the second element is the total weight of *team* 2 after the division is complete.


**Example**

For <code>a = [50, 60, 60, 45, 70]</code>, the output should be
<code>alternatingSums(a) = [180, 105]</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer a**

*Guaranteed constraints*:
<code>1 ≤ a.length ≤ 10</code>,
<code>45 ≤ a[i] ≤ 100</code>.

* **[output] array.integer**

Sorted array <code>a</code> with all the trees untouched.

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