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

## Website Flow 🌐

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   🌸 LANDING PAGE 🌸                                        │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                                                     │   │
│   │     💕 Welcome 💕                                  │   │
│   │                                                     │   │
│   │   "I have something special for you..."           │   │
│   │                                                     │   │
│   │   ┌─────────────────┐                               │   │
│   │   │ 💝 Valentine's │  ← Click to Enter           │   │
│   │   │     Day        │                               │   │
│   │   └─────────────────┘                               │   │
│   │                                                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                         ↓                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   💌 PROPOSAL PAGE 💌                                       │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                                                     │   │
│   │  "Will you be my Valentine? 💕"                    │   │
│   │                                                     │   │
│   │         [Cute GIF Changes]                          │   │
│   │              😊 → 😢                               │   │
│   │         Based on clicks                             │   │
│   │                                                     │   │
│   │   ┌──────────┐    ┌──────────┐                   │   │
│   │   │   YES    │    │    NO    │  ← Runs away!     │   │
│   │   │  (Grows) │    │ (Shrinks)│                   │   │
│   │   └──────────┘    └──────────┘                   │   │
│   │        ↓                                            │   │
│   └─────────────────────────────────────────────────────┘   │
│                         ↓                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🎉 CELEBRATION PAGE 🎉                                    │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                                                     │   │
│   │   🎊  Confetti Explosion  🎊                       │   │
│   │                                                     │   │
│   │   "Knew you would say yes!"                        │   │
│   │                                                     │   │
│   │        [Celebration GIF]                            │   │
│   │                                                     │   │
│   │   "You just made me the happiest person! 💕"      │   │
│   │                                                     │   │
│   │   🔊 Music Toggle (Bottom Right)                   │   │
│   │                                                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## What This Website Does 💝

**Purpose:** A fun, interactive way to ask someone to be your Valentine!

**How It Works:**

1. **Landing** - Romantic welcome with floating hearts background
2. **Proposal** - The "No" button runs away and gets smaller, while "Yes" grows bigger with each click
3. **Celebration** - Confetti rain and music when they say yes!

**Features:**

- 🎵 Background music with toggle
- 💕 Floating hearts animation
- 🎭 Progressive GIF reactions (happy → sad)
- 🎊 Confetti celebration
- 📱 Fully responsive design

## License

MIT License - feel free to use for your special moments! 💝
