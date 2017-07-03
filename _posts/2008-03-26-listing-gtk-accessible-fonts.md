---
categories:
- pango
- gtk
layout: post
title: Listing GTK accessible fonts
created: 1206483992
---
<p dir=ltr>
I was trying to figure how to list fonts accessible to GTK (or pango actually), it turned out that <a href="http://www.pygtk.org/pygtk2reference/class-pangocontext.html#method-pangocontext--list-families">pango.Context</a> has a list_families() method that returns a tuple of <a href="http://www.pygtk.org/pygtk2reference/class-pangofontfamily.html">pango.FontFamily</a> objects.
<br>
Some thing like this:
<pre dir=ltr>
window = gtk.Window()
context = window.get_pango_context()
families = context.list_families()

for i in families:
        print i.get_name()
</pre>
</p>
