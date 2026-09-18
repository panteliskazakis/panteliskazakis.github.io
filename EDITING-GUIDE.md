# Updating your website

All updates can be made in your web browser on GitHub. You do not need to install anything.

## Replace your photograph

1. Choose a JPG photograph and name it `photo.jpg` on your computer. If your image is a PNG, keep the `.png` extension and use the alternative below; changing the extension does not convert an image.
2. Open the `assets` folder in your GitHub repository.
3. Choose **Add file → Upload files**, upload `photo.jpg`, and **Commit changes**. It replaces the old photo.
4. Wait for the website to rebuild and refresh the page.

For another filename or format, upload the image to `assets`, then edit `_config.yml` so `photo` contains its path, for example `photo: /assets/my-photo.png`. To hide the photo, set `photo: ""`. Keep filenames free of spaces. The website displays the supplied image without generating or altering your likeness.

## Replace your downloadable CV

The CV page displays only “Find my CV here.” Clicking “here” opens `assets/CV.pdf`.

1. Save your latest PDF as `CV.pdf`.
2. Open the repository's `assets` folder and choose **Add file → Upload files**.
3. Upload the new `CV.pdf` and **Commit changes**. This replaces the old PDF.
4. Wait for the website to rebuild. The existing “here” link will open the new file.

If you use another filename, update `cv_pdf` in `_config.yml`. To change the sentence itself, edit `cv.md`.

## Add a paper or link

Open `research.md`, click the pencil icon, and copy an existing paper entry. For example:

```markdown
### [Your Paper Title](https://example.com/article)
With First Coauthor and Second Coauthor.  
*Journal Name*, 2027, volume(issue), pages.  
[Journal article](https://example.com/article) · [Working paper](https://example.com/paper)
```

Replace the example names and addresses with your real details. `###` creates a paper heading. Put the words visitors should click inside square brackets and the complete address inside parentheses. Two spaces at the end of a line make a line break. Leave an empty line between paper entries.

To upload your own paper PDF, open `assets` and upload a file such as `paper-title.pdf`. Then add `[Download paper](/assets/paper-title.pdf)` beneath the paper entry. Use a version you are allowed to share publicly.

## Add an SSRN button to a working paper

Insert the following line below the paper's authors, replacing the example URL with that paper's exact SSRN address:

```html
<a class="paper-button" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=REPLACE_WITH_PAPER_ID">SSRN</a>
```

Leave an empty line before and after the button. For a paper without an SSRN page yet, leave it without a button until you have the real link.

## Basic formatting

```markdown
## Section heading

A normal paragraph.

**Bold text** and *italic text*.

[Link text](https://example.com)

- First list item
- Second list item
```

## Change your email or postal address

The website email is in `_config.yml`. Update the PDF separately if its contact details also change.

The homepage postal address is in `_layouts/home.html`, inside `<address>...</address>`. Replace the words and retain the `<br>` line breaks. The full CV's postal address is in the PDF and must be updated in your original CV document before replacing the PDF.

## Recover an earlier version

GitHub keeps the history of your saved changes. Open a file and choose **History** to inspect older versions. You can copy the earlier text back into the current file and save it as a new change.

## Preview before publishing

GitHub's **Preview** tab while editing Markdown helps check text formatting. It does not show the complete website design. Changes committed to the publishing branch (`main`) will go live automatically after a successful build. To review a larger change before publication, use a separate branch and ask for help setting up a preview.
