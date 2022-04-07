---
layout: home
title: 3. Check palindrome
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[2. Century from year](../2_centuryFromYear/README.html)  | [4. Adjacent elements product](../4_adjacentElementsProduct/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Given the string, check if it is a palindrome.

**Example**

* For <code>inputString = "aabaa"</code>, the output should be
<code>checkPalindrome(inputString) = true</code>;
* For <code>inputString = "abac"</code>, the output should be
<code>checkPalindrome(inputString) = false</code>;
* For <code>inputString = "a"</code>, the output should be
<code>checkPalindrome(inputString) = true</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string inputString**

A non-empty string consisting of lowercase characters.

*Guaranteed constraints*:
<code type='math/tex'>1 \leq \text{inputString.length} \leq 10^5</code>.

* **[output] boolean**

<code>true</code> if <code>inputString</code> is a palindrome, <code>false</code> otherwise.

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