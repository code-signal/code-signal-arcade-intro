---
layout: home
title: 48. Is Digit
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[47. Is Mac 48 Address](../47_isMac48Address/README.html) | [49. Line Encoding](../49_lineEncoding/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Determine if the given character is a digit or not.

**Example**

* For <code>symbol = '0'</code>, the output should be
<code>isDigit(symbol) = true;</code>

* For <code>symbol = '-'</code>, the output should be
<code>isDigit(symbol) = false</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] char symbol**

A character which is either a digit or not.

* **[output] boolean**

<code>true</code> if <code>symbol</code> is a digit, <code>false</code> otherwise.

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