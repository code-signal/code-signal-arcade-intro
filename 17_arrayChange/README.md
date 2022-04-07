---
layout: home
title: 17. Array Change
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[16. Are Similar](../16_areSimilar/README.html)  | [18. Palindrome Rearranging](../18_palindromeRearranging/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**

For <code>inputArray = [1, 1, 1]</code>, the output should be
<code>arrayChange(inputArray) = 3</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer inputArray**

*Guaranteed constraints*:
<code type='math/tex'>3 \leq inputArray.length \leq 10^5</code>,
<code type='math/tex'>-10^5 \leq inputArray[i] \leq 10^5</code>.

* **[output] boolean**

The minimal number of moves needed to obtain a strictly increasing sequence from <code>inputArray</code>.
It's guaranteed that for the given test cases the answer always fits signed <code>32</code>-bit integer type.

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