---
layout: home
title: 52. Longest Word
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[51. Delete Digit](../51_deleteDigit/README.html) | [53. Valid Time](../53_validTime/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Define a *word* as a sequence of consecutive English letters. Find the longest *word* from the given string.

**Example**

For <code>text = "Ready, steady, go!"</code>, the output should be
<code>longestWord(text) = "steady"</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string text**

*Guaranteed constraints*:
<code>4 ≤ text.length ≤ 50</code>.

* **[output] string**

The longest *word* from <code>text</code>. It's guaranteed that there is a unique output.

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