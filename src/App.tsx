import { useEffect, useRef } from "react";
import BoxModelDemo from "./components/BoxModelDemo/BoxModelDemo";
import BoxSizingDemo from "./components/BoxSizingDemo/BoxSizingDemo";
import Playground from "./components/Playground";
import Slide from "./components/Slide/Slide";

import FullScreenButton from "./components/FullScreenButton/FullScreenButton";
import NavButtons from "./components/NavButtons/NavButtons";
import SectionTitle from "./components/SectionTitle";

import styles from "./temp.module.css";
import "./App.css";
import LayoutsSlide from "./components/Layouts";
import PositionsSlide from "./components/PositionsSlide/PositionsSlide";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.target != document.body) return;
      if (e.key == "ArrowRight") {
        scrollRef.current?.scrollBy(0, window.innerHeight);
      } else if (e.key == "ArrowLeft") {
        scrollRef.current?.scrollBy(0, -window.innerHeight);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className="app-scroll-container" ref={scrollRef}>
      <Slide>
        <SectionTitle>fixing your layout headaches.</SectionTitle>
      </Slide>

      <Slide>
        <SectionTitle>
          <span style={{ textDecoration: "underline" }}>css-for-js.dev</span>
        </SectionTitle>
      </Slide>

      <Slide>
        <SectionTitle>preliminary stuff.</SectionTitle>
      </Slide>

      <Slide>
        <BoxModelDemo />
      </Slide>
      <Slide>
        <div className={styles.codeblock}>
          <span className={styles.selector}>*, *::before, *::after</span>{" "}
          <span className={styles.bracket}>&#123;</span> <br />
          &nbsp;&nbsp;<span className={styles.property}>box-sizing</span>:{" "}
          <span className={styles.value}>border-box</span>;
          <br />
          <span className={styles.bracket}>&#125;</span>
        </div>
      </Slide>
      <Slide>
        <BoxSizingDemo />
      </Slide>
      <Slide>
        <Playground
          showCssReset
          initialCode={`<style>
.box {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}

.red {
  background: tomato;
}

.blue {
  background: royalblue;
}

.blue.box {

}
</style>

<div class="red box"></div>
<div class="blue box"></div>
`}
        />
      </Slide>

      <Slide>
        <SectionTitle>position</SectionTitle>
      </Slide>
      <LayoutsSlide />
      <PositionsSlide />

      <Slide>
        <Playground
          initialCode={`<style>
.box {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}

.red {
  background: tomato;
}

.blue {
  background: royalblue;
}

.pink {
  background: hotpink;
}

.blue.box {
  
}
</style>

<div class="red box"></div>
<div class="blue box"></div>
<div class="pink box"></div>
        `}
        />
      </Slide>

      <Slide>
        <Playground
          initialStyles={`header {
  text-align: center;
  padding: 32px;
  border-bottom: 2px solid currentColor;
  font-size: 2rem;
}

footer {
  background-color: purple;
  color: white;
  padding: 16px;
}

.help-btn {
  height: 50px;
  width: 50px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 50%;
  appearance: none;
  background: none;
  border: 2px solid black;
  background-color: white;
}

.help-btn:hover {
  background-color: hsl(0deg 0% 0% / 0.1);
}

.help-btn:active {
  background-color: hsl(0deg 0% 0% /0.2);
}
`}
          initialCode={`<style>
section {
  height: 100vh;
  padding: 16px 32px;
}

.article-heading {

}

.help-btn {

}
</style>

<header>
  <h1>A nice header</h1>
</header>

<main>
  <section>
    <h2 class="article-heading">Lots of content here</h2>
    <p>It's great.</p>
  </section>

  <section>
    <h2 class="article-heading">Even more content!</h2>
    <p>Wow, that's fantastic!</p>
  </section>

  <button class="help-btn">?</button>
</main>

<footer>
  Thank you for visiting!
</footer>
        `}
        />
      </Slide>

      <Slide>
        <SectionTitle>containing block</SectionTitle>
      </Slide>

      <Slide>
        <Playground
          initialStyles={`:root {
  font-size: 20px;
}
          
body {
  font-family: 'Georgia';
}

main {
  padding: 32px 16px;
  font-family: 
}

h1 {
  line-height: 1;
  margin-bottom: 1em;
}

p {
  margin-bottom: 1em;
}

figure {
  margin-bottom: 1rem;
}

figcaption {
  font-size: 18px;
  color: #444;
}

.cta-button {
  display: block;
  color: white;
  background: #444;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-family: Futura;
  width: max-content;
  font-size: 1.2em;
}

.cta-button:hover {
  background: black;
}
`}
          initialCode={`<style>
  .cta-button {

  }
</style>

<main>
  <h1>Look at this great article</h1>
  <section>
    <p>It's so great!</p>
    <p>It has a lot of content!</p>
    <p>
      And look, it even has a great picture,
      and a great call to action button!
    </p>
    <figure>
      <img
        src="http://localhost:5173/skiers.jpg"
      />
      <a class="cta-button" href="#">
        Come explore with us
      </a>
      <figcaption>
        Photo by Fabrizio Conti on Unsplash
      </figcaption>
    </figure>
    <p>That's some seriously high-quality content.</p>
    <p>
      However, it would be very nice if we could center the
      button on top of the image
    </p>
  </section>
</main>
`}
        ></Playground>
      </Slide>

      <Slide>
        <ol>
          <li>
            If the <code>position</code> property is{" "}
            <strong>
              <code>static</code>
            </strong>
            ,{" "}
            <strong>
              <code>relative</code>
            </strong>
            , or{" "}
            <strong>
              <code>sticky</code>
            </strong>
            , the containing block is formed by the edge of the{" "}
            <em>content box</em> of the nearest ancestor element that is either{" "}
            <strong>a block container</strong> (such as an inline-block, block,
            or list-item element) or{" "}
            <strong>establishes a formatting context</strong> (such as a table
            container, flex container, grid container, or the block container
            itself).
          </li>
          <li>
            If the <code>position</code> property is{" "}
            <strong>
              <code>absolute</code>
            </strong>
            , the containing block is formed by the edge of the{" "}
            <em>padding box</em> of the nearest ancestor element that has a{" "}
            <code>position</code> value other than <code>static</code> (
            <code>fixed</code>, <code>absolute</code>, <code>relative</code>, or{" "}
            <code>sticky</code>).
          </li>
          <li>
            If the <code>position</code> property is{" "}
            <strong>
              <code>fixed</code>
            </strong>
            , the containing block is established by the{" "}
            <a href="/en-US/docs/Glossary/Viewport">viewport</a> (in the case of
            continuous media) or the page area (in the case of paged media).
          </li>
          <li>
            If the <code>position</code> property is{" "}
            <strong>
              <code>absolute</code>
            </strong>{" "}
            or{" "}
            <strong>
              <code>fixed</code>
            </strong>
            , the containing block may also be formed by the edge of the{" "}
            <em>padding box</em> of the nearest ancestor element that has the
            following:
            <ol>
              <li>
                A{" "}
                <a href="/en-US/docs/Web/CSS/transform">
                  <code>transform</code>
                </a>{" "}
                or{" "}
                <a href="/en-US/docs/Web/CSS/perspective">
                  <code>perspective</code>
                </a>{" "}
                value other than <code>none</code>
              </li>
              <li>
                A{" "}
                <a href="/en-US/docs/Web/CSS/will-change">
                  <code>will-change</code>
                </a>{" "}
                value of <code>transform</code> or <code>perspective</code>
              </li>
              <li>
                A{" "}
                <a href="/en-US/docs/Web/CSS/filter">
                  <code>filter</code>
                </a>{" "}
                value other than <code>none</code> or a <code>will-change</code>{" "}
                value of <code>filter</code> (only works on Firefox).
              </li>
              <li>
                A{" "}
                <a href="/en-US/docs/Web/CSS/contain">
                  <code>contain</code>
                </a>{" "}
                value of <code>layout</code>, <code>paint</code>,{" "}
                <code>strict</code> or <code>content</code> (e.g.{" "}
                <code>contain: paint;</code>)
              </li>
              <li>
                A{" "}
                <a href="/en-US/docs/Web/CSS/backdrop-filter">
                  <code>backdrop-filter</code>
                </a>{" "}
                other than <code>none</code> (e.g.{" "}
                <code>backdrop-filter: blur(10px);</code>)
              </li>
            </ol>
          </li>
        </ol>
        From{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">
          MDN
        </a>
        .
      </Slide>

      {/* Slide on a common gotcha with fixed elements */}
      <Slide>
        <Playground
          initialStyles={`header {
  padding: 16px 32px;
  max-width: 720px;
  margin-inline: auto;
}

h1 {
  font-size: 3rem;
  font-weight: 400;
}

.cart-btn {
  appearance: none;
  background: #eee;
  border: 2px solid #aaa;
  padding: 8px 32px;
  border-radius: 32px;
}

.cart-btn:hover {
  background: #fff;
}

.cart-btn:active {
  background: #aaa;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 32px;
  max-width: 720px;
  margin-inline: auto;
}

.shop-item {
  padding: 32px;
}

.shop-item h2 {
  font-weight: 400;
  font-size: 2rem;
}

.shop-item .price-wrapper {
  display: flex;
  justify-content: space-between;
}

.shop-item .price-wrapper .price {
  font-weight: 600;
  font-size: 2rem;
}

.shop-item .price-wrapper .price:after {
  content: ' kr';
}

.buy-btn {
  appearance: none;
  border: none;
  background: black;
  color: white;
}
`}
          initialCode={`<style>
  .cart-btn {
    position: fixed;
    top: 24px;
    right: 32px;
  }
</style>

<header>
<h1>A great webshop.</h1>
  <button class="cart-btn">
    <img
      src="http://localhost:5173/cart.svg"
      width="32"
      height="32"
    />
  </button>
</header>

<!-- This stuff isn't important -->
<main id="items-container">
</main>

<script>
  const duckItem = \`<div class="shop-item">
  <img src="http://localhost:5173/duck.webp" />
  <h2>Rubber duck</h2>
  <div class="price-wrapper">
    <p class="price">99</p>
    <button class="buy-btn">Buy</button>
  </div>
</div>
\`;
  const container = document.querySelector("#items-container");
  container.innerHTML = Array.from({ length: 24 }).fill(duckItem).join("\\n")
</script>
`}
        />
      </Slide>

      {/* This is the same slide as above, but with the problematic behavior */}
      <Slide>
        <Playground
          initialStyles={`header {
  padding: 16px 32px;
  max-width: 720px;
  margin-inline: auto;
}

h1 {
  font-size: 3rem;
  font-weight: 400;
}

.cart-btn {
  appearance: none;
  background: #eee;
  border: 2px solid #aaa;
  padding: 8px 32px;
  border-radius: 32px;
}

.cart-btn:hover {
  background: #fff;
}

.cart-btn:active {
  background: #aaa;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 32px;
  max-width: 720px;
  margin-inline: auto;
}

.shop-item {
  padding: 32px;
}

.shop-item h2 {
  font-weight: 400;
  font-size: 2rem;
}

.shop-item .price-wrapper {
  display: flex;
  justify-content: space-between;
}

.shop-item .price-wrapper .price {
  font-weight: 600;
  font-size: 2rem;
}

.shop-item .price-wrapper .price:after {
  content: ' kr';
}

.buy-btn {
  appearance: none;
  border: none;
  background: black;
  color: white;
}
`}
          initialCode={`<style>
  header {
    position: fixed;
    top: 0;
    transition: transform 300ms;
  }

  header.hidden {
    transform: translateY(-100%);
  }

  main {
    margin-top: 104px;
  }
  
  .cart-btn {
    position: fixed;
    top: 24px;
    right: 32px;
  }

  .hide-btn {
    position: fixed;
    bottom: 32px;
    left: 32px;
  }
</style>

<header>
<h1>A great webshop.</h1>
  <button class="cart-btn">
    <img
      src="http://localhost:5173/cart.svg"
      width="32"
      height="32"
    />
  </button>
</header>
<button
  class="hide-btn"
  id="hide-btn"
>
  Hide header
</button>

<!-- This stuff isn't important -->
<main id="items-container">
</main>

<script>
  const header = document.querySelector('header');
  const hideBtn = document.querySelector('#hide-btn');
  hideBtn.addEventListener('click', () => {
    header.classList.toggle('hidden');
  })
</script>

<script>
  const duckItem = \`<div class="shop-item">
  <img src="http://localhost:5173/duck.webp" />
  <h2>Rubber duck</h2>
  <div class="price-wrapper">
    <p class="price">99</p>
    <button class="buy-btn">Buy</button>
  </div>
</div>
\`;
  const container = document.querySelector('#items-container');
  container.innerHTML = Array.from({ length: 24 }).fill(duckItem).join('\\n')
</script>
`}
        />
      </Slide>

      <Slide>
        <SectionTitle>stacking context</SectionTitle>
      </Slide>

      <Slide>
        <Playground
          initialStyles={`:root {
  --background-color: #111;
}

header {
  background: var(--background-color);
  color: white;
  padding: 32px 64px;
  border-bottom: 3px solid deeppink;
}

header h1 {

}

main {
  padding: 32px 32px;
}

.wops {
  text-decoration: line-through;
  opacity: 0.6;
}

.cookie-banner {
  width: 90vw;
  background: var(--background-color);
  color: white;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 12px 8px 20px 0px hsla(0deg 0% 0% / 0.4);
}

.button-wrapper {
  display: flex;
  gap: 16px;
}

.button-wrapper button {
  appearance: none;
  border: 1px solid white;
  background: none;
  padding: 8px;
  color: inherit;
  border-radius: 16px;
}

.button-wrapper button:hover {
  background: white;
  color: var(--background-color);
}

`}
          initialCode={`<style>
  header {
    position: relative;
    z-index: 2;
  }

  main {
    position: relative;
    z-index: 1;
  }
</style>

<header>
  <h1>He's done it again!</h1>
  <p>Yet another great site.</p>
</header>
<main>
  <h2>This is super interesting</h2>
  <p>Good lord, this is some <em>quality</em> content.</p>
  <p>I can't wait to see what it says down below!</p>

  <div class="cookie-banner">
    <div>
      <h2>Oh wow, cookies! 🍪😋</h2>
      <p>
        Accept cookies so that we can
        <span class="wops">sell your data</span>
        give you a good experience.
      </p>
    </div>
    <div class="button-wrapper">
      <button>Okay</button>
      <button>I'm lame</button>
    </div>

</main>`}
        ></Playground>
      </Slide>

      <Slide>
        <Playground
          initialCode={`<header>
  <h1>Every SAAS pricing page ever</h1>
</header>

<main>
  <section>
    <h2>Why you need our product</h2>
    <p>Bla bla bla bla bla bla</p>
  </section>
  <section class="pricing">
    <div></div>
    <div></div>
    <div></div>
  </section>
  <section class="bottom">
    <h2>This is just here so we can scroll</h2>
    <p>Also, here's a lot of empty space:</p>
  </section>
</main>`}
        />
      </Slide>

      {/* This stuff is for the stacking context: */}
      <Slide>
        <ul>
          <li>
            Root element of the document (<code>&lt;html&gt;</code>).
          </li>
          <li>
            Element with a position value absolute or relative and z-index value
            other than auto.
          </li>
          <li>
            Element with a position value fixed or sticky (sticky for all mobile
            browsers, but not older desktop browsers).
          </li>
          <li>
            Element that is a child of a flex container, with z-index value
            other than auto.
          </li>
          <li>
            Element that is a child of a grid container, with z-index value
            other than auto.
          </li>
          <li>
            Element with an opacity value less than 1 (See the specification for
            opacity).
          </li>
          <li>Element with a mix-blend-mode value other than normal.</li>
          <li>
            Element with any of the following properties with value other than
            none:
          </li>
          <ul>
            <li>transform</li>
            <li>filter</li>
            <li>backdrop-filter</li>
            <li>perspective</li>
            <li>clip-path</li>
            <li>mask / mask-image / mask-border</li>
          </ul>
          <li>Element with an isolation value isolate.</li>
          <li>
            Element with a will-change value specifying any property that would
            create a stacking context on non-initial value (see this post).
          </li>
          <li>
            Element with a contain value of layout, or paint, or a composite
            value that includes either of them (i.e. contain: strict, contain:
            content).
          </li>
        </ul>
      </Slide>

      <Slide>
        <h1 style={{ fontFamily: "'Iosevka', monospace", fontSize: "6rem" }}>
          eaj@blank.no
        </h1>
      </Slide>

      <FullScreenButton scrollContainerRef={scrollRef} />
      <NavButtons scrollContainerRef={scrollRef} />
    </div>
  );
}

export default App;
