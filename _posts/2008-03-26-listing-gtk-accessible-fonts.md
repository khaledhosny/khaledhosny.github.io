---
layout: post
title: Listing GTK accessible fonts
---
I was trying to figure how to list fonts accessible to GTK (or pango actually), it turned out that [`pango.Context`](http://www.pygtk.org/pygtk2reference/class-pangocontext.html#method-pangocontext--list-families) has a `list_families()` method that returns a tuple of [`pango.FontFamily`](http://www.pygtk.org/pygtk2reference/class-pangofontfamily.html) objects.

Some thing like this:

    window = gtk.Window()
    context = window.get_pango_context()
    families = context.list_families()
    
    for i in families:
            print i.get_name()
