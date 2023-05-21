# Fixing your layout headaches

Hey all, welcome to this talk about implementing layouts with CSS.
In this talk I'll only assume very basic HTML and CSS knowledge: I'll assume that you've heard of the DOM, and that it's structured as a tree of elements.
If you also know how to apply basic CSS to stuff (e.g. you know how to make a red box) you should be good.
We won't be using Javascript at all.

Before we get started I want to mention that I learned a lot of these concepts from Josh Comeau's course CSS for JS Developers. It's really great, and if you're interested in styling frontend applications you should check it out. (lenke til css-for-js.dev).

Right, let's talk about putting your stuff where you want it. As mentioned in the description of this talk, there's two concepts in CSS that will make understanding what's going on approximately a billion times easier:

- The containing block
- The stacking context

We'll get to those in a bit, but first, lets cover some of the basics that will lead us there.

Perhaps the most important thing to know about styling web pages is the _box model_. In essence:

Everyhting is rectangles. Circles are also rectangles.
Every element (i.e. every rectangle) has the following areas:

_Boksmodell her_

Note that the size of some or all of these areas may be 0.
Margin may also be negative, so let's take a quick look at that.

_Noe greier om negativ margin her_
_Nevn også z-index. Kan si at det kommer vi til._

Next, we need to know about _layout modes_.
CSS has seven of them:

- Normal flow — all elements are part of normal flow until you do something to take them out of it. Normal flow includes block layout, designed for laying out boxes such as paragraphs and inline layout, which lays out inline items such as text.
- Table layout, designed for laying out tables.
- Float layout, designed to cause an item to position itself left or right with the rest of the content in normal flow wrapping around it.
- Positioned layout, designed for positioning elements without much interaction with other elements.
- Multi-column layout, designed for laying content out in columns as in a newspaper.
- Flexible box layout, designed for laying out complex pages that can be resized smoothly.
- Grid layout, designed for laying out elements relative to a fixed grid.

Of these, we will only care about these (but float layout is pretty cool, check out `shape-margin`!:

- Normal flow — all elements are part of normal flow until you do something to take them out of it. Normal flow includes block layout, designed for laying out boxes such as paragraphs and inline layout, which lays out inline items such as text.
- Positioned layout, designed for positioning elements without much interaction with other elements.

I'll also mention these grid and flexbox, but they deserve their own talk to do them complete justice.

## Normal flow

Normal flow, also called flow layout, is the layout mode you get if you don't tell the browser to choose anything else.
There's two kinds -- well, sort of three kinds (there's a lot of special cases and asterisks and yes-but-really's in CSS) -- of elements:

- Block elements
- Inline elements

Let's quickly take a look at each:

Block elements are like bricks you can stack on top of each other, but not next to each other.
Inline elements can be put, err, inline. So you can put them in the middle of a sentence, and use special CSS rules for them, and it won't break the sentence. Some stuff won't work for them, though: Height, width and margin-top, for instance.
And then there's the weirdo, `inline-block`. It behaves like an inline element, but now the useless properties from before suddenly work! Great, so we'll use that all the time then? Sadly, that's a bad idea, as `inline-block` doesn't line wrap.

If you want to put stuff somewhere else than it's default position (which I suppose you do, or else why are you here), the box model is your only weapon of choice: You can play around with transparent borders and negative margins, but they're all you got, and please don't go crazy with it because I might have to take over your codebase some day and I really don't want to deal with that.
So before you get some crazy ideas, let's move on to …

## Positioned layout

CSS has a `position` property. Fantastic! It accepts the following six values:

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`
- `where-i-want-it`

That last one is a lie.
Here's what the five non-made-up ones do:

`static` is the default.

`relative`, at first glance, does nothing. However, it unlocks these magical properties: `top`, `right`, `bottom` and `left`. Let's try putting `top` and `left` on it.
It makes our box move around! And the difference between this and playing around with margin is that this doesn't impact the layout of the other elements on the page.

`absolute`, `fixed` and `sticky` also all unlock the same CSS properties, but they all work a bit differently.

With `absolute`, the element is taken out of flow: The other elements on the page won't make room for it, it's dead to them.

With `fixed`, the element is also taken out of flow, and `top`, `right`, `bottom` and `left` is always relative to the viewport (err almost always, giant CSS asterisk, we'll get to it very soon!).

The `sticky` one is also a tricky one (heh), but you can use it to stick elements to the screen on a certain portion of the page.
At first, `sticky` elements are drawn where they would have gone in a normal flow layout.
However, when they're about to be scrolled off screen, they follow the screen, keeping a distance defined by `top`, `right`, `bottom` and `left` to the viewport, as long as they can do that and still remain inside their parent element.
It might be a little confusing at first, but play around with it for a little bit and it should make sense.

We have now arrived at our first milestone: The containing block!

Let's look at this element. It's containing block is the ancestor element that it uses to calculate where to go (and sometimes also how big it should be and sometimes it uses the width and sometimes it uses the height even when you wouldn't expect it to _but there's no time_)
Okay, cool. So how do we know which element is the containing block?
Well, that depends. Because CSS. Obviously.

More specifically, it depends on the value of the `position` property.

For `static`, `relative` or `sticky`, the containing block is formed by the edge of the content box (remember the box model!) of the nearest ancestor element that is either a block element, a table container, a flex container or a grid container.

For `absolute`, the containing block is formed by the _padding box_ of the nearest ancestor element that has a position value other than `static`.

For `fixed`, the containing block is established by the viewport.

But of course, these last two come with asterisks again, because if there's any ancestor that satisfies any of the following, it is also a candidate for the containing block:

Eksempler her!

- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective` (this is used for optimizing animations)
- A `filter` value other than `none` or a `will-change` value of `filter` (according to spec, but not everywhere)
- A `contain` value of `layout`, `paint`, `strict` or `content` (never used this)
- A `backdrop-filter` other than `none`.

Okay, let's see some examples!

_Eksempler her_

## Stacking elements

Great stuff, now we are a little bit wiser in terms of positioning our stuff. However, sometimes we want to put our stuff on top of other stuff!
This is where the `z-index` comes in.

_Tegning av 3D-rom her_

However, you don't always have to reach for `z-index`! When no `z-index` is specified, the browser will draw elements in the following order:

1. The background and borders of the root element (i.e. `<html>`)
2. Descendant non-positioned elements (i.e. with `position: static`), in order of appearance in the HTML (asterisk)
3. Descendant positioned elements, in order of appearance in the HTML

This means we really can do a lot without z-index!

Sometimes, though, there really is no way around it, and we'll have to slap a good old z-index on there.
And here's the first thing we need to know about `z-index`: For it to work at all, the element must be either positioned, or the direct child of a flex container or a grid container.

Here's a common example:
You made a site with a very nice header.
You also have an image gallery, where the main image is floating on top with some z-index tricks.
However, when you scroll, there's a problem:

Oh no!

The insinct fix to this is probably to increase the z-index of the header. Let's play it safe and set it to something like `10000`, that's probably as high as any index will go. Until you want a dialog overlay over it. An then the next special case after that. And the next one.
Before you know it, you'll have scientific notation in your CSS, and design system definitions for which powers of ten are reserved for which elements.

I exaggerate, but the point is, this quickly becomes unmaintainable, and mistakes will happen.
Instead, you may use a stacking context.
A stacking context is like a group for your z-indexes. The z-index is used to place elements within that context relative to each other, but they can never go outside of the group, no matter how big numbers you use.
These stacking contexts are then stacked relative to each other according to the same rules as we have already seen.

So what makes a stacking context? Again, this is CSS, so the answer is "a bunch of things":

- The root element (`<html>`)
- An element with a `position` value of `absolute` or `relative` _and_ a `z-index` with a value other than 0
