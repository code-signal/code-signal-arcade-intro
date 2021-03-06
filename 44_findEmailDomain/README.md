---
layout: home
title: 44. Find Email Domain
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[43. Is Beautiful String](../43_isBeautifulString/README.html) | [45. Build Palindrome](../45_buildPalindrome/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

An email address such as <code>"John.Smith@example.com"</code> is made up of a local part (<code>"John.Smith"</code>), an <code>"@"</code> symbol, then a domain part (<code>"example.com"</code>).

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. [Here](https://en.wikipedia.org/wiki/Email_address#Examples) you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

**Example**

* For <code>address = "prettyandsimple@example.com"</code>, the output should be
<code>findEmailDomain(address) = "example.com"</code>;
* For <code>address = "<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org"</code>, the output should be
<code>findEmailDomain(address) = "example.org"</code>.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] string address**

*Guaranteed constraints*:
<code>10 ≤ address.length ≤ 50</code>.

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