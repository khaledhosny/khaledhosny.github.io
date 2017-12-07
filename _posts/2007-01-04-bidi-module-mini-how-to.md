---
categories:
- كيف تعمل
- english
layout: post
title: bidi module mini-how to
created: 1167936937
---
BiDi module is a special drupal module that sets line direction automatically according to its type so you can mix RTL and LTR texts freely without worrying about the direction of the text.

Get it from [here](http://cvs.drupal.org/viewcvs/drupal/contributions/sandbox/alaa/bidi.module), install it by coping it to "modules" directory under your drupal's root directory.

Go to administer -> modules and enable it, then administer -> input formats, configure your desired formate and enable BiDi filter under Filters section. Save and it should work now.

Test:

العربيّة تكتب من اليمين إلى اليسار

But English is written from left to right

and in cases like "سطر يحتوي نصّا عربيا أكثر من النص اللاتيني فإن الإتجاه يصير من اليمين لليسار"

* عنصر
* عنصر ثان
  * عنصر فرعي
    * عنصر فرع فرعي
    * subitem 
  * عنصر فرعي ثان

1. عنصر 1
  1. عنصر تحت 1
2. عنصر 2
  1. ابن عنصر 2
  2. another subitem
    1. حفيد عنصر 2

**Typo:** this blog was titled "many how to", looks like I was sleeping when I typed it :P
