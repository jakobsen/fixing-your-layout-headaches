import { useEffect, useRef } from "react";
import Playground from "./components/Playground";
import Slide from "./components/Slide/Slide";

import FullScreenButton from "./components/FullScreenButton/FullScreenButton";
import NavButtons from "./components/NavButtons/NavButtons";
import SectionTitle from "./components/SectionTitle";

import "./App.css";
import LayoutsSlide from "./components/Layouts";
import PositionsSlide from "./components/PositionsSlide/PositionsSlide";
import ContainingBlockSlide from "./components/ContainingBlockSlide";

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
        <p
          style={{ marginTop: "2rem", marginInline: "auto", fontSize: "2rem" }}
        >
          by erik andré jakobsen.
        </p>
      </Slide>

      <Slide>
        <SectionTitle>
          <span style={{ textDecoration: "underline" }}>css-for-js.dev</span>.
        </SectionTitle>
      </Slide>
      <Slide>
        <Playground
          showCssReset
          initialStyles={`body {
  background: black;
}
`}
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
        <SectionTitle>position.</SectionTitle>
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
  border-bottom: 4px solid currentColor;
  font-size: 2rem;
}

footer {
  background-color: purple;
  color: white;
  padding: 16px;
}

.help-btn {
  height: 60px;
  width: 60px;
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
  border: 4px solid currentColor;
  margin: 32px;
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
        <SectionTitle>containing block.</SectionTitle>
      </Slide>

      <Slide>
        <Playground
          initialStyles={`body {
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

      <ContainingBlockSlide />

      {/* Slide on a common gotcha with fixed elements */}
      <Slide>
        <Playground
          initialStyles={`header {
  padding: 16px 32px;
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
  max-width: 900px;
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
  <img src="http://localhost:5173/duck.png" />
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
  max-width: 900px;
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
  <img src="http://localhost:5173/duck.png" />
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
        <SectionTitle>stacking context.</SectionTitle>
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
  box-shadow: 12px 8px 20px 0px hsla(0deg 0% 0% / 0.4);
}

.cookie-banner p {
  margin-bottom: 32px;
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

  .cookie-banner {

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
  </div>

</main>`}
        ></Playground>
      </Slide>

      <Slide>
        <Playground
          initialStyles={`:root {
  --text-color: #030b2f;
  --text-faded: #80838c;
  --brand-color: #5f7cea;
  --white: #f5f6ff;

  --max-text-width: calc(50 * 1rem);

  --default-shadow: 0px 8px 10px 0px hsla(0deg 0% 0% / 0.1);
}

body {
  color: var(--text-color);
  background-color: var(--white);
}

header {
  background-color: #fff;
  padding: 40px;
  width: 100%;
  box-shadow: var(--default-shadow);
}

header h1, .text-section {
  max-width: var(--max-text-width);
  margin: auto;
}

.text-section {
  margin-bottom: 80px;
}

main {
  padding: 200px 32px;
}

.bottom {
  height: 100vh;
}


.pricing {
  display: flex;
  gap: 24px;
  margin-bottom: 200px;
  margin-inline: auto;
  max-width: min(1500px, 90vw);
}

.price-option {
  flex: 1;
  padding: 40px 40px 80px;
  border-radius: 16px;
  background: #fff;
  box-shadow: var(--default-shadow);
}

.price-option ul {
  list-style-type: "– ";
}

.price-option.popular {
  background: var(--text-color);
  color: var(--white);
}

.price-option.popular .amount {
  color: var(--white);
}

.price-option__header__title {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
}

.amount-wrapper {
  display: flex;
  align-items: baseline;
  color: var(--text-faded);
}

.amount {
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-color);
}

.buy-btn {
  display: block;
  padding: 12px;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);
  background-color: var(--brand-color);
  text-align: center;
  border-radius: 8px;
  margin-block: 20px;
}

.buy-btn:visited {
  color: inherit;
}

`}
          initialCode={`<style>
  header {
    position: fixed;
    top: 0;
  }

  .price-option.popular {
      flex: 1.3;
      margin: -32px -40px -20px;
  }
</style>

<header>
  <h1>Every SAAS pricing page ever</h1>
</header>

<main>
  <section class="text-section">
    <h2>Why you need our product</h2>
    <p>Chicken.</p>
    <p>Chicken chicken, chicken chicken chicken chicken.
    Chicken chicken chicken chicken chicken.</p>
    <p>Chicken—chicken?</p>
  </section>
  <section class="pricing">
  <article class="price-option">
    <div class="price-option__header">
      <div class="circle-icon"></div>
      <h2 class="price-option__header__title">Lite</h2>
    </div>
    <p>Our cheapest offering</p>
    <div class="amount-wrapper">
      <p class="amount">
        $19
      </p>
      / per month
    </div>
    <a href="#" class="buy-btn">Get it now</a>
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>What are you, poor?</li>
        <li>Fine, buy the cheap one</li>
        <li>But no customer support for you!</li>
      </ul>
    </div>
  </article>

  <article class="price-option popular">
    <div class="price-option__header">
      <div class="circle-icon"></div>
      <h2 class="price-option__header__title">Pro</h2>
    </div>
    <p>Best value! (🤞)</p>
    <div class="amount-wrapper">
      <p class="amount">
        $39
      </p>
      / per month
    </div>
    <a href="#" class="buy-btn">Get it now</a>
    <div class="features">
      <h2>Features</h2>
      … everything from lite, and
      <ul>
        <li>This will actually work!</li>
        <li>probably</li>
        <li>We'll read your emails and respond if we're hit by a sudden bolt of inspiration</li>
      </ul>
    </div>
  </article>

  <article class="price-option">
    <div class="price-option__header">
      <div class="circle-icon"></div>
      <h2 class="price-option__header__title">Enterprise</h2>
    </div>
    <p>If you have too much money</p>
    <div class="amount-wrapper">
      <p class="amount">
        $1M
      </p>
      / per month
    </div>
    <a href="#" class="buy-btn">Get it now</a>
    <div class="features">
      <h2>Features</h2>
      … everything from pro, and
      <ul>
        <li>We will treat you like a <em>god</em></li>
        <li>We are not worthy</li>
        <li>Call us anytime at my home number</li>
      </ul>
    </div>
  </article>
</section>

  <section class="text-section bottom">
    <h2>This is just here so we can scroll</h2>
    <p>Also, here's a lot of empty space:</p>
  </section>
</main>`}
        />
      </Slide>

      {/* This stuff is for the stacking context: */}
      {/* <Slide>
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
      </Slide> */}

      <Slide>
        <h1
          style={{
            fontFamily: "'Iosevka', monospace",
            fontSize: "6rem",
            marginBottom: "15vh",
          }}
        >
          eaj@blank.no
        </h1>
        <h1
          style={{
            fontFamily: "'Iosevka', monospace",
            fontSize: "6rem",
            marginBottom: "5vh",
          }}
        >
          github.com/jakobsen
        </h1>
      </Slide>

      <FullScreenButton scrollContainerRef={scrollRef} />
      <NavButtons scrollContainerRef={scrollRef} />
    </div>
  );
}

export default App;
