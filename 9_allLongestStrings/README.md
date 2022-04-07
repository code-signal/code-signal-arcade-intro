---
layout: home
title: 9. All Longest Strings
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[8. Matrix Elements Sum](../8_matrixElementsSum/README.html)  | [10. Common Character Count](../10_commonCharacterCount/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given an array of strings, return another array containing all of its longest strings.

**Example**

For <code>inputArray = ["aba", "aa", "ad", "vcd", "aba"]</code>, the output should be  
<code>allLongestStrings(inputArray) = ["aba", "vcd", "aba"]</code>.

**Input/Output**

* **[time limit] 500ms (cpp)**
* **[input] array.string inputArray**

    A non-empty array.

    *Guaranteed constraints:*

        1 ≤ inputArray.length ≤ 10,
        1 ≤ inputArray[i].length ≤ 10.

* **[output] array.string**

    Array of the longest strings, stored in the same order as in the inputArray.

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