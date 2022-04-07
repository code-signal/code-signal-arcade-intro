---
layout: home
title: 10. Common Character Count
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[9. All Longest Strings](../9_allLongestStrings/README.html) | [11. Is Lucky](../11_isLucky/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given two strings, find the number of common characters between them.

**Example**

For <code>s1 = "aabcc"</code> and <code>s2 = "adcaa"</code>, the output should be
<code>commonCharacterCount(s1, s2) = 3</code>.

Strings have <code>3</code> common characters <code>- 2</code> "a"s and <code>1</code> "c".

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string s1**

A string consisting of lowercase latin letters <code>a-z</code>.

*Guaranteed constraints*:
<code>1 ≤ s1.length ≤ 15</code>.

* **[input] string s2**

A string consisting of lowercase latin letters <code>a-z</code>.

*Guaranteed constraints*:
<code>1 ≤ s2.length ≤ 15</code>.

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