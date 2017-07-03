---
excerpt: "I was trying to change the math font used in plain TeX (as opposed to LaTeX
  or ConTeXt), but I didn't seem to find it documented any where, apparently it is
  so obvious for TeXperts to be even documented. Anyway, I figured it out and I'm
  documenting it here so I don't have to search it again.\r\n\r\nSet font families
  0-3 to the new font, as follows:\r\n0: math text (\"sin\", \"cos\", numbers, etc.)\r\n1:
  math italic (\"x\", \"y\", \"z\", etc. don't have to be italic at all e.g. Euler)\r\n2:
  math symbols\r\n3: math extensions\r\n\\textfont: normal size font\r\n\\scriptfont:
  font for sub/super script\r"
categories:
- tex
- fonts
- arabeyes
- math
- typography
layout: story
title: Changing math font in plain TeX
created: 1249057205
---
I was trying to change the math font used in plain TeX (as opposed to LaTeX or ConTeXt), but I didn't seem to find it documented any where, apparently it is so obvious for TeXperts to be even documented. Anyway, I figured it out and I'm documenting it here so I don't have to search it again.

Set font families 0-3 to the new font, as follows:
0: math text ("sin", "cos", numbers, etc.)
1: math italic ("x", "y", "z", etc. don't have to be italic at all e.g. Euler)
2: math symbols
3: math extensions
\textfont: normal size font
\scriptfont: font for sub/super script
\scriptscriptfont: font for subsub/supersuper script

Something like:
<code>
\textfont0              = \mathtext 
\scriptfont0            = \mathsubtext
\scriptscriptfont0      = \mathsubsubtext
\textfont1              = \mathlet
\scriptfont1            = \mathsublet
\scriptscriptfont1      = \mathsubsublet
\textfont2              = \mathsym
\scriptfont2            = \mathsubsym
\scriptscriptfont2      = \mathsubsubsym
\textfont3              = \mathext
\scriptfont3            = \mathsubext
\scriptscriptfont3      = \mathsubsubext
</code>
