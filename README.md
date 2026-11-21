# Manish Garg — personal site

Static site: one `index.html` plus images in `img/` and `slides/`. No build step.

## Run it locally
Open the folder in VS Code, then either:
- double-click `index.html` to open it in your browser, or
- install the **Live Server** extension, right-click `index.html` → **Open with Live Server** (auto-reloads on save).

## Put it live (GitHub Pages)
1. Create a public repo named `manishsdbct.github.io`.
2. Push this folder to it:
   ```bash
   git init && git add . && git commit -m "Personal site"
   git branch -M main
   git remote add origin https://github.com/manishsdbct/manishsdbct.github.io.git
   git push -u origin main
   ```
3. GitHub → Settings → Pages → Deploy from a branch → `main` / `(root)`.
4. Live at https://manishsdbct.github.io in a minute or two. Every later `git push` updates it.

## Add a blog post
Two edits in `index.html`:

1. Add the article just above the `<script>` tag, next to the other `<template>` blocks:
   ```html
   <template id="t-my-new-post">
   <p>Opening paragraph…</p>
   <h2>Section heading</h2>
   <p>Text with <strong>bold</strong> and <code>code</code>.</p>
   </template>
   ```
2. Add its details at the **top** of the `const posts=[` list (the first post is featured on Home):
   ```js
   {slug:"my-new-post",title:"Title",dek:"One-line summary.",date:"Dec 2026",tag:"Agents",project:"FoodAgent",stat:["3x","faster responses"]},
   ```
   `slug` must match the template id without `t-`. Optional: `img:"img/your-image.jpg"` (put the image in `img/`).

## Add a project
Add an entry to the `const side=[` list (personal projects) or `const job=[` (day-job highlights) in `index.html`.
