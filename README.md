# Coombe Meadow Cabin Website

A static landing site designed to support SEO and direct booking visibility for a holiday property that is primarily listed on Air BnB.

The site is deployed on GitHub Pages and connected to a custom domain.

## Project Goals

- Improve discoverability in search results with clear, indexable page content.
- Provide a fast-loading, mobile-friendly experience.
- Showcase the cabin and grounds with an image-led gallery.
- Direct visitors to the main booking route.

## Technology Stack

- Bootsrap 5 - [Bootstrap 5.3.8 CSS & JS Libraries](https://getbootstrap.com/)
- Google Lighthouse for performance and SEO testing
- FreeConvert to convert images to WebP format - [FreeConvert](https://www.freeconvert.com/)
- Convertio to convert images to WebP format - [Convertio](https://convertio.co/)
- Lorem Ipsum placeholder text used during development - [Lorum Ipsum](https://www.lipsum.com/)
- Grok - placeholder ai image generation used during development - [Grok](https://grok.com/)
- Image Compressor - completely free in browser image compression - [Image Compressor](https://imagecompressor.com/)
- Squarespace - custom domains - [Squarespace](https://www.squarespace.com/)
- Favicon icon generator - [favicon.io](https://favicon.io/)
- testing a sites responsive - [amiresponsive](https://amiresponsive.co.uk/)

## Build and Deployment Detail

This project is intentionally simple: it is a static site build (no bundler, no framework compile step).

### Build Approach

- Core pages are authored directly in HTML5.
- Styling is provided by Bootstrap plus custom CSS.
- JavaScript is used for lightweight page interactions only.
- Images are optimized to WebP where possible for smaller payloads.

### Page and Asset Structure

- Main pages: home, gallery, and fallback/error page.
- Shared assets:
	- CSS (Bootstrap + custom styles)
	- JS (Bootstrap + custom script)
	- Images and gallery media
- SEO helpers include metadata, robots directives, and canonical tags.

### Content Build Workflow

1. Update page content in the relevant HTML files.
2. Add/replace media in the gallery assets folder.
3. Convert and compress imagery using:
	 - [FreeConvert](https://www.freeconvert.com/)
	 - [Convertio](https://convertio.co/)
	 - [Image Compressor](https://imagecompressor.com/)
4. Validate responsive behavior and UX before release.

### Local Verification

- Open pages locally in-browser for quick checks.
- Confirm navigation, links, gallery behavior, and media rendering.
- Verify mobile layout behavior using browser emulation and real devices.

### Release Flow

- Commit and push to the repository.
- GitHub Pages publishes the static site.
- Domain routing is managed via [Squarespace](https://www.squarespace.com/).

## Gallery Content Strategy

Not all gallery assets are displayed at once by design.
This makes it easy to rotate visual content over time and keep the gallery fresh.

## Testing

Basic site responsiveness testing completed using Google Lighthouse & amiresponsive.co.uk

![alt text](assets/img/glighthouse_test.png)

![alt text](assets/img/amiresponsive.png)

Further testing has been carried out using an iPhone 17, iPad Air M4 and an Android Invens Note 15p

## Acknowledgements

- [Reddit subreddit, useful coding advice](https://www.reddit.com/r/webdev/)
- [Stack Overflow, useful coding database](https://stackoverflow.com/questions)