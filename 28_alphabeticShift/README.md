---
layout: home
title: 28. Alphabetic Shift
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[27. Variable Name](../27_variableName/README.html) | [29. Chess Board Cell Color](../29_chessBoardCellColor/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a string, replace each its character by the next one in the English alphabet (<code>z</code> would be replaced by <code>a</code>).



**Example**

For <code>inputString = "crazy"</code>, the output should be
<code>alphabeticShift(inputString) = "dsbaz"</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString **

Non-empty string consisting of lowercase English characters.

*Guaranteed constraints*:
<code>1 ≤ inputString.length ≤ 1000</code>.

* **[output] string**

The result string after replacing all of its characters.

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