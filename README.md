# Cute Moments 💕

An interactive Valentine's Day proposal website built with React + TypeScript + Vite.

## Features ✨

- **Interactive Proposal Page** - Progressive GIF stages, growing "Yes" button, runaway "No" button
- **Landing Page** - Beautiful entrance with animated Valentine's Day button
- **Celebration Page** - Confetti explosion with music toggle
- **Background Music** - Autoplay with browser policy handling
- **Floating Hearts Animation** - Romantic background effect
- **Local GIF Assets** - All GIFs downloaded for offline use

## Tech Stack 🛠️

- React 18
- TypeScript
- Vite
- React Router DOM
- Canvas Confetti

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YourUsername/cute-moments.git

# Navigate to project
cd cute-moments

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
cute-moments/
├── public/
│   ├── gifs/           # Local GIF assets
│   └── music/          # Background music
├── src/
│   ├── pages/
│   │   ├── Landing.tsx    # Welcome page
│   │   ├── Home.tsx       # Proposal page
│   │   └── Yes.tsx        # Celebration page
│   ├── App.tsx
│   ├── App.css            # All styles with cm- prefix
│   └── main.tsx
├── index.html
└── package.json
```

## Routes

| Route       | Page    | Description                         |
| ----------- | ------- | ----------------------------------- |
| `/`         | Landing | Welcome with Valentine's Day button |
| `/proposal` | Home    | Interactive Yes/No proposal         |
| `/yes`      | Yes     | Celebration with confetti           |

## Unique Class Names

All CSS classes use `cm-` prefix for uniqueness:

- `cm-container`
- `cm-hearts-bg`
- `cm-valentine-title`
- `cm-buttons`
- `cm-yes-btn`, `cm-no-btn`
- `cm-gif-container`
- `cm-music-toggle`

## Customization

### Change GIFs

Replace files in `public/gifs/` folder:

- `stage-0.gif` to `stage-6.gif` - Proposal reactions
- `celebration.gif` - Success animation

### Change Music

Replace file in `public/music/` folder:

- `beabadoobee - Glue Song (Lyrics).mp3`

### Change Messages

Edit in `src/pages/Home.tsx`:

- `noMessages` - No button text progression
- `yesTeasePokes` - Teasing messages before runaway mode

## Downloading GIFs

Use the included PowerShell script to download all third-party GIFs locally:

```bash
.\download-gifs.ps1
```

## Browser Policy

Browsers block audio autoplay until user interaction. Music starts on first click.

## License

MIT License - feel free to use for your special moments! 💝
