# X-Game-Template

A 3D web game template built with Three.js, designed to be embedded on X (formerly Twitter) as an interactive player card. This project demonstrates how to create engaging 3D experiences that work seamlessly within social media platforms.

## 🎮 Game Overview

**Macaw** is an interactive 3D game featuring a colorful bird character that players control to collect coins. The game is optimized for embedding on X/Twitter as a player card, providing an engaging social media experience.

### Game Features

- **3D Bird Character**: A detailed macaw-like bird with animated wings, beak, eyes, and tail feathers
- **Coin Collection**: Jump to collect floating yellow coins while avoiding missing them
- **Physics System**: Realistic gravity and jumping mechanics
- **Score Tracking**: Real-time display of points, missed coins, and elapsed time
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Social Media Ready**: Optimized meta tags for X/Twitter embedding

## 🛠️ Technical Stack

- **Three.js**: 3D graphics and rendering
- **ES6 Modules**: Modern JavaScript module system
- **WebGL**: Hardware-accelerated graphics
- **CSS3**: Styling and responsive design

## 🎯 Game Mechanics

### Controls
- **Click/Tap**: Make the bird jump
- **Mouse Movement**: Hover over interactive elements for visual feedback

### Scoring System
- **Points**: Earn 1 point for each coin collected
- **Missed Coins**: Track coins that pass by without collection
- **Timer**: Real-time display of elapsed play time

### Physics
- **Gravity**: Constant downward force (-0.5 units)
- **Jump Force**: Upward velocity of 10 units per click
- **Floor Collision**: Bird stops at ground level
- **Coin Movement**: Coins move horizontally at 0.1 units per frame

## 🎨 Visual Design

### 3D Elements
- **Bird Character**: Blue spherical body with detailed features
  - Black beak and eyes
  - Animated wings that rotate on interaction
  - Colorful tail feathers
- **Coins**: Yellow half-torus shapes with emissive glow
- **Platform**: Red rectangular base with rotation
- **Background**: Gradient from orange (#ffbb66) to blue (#66aaff)

### Lighting
- **Ambient Light**: Soft overall illumination
- **Directional Light**: Sun-like lighting with shadows
- **Shadow Mapping**: Realistic shadow casting and receiving

## 📱 Social Media Integration

### X/Twitter Player Card
The game is specifically designed to work as an embedded player card on X/Twitter:

- **Player Dimensions**: 480x480 pixels
- **Interactive Elements**: Click-to-play functionality
- **Meta Tags**: Comprehensive Open Graph and Twitter Card metadata
- **Preview Image**: Custom preview.png for social sharing
- **Video Demo**: demo.webm file for enhanced previews

### Meta Tags Included
- Open Graph tags for Facebook/X sharing
- Twitter Card player configuration
- Custom title, description, and image metadata
- Video preview support

## 🚀 Getting Started

### Prerequisites
- Modern web browser with WebGL support
- Local web server (for development)

### Installation
1. Clone the repository
2. Serve the files using a local web server
3. Open `index.html` in your browser

### Development
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 📁 Project Structure

```
X-Game-Template/
├── index.html          # Main game file with Three.js implementation
├── main.css            # Styling and responsive design
├── three.module.js     # Three.js library (ES6 module version)
├── es-module-shims.js  # ES6 module compatibility shim
├── preview.png         # Social media preview image
├── demo.webm           # Demo video for social sharing
└── README.md           # This file
```

## 🎮 Game Configuration

### Customizable Parameters
- `birdColor`: Bird's primary color (default: 0x66aaff)
- `maxCoins`: Number of coins in play (default: 7)
- `coinSpeed`: Horizontal movement speed (default: 0.1)
- `jumpForce`: Jump strength (default: 10)
- `gravity`: Downward force (default: -0.5)

### Performance Settings
- **Shadow Quality**: 2048x2048 shadow maps
- **Geometry Detail**: 32 segments for spheres, 16 for smaller elements
- **Frame Rate**: Optimized for 60fps rendering

## 🔧 Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Responsive design with touch controls

## 📈 Performance Optimization

- Efficient geometry reuse
- Optimized shadow mapping
- Responsive canvas sizing
- Minimal DOM manipulation
- Hardware-accelerated rendering

## 🤝 Contributing

This template is designed to be easily customizable for different game concepts. Key areas for modification:

- **Character Design**: Modify the bird geometry and materials
- **Game Mechanics**: Adjust physics parameters and scoring
- **Visual Style**: Change colors, lighting, and effects
- **Social Integration**: Update meta tags for different platforms

## 📄 License

This project is open source and available under the [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- Built with [Three.js](https://threejs.org/)
- Designed for X/Twitter embedding
- Created by [@webduno](https://x.com/webduno) + Grok

---

**Ready to play?** Open `index.html` in your browser and start collecting coins with your 3D bird character!
