# Pantelis Kazakis — personal website

An academic website for https://panteliskazakis.github.io, with four pages: Home, Research, Teaching, and CV. Page text is written in Markdown; GitHub Pages builds the website using Jekyll automatically. No coding software, paid theme, or external font service is needed.

## Publish for the first time

1. Extract the downloaded ZIP on your computer.
2. Open the extracted `pantelis-website` folder. You should see `index.md`, `_config.yml`, and folders called `_layouts` and `assets`.
3. Open your repository: https://github.com/panteliskazakis/panteliskazakis.github.io
4. Choose **Add file → Upload files**. Drag ALL the contents of the extracted `pantelis-website` folder into the upload area. Include the `_layouts` and `assets` folders. Do not upload the ZIP itself or the enclosing `pantelis-website` folder.
5. Choose **Commit changes** to save to the `main` branch. Replacing the initial README is expected.
6. Choose **Settings → Pages** in the repository.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Choose **main** and **/(root)**, then click **Save**.
9. Wait for publishing to finish. GitHub says initial publishing can take up to 10 minutes. Visit https://panteliskazakis.github.io.

If you only see the repository name, check that `index.md` and `_config.yml` are at the top level of your repository, not inside an extra folder. If publishing fails, open the **Actions** tab to view the build result and send a screenshot for help. Do not add a `.nojekyll` file; these pages use Jekyll.

## Make a text change

1. In the repository, click the page file you want to edit.
2. Click the pencil icon (**Edit this file**).
3. Edit the text beneath the second `---` line. Keep the settings between the opening `---` lines unchanged unless you intend to change the page settings.
4. Click **Commit changes** and save to `main`. This means “save a new version.”
5. Wait for GitHub Pages to rebuild, then refresh your website.

| What you want to change | File |
| --- | --- |
| Homepage biography and research interests | `index.md` |
| Publications, working papers, and paper links | `research.md` |
| Courses and teaching information | `teaching.md` |
| Short CV sentence | `cv.md` |
| Full downloadable CV | `assets/CV.pdf` |
| Name, main email, photograph path, PDF CV path | `_config.yml` |
| Postal address on the homepage | `_layouts/home.html` |
| Colours, fonts, spacing | `assets/style.css` |

See **EDITING-GUIDE.md** for photo, CV, and link instructions.

## Content sources

Initial biography, research interests, address, and photograph: the existing Google Sites homepage supplied by Pantelis Kazakis.

Research and full CV: `CV_Kazakis.pdf`, dated 9 September 2026. Teaching: the six courses and dates in the screenshot supplied by Pantelis, including Applied Finance from 2027 and the PhD Causal Inference course from 2024. Publications are listed together without journal ranking labels. Submission targets and review statuses are omitted. The full PDF is bundled as `assets/CV.pdf`. The CV page contains only “Find my CV here,” with “here” linking to that PDF. Paper details reflect that CV and should be updated as publications progress. Published-paper links and six SSRN links are taken from the CV and existing website. The accepted CFO paper links to its SSRN version because that is the paper link supplied in the CV. Local Information and Private Capital Allocation, Zodiac Year Beliefs and Green Investment Efficiency, and Tax regimes and profit shifting are not online yet, as confirmed by Pantelis. They are intentionally listed without SSRN buttons; links can be added when the papers are online. SSRN blocked automated page checks; these links reproduce the author-supplied URLs. The CV and current Google site label SSRN 4596489 differently; this package preserves the title and URL paired in the CV.

Official publishing instructions: https://docs.github.com/en/pages/quickstart


## Light and dark themes

The **Dark mode** button in the header switches the whole website between light and dark themes. On a first visit, the site follows the visitor's device setting. After a visitor uses the button, that choice is saved in their browser and reused across pages and visits. If browser storage is disabled, switching still works on the current page. The PDF is displayed by the browser's PDF viewer and keeps its original formatting.

Theme colours are in `assets/style.css`; the button behaviour is in `assets/theme.js`.
