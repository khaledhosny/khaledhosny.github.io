---
excerpt: "Arabic dots are ''diacritics'' and should be treated as diacritics, period.\r\n\r\nWarning,
  a long and boring reading below.\r\n"
categories:
- fonts
- arabeyes
- amiri
layout: post
title: Get off my dots!
created: 1273701436
---
Arabic dots are ''diacritics'' and should be treated as diacritics, period.

Warning, a long and boring reading below.
<!--break-->
Pre-Islamic and early Islamic Arabic scripts lacked dots making it highly ambiguous, but this ambiguity was hidden by the low literacy levels and close familiarity with Arabic language. With spread of Islam and Arabic script, this ambiguity became more and more apparent, and ca. 80 AH diacritical dots were introduced to differentiate between similar letter forms.

Understanding this is the first step towards optimum system laying out Arabic text. We need to understand that dots are not integral parts of Arabic letters; they are diacritics, and additional layer above the text, and thus need not to be hard coded into glyph, actually they should not be hard coded at all.

Typically, Arabic fonts today are designed that every letter is a separate entity, for example the three Baa-like letters: ب, ت, ث, are three different entities that are treated separately independent of each other, bearing no relation whatsoever. Why this is a bad thing? Lets take a moderately complex Arabic font: each on of the three have an initial, medial and final forms, then each of form takes a slightly different variant according to glyph around it. So basically, for each variant we had three glyphs that only differ in the number and/or position of dots. Now, we want to make it more aesthetically pleasant, so we added more contextual variants, complicating it more. Now, we want to make it a pan-Arabic font covering all languages using Arabic script, so instead of multiplying the variants by three we now multiply them by 19 (number of Baa like letters in Unicode), not to mention 9 Noon-like and 8 Yaa-like letters that take a Baa-like shape in initial and medial forms. An this is only one family of letters. This, besides exploding number of glyphs in the font, makes it easy for some letters to miss variants other similar letters in the font have, and almost all moderately complex Arabic fonts I've seen suffer from this, making the font inconsistent.

The problems do not stop here. It isn't uncommon that the dots of consecutive letters collision with each other or with adjacent glyphs, especially for aesthetically accepted fonts. With current approaches, the solution is either to ignore it, or design the font so that glyphs never collision even this made them uglier.

The solution? Just go with only natural route; separate the dots from their bases and teat them as they really are: diacritics. This means we don't have 19+ Baa like letters, but a dotless Baa and 19+ ways to apply dots to it. This way the variant substitutions are only performed once on this dotless Baa, then dots are applied to the variants not the other way around. This is not a new invention, it is as old as Arabic printing, if we take a look at Bulaq typecase we see separate dots that are applied to dotless forms by the compositor to obtain less common combinations. But thy also had "pre-composed" forms with dots built into the type, but this is just for practical reasons, since building all letters by applying dots manually is tedious and will be very time consuming, so they had common combination pre-composed but retained the ability to compose any other combination on the fly. We are fortunate that we have computers to do the tedious work for us, so why we don't go extreme and compose all letters on the fly!

If any one is interested in the technical details, we use Glyph Composition/Decomposition lookup (ccmp), to decompose each character into base glyph and a dot, so ب is decomposed into ٮ and "one dot below" and أ into ا and "small hamza above" etc. This table if present, will be applied by OpenType layout engine before any other table. This way adding a new Baa-like character is a matter of adding new entry in the "ccmp" table and it'll, magically, enjoy all substitution rules of Baa. The dots are then positioned onto base glyphs using OpenType glyph position table that we already use for vowel marks, and this give us more flexibility to move the position of the dot around, triggered by certain contexts.
