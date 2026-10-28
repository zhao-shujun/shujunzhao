# Shujun Zhao — academic website for GitHub Pages

This package contains the academic website prepared for Shujun Zhao. It preserves the clean white layout, purple links, and compact navigation of the latest approved design. It includes research, seven publications and preprints, teaching, selected talks, education, contact information, and downloadable CV and publication PDFs.

The website uses HTML, CSS, and JavaScript. It requires no framework, package installation, build command, or paid hosting service. GitHub Pages can publish the files directly.

## Update your existing GitHub website

Your GitHub account is `zhao-shu-jun`, and the current repository is `shujunzhao.github.io`.

Upload these replacement files to that repository and commit to `main`:

- `index.html`
- `styles.css`
- `assets/Shujun_Zhao_Portrait.jpeg` (new file, inside `assets`)

The update adds your supplied portrait, removes the academic-job-market banner, and removes the introductory research sentence you identified. The photograph is included unchanged. Your existing PDFs and publication data are preserved.

Your current project-site address is `https://zhao-shu-jun.github.io/shujunzhao.github.io/`. The extra path comes from the repository name. To use `https://zhao-shu-jun.github.io/`, rename the repository to exactly `zhao-shu-jun.github.io` in **Settings → General → Repository name**, provided that repository name is not already in use. Then check **Settings → Pages** still uses `main` and `/ (root)`. These files use relative links and support either address. Update any links you have shared after a repository rename.

## Publish using GitHub's website

1. **Unzip this package.** Open the extracted `Shujun_Zhao_GitHub_Pages` folder. The file `index.html` should be immediately inside it.
2. **Sign in to GitHub and create a new public repository.** Name it `YOUR_USERNAME.github.io`, replacing `YOUR_USERNAME` with your actual GitHub username in lowercase. For example, the user site in your reference belongs to the account `leeeeely`, so its address is `https://leeeeely.github.io/`. Use your own account name.
3. **Upload the contents of the extracted folder.** On the repository page, use **Add file → Upload files** (or the **uploading an existing file** link for an empty repository). Upload the files and the `assets` folder. Commit the upload to `main`.
   - Upload the extracted files, not the ZIP archive.
   - `index.html` must appear at the top level of the repository. Do not upload the enclosing `Shujun_Zhao_GitHub_Pages` folder as an extra level.
   - Keep the directory structure inside `assets` intact.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Source: Deploy from a branch**. Select **Branch: main** and **Folder: / (root)**, then click **Save**.
6. Wait for the first deployment, then use **Visit site** on the Pages settings screen. Publication can take up to 10 minutes. Your website address will be `https://YOUR_USERNAME.github.io/`.

No GitHub repository has been created by this package. These steps publish it under your account. The existing hosted website is independent and stays available.

## Preview before publishing

Open `index.html` in a browser. The layout, navigation, publication filters, and citation dialogs work locally. When a browser does not permit clipboard access, the citation button selects the text and shows keyboard-copy instructions.

For a preview over HTTP, if Python is installed, run this command from the extracted folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Stop the server with Ctrl+C when finished.

## Edit your website

| File | What to edit |
| --- | --- |
| `index.html` | Name, biography, research descriptions, publication list, teaching, talks, education, contact information, and update dates |
| `styles.css` | Colors, typography, spacing, and desktop/mobile layouts; the accent color is `--accent` near the beginning |
| `script.js` | Mobile navigation, publication filters, citation dialogs, and citation downloads |
| `publications.js` | Bibliographic data and BibTeX entries used by the citation controls |
| `assets/Shujun_Zhao_CV.pdf` | Your downloadable CV; replace this file with the same filename to keep existing links working |
| `assets/Shujun_Zhao_Publications.pdf` | Your downloadable publication list |
| `assets/publications.bib` | A static BibTeX download used when JavaScript is unavailable |
| `assets/favicon.svg` | The browser-tab icon |

GitHub's pencil button lets you edit text files directly. Commit changes to `main`; GitHub Pages will publish the update automatically. For PDF updates, upload the replacement file to the `assets` folder with the same name.

### Add or update a paper

1. Edit the appropriate publication entry in `index.html`. To add a paper, duplicate an existing `<article class="paper">` block and give it a unique `id`.
2. Use `data-category="published"` for published or accepted papers, or `data-category="preprint"` for preprints.
3. Add or update the corresponding entry in `publications.js`. Its `id` must match the citation button's `data-cite` value in `index.html`. Update the `bibtex` string, which is the citation actually displayed and downloaded.
4. Update the numbers in the three filter buttons in `index.html` if the paper counts change.
5. Update the static `assets/publications.bib` and the downloadable publication-list PDF when appropriate. With JavaScript enabled, the BibTeX download is generated directly from `publications.js`.

### Other maintenance

- Review the August 2027 expected graduation date as your status changes.
- Move a scheduled talk to past presentations after it takes place.
- Update the footer's date after substantial edits.
- The included PDFs are your previously supplied documents, unchanged.

## Repository and URL options

The account-level repository `YOUR_USERNAME.github.io` gives the shortest default address. If that repository already contains a website, preserve it and merge these files deliberately, or create a separate repository such as `academic-website`. The latter would publish at `https://YOUR_USERNAME.github.io/academic-website/` with the same branch settings. The package uses relative asset links and works at either address.

The HTML deliberately contains no hard-coded site address or canonical URL, so it supports both your current repository path and the shorter account-level address. The content does not depend on the previous hosting domain. After publication, you may add a canonical URL to the page's `<head>` using your actual address; this is optional for displaying the website.

An empty `.nojekyll` file is included to tell GitHub Pages to serve the static files directly. No custom domain, account credentials, Git history, or previous hosting configuration is included.

## Design and content

The layout uses the clean academic style discussed in this conversation, with the reference `https://biasse.net/training-programs/`. Your additional reference `https://leeeeely.github.io/` illustrates a personal academic website on GitHub Pages. No photographs, personal information, or source code from either reference website have been copied into this package.

The content is based on your supplied CV and publication list from October 2026. Research summaries and paper links were checked against the relevant arXiv records; the contact email agrees with the USF departmental directory.

## Official GitHub instructions

- [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

Setup instructions checked on October 27, 2026.

## Latest content update

Added Google Scholar and the advisor’s USF faculty profile, revised the research descriptions, added Advanced Linear Algebra to graduate teaching, and added REU mentoring entries for 2024 and 2025. Student names are pending confirmation because the supplied project/name pairings differ from the paper coauthor lists. Upload index.html and styles.css for this update. The downloadable PDFs have not been revised.
