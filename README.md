## NextJS Star Wars Demo

This is a repo to demonstrate my ability to use NextJS and React with the [Star Wars API](https://swapi.dev/)

### Extra Information
- All pages are rendered statically to increase speed and SEO.
- Character tooltips are rendered directly from the API, rather than statically. This is to save iterating through everything on the API, but if the site were to grow it would probably be better to get these statically as well.
- Improvements could definitely be made to styling, as well as edge cases (e.g. there is no warning if the API is down, the page will just fail to load the tooltips.)
- The lack of images etc. on the API makes the output a little boring. It would be nice to integrate this with another API to get some images.
- Site is served on Cloudflare.