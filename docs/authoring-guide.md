---
title: Authoring and deployment guide
---

# Authoring and deployment guide

## Local preview

Create a virtual environment, install the pinned dependency, and start the development server:

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
python -m pip install -r requirements.txt
mkdocs serve
```

MkDocs watches Markdown, CSS, JavaScript, and theme overrides. The local preview is normally available at `http://127.0.0.1:8000/`.

## Deploying to the `gh-pages` branch

The repository does not need GitHub Actions. From a clean local checkout on the branch containing the desired source:

```bash
mkdocs build --strict
mkdocs gh-deploy --force --clean
```

`mkdocs gh-deploy` builds the site and pushes the generated output to the `gh-pages` branch. GitHub Pages should be configured to publish from the root of that branch.

## Modular lecture structure

Each major conceptual section should be a separate Markdown file:

```text
lecture-02/
├── index.md
├── 01-from-points.md
├── 02-addition.md
├── 03-scaling.md
└── ...
```

Reusable visual behaviour belongs in `docs/javascripts/`, while presentation belongs in `docs/stylesheets/`. Markdown pages contain only a small semantic host element for an interactive figure.

## Long multiline derivations

Long derivations are supported by MathJax. Prefer several readable display blocks rather than one enormous formula.

```markdown
<div class="derivation-block" markdown>
<span class="block-label">Derivation</span>

First substitute the preceding identity:

$$
\begin{aligned}
F(x)
  &= A(x)+B(x)\\
  &= C(x)+D(x).
\end{aligned}
$$

Now apply the next theorem:

$$
\begin{aligned}
F(x)
  &= E(x)\\
  &= G(x).
\end{aligned}
$$
</div>
```

Supported MathJax environments include `aligned`, `alignedat`, `gathered`, `cases`, `matrix`, `pmatrix`, `bmatrix`, and AMS equation tags.

For a particularly wide calculation, break the argument at a mathematically meaningful equality. The site stylesheet provides horizontal scrolling as a fallback, but logical line breaking is preferable.

## Long proofs

A proof may contain any amount of Markdown, multiple formulas, figures, lists, and subordinate headings:

```markdown
<div class="proof-block" markdown>
<span class="block-label">Proof</span>

Start with the hypotheses...

$$
\begin{aligned}
...
\end{aligned}
$$

Continue with the geometric argument...

Therefore the claim follows. $\square$
</div>
```

For optional or reference-level proofs, use a collapsible block:

```markdown
??? proof "Detailed proof"
    The complete proof can span many paragraphs.

    $$
    \begin{aligned}
    ...
    \end{aligned}
    $$
```

## Interactive figures

A Markdown page declares a host:

```html
<div id="example-board" class="jxgbox" data-example-board></div>
```

The corresponding module registers an idempotent initializer with `window.MathematicalStories`. This is important because Material for MkDocs may replace page content without a full browser reload.
