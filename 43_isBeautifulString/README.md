---
layout: home
title: 43. Is Beautiful String
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[42. Bishop Degree](../42_bishopAndPawn/README.html)  | [44. Find Email Domain](../44_findEmailDomain/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

A string is said to be *beautiful* if <code>b</code> occurs in it no more times than <code>a</code>; <code>c</code> occurs in it no more times than <code>b</code>; etc.

Given a string, check whether it is *beautiful*.

**Example**

* For <code>inputString = "bbbaacdafe"</code>, the output should be
<code>isBeautifulString(inputString) = true</code>;
* For <code>inputString = "aabbb"</code>, the output should be
<code>isBeautifulString(inputString) = false</code>;
* For <code>inputString = "bbc"</code>, the output should be
<code>isBeautifulString(inputString) = false</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

A string of lowercase letters.

*Guaranteed constraints*:
<code>3 ≤ inputString.length ≤ 50</code>.

* **[output] boolean**


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