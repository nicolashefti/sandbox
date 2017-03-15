---
title: Dummy page
layout: default
permalink: /test/
---

# Test - Dummy folder

Not much to see here. Just testing Github page configuration here.

# README.md as index.html

This only works at the root of the repo.

Solution:

```yaml
    ---
    permalink: /test/
    ---
```

Jekyll docs:

When you use permalinks that omit the .html file extension (called “pretty URLs”) Jekyll builds the file as index.html placed inside a folder with the page’s name.

# Linking to .md files that become .html file?

[Test]({{ site.baseurl }}{% link ./test.md %})

{{ site.baseurl }}{% link ./test.md %}
