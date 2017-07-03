---
excerpt: "'''Update''': I rewrote this post and changed its title from ''Pango vs."
categories:
- pango
- fonts
- arabeyes
layout: post
title: Smart fonts vs. dumb fonts
created: 1201359017
---
'''Update''': I rewrote this post and changed its title from ''Pango vs. FriBiDi'', as people misunderstood my point.

We have at least two free software libraries that are capable of doing Arabic shaping, [http://en.wikipedia.org/wiki/Pango Pango] and  the [http://en.wikipedia.org/wiki/fribidi FriBiDi] (fribidi-0.19 only).

''Smart fonts'' are fonts that is accompanied by instructions that define how glyphs are selected to be laid out, in contrast ''dumb fonts'' does not contain such instructions and the text is laid out by simple character to glyph mapping.

In Arabic, each character has 4 basic forms (some has only 2), initial, middle, final and isolated. Each of these forms can has many variants according to context and font style. For example character '''ج''' middle form when followed by '''ا''' take a different shape than when followed by another '''ج''' or when preceded by '''ل'''.

One of the widely used smart fonts is [http://en.wikipedia.org/wiki/OpenType OpenType] which is supported on most platforms, there is also [http://scripts.sil.org/RenderingGraphite Graphite] and [http://en.wikipedia.org/wiki/Apple_Advanced_Typography AAT].

Now, how FriBiDi does Arabic shaping? It analysis Arabic text to determine the form of each character (the 4 basic forms) and then replace it with the corresponding codepoint from Unicode's Arabic presentation forms. However, this is limited to the 4 basic forms, and not all characters in Arabic block has a corresponding presentation form, languages like [http://en.wikipedia.org/wiki/Pashto_language Pastho] and [http://en.wikipedia.org/wiki/Jawi_script Jawi] can not be rendered this way (both has extended Arabic characters that has no presentation forms in unicode).

Also, ligature support is very limited, FriBiDi only does lam-alef ligatures, other ligatures in Unicode are not supported, ligatures in Unicode has very limited use though, they are there for compatibility with legacy encodings and does not cover all what a font designer might need, it does not even come close to it.

In short, relying on Arabic presentation forms is very limited, with hard coded rules and no control from font developer. It might provide basic features, but it is not much better than mechanical [http://en.wikipedia.org/wiki/Typewriter Typewriter] and a real regression from [http://en.wikipedia.org/wiki/Movable_type Movable type]. However, it might have some uses in some situations where having OpenType fonts is not an option, and basic Arabic support is better than none.

How Pango works then? Pango analysis the text to to determine the form of each character (using fribidi internally), then passes this information to OpenType layout engine ([http://www.freedesktop.org/wiki/Software/HarfBuzz HarfBuzz] here) which in turn determine which glyph to be used based on the data available in the opentype font used. 

This gives font designer more control over the behavior of his font and how glyphs are laid out, fine typographical features as contextual substitution, more complicated rule based substitution, unlimited ligatures, glyph alternatives and many other features that enable fine typography, glyph positioning and many others. 

This way we can provide glyphs for the missing forms of Pashto and Jawi characters, more ligatures as we want, replace '''ج''' with the correct variant according to context, provide optional alternative that, when the application supports it, can be used optionally when typesetting text.

This isn't limited to Arabic, and is used for other writing systems, but I stressed on Arabic as that is my main interest.
