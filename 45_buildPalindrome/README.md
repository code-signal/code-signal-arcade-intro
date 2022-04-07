---
layout: home
title: 45. Build Palindrome
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[44. Find Email Domain](../44_findEmailDomain/README.html)  | [46. Elections Winners](../46_electionsWinners/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

*Note*: A **palindrome** is a string that reads the same left-to-right and right-to-left.

**Example**

For <code>st = "abcdc"</code>, the output should be
<code>buildPalindrome(st) = "abcdcba"</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string st**

A string consisting of lowercase latin letters.

*Guaranteed constraints*:
<code>3 ≤ st.length ≤ 10</code>.

* **[output] string**


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