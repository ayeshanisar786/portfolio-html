# Portfolio PDF Image Extraction Summary

## Extraction Details

- **Source PDF**: `/Users/ayeshanisar/Documents/etechflow/Brand guidlines/Porfolio resize-compressed.pdf`
- **Destination**: `/Users/ayeshanisar/portfolio-html/public/images/`
- **Total Images Extracted**: 78 images (89 total, 11 small icons skipped)
- **Extraction Method**: PyMuPDF (fitz) - High Quality Extraction
- **Date**: March 1, 2026

## Image Categories and Counts

| Category | Count | Description |
|----------|-------|-------------|
| **Hero** | 1 | Portfolio hero section portrait |
| **Logos** | 16 | Complete logofolio collection (logos 1-16) |
| **Branding** | 21 | Intagleo (6), BP Spacer (3), LimeLight (9), Misc (3) |
| **Illustrations** | 8 | Recipe Book (4), Story Book (4) |
| **Digital Art** | 7 | Chess King, Radio Pakistan, Poverty, Fruit Garden, Ufone |
| **UI/UX** | 17 | Various UI/UX design screenshots |
| **Posters** | 3 | 3D promotional posters |
| **Game** | 5 | Desi Runner game design screenshots |

## Directory Structure

```
/Users/ayeshanisar/portfolio-html/public/images/
├── hero/
│   └── hero-portrait.jpeg
├── logos/
│   ├── logo-01.jpeg through logo-16.jpeg
├── branding/
│   ├── intagleo-01.jpeg through intagleo-06.jpeg
│   ├── bp-spacer-01.jpeg through bp-spacer-03.jpeg
│   ├── limelight-01.jpeg through limelight-09.jpeg
│   └── misc-branding-047.jpeg, misc-branding-048.jpeg, misc-branding-049.jpeg
├── illustrations/
│   ├── recipe-book-01.jpeg through recipe-book-04.jpeg
│   └── story-book-01.jpeg through story-book-04.jpeg
├── digital-art/
│   ├── chess-king-01.jpeg, chess-king-02.jpeg
│   ├── radio-pakistan.jpeg
│   ├── poverty-poster.jpeg
│   └── digital-art-09.jpeg, digital-art-10.jpeg, digital-art-11.jpeg
├── ui-ux/
│   ├── ui-page1-04.png through ui-page1-08.png
│   └── ui-page2-016.png through ui-page2-027.png
├── posters/
│   └── 3d-poster-01.jpeg through 3d-poster-03.jpeg
└── game/
    ├── game-screenshot-01.jpeg, game-screenshot-02.jpeg
    └── game-screenshot-03.png through game-screenshot-05.png
```

## Manifest Files

Three JSON manifest files have been generated for easy reference:

1. **extracted_images_manifest.json** - Original extraction log (kept for reference)
2. **images_detailed_manifest.json** - Detailed information about all extracted images
3. **images_by_category.json** - Organized by category with paths and metadata

## Key Details

### Hero Section
- **hero-portrait.jpeg**: 672x1008px, 98.6KB - Main portfolio portrait

### Logofolio (16 logos)
- All logos are 391x391px square format
- Sizes range from 16.6KB to 23.3KB
- JPEG format for optimal quality/size ratio

### Branding Projects

#### Intagleo Systems (6 images)
- Corporate IT branding materials
- Sizes: 162x220px to 377x252px
- Total size: ~46.9KB

#### BP Spacer (3 images)
- Food brand packaging designs
- Sizes: 251x250px to 436x328px
- Total size: ~21.1KB

#### LimeLight (9 images)
- Bridal/fashion campaign materials
- Portrait and landscape orientations
- Sizes: 175x340px to 418x279px
- Total size: ~87.3KB

### Book Illustrations (8 images)

#### Recipe Book (4 images)
- Kashmiri Chai cookbook illustrations
- Largest: 1369x968px (91.8KB)
- High-quality illustrations: 1024x1024px (169.8KB)

#### Story Book (4 images)
- Urdu poem book with chicks characters
- Mix of orientations
- One vertical strip: 361x1787px (61.8KB)

### Digital Art (7 images)
- **Chess King**: 2 images (588x833px, 1155x662px)
- **Radio Pakistan**: Conceptual illustration (455x684px)
- **Poverty**: Poster design (625x884px, 158.7KB - largest digital art piece)
- **Fruit Garden**: Geometrical illustration
- **Ufone**: Promotional design

### UI/UX Design (17 images)
- All PNG format for UI clarity
- Page 1: 5 screenshots (933-997px wide)
- Page 2: 12 screenshots (863-1720px wide)
- Largest: 1720x471px (23KB)

### 3D Posters (3 images)
- Uniform size: 525x788px (portrait)
- Sizes: 75-85KB each
- Campaign promotional materials

### Game Design (5 images)
- **Desi Runner** game screenshots
- Mix of JPEG (2) and PNG (3) formats
- High resolution: up to 1536x1024px
- Largest file: 234.8KB

## Image Quality

All images were extracted using PyMuPDF with the following characteristics:
- **Format**: Original format preserved (JPEG/PNG)
- **Resolution**: Native PDF resolution maintained
- **Quality**: Maximum quality extraction
- **Color**: Original colorspace preserved
- **Compression**: Original compression maintained

## Notes

- 11 small placeholder/icon images (< 117px) were skipped during categorization
- Some images from page 1 (indices 27-37) were tiny PNG icons and excluded
- All meaningful portfolio content has been extracted and categorized
- File naming is systematic and sequential for easy reference
