# Gallery Upload Guide

Put your work files here and they'll appear on your portfolio's Gallery page.

## Image files
- Place in: `images/`
- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`
- Recommended size: 1920px wide (or larger)

## Video files
- Place in: `videos/`
- Supported formats: `.mp4`, `.webm`
- Recommended: 1080p, H.264 encoded, under 50MB

## How to display new work
After placing your files, edit `src/components/GallerySection.tsx` and add entries:

```ts
const galleryItems: GalleryItem[] = [
  // Images
  { src: '/gallery/images/my-artwork.png', type: 'image', category: 'image', title: 'My Artwork Title' },
  // Videos
  { src: '/gallery/videos/my-video.mp4', type: 'video', category: 'video', title: 'My Video Title' },
  // Projects
  { src: '/gallery/images/project-thumb.png', type: 'image', category: 'project', title: 'Project Name' },
];
```

## Categories
- `image` — appears under "AI Images" tab
- `video` — appears under "AI Videos" tab
- `project` — appears under "Projects" tab
