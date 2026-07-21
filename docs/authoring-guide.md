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

`index.md` assembles the modules with `pymdownx.snippets`. All headings, paragraphs, lists, tables, exercises, proofs and formulas are authored in Markdown. HTML is reserved for the internal controls and host elements of interactive figures.

## Semantic mathematical environments

Use Markdown admonitions instead of hand-written HTML wrappers.

### Definition

```markdown
!!! definition "Vector norm"
    For $\mathbf v=[v_1,v_2]$ define

    $$
    \|\mathbf v\|=\sqrt{v_1^2+v_2^2}.
    $$
```

### Theorem

```markdown
!!! theorem "Projection theorem"
    Every vector admits an orthogonal decomposition.
```

### Long derivation

```markdown
!!! derivation "Eliminating the parameter"
    First substitute the preceding identity:

    $$
    \begin{aligned}
    F(x)
      &=A(x)+B(x)\\
      &=C(x)+D(x).
    \end{aligned}
    $$

    Continue the argument in ordinary Markdown paragraphs.
```

### Collapsible long proof

```markdown
??? proof "Proof"
    The proof may contain any number of paragraphs, lists and equations.

    $$
    \begin{aligned}
    A_1 &= A_2 \\
        &= A_3 \\
        &= A_4.
    \end{aligned}
    $$

    Continue until the argument is complete. $\square$
```

Available styled types include:

```text
definition, theorem, proof, derivation, principle, interpretation,
example, problem, question, consequence, summary, warning, note
```

## Long proofs and multiline mathematics

MathJax supports `aligned`, `alignedat`, `gathered`, `cases`, `matrix`, `pmatrix`, and `bmatrix`. A proof should normally be split into several meaningful display equations rather than one extremely wide formula. On narrow screens, display mathematics receives horizontal scrolling as a fallback.

## Interactive figures and fullscreen

Interactive figures are the one intentional HTML exception because their buttons, sliders and `data-*` hooks are consumed directly by JavaScript. Keep the host markup local to the section where the figure appears:

```html
<figure class="figure-panel jsx-panel" data-fullscreen-panel tabindex="0">
  <div class="figure-toolbar">
    <span class="figure-title">Figure title</span>
    <button class="icon-button" type="button" data-fullscreen>⛶</button>
  </div>
  <div class="figure-stage jsx-stage">
    <div id="example-board" class="jxgbox" data-example-board></div>
  </div>
</figure>
```

The `data-fullscreen-panel` and `data-fullscreen` attributes activate the same enlargement behaviour as the original custom site. Do not place ordinary prose, definitions, proofs or formulas inside figure markup.
