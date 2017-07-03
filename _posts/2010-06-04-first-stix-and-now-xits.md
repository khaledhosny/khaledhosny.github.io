---
categories:
- xits
- fonts
- arabeyes
layout: post
title: First STIX and now XITS
created: 1275680300
---
Last Friday, the long awaited (more than 10 years now?)  [STIX fonts](http://en.wikipedia.org/wiki/STIX_Fonts_project) were released. However, the release disappointed many people who want to typeset mathematics with STIX fonts, as they neither released LaTeX support files nor supplemented the fonts with the new OpenType MATH extension, ruling out any quality math typesetting engine.

Trying to make a joke of the continuous delay and missed milestones, I promised to provide an OpenType enriched version of the fonts ''within a week of its release, provided that I'm still alive and able to use computers'', of course not believing they would ever release it. Now they proved me wrong and actually released the fonts, so I'm pleased to announce the first beta release of XITS font.
<!--break-->
I started working on XITS font last year, main mail goal then was to explore the possibilities of right to left math typesetting, benefiting of the new OpenType math support in LuaTeX, and hence the name **XITS**; STIX written from right to left, and also as a hack to get around the reserved name clause in STIX license. This work was based on the beta version of STIX fonts, and it served its purpose, and so I suspended further work on the project concentrating on my Amiri font, to which the gained knowledge would applied to provide an Arabic math font.

This week, when STIX v1‌.0.0 was released, I started doing the OpenType work from scratch, not basing on the previous work, to make sure no leftovers from failed experiments would propagate to the new version, and no right to left work were done this time.

This early version provides:

- OpenType math constants values, necessary for proper layout of various math elements.
- proper math accent positioning.
- proper sub/superscript positioning (not fine tuned yet).
- extensible radicals, delimiters and math accents.
- oldstyle figures.
- some pre-composed fraction.

Tarball can be downloaded from:

[http://github.com/khaledhosny/xits-math/downloads](http://github.com/khaledhosny/xits-math/downloads)

Feature requests, bug reports and fixes, should be directed to the issue tracker:

[http://github.com/khaledhosny/xits-math/issues](http://github.com/khaledhosny/xits-math/issues)

Against the practice of STIX project, this version have not been extensively tested, only few basic tests through ConTeXt MkIV were done. Instead, in the spirit of open development model, I'm releasing early and often and trusting that thee are many people with more knowledge of math aesthetics and sharp eyes to spot error better than what I can ever do. Others are highly welcomed to test against other OpenType MATH implementations, namely `unicode-math` (with both XeTeX and LuaTeX) and MS Office 2007 and higher.

Thanks, in no particular order, to Hans Hagan, Aditya Mahaja, Will Robertson, Taco Hoekwater, Luigi Scarso, Murray Sargent for there help, testing and advices, and thanks to George Williams for hos awesome FontForge, which, besides Python, were the only tools used in the development of this font, and thanks to anyone else I missed his name.
