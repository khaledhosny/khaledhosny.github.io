---
categories:
- fonts
- arabeyes
- amiri
layout: post
title: First (alpha) release of Amiri Font
created: 1284853995
---
I just uploaded the first release of Amiri, an alpha release.

<pre>
* Only alphabetic characters:
    * no vowel marks
    * no punctuation
    * no numbers
* Only Arabic languages is supported:
    * no support for other Arabic script languages, though the underlying structure is all there
    * no support for special Koranic marks
* No proper spacing, there is some primitive kerning that needs more work.
* Dot positioning still needs more work
* Some combinations need more work
</pre>

We now also have a [http://amiri.sourceforge.net web site], which also acts as a showcase for the font.
<!--break-->
The website uses downloadable webfonts to display the text in Amiri font (the English is in Linux Libertine), as long as you are using a web broweser that supports it. The font is broken in some browsers, however, still needs to be sorted out. Also it is not yet optimised for web display (no hinting etc.), it looks best in Firefox for Linux with FreeType autohinting.

The font can be downloaded from [https://sourceforge.net/projects/amiri/files/ SourceForge download] area, the tar ball contains the font in both desktop and web formats (TTF, WOFF and EOT), as well as FontForge sources and build scripts.
'''Update:''' the archive was broken, re-uploaded.

It is released under OFL, but I'm considering dual licensing it under GPLv3 as well (any strong copyleft license is fine with me actually, if there is a real need for it).

There will be, ISA, some more alpha releases until the above items are done before it enters beta stage.

Testing, bug reports, ideas, patches and all sort of contributions are welcomed, I'm still not sure whether I'll be using SourceForge bug tracking or Github's, but direct emails are welcomed for the time being.
'''Update:''' we will be using SourceForge [https://sourceforge.net/tracker/?group_id=320653 bug tracker].
