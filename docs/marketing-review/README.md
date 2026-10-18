# Marketing browser review

Reviewed 11 September 2026 using Argent Chromium on the Next development
preview at `http://127.0.0.1:3012`. Screenshots show the actual rendered pages;
the small Next development indicator is absent from production.

The homepage, app catalog, and Learn detail page were checked at 1440×1000 and
390×844 in light mode. The browser reserved 15 pixels for its scrollbar, giving
document widths of 1425 and 375 pixels respectively. Neither viewport had
horizontal document overflow.

- All 14 app cards were present; the desktop active navigation state updated.
- The mobile menu used a 44-pixel toggle and 48-pixel links. Escape closed it
  and restored focus to the toggle; selecting Apps closed it and navigated.
- The Learn detail artwork loaded successfully through Next Image. Its mobile
  rendering was 293×293 pixels, fully visible inside the card.
- All 25 footer links fit the two mobile columns without clipped labels.
- The Learn call to action retained its canonical `https://learn.jinnie.ph/`
  destination. Public domain deployment was outside this review.

No additional source changes were needed after this check. Chrome was returned
to the parent agent at desktop size for the separate Learn offline review.

| Desktop | Mobile |
| --- | --- |
| [Homepage](home-desktop.png) | [Homepage](home-mobile.png) |
| [App catalog](apps-desktop.png) | [App catalog](apps-mobile.png) |
| [Learn detail](learn-desktop.png) | [Learn artwork](learn-art-mobile.png) |
| | [Open menu](menu-mobile.png) |
| | [Footer](footer-mobile.png) |
