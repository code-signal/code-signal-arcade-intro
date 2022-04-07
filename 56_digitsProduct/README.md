---
layout: home
title: 56. Digits Product
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[55. Different Squares](../55_differentSquares/README.html) | [57. File Naming](../57_fileNaming/README.md)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an integer <code>product</code>, find the smallest **positive** (i.e. greater than <code>0</code>) integer the product of whose digits is equal to <code>product</code>. If there is no such integer, return <code>-1</code> instead.


**Example**

* For <code>product = 12</code>, the output should be  
<code>digitsProduct(product) = 26</code>;

* For <code>product = 19</code>, the output should be  
<code>digitsProduct(product) = -1</code>.


**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] integer product**

*Guaranteed constraints*:  
<code>0 ≤ product ≤ 600</code>.


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