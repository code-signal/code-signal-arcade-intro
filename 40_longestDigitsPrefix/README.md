---
layout: home
title: 40. Longest Digits Prefix
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[39. Knapsack Light](../39_knapsackLight/README.html) | [41. Digit Degree](../41_digitDegree/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given a string, output its longest prefix which contains only digits.

*Note*: A substring of a string is called a prefix if it starts at the string’s first character.

**Example**

For <code>inputString="123aa1"</code>, the output should be
<code>longestDigitsPrefix(inputString) = "123"</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

*Guaranteed constraints*:
<code>3 ≤ inputString.length ≤ 35</code>.

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