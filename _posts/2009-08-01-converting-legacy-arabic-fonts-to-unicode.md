---
categories:
- fonts
- arabeyes
layout: post
title: Converting legacy Arabic fonts to Unicode
created: 1249133061
---
There are many legacy Arabic fonts floating on the web that can't be used in free operating systems, those fonts predate Unicode and OpenType and can only be used in MS Windows. There seem not exist any documentation of any kind regarding those fonts, and I had to guess how it is supposed to work. Out of boredom (and because someone asked me if there is a way to use those fonts in GNU/Linux), I wrote a Python script using [FontForge's Python interface](http://fontforge.sourceforge.net/python.html) to convert them to Unicode with necessary OpenType layout to render them correctly.

It can be downloaded from [here](http://svn.arabeyes.org/viewvc/art/khotot/tools/legacy2opentype.py?view=markup), of course you'll need FontForge and python-fontforge extension. The script takes font filenames to be converted is input and will output converted fonts with the same names overwriting old ones, so make sure to save a copy somewhere before running it. ***Update***: the script now supports a "-d" switch to specify an output directory to avoid overwriting the files (thanks to Muayyad AlSadi for this).

How it works? Simply, it changes the Unicode code points of (most of) the glyphs, using a python dictionary mapping between the existing PUA code points and proper Arabic code points, and that mapping is where I had to guess. Then it applies various OpenType layout features like substitution and ligatures, which makes fonts behave like intended. Lastly, it trays to do automatic mark (tashkil) positioning based on highest and lowest point in the glyph, and this is some thing the original fonts on Windows don't have, but it doesn't always give sensible results.

This all is a quick and dirty hack, just to prove it can be done, that said, I don't even like most of those fonts, they are poorly done and mostly useless for me any way, and I'd like others not to use them at all.
