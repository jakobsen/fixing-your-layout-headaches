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
import Layouts from "./components/Layouts";

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
        <SectionTitle>Fixing your layout headaches</SectionTitle>
      </Slide>
      <Slide>
        <SectionTitle>css-for-js.dev</SectionTitle>
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
      <Layouts />
      <Slide>
        <h2
          style={{
            fontSize: "3rem",
            fontFamily: "Iosevka",
            marginRight: "3rem",
          }}
        >
          position:
        </h2>
        <ul
          style={{
            fontSize: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            fontFamily: "Iosevka",
          }}
        >
          <li>static</li>
          <li>relative</li>
          <li>absolute</li>
          <li>sticky</li>
          <li>fixed</li>
          <li>where-i-want-it</li>
        </ul>
      </Slide>
      <Slide>
        <h2
          style={{
            fontSize: "3rem",
            fontFamily: "Iosevka",
            marginRight: "3rem",
          }}
        >
          position:
        </h2>
        <ul
          style={{
            fontSize: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            fontFamily: "Iosevka",
          }}
        >
          <li>static</li>
          <li>relative</li>
          <li>absolute</li>
          <li>sticky</li>
          <li>fixed</li>
        </ul>
      </Slide>

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

.cta-link {
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

.cta-link:hover {
  background: black;
}
`}
          initialCode={`<style>
  .cta-link {

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
      <a class="cta-link" href="#">
        Come explore with us
      </a>
      <figcaption>
        Photo by Fabrizio Conti on Unsplash
      </figcaption>
    </figure>
    <p>That's some seriously high-quality content.</p>
  </section>
</main>
`}
        ></Playground>
      </Slide>

      <FullScreenButton scrollContainerRef={scrollRef} />
      <NavButtons scrollContainerRef={scrollRef} />
    </div>
  );
}

export default App;
