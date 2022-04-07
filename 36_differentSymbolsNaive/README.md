---
layout: home
title: 36. Different Symbols Naive
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[35. First Digit](../35_firstDigit/README.html) | [37. Array Max Consecutive Sum](../37_arrayMaxConsecutiveSum/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a string, find the number of different characters in it.


**Example**

For <code>s = &quot;cabca&quot;</code>, the output should be
<code>differentSymbolsNaive(s) = 3</code>.

There are <code>3</code> different characters <code>a</code>, <code>b</code> and <code>c</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s**

A string of lowercase English letters.

*Guaranteed constraints*:
<code>3 ≤ s.length ≤ 1000</code>.

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