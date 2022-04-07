---
layout: home
title: 34. Extract Each Kth
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[33. Strings Rearrangement](../33_stringsRearrangement/README.html) | [35. First Digit](../35_firstDigit/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given array of integers, remove each <code type='math/tex'>k^{th}</code> element from it.


**Example**

For <code>inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code> and <code>k = 3</code>, the output should be
<code>extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10]</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

*Guaranteed constraints*:
<code>5 ≤ inputArray.length ≤ 15</code>,
<code>-20 ≤ inputArray[i] ≤ 20</code>.

* **[input] integer k**

*Guaranteed constraints*:
<code>1 ≤ k ≤ 10</code>.

* **[output] array.integer**

<code>inputArray</code> without elements <code>k - 1</code>, <code>2k - 1</code>, <code>3k - 1</code> etc.

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