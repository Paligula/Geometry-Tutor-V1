// Geometry Tutor App - Main Application Logic

let currentLessonIndex = 0;
let currentQuizQuestionIndex = 0;
let quizAnswers = [];
let isQuizMode = false;
let userProgress = {
    completedLessons: [],
    quizScores: {},
    lastVisited: 0,
    flashcardProgress: {}
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    loadLesson(userProgress.lastVisited || 0);
    setupEventListeners();
    updateLessonList();
});

// Local Storage Functions
function saveProgress() {
    localStorage.setItem('geometryTutorProgress', JSON.stringify(userProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('geometryTutorProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

function markLessonComplete(lessonIndex) {
    if (!userProgress.completedLessons.includes(lessonIndex)) {
        userProgress.completedLessons.push(lessonIndex);
        saveProgress();
        updateLessonList();
    }
}

function saveQuizScore(lessonIndex, score, total) {
    userProgress.quizScores[lessonIndex] = { score, total, percentage: Math.round((score/total) * 100) };
    saveProgress();
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        userProgress = {
            completedLessons: [],
            quizScores: {},
            lastVisited: 0,
            flashcardProgress: {}
        };
        saveProgress();
        updateLessonList();
        alert('Progress has been reset!');
    }
}

// Set up all event listeners
function setupEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', nextLesson);
    document.getElementById('prevBtn').addEventListener('click', prevLesson);
    document.getElementById('floatingNextBtn').addEventListener('click', nextLesson);
    document.getElementById('floatingPrevBtn').addEventListener('click', prevLesson);
    document.getElementById('quizBtn').addEventListener('click', startQuiz);
    document.getElementById('menuBtn').addEventListener('click', toggleLessonMenu);
    document.getElementById('closeMenuBtn').addEventListener('click', toggleLessonMenu);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuizQuestion);
    document.getElementById('reviewBtn').addEventListener('click', reviewLesson);
    document.getElementById('nextLessonBtn').addEventListener('click', goToNextLesson);
    document.getElementById('printBtn').addEventListener('click', printLesson);
    document.getElementById('flashcardBtn').addEventListener('click', startFlashcardMode);
    document.getElementById('practiceBtn').addEventListener('click', showPracticeProblems);
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
    document.getElementById('closeFlashcardBtn').addEventListener('click', exitFlashcardMode);
    document.getElementById('flipCardBtn').addEventListener('click', flipFlashcard);
    document.getElementById('nextCardBtn').addEventListener('click', nextFlashcard);
    document.getElementById('closePracticeBtn').addEventListener('click', closePracticeProblems);
}

// Load a specific lesson
function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    currentLessonIndex = index;
    isQuizMode = false;

    // Save last visited lesson
    userProgress.lastVisited = index;
    saveProgress();

    const lesson = lessons[index];

    // Update lesson view
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('progressText').textContent = `Lesson ${index + 1} of ${lessons.length}`;

    // Update progress bar
    const progressPercent = ((index + 1) / lessons.length) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';

    // Build lesson content
    const contentContainer = document.getElementById('lessonContent');
    contentContainer.innerHTML = '';

    // Add video if lesson has videoId
    if (lesson.videoId) {
        const videoSection = document.createElement('div');
        videoSection.className = 'content-section video-section';
        videoSection.innerHTML = `
            <div class="video-container">
                <h3>📹 Video Explanation</h3>
                <div class="video-embed">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/${lesson.videoId}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;
        contentContainer.appendChild(videoSection);
    }

    lesson.content.forEach(section => {
        const sectionEl = createContentSection(section);
        contentContainer.appendChild(sectionEl);
    });

    // Add interactive diagram if available
    if (lesson.diagram) {
        const diagramEl = createDiagram(lesson.diagram);
        contentContainer.appendChild(diagramEl);
    }

    // Show lesson view, hide other views
    document.getElementById('lessonView').classList.remove('hidden');
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('flashcardView').classList.add('hidden');
    document.getElementById('practiceView').classList.add('hidden');

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = (index === 0);
    document.getElementById('nextBtn').textContent = (index === lessons.length - 1) ? 'Finish' : 'Next';

    // Update floating arrow buttons
    const floatingPrevBtn = document.getElementById('floatingPrevBtn');
    const floatingNextBtn = document.getElementById('floatingNextBtn');

    floatingPrevBtn.disabled = (index === 0);
    floatingNextBtn.disabled = (index === lessons.length - 1);

    // Show/hide arrows based on view
    updateFloatingArrowsVisibility();

    // Scroll to top
    window.scrollTo(0, 0);
}

// Update floating arrows visibility based on current view
function updateFloatingArrowsVisibility() {
    const floatingPrevBtn = document.getElementById('floatingPrevBtn');
    const floatingNextBtn = document.getElementById('floatingNextBtn');
    const lessonView = document.getElementById('lessonView');

    // Show arrows only when lesson view is active
    if (!lessonView.classList.contains('hidden')) {
        floatingPrevBtn.style.display = 'flex';
        floatingNextBtn.style.display = 'flex';
    } else {
        floatingPrevBtn.style.display = 'none';
        floatingNextBtn.style.display = 'none';
    }
}

// Create content sections based on type
function createContentSection(section) {
    const div = document.createElement('div');
    div.className = 'content-section';

    switch(section.type) {
        case 'text':
            div.innerHTML = `<p class="lesson-text">${section.content}</p>`;
            break;

        case 'definition':
            div.innerHTML = `
                <div class="definition-box">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                    ${section.example ? `<p class="example"><strong>Example:</strong> ${section.example}</p>` : ''}
                </div>
            `;
            break;

        case 'example':
            const itemsList = section.items.map(item => `<li>${item}</li>`).join('');
            div.innerHTML = `
                <div class="example-box">
                    <h3>${section.title}</h3>
                    <ul>${itemsList}</ul>
                </div>
            `;
            break;

        case 'practice':
            div.innerHTML = `
                <div class="practice-box">
                    <h3>${section.title}</h3>
                    <p class="problem">${section.content}</p>
                    <details>
                        <summary>Show Solution</summary>
                        <p class="solution">${section.solution}</p>
                    </details>
                </div>
            `;
            break;
    }

    return div;
}

// Navigation functions
function nextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
        loadLesson(currentLessonIndex + 1);
    }
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        loadLesson(currentLessonIndex - 1);
    }
}

// Quiz functionality
function startQuiz() {
    if (!lessons[currentLessonIndex].quiz) {
        alert('No quiz available for this lesson.');
        return;
    }

    isQuizMode = true;
    currentQuizQuestionIndex = 0;
    quizAnswers = [];

    // Hide lesson, show quiz
    document.getElementById('lessonView').classList.add('hidden');
    document.getElementById('quizView').classList.remove('hidden');

    // Hide floating arrows
    updateFloatingArrowsVisibility();

    // Load first question
    loadQuizQuestion();

    window.scrollTo(0, 0);
}

function loadQuizQuestion() {
    const quiz = lessons[currentLessonIndex].quiz;
    const question = quiz[currentQuizQuestionIndex];

    // Update progress
    document.getElementById('quizProgress').textContent =
        `Question ${currentQuizQuestionIndex + 1} of ${quiz.length}`;

    // Display question
    document.getElementById('questionText').textContent = question.question;

    // Create answer buttons
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });

    // Hide feedback and show question
    document.getElementById('quizFeedback').classList.add('hidden');
    document.getElementById('quizQuestion').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
}

function selectAnswer(selectedIndex) {
    const quiz = lessons[currentLessonIndex].quiz;
    const question = quiz[currentQuizQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    // Record answer
    quizAnswers.push({
        questionIndex: currentQuizQuestionIndex,
        selectedIndex: selectedIndex,
        correct: isCorrect
    });

    // Show feedback
    const feedbackEl = document.getElementById('feedbackText');
    if (isCorrect) {
        feedbackEl.innerHTML = `<span class="correct">✓ Correct!</span><br>${question.explanation}`;
    } else {
        feedbackEl.innerHTML = `<span class="incorrect">✗ Incorrect.</span><br>The correct answer is: <strong>${question.answers[question.correct]}</strong><br>${question.explanation}`;
    }

    // Update button to show if last question
    const nextBtn = document.getElementById('nextQuestionBtn');
    if (currentQuizQuestionIndex === quiz.length - 1) {
        nextBtn.textContent = 'See Results';
    } else {
        nextBtn.textContent = 'Next Question';
    }

    // Hide question, show feedback
    document.getElementById('quizQuestion').classList.add('hidden');
    document.getElementById('quizFeedback').classList.remove('hidden');

    window.scrollTo(0, 0);
}

function nextQuizQuestion() {
    const quiz = lessons[currentLessonIndex].quiz;

    if (currentQuizQuestionIndex < quiz.length - 1) {
        currentQuizQuestionIndex++;
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const quiz = lessons[currentLessonIndex].quiz;
    const correctCount = quizAnswers.filter(a => a.correct).length;
    const percentage = Math.round((correctCount / quiz.length) * 100);

    // Save quiz score and mark lesson complete if passed
    saveQuizScore(currentLessonIndex, correctCount, quiz.length);
    if (percentage >= 70) {
        markLessonComplete(currentLessonIndex);
    }

    // Display score
    document.getElementById('scoreText').textContent =
        `You scored ${correctCount} out of ${quiz.length} (${percentage}%)`;

    // Display message based on score
    const messageEl = document.getElementById('scoreMessage');
    if (percentage >= 90) {
        messageEl.textContent = 'Outstanding! You have mastered this lesson!';
        messageEl.className = 'score-message excellent';
    } else if (percentage >= 70) {
        messageEl.textContent = 'Great job! You understand most of the concepts.';
        messageEl.className = 'score-message good';
    } else if (percentage >= 50) {
        messageEl.textContent = 'Good effort! Review the lesson to improve your understanding.';
        messageEl.className = 'score-message fair';
    } else {
        messageEl.textContent = 'Keep practicing! Review the lesson and try again.';
        messageEl.className = 'score-message needs-work';
    }

    // Update next lesson button
    const nextLessonBtn = document.getElementById('nextLessonBtn');
    if (currentLessonIndex === lessons.length - 1) {
        nextLessonBtn.textContent = 'Complete Course';
    } else {
        nextLessonBtn.textContent = 'Next Lesson';
    }

    // Hide question and feedback, show results
    document.getElementById('quizQuestion').classList.add('hidden');
    document.getElementById('quizFeedback').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');

    window.scrollTo(0, 0);
}

function reviewLesson() {
    loadLesson(currentLessonIndex);
}

function goToNextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
        loadLesson(currentLessonIndex + 1);
    } else {
        // Course complete
        alert('Congratulations! You have completed all 20 lessons of Honors Geometry!');
        loadLesson(0); // Return to first lesson
    }
}

// Lesson menu
function toggleLessonMenu() {
    const menu = document.getElementById('lessonMenu');
    menu.classList.toggle('hidden');
}

function updateLessonList() {
    const listContainer = document.getElementById('lessonList');
    listContainer.innerHTML = '';

    lessons.forEach((lesson, index) => {
        const item = document.createElement('div');
        item.className = 'lesson-item';
        if (index === currentLessonIndex) {
            item.classList.add('active');
        }

        const isComplete = userProgress.completedLessons.includes(index);
        const quizScore = userProgress.quizScores[index];

        let statusBadge = '';
        if (isComplete) {
            statusBadge = '<span class="badge complete">✓</span>';
        }
        if (quizScore) {
            statusBadge += ` <span class="badge score">${quizScore.percentage}%</span>`;
        }

        item.innerHTML = `
            <div class="lesson-number">${index + 1}</div>
            <div class="lesson-info">
                <div class="lesson-title-small">${lesson.title}</div>
                <div class="lesson-duration">${lesson.duration} ${statusBadge}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            loadLesson(index);
            toggleLessonMenu();
        });

        listContainer.appendChild(item);
    });
}

// Print Lesson
function printLesson() {
    window.print();
}

// Interactive Diagram Creation
function createDiagram(diagramData) {
    const div = document.createElement('div');
    div.className = 'content-section diagram-section';

    const title = document.createElement('h3');
    title.textContent = '📐 Interactive Diagram';

    const instructions = document.createElement('p');
    instructions.className = 'diagram-instructions';
    instructions.innerHTML = '<strong>💡 Instructions:</strong> Click and drag the vertices (points) to change the triangle shape. The measurements update in real-time!';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '350');
    svg.setAttribute('viewBox', '0 0 400 350');
    svg.style.backgroundColor = '#ffffff';
    svg.style.borderRadius = '12px';
    svg.style.border = '2px solid #e0e0e0';

    const infoText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    infoText.setAttribute('x', '200');
    infoText.setAttribute('y', '20');
    infoText.setAttribute('text-anchor', 'middle');
    infoText.setAttribute('fill', '#666');
    infoText.setAttribute('font-size', '14');
    infoText.textContent = 'Drag the points to move them!';
    svg.appendChild(infoText);

    // Interactive triangle
    if (diagramData.type === 'triangle') {
        let points = [
            { x: 200, y: 60, label: 'A' },
            { x: 100, y: 280, label: 'B' },
            { x: 300, y: 280, label: 'C' }
        ];
        let draggedPoint = null;

        const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        triangle.setAttribute('fill', 'rgba(74, 144, 226, 0.3)');
        triangle.setAttribute('stroke', '#4a90e2');
        triangle.setAttribute('stroke-width', '3');

        // Side labels
        const sideAB = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const sideBC = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const sideCA = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        [sideAB, sideBC, sideCA].forEach(text => {
            text.setAttribute('fill', '#2c3e50');
            text.setAttribute('font-size', '12');
            text.setAttribute('font-weight', 'bold');
            svg.appendChild(text);
        });

        function updateTriangle() {
            triangle.setAttribute('points',
                `${points[0].x},${points[0].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y}`
            );

            // Calculate and display side lengths
            const distAB = Math.sqrt(Math.pow(points[1].x - points[0].x, 2) + Math.pow(points[1].y - points[0].y, 2));
            const distBC = Math.sqrt(Math.pow(points[2].x - points[1].x, 2) + Math.pow(points[2].y - points[1].y, 2));
            const distCA = Math.sqrt(Math.pow(points[0].x - points[2].x, 2) + Math.pow(points[0].y - points[2].y, 2));

            sideAB.setAttribute('x', (points[0].x + points[1].x) / 2 - 20);
            sideAB.setAttribute('y', (points[0].y + points[1].y) / 2);
            sideAB.textContent = `AB: ${Math.round(distAB)}`;

            sideBC.setAttribute('x', (points[1].x + points[2].x) / 2);
            sideBC.setAttribute('y', (points[1].y + points[2].y) / 2 + 20);
            sideBC.textContent = `BC: ${Math.round(distBC)}`;

            sideCA.setAttribute('x', (points[2].x + points[0].x) / 2 + 10);
            sideCA.setAttribute('y', (points[2].y + points[0].y) / 2);
            sideCA.textContent = `CA: ${Math.round(distCA)}`;
        }

        svg.appendChild(triangle);

        // Create draggable points
        points.forEach((point, index) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', point.x);
            circle.setAttribute('cy', point.y);
            circle.setAttribute('r', '8');
            circle.setAttribute('fill', '#f39c12');
            circle.setAttribute('stroke', '#ffffff');
            circle.setAttribute('stroke-width', '2');
            circle.style.cursor = 'move';
            circle.classList.add('draggable-point');

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', point.x);
            label.setAttribute('y', point.y - 15);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('fill', '#2c3e50');
            label.setAttribute('font-weight', 'bold');
            label.setAttribute('font-size', '16');
            label.textContent = point.label;

            circle.addEventListener('mousedown', (e) => {
                draggedPoint = index;
                e.preventDefault();
            });

            circle.addEventListener('touchstart', (e) => {
                draggedPoint = index;
                e.preventDefault();
            });

            point.circle = circle;
            point.labelEl = label;

            svg.appendChild(circle);
            svg.appendChild(label);
        });

        function handleMove(e) {
            if (draggedPoint === null) return;

            const rect = svg.getBoundingClientRect();
            const scaleX = 400 / rect.width;
            const scaleY = 350 / rect.height;

            let clientX, clientY;
            if (e.type.includes('touch')) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            const x = (clientX - rect.left) * scaleX;
            const y = (clientY - rect.top) * scaleY;

            // Constrain to SVG bounds
            points[draggedPoint].x = Math.max(20, Math.min(380, x));
            points[draggedPoint].y = Math.max(40, Math.min(330, y));

            points[draggedPoint].circle.setAttribute('cx', points[draggedPoint].x);
            points[draggedPoint].circle.setAttribute('cy', points[draggedPoint].y);
            points[draggedPoint].labelEl.setAttribute('x', points[draggedPoint].x);
            points[draggedPoint].labelEl.setAttribute('y', points[draggedPoint].y - 15);

            updateTriangle();
        }

        function handleEnd() {
            draggedPoint = null;
        }

        svg.addEventListener('mousemove', handleMove);
        svg.addEventListener('mouseup', handleEnd);
        svg.addEventListener('mouseleave', handleEnd);
        svg.addEventListener('touchmove', handleMove);
        svg.addEventListener('touchend', handleEnd);

        updateTriangle();
    }

    div.appendChild(title);
    div.appendChild(instructions);
    div.appendChild(svg);
    return div;
}

// Flashcard Mode
let currentFlashcardIndex = 0;
let flashcards = [];
let isFlashcardFlipped = false;

function startFlashcardMode() {
    // Generate flashcards from all lessons
    flashcards = [];
    lessons.forEach((lesson, lessonIdx) => {
        lesson.quiz.forEach((question, qIdx) => {
            flashcards.push({
                front: question.question,
                back: question.answers[question.correct],
                explanation: question.explanation,
                lessonIndex: lessonIdx,
                lessonTitle: lesson.title
            });
        });
    });

    // Shuffle flashcards
    flashcards.sort(() => Math.random() - 0.5);

    currentFlashcardIndex = 0;
    isFlashcardFlipped = false;

    // Hide other views, show flashcard view
    document.getElementById('lessonView').classList.add('hidden');
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('practiceView').classList.add('hidden');
    document.getElementById('flashcardView').classList.remove('hidden');

    // Hide floating arrows
    updateFloatingArrowsVisibility();

    loadFlashcard();
}

function loadFlashcard() {
    if (flashcards.length === 0) return;

    const card = flashcards[currentFlashcardIndex];
    document.getElementById('flashcardProgress').textContent =
        `Card ${currentFlashcardIndex + 1} of ${flashcards.length}`;

    document.getElementById('flashcardFront').textContent = card.front;
    document.getElementById('flashcardBack').innerHTML =
        `<strong>Answer:</strong> ${card.back}<br><br><em>${card.explanation}</em>`;

    document.getElementById('flashcardSource').textContent =
        `From: ${card.lessonTitle}`;

    // Reset flip
    isFlashcardFlipped = false;
    document.querySelector('.flashcard-inner').classList.remove('flipped');
}

function flipFlashcard() {
    isFlashcardFlipped = !isFlashcardFlipped;
    document.querySelector('.flashcard-inner').classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
    loadFlashcard();
}

function exitFlashcardMode() {
    loadLesson(currentLessonIndex);
}

// Practice Problems
function showPracticeProblems() {
    const lesson = lessons[currentLessonIndex];

    if (!lesson.practiceProblems) {
        alert('Additional practice problems coming soon for this lesson!');
        return;
    }

    document.getElementById('lessonView').classList.add('hidden');
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('flashcardView').classList.add('hidden');
    document.getElementById('practiceView').classList.remove('hidden');

    // Hide floating arrows
    updateFloatingArrowsVisibility();

    const container = document.getElementById('practiceProblemsContainer');
    container.innerHTML = '<h3>Additional Practice Problems</h3>';

    lesson.practiceProblems.forEach((problem, index) => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'practice-problem-card';
        problemDiv.innerHTML = `
            <h4>Problem ${index + 1}</h4>
            <p class="problem-text">${problem.question}</p>
            <details>
                <summary>Show Solution</summary>
                <div class="solution-text">
                    <p><strong>Answer:</strong> ${problem.answer}</p>
                    <p><strong>Steps:</strong></p>
                    <p>${problem.solution}</p>
                </div>
            </details>
        `;
        container.appendChild(problemDiv);
    });
}

function closePracticeProblems() {
    loadLesson(currentLessonIndex);
}
