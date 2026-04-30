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
  <text x="400" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" fill="#8b949e">Ultimate Interactive Valentines Experience</text>
</svg>

<br><br>

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0d1117&color=61DAFB" alt="React 18">
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0d1117&color=3178C6" alt="TypeScript">
<img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=0d1117&color=646CFF" alt="Vite">

<br>

<img src="https://img.shields.io/badge/Features-15-ff6b9d?style=for-the-badge&labelColor=0d1117&color=ff6b9d" alt="Features">
<img src="https://img.shields.io/badge/Routes-17+-d63384?style=for-the-badge&labelColor=0d1117&color=d63384" alt="Routes">

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
    <!-- Interactive Features: 8 -->
    <rect x="100" y="90" width="80" height="160" fill="url(#bar1)" rx="5">
      <animate attributeName="height" from="0" to="160" dur="1s" fill="freeze"/>
      <animate attributeName="y" from="250" to="90" dur="1s" fill="freeze"/>
    </rect>
    <text x="140" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Interactive</text>
    <text x="140" y="80" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">8</text>
    
    <!-- Memory Features: 4 -->
    <rect x="220" y="150" width="80" height="100" fill="url(#bar2)" rx="5">
      <animate attributeName="height" from="0" to="100" dur="1s" begin="0.2s" fill="freeze"/>
      <animate attributeName="y" from="250" to="150" dur="1s" begin="0.2s" fill="freeze"/>
    </rect>
    <text x="260" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Memory</text>
    <text x="260" y="140" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">4</text>
    
    <!-- Fun Features: 3 -->
    <rect x="340" y="170" width="80" height="80" fill="url(#bar3)" rx="5">
      <animate attributeName="height" from="0" to="80" dur="1s" begin="0.4s" fill="freeze"/>
      <animate attributeName="y" from="250" to="170" dur="1s" begin="0.4s" fill="freeze"/>
    </rect>
    <text x="380" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Fun</text>
    <text x="380" y="160" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">3</text>
    
    <!-- Total Pages: 15 -->
    <rect x="580" y="50" width="80" height="200" fill="url(#bar2)" rx="5" opacity="0.9">
      <animate attributeName="height" from="0" to="200" dur="1s" begin="0.8s" fill="freeze"/>
      <animate attributeName="y" from="250" to="50" dur="1s" begin="0.8s" fill="freeze"/>
    </rect>
    <text x="620" y="270" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="12">Total Pages</text>
    <text x="620" y="40" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">15</text>
  </g>
</svg>

</div>

<br>

---

## 🚀 Project Overview

**Cute Moments** is a comprehensive Valentines Day web application with **15 interactive pages** designed to create a personalized romantic experience.

## 📊 Features

| Feature                     | Description                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| 💖 **15 Interactive Pages** | Timeline, Calculator, Letter, Countdown, Gallery, Jar, Quiz, Music, Map, Scrapbook, Hug, Compliment, Mood, Secret Code |
| 🗺️ **Real Map Integration** | Interactive OpenStreetMap for special locations                                    |
| 📸 **Custom Uploads**       | Photo gallery with browser-based local storage support                             |
| 🎭 **Smart Proposal**       | Dynamic yes/no interaction with celebratory confetti effects                      |

<br>

---

## 📦 Installation

```bash
git clone https://github.com/YourUsername/cute-moments.git
cd cute-moments
npm install
npm run dev
```

## 🎨 Routes

| Route            | Page             | Description                           |
| ---------------- | ---------------- | ------------------------------------- |
| /                | Landing          | Welcome dashboard                     |
| /proposal        | Home             | Interactive proposal                  |
| /hug             | Virtual Hug      | Interactive multi-stage hugging       |
| /compliment      | Daily Compliment | Random sweet messages                 |
| /mood            | Mood Heart       | Express how you feel                  |
| /secret          | Secret Code      | Encoded romantic messages             |
| /map             | Love Map         | Real locations of our story           |
| /gallery         | Photo Gallery    | Our memories with upload support      |

---

<div align="center">

**Created with Love for Rahul** 💕

</div>
