import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";

import styles from "./playground.styles.module.css";

interface PlaygroundProps {
  initialCode: string;
  initialStyles?: string;
  showCssReset?: boolean;
}

export default function Playground({
  initialCode,
  initialStyles,
  showCssReset = false,
}: PlaygroundProps) {
  return (
    <Sandpack
      template="static"
      options={{
        externalResources: ["/reset.css", "/styles.css"],
        classes: {
          "sp-wrapper": styles.wrapper,
          "sp-layout": styles.fullHeight,
          "sp-stack": styles.fullHeight,
        },
      }}
      theme={{
        ...githubLight,
        font: {
          mono: `"Iosevka", ${githubLight.font.mono}`,
          size: "24px",
          lineHeight: "1.3",
        },
      }}
      files={{
        "/index.html": {
          code: initialCode,
        },
        "/reset.css": {
          hidden: !showCssReset,
          code: `*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  font-family: Inter;
  font-size: 1.2rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
}
`,
        },
        "/styles.css": {
          hidden: initialStyles == undefined,
          code: initialStyles ?? "",
        },
      }}
    />
  );
}
