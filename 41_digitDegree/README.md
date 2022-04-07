---
layout: home
title: 41. Digit Degree
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[40. Longest Digits Prefix](../40_longestDigitsPrefix/README.html)  | [42. Bishop Degree](../42_bishopAndPawn/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Let's define *digit degree* of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

**Example**

* For <code>n = 5</code>, the output should be
<code>digitDegree(n) = 0</code>;
* For <code>n = 100</code>, the output should be
<code>digitDegree(n) = 1</code>.
<code>1 + 0 + 0 = 1</code>.
* For <code>n = 91</code>, the output should be
<code>digitDegree(n) = 2</code>.
<code>9 + 1 = 10 -> 1 + 0 = 1</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer n**

*Guaranteed constraints*:
<code type='math/tex'>5 \leq n \leq 10^9</code>.

* **[output] integer**


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