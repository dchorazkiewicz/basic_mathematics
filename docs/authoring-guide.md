---
title: Authoring and deployment
---

# Authoring and deployment

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
python -m pip install -r requirements.txt
mkdocs serve
```

## Deploy to GitHub Pages

```bash
mkdocs build --strict
mkdocs gh-deploy --force --clean
```

Configure GitHub Pages to publish from the root of the `gh-pages` branch.

## Modular lecture structure

Each lecture remains one long reading page, matching the reference site, while its source is split into semantic section modules:

```text
docs/lecture-02/
├── index.md
└── sections/
    ├── 01-from-points.md
    ├── 02-addition.md
    └── ...
```

`index.md` assembles the modules with `pymdownx.snippets`. New prose may be written directly in Markdown. Preserve the semantic `data-*` host elements inside interactive figures because the JavaScript modules use them to find and initialise each board.

## Long proofs and multiline derivations

Long proofs may contain any number of Markdown paragraphs and display equations. MathJax supports environments such as `aligned`, `alignedat`, `gathered`, `cases`, `matrix`, `pmatrix`, and `bmatrix`.

```markdown
<div class="statement proof" markdown>
  <div class="statement-label">Proof</div>

A long argument can continue across many paragraphs.

$$
\begin{aligned}
A_1 &= A_2 \\
    &= A_3 \\
    &= A_4.
\end{aligned}
$$

The proof may then continue with further text and figures.
</div>
```

## Interactive figures and fullscreen

The original JSXGraph modules and fullscreen controller are loaded globally by the custom MkDocs theme. A figure keeps the same host markup as the reference site, for example:

```html
<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <span class="figure-title">Figure title</span>
    <button class="icon-button" type="button" data-fullscreen aria-label="Open figure in full screen">⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="example-board" class="jxgbox" data-example-board></div>
  </div>
</figure>
```

The `data-fullscreen-panel` and `data-fullscreen` attributes activate the same enlargement behaviour as the original custom site.
