---
layout: home
title: 46. Elections Winners
#permalink: index.html # in case of we remove the index.md file, this doc will be the index page
---

<div class="row">
<div class="columnStmt" markdown="1">

## Description
------

[The Core - Home](../../code-signal-arcade-thecore/README.html)

[45. Build Palindrome](../45_buildPalindrome/README.html) | [47. Is Mac 48 Address](../47_isMac48Address/README.html)

[Alt/rust](./Alt_rust/README.md) | [Alt/js](./Alt_js/README.html) | [Alt/py3](./Alt_py3/README.md) | [Alt/cpp](./Alt_cpp/README.md) | [Alt/c](./Alt_c/README.md)

Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer <code>k</code> equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

**Example**

* For <code>votes = [2, 3, 5, 2]</code> and <code>k = 3</code>, the output should be
<code>electionsWinners(votes, k) = 2</code>.

* The first candidate got <code>2</code> votes. Even if all of the remaining <code>3</code> candidates vote for him, he will still have only <code>5</code> votes, i.e. the same number as the third candidate, so there will be no winner.
The second candidate can win if all the remaining candidates vote for him <code>(3 + 3 = 6 > 5)</code>.
* The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the <code>votes</code> array will thus be <code>[3, 4, 5, 3]</code>).
The last candidate can't win no matter what (for the same reason as the first candidate).
Thus, only <code>2</code> candidates can win (the second and the third), which is the answer.

**Input/Output**

* **[execution time limit] 4 seconds (js)**

* **[input] array.integer votes**

A non-empty array of non-negative integers. Its ith element denotes the number of votes cast for the <code type='math/tex'>i^{th}</code> candidate.

*Guaranteed constraints*:
<code type='math/tex'>4 \leq votes.length \leq 10^5</code>,
<code type='math/tex'>0 \leq votes[i] \leq 10^4</code>.

* **[input] integer k**

The number of voters who haven't cast their vote yet.

*Guaranteed constraints*:
<code type='math/tex'>0 ≤ k ≤ 10^5</code>.

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