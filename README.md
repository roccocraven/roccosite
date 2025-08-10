# Rocco Craven — Personal Site (Project Pages)

Static site with:
- Blog (Markdown posts in `/posts`, listed via `/posts/index.json`)
- Minigames (Tic-Tac-Toe, Snake) in `/games`
- Ideas page

This repo is a Project Pages site, live at: https://roccocraven.github.io/Roccosite

## Add a post
1. Create a Markdown file in `/posts`, e.g. `my-note.md`.
2. Add an entry to `/posts/index.json` at the top:
   {
     "title": "My Note",
     "date": "2025-08-10",
     "slug": "my-note",
     "summary": "What this note is about."
   }
3. Ensure the filename matches `slug` (e.g. `my-note.md`).
4. Commit and push. The blog list auto-updates from `index.json`.

## Run locally
Opening HTML files directly blocks fetch. Run a tiny server:
- Python: `python -m http.server`
- Node: `npx http-server`

## Deploy to GitHub Pages
- Settings → Pages → Source: Deploy from a branch
- Branch: `main`, Folder: `/ (root)`
- Save. Site: https://roccocraven.github.io/Roccosite

## Notes
- Links and fetches are relative (no leading `/`) so they work on Project Pages.
- To switch to a user site later, use a repo named `roccocraven.github.io`.
