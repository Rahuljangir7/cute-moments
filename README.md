<div align="center">

<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff6b9d;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#d63384;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff1744;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="200" fill="#0d1117" rx="20"/>
  <text x="400" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="url(#headerGrad)">💕 Cute Moments</text>
  <text x="400" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#8b949e">Interactive Valentines Proposal Website</text>
</svg>

<br><br>

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0d1117&color=61DAFB" alt="React 18">
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0d1117&color=3178C6" alt="TypeScript">
<img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=0d1117&color=646CFF" alt="Vite">

<br>

<img src="https://img.shields.io/badge/Features-10+-ff6b9d?style=for-the-badge&labelColor=0d1117&color=ff6b9d" alt="Features">
<img src="https://img.shields.io/badge/Routes-13+-d63384?style=for-the-badge&labelColor=0d1117&color=d63384" alt="Routes">

</div>

<br>

---

## 📊 Project Statistics

<div align="center">

<!-- 2D Data Visualization - Feature Distribution -->
<svg width="700" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" style="stop-color:#ff6b9d"/>
      <stop offset="100%" style="stop-color:#d63384"/>
    </linearGradient>
    <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" style="stop-color:#ff85a2"/>
      <stop offset="100%" style="stop-color:#ff6b9d"/>
    </linearGradient>
    <linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" style="stop-color:#ffb3c1"/>
      <stop offset="100%" style="stop-color:#ff85a2"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="700" height="300" fill="#161b22" rx="15"/>
  
  <!-- Title -->
  <text x="350" y="30" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Feature Categories Distribution</text>
  
  <!-- Grid Lines -->
  <g stroke="#30363d" stroke-width="1">
    <line x1="80" y1="50" x2="80" y2="250"/>
    <line x1="80" y1="250" x2="650" y2="250"/>
    <line x1="80" y1="200" x2="650" y2="200" stroke-dasharray="5,5" opacity="0.3"/>
    <line x1="80" y1="150" x2="650" y2="150" stroke-dasharray="5,5" opacity="0.3"/>
    <line x1="80" y1="100" x2="650" y2="100" stroke-dasharray="5,5" opacity="0.3"/>
  </g>
  
  <!-- Y-Axis Labels -->
  <g fill="#8b949e" font-family="Arial, sans-serif" font-size="12" text-anchor="end">
    <text x="70" y="205">25%</text>
    <text x="70" y="155">50%</text>
    <text x="70" y="105">75%</text>
    <text x="70" y="55">100%</text>
    <text x="70" y="255">0%</text>
  </g>
  
  <!-- Animated Bars -->
  <g>
    <!-- Interactive Features: 4 -->
    <rect x="100" y="130" width="80" height="120" fill="url(#bar1)" rx="5">
      <animate attributeName="height" from="0" to="120" dur="1s" fill="freeze"/>
      <animate attributeName="y" from="250" to="130" dur="1s" fill="freeze"/>
    </rect>
    <text x="140" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Interactive</text>
    <text x="140" y="120" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">4</text>
    
    <!-- Memory Features: 3 -->
    <rect x="220" y="170" width="80" height="80" fill="url(#bar2)" rx="5">
      <animate attributeName="height" from="0" to="80" dur="1s" begin="0.2s" fill="freeze"/>
      <animate attributeName="y" from="250" to="170" dur="1s" begin="0.2s" fill="freeze"/>
    </rect>
    <text x="260" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Memory</text>
    <text x="260" y="160" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">3</text>
    
    <!-- Fun Features: 3 -->
    <rect x="340" y="170" width="80" height="80" fill="url(#bar3)" rx="5">
      <animate attributeName="height" from="0" to="80" dur="1s" begin="0.4s" fill="freeze"/>
      <animate attributeName="y" from="250" to="170" dur="1s" begin="0.4s" fill="freeze"/>
    </rect>
    <text x="380" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Fun</text>
    <text x="380" y="160" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">3</text>
    
    <!-- Core Pages: 3 -->
    <rect x="460" y="170" width="80" height="80" fill="url(#bar1)" rx="5" opacity="0.7">
      <animate attributeName="height" from="0" to="80" dur="1s" begin="0.6s" fill="freeze"/>
      <animate attributeName="y" from="250" to="170" dur="1s" begin="0.6s" fill="freeze"/>
    </rect>
    <text x="500" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Core</text>
    <text x="500" y="160" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">3</text>
    
    <!-- SVG Icons: 10 -->
    <rect x="580" y="90" width="80" height="160" fill="url(#bar2)" rx="5" opacity="0.9">
      <animate attributeName="height" from="0" to="160" dur="1s" begin="0.8s" fill="freeze"/>
      <animate attributeName="y" from="250" to="90" dur="1s" begin="0.8s" fill="freeze"/>
    </rect>
    <text x="620" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">SVG Icons</text>
    <text x="620" y="80" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">10+</text>
  </g>
</svg>

</div>

<br>

---

## 🚀 Project Overview

**Cute Moments** is an interactive, multi-page Valentines Day proposal website with **10+ interactive features**.

## 📊 Features

| Feature                     | Description                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| 💕 **10 Interactive Pages** | Timeline, Calculator, Letter, Countdown, Gallery, Jar, Quiz, Music, Map, Scrapbook |
| 🎭 **Smart Proposal**       | No button runs away, Yes button grows                                              |
| 🎊 **Celebration Mode**     | Confetti explosion with music                                                      |

<br>

---

## 📈 Completion Progress

<div align="center">

<!-- Animated Progress Bars -->
<svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" style="stop-color:#ff6b9d"/>
      <stop offset="100%" style="stop-color:#d63384"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="200" fill="#161b22" rx="15"/>
  
  <!-- Title -->
  <text x="300" y="30" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Project Completion Status</text>
  
  <!-- Progress Bar 1: Features -->
  <text x="50" y="65" fill="#8b949e" font-family="Arial, sans-serif" font-size="12">Features (10/10)</text>
  <rect x="50" y="75" width="500" height="20" fill="#21262d" rx="10"/>
  <rect x="50" y="75" width="500" height="20" fill="url(#progressGrad)" rx="10">
    <animate attributeName="width" from="0" to="500" dur="1.5s" fill="freeze"/>
  </rect>
  <text x="560" y="90" fill="#ff6b9d" font-family="Arial, sans-serif" font-size="12" font-weight="bold">100%</text>
  
  <!-- Progress Bar 2: Styling -->
  <text x="50" y="115" fill="#8b949e" font-family="Arial, sans-serif" font-size="12">Styling & CSS</text>
  <rect x="50" y="125" width="500" height="20" fill="#21262d" rx="10"/>
  <rect x="50" y="125" width="475" height="20" fill="url(#progressGrad)" rx="10" opacity="0.9">
    <animate attributeName="width" from="0" to="475" dur="1.5s" begin="0.3s" fill="freeze"/>
  </rect>
  <text x="560" y="140" fill="#ff6b9d" font-family="Arial, sans-serif" font-size="12" font-weight="bold">95%</text>
  
  <!-- Progress Bar 3: Animations -->
  <text x="50" y="165" fill="#8b949e" font-family="Arial, sans-serif" font-size="12">Animations</text>
  <rect x="50" y="175" width="500" height="20" fill="#21262d" rx="10"/>
  <rect x="50" y="175" width="450" height="20" fill="url(#progressGrad)" rx="10" opacity="0.8">
    <animate attributeName="width" from="0" to="450" dur="1.5s" begin="0.6s" fill="freeze"/>
  </rect>
  <text x="560" y="190" fill="#ff6b9d" font-family="Arial, sans-serif" font-size="12" font-weight="bold">90%</text>
</svg>

</div>

<br>

---

## 🎯 How to Use

### For the Proposer 💘

1. **Customize the content** in each page's data arrays
2. **Add your photos** to `public/photos/` folder
3. **Update the special dates** in Countdown page
4. **Deploy** and share the link

### For the User 💕

1. Visit the **Landing Page** and click "💝 Valentine's Day"
2. Try to click **"No"** (spoiler: it runs away! 🏃‍♂️)
3. Click **"Yes"** to see the celebration! 🎉
4. Explore all **10 Cute Moments** pages from the landing page

<br>

---

## 📦 Installation

```bash
git clone https://github.com/YourUsername/cute-moments.git
cd cute-moments
npm install
npm run dev
```

## 🎨 Pages

| Route            | Page        | Description        |
| ---------------- | ----------- | ------------------ |
| /                | Landing     | Welcome page       |
| /proposal        | Proposal    | Interactive yes/no |
| /yes             | Celebration | Confetti & music   |
| /timeline        | Timeline    | Love story         |
| /love-calculator | Calculator  | Love quiz          |

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM

---

<div align="center">

**Made with** 💕

</div>
