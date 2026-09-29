# Alcatraz Help site source

The root `index.html`, `styles.css`, and `script.js` are the reviewed static page entry. Run `npm install` and `npm run build`; publish the resulting `dist/` directory through the separately approved host workflow. Vite bundles the stylesheet and module script into `dist/assets/`, and copies `public/_redirects` and `public/web.config` into `dist/`. The build runs lint and an entrypoint/artifact regression check.

The React `src/` tree is an unmounted prototype. Editing it does not change the current site output. Do not switch to its entry without comparing the public copy, links, and service claims and updating the entrypoint test. Its packages remain for prototype work; the production Vite config does not load the React plugin or emit placeholder React chunks.

A local build only verifies a proposed artifact. It does not establish which files a live host serves. Before publication, confirm the host's build input and output path, inspect the actual served HTML and asset requests, and obtain operator approval for service/availability copy, including the 24/7 emergency support wording. This source change does not deploy or change hosting settings.
