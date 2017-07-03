---
excerpt: "[XeTeX](http://en.wikipedia.org/wiki/XeTeX) is an modern extension of TeX
  typesetting engine that supports Unicode, modern font technologies (OpenType and
  Graphite, plus AAT on Mac OS X) and many other goodies for multilingual and complex
  script typesetting.\r\n\r\nXeTeX was written and maintained by Jonathan Kew, but
  lately he had less time for maintaining it. Last year I started to partially maintain
  XeTeX, supported by [TUG](http://tug.org), originally intending to mainly look after
  issues in [OpenType math](http://en.wikipedia.org/wiki/Category:Mathematical_OpenType_typefaces)
  support, and my first release was 0.9998 (for TeX Live 2012) with fixes to some
  long standing OpenType math issues.\r\n\r\nLate last year, after giving up on my
  attempt to [port LibreOffice to HarfBuzz](http://lists.freedesktop.org/archives/libreoffice/2012-October/040350.html),
  I decided to port XeTeX instead. Both LibreOffice (and OpenOffice before it) and
  XeTeX were using the [ICU LayoutEngine](http://userguide.icu-project.org/layoutengine)
  library to do OpenType layout, but it is no longer [being maintained](http://bugs.icu-project.org/trac/ticket/9553#comment:1)
  for quite sometime now, with bugs and even regressions left unfixed, not to mention
  support for new features. XeTeX was even used a locally patched version of it to
  handle many features not supported upstream. [HarfBuzz](http://harfbuzz.org), on
  the other hand, is an actively maintained, feature rich library with a versatile
  API and a very cooperative developers (I got at least a couple new API calls for
  my XeTeX needs, not to mention regular bug fixes), and is used by many high profile
  free software projects (though it lacks documentation, but hey, who needs documentation,
  one can always read the code or ask on the mailing list `:)`). The HarfBuzz port
  went smooth and in a few weeks we had a new version of XeTeX no longer using a patched
  ICU library (we still use ICU for other stuff like input encodings, bidirectional
  algorithm and locale sensetive line breaking), followed by a few months of bug fixes,
  re-factoring and code removal, so we ended up with more functionality and less code
  (yay).\r\n\r\nXeTeX also supports [Graphite](http://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about)
  font technology, but it was using the first generation Graphite engine, but in the
  meantime a new faster and more robust engine has been developed. While working on
  the HarfBuzz port, Martin Hosken (Graphite developer) approached me about upgrading
  XeTeX to the new library, and since HarfBuzz already have a Graphite2 backend I
  found it would be easier to use it, so I did just that, and ported our other uses
  of the old Graphite API (line breaking, querying font features etc.) to directly
  use the new Graphite2 API, with big help from Martin and other Graphite hackers.\r\n\r\nFew
  months earlier to all this, [Jiang Jiang](http://jjgod.org/) started porting XeTeX
  on Mac from the long deprecated ATS/ATSUI font APIs (which Apple didn’t even provide
  on their 64-bit systems) to the new Core Text ones, and I kept bothering him asking
  when the port will be finished so he finished it, probably just to get rid of me.
  Since I didn’t have a Mac machine (not being a fan of Apple), I couldn’t do much
  work on the Mac code except remotely which boiled down to just making sure that
  XeTeX keeps building on Mac. After knowing about the long awaited Core Text port,
  TUG offered to buy me a Mac machine through the MacTeX fund so that I can maintain
  XeTeX on Mac, I wasn’t very enthusiastic about idea at the beginning (naturally),
  but after all XeTeX started on Mac and has a large user base there and, like it
  or not, I have to support them, so I sold out and acquired a so-called “MacBook
  Pro” laptop with a so-called “Retina” display (which I’m **not** using to write
  this blog post).\r\n\r\nSo at last I have a TeX engine that can showcase all features
  of Amiri font (time to find something serious to typeset).\r\n\r\nSo this week a
  beta version of XeTeX 0.9999[^1] series have been released including the HarfBuzz,
  Graphite2 and Core Text ports and many other bug fixes (check the [release notes](http://tug.org/pipermail/xetex/2013-March/024118.html)).\r\n\r\nSources
  can be downloaded from [SourceForge page](https://sourceforge.net/projects/xetex/files/source/),
  users of TeX Live can install binaries for several platforms from [TLContrib](http://tlcontrib.metatex.org/)
  repository, and final versions should be included in the upcoming TeX Live 2013
  release.\r\n\r\n[^1]: [XeTeX version numbers are asymptotic to 1](http://tug.org/pipermail/xetex/2007-March/006057.html)
  (just like TeX version numbers being asymptotic to *π*), so the next stable version
  will not be 1.0 but rather 0.99991 `:)`\r\n"
categories:
- typography
- fonts
layout: story
title: XeTeX ported to HarfBuzz (and more)
created: 1363322121
---
[XeTeX](http://en.wikipedia.org/wiki/XeTeX) is an modern extension of TeX typesetting engine that supports Unicode, modern font technologies (OpenType and Graphite, plus AAT on Mac OS X) and many other goodies for multilingual and complex script typesetting.

XeTeX was written and maintained by Jonathan Kew, but lately he had less time for maintaining it. Last year I started to partially maintain XeTeX, supported by [TUG](http://tug.org), originally intending to mainly look after issues in [OpenType math](http://en.wikipedia.org/wiki/Category:Mathematical_OpenType_typefaces) support, and my first release was 0.9998 (for TeX Live 2012) with fixes to some long standing OpenType math issues.

Late last year, after giving up on my attempt to [port LibreOffice to HarfBuzz](http://lists.freedesktop.org/archives/libreoffice/2012-October/040350.html), I decided to port XeTeX instead. Both LibreOffice (and OpenOffice before it) and XeTeX were using the [ICU LayoutEngine](http://userguide.icu-project.org/layoutengine) library to do OpenType layout, but it is no longer [being maintained](http://bugs.icu-project.org/trac/ticket/9553#comment:1) for quite sometime now, with bugs and even regressions left unfixed, not to mention support for new features. XeTeX was even used a locally patched version of it to handle many features not supported upstream. [HarfBuzz](http://harfbuzz.org), on the other hand, is an actively maintained, feature rich library with a versatile API and a very cooperative developers (I got at least a couple new API calls for my XeTeX needs, not to mention regular bug fixes), and is used by many high profile free software projects (though it lacks documentation, but hey, who needs documentation, one can always read the code or ask on the mailing list `:)`). The HarfBuzz port went smooth and in a few weeks we had a new version of XeTeX no longer using a patched ICU library (we still use ICU for other stuff like input encodings, bidirectional algorithm and locale sensetive line breaking), followed by a few months of bug fixes, re-factoring and code removal, so we ended up with more functionality and less code (yay).

XeTeX also supports [Graphite](http://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) font technology, but it was using the first generation Graphite engine, but in the meantime a new faster and more robust engine has been developed. While working on the HarfBuzz port, Martin Hosken (Graphite developer) approached me about upgrading XeTeX to the new library, and since HarfBuzz already have a Graphite2 backend I found it would be easier to use it, so I did just that, and ported our other uses of the old Graphite API (line breaking, querying font features etc.) to directly use the new Graphite2 API, with big help from Martin and other Graphite hackers.

Few months earlier to all this, [Jiang Jiang](http://jjgod.org/) started porting XeTeX on Mac from the long deprecated ATS/ATSUI font APIs (which Apple didn’t even provide on their 64-bit systems) to the new Core Text ones, and I kept bothering him asking when the port will be finished so he finished it, probably just to get rid of me. Since I didn’t have a Mac machine (not being a fan of Apple), I couldn’t do much work on the Mac code except remotely which boiled down to just making sure that XeTeX keeps building on Mac. After knowing about the long awaited Core Text port, TUG offered to buy me a Mac machine through the MacTeX fund so that I can maintain XeTeX on Mac, I wasn’t very enthusiastic about idea at the beginning (naturally), but after all XeTeX started on Mac and has a large user base there and, like it or not, I have to support them, so I sold out and acquired a so-called “MacBook Pro” laptop with a so-called “Retina” display (which I’m **not** using to write this blog post).

So at last I have a TeX engine that can showcase all features of Amiri font (time to find something serious to typeset).

So this week a beta version of XeTeX 0.9999[^1] series have been released including the HarfBuzz, Graphite2 and Core Text ports and many other bug fixes (check the [release notes](http://tug.org/pipermail/xetex/2013-March/024118.html)).

Sources can be downloaded from [SourceForge page](https://sourceforge.net/projects/xetex/files/source/), users of TeX Live can install binaries for several platforms from [TLContrib](http://tlcontrib.metatex.org/) repository, and final versions should be included in the upcoming TeX Live 2013 release.

[^1]: [XeTeX version numbers are asymptotic to 1](http://tug.org/pipermail/xetex/2007-March/006057.html) (just like TeX version numbers being asymptotic to *π*), so the next stable version will not be 1.0 but rather 0.99991 `:)`
<!--break-->
