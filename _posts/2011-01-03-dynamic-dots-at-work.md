---
layout: post
title: Dynamic dots at work
---
When designing the OpenType layout of Amiri font I opted for a more complex [dot separation model]({{ site.url }}/2010/05/13/get-off-my-dots.html), where dots are treated as diacritical marks instead if being hard coded into base glyphs.

This paid off by lowering the total number of final glyphs as well as less substitution rules. Font size is critical for web-fonts, for example, and the current uncompressed TTF file is below 100 KB which is a significant achievement given how many contextual forms Amiri has and the almost pan-Arabic Unicode coverage.

But another major advantage of this approach is the dynamicity of dot positioning now the dots are just another kind of marks to be positioned. The image below is the default dot position, note how it clashes with the glyph to the right of it:

![]({{ site.url }}/assets/images/dots_pre.png)

Now after contextually repositioning the dots:

![]({{ site.url }}/assets/images/dots_post.png)

And this is done with 0 new glyphs (in the old way, one had to duplicate all the affected dotted glyphs and move the dots of each one, which can mean 90 new glyphs at least).
