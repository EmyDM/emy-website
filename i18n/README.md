# Language versions

Russian pages remain the source version. English pages use `/en`; Kazakh pages use `/kk` (ISO language code). The visible language switcher displays RU / EN / KZ and keeps the current route.

`translations.tsv` contains the English and Kazakh UI/content translation pairs indexed by `source/strings.json`. Scientific PDFs and the two full authored articles retain their original language, explicitly labelled on translated pages. Bibliographic titles are preserved alongside translated catalogue titles. QR codes link to each locale homepage. Sitemap entries and page metadata declare language alternatives.

When changing source content, update both locale pages and their metadata, preserving shared asset paths and `/api/inquiry`. Do not prefix public asset URLs with a locale.
