# Honors Geometry Tutor Web App

A mobile-friendly web application designed to help 9th grade students learn honors geometry through daily lessons, clear examples, and interactive quizzes.

## Features

- **20 Comprehensive Lessons**: Each lesson covers key 9th grade honors geometry topics
- **15-20 Minute Lessons**: Perfect for daily study sessions
- **Interactive Quizzes**: 5 questions per lesson to test understanding
- **Mobile Optimized**: Works seamlessly on iPhone and Android devices
- **Progress Tracking**: Visual progress bar showing course completion
- **Immediate Feedback**: Detailed explanations for quiz answers
- **Clear Examples**: Step-by-step problem solutions included in each lesson

## Topics Covered

1. Points, Lines, and Planes
2. Measuring Segments and Angles
3. Complementary and Supplementary Angles
4. Vertical Angles and Linear Pairs
5. Parallel Lines and Transversals
6. Triangle Classification
7. Triangle Congruence: SSS and SAS
8. Triangle Congruence: ASA and AAS
9. Isosceles and Equilateral Triangles
10. Quadrilaterals: Properties and Classification
11. Properties of Parallelograms
12. Rectangles, Rhombuses, and Squares
13. Trapezoids and Kites
14. Polygons: Classification and Angle Measures
15. Perimeter and Area of Polygons
16. Circles: Basic Properties
17. Circumference and Area of Circles
18. The Pythagorean Theorem
19. Distance and Midpoint Formulas
20. Comprehensive Review

## Getting Started

### Option 1: Using Vite (Recommended)

1. **Fix npm permissions** (if needed):
   ```bash
   sudo chown -R $(whoami) ~/.npm
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**: Navigate to the URL shown in terminal (usually http://localhost:5173)

### Option 2: Direct File Opening (Simple)

Simply open `index.html` in your web browser - no server required!

1. Double-click `index.html` in the project folder
2. Or right-click and select "Open With" → your preferred browser

## Usage

### Navigation
- Use **Next** and **Previous** buttons to move between lessons
- Click the **Lessons** button in the footer to see all available lessons
- Jump to any lesson from the lesson menu

### Taking Quizzes
- Click the **Quiz** button in the footer after studying a lesson
- Answer all 5 questions to test your understanding
- Get immediate feedback with explanations
- See your final score and review the lesson if needed

### Mobile Experience
- Optimized for portrait and landscape orientations
- Touch-friendly buttons and interface
- Smooth scrolling and transitions
- Works offline after initial load (when opened directly)

## Project Structure

```
Geometry Tutor App/
├── index.html          # Main HTML structure
├── styles.css          # Mobile-first responsive styling
├── lessons.js          # All 20 lesson content and quizzes
├── app.js             # Application logic and interactivity
├── package.json       # Project dependencies
└── README.md          # This file
```

## Technical Details

- **Framework**: Vanilla JavaScript (no framework dependencies)
- **Build Tool**: Vite (optional, for development server)
- **Styling**: Pure CSS with CSS Grid and Flexbox
- **Mobile Support**: Responsive design works on all screen sizes
- **Browser Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Tips for Students

1. **Daily Practice**: Complete one lesson per day for best results
2. **Take Notes**: Write down key formulas and theorems
3. **Review Mistakes**: Carefully read quiz explanations for wrong answers
4. **Practice Problems**: Try the example problems before viewing solutions
5. **Use the Menu**: Jump back to previous lessons for review

## Future Enhancements

Potential features for future versions:
- Save progress locally
- Printable lesson summaries
- Additional practice problems
- Video explanations
- Interactive geometric diagrams
- Flashcard mode for quick review

## License

MIT License - Feel free to use and modify for educational purposes.

## Support

For issues or questions about the content, please review the lessons carefully or consult with your geometry teacher.
