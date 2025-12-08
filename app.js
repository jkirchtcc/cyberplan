// Track which math course is currently shown in Available Courses (defaults to MTH 161)
let currentMathCourse = 'MTH 161';

// Utility function to escape HTML
function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Utility function to validate semester number
function isValidSemesterNumber(num) {
    return Number.isInteger(num) && num >= 1 && num <= 100;
}

// Utility function to validate course code
function isValidCourseCode(code) {
    return typeof code === 'string' &&
        /^[A-Z]{2,4} \d{3}$/.test(code) &&
        courses.hasOwnProperty(code);
}

// Course data with prerequisites
const courses = {
    'ENG 111': {
        code: 'ENG 111',
        title: 'College Composition I',
        credits: 3,
        prerequisites: []
    },
    'ITN 106': {
        code: 'ITN 106',
        title: 'Microcomputer Operating Systems',
        credits: 4,
        prerequisites: []
    },
    'ITP 100': {
        code: 'ITP 100',
        title: 'Software Design',
        credits: 4,
        prerequisites: []
    },
    'SDV 101': {
        code: 'SDV 101',
        title: 'Orientation to Computer Science and Information Technology',
        credits: 1,
        prerequisites: []
    },
    // Artistic Expression Humanities Electives
    'ART 100': {
        code: 'ART 100',
        title: 'Art Appreciation',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ART 101': {
        code: 'ART 101',
        title: 'History of Art: Prehistoric to Gothic',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ART 102': {
        code: 'ART 102',
        title: 'History of Art: Renaissance to Modern',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'CST 130': {
        code: 'CST 130',
        title: 'Introduction to the Theatre',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'CST 151': {
        code: 'CST 151',
        title: 'Film Appreciation I',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'CST 152': {
        code: 'CST 152',
        title: 'Film Appreciation II',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'MUS 121': {
        code: 'MUS 121',
        title: 'Music in Society',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'MUS 221': {
        code: 'MUS 221',
        title: 'History of Western Music Prior to 1750',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'MUS 222': {
        code: 'MUS 222',
        title: 'History of Western Music 1750 to Present',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    // Human Culture Humanities Electives
    'ASL 125': {
        code: 'ASL 125',
        title: 'History of the U.S. Deaf Community',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'HUM 201': {
        code: 'HUM 201',
        title: 'Early Humanities',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'HUM 202': {
        code: 'HUM 202',
        title: 'Modern Humanities',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'HUM 220': {
        code: 'HUM 220',
        title: 'Introduction to African-American Studies',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'HUM 256': {
        code: 'HUM 256',
        title: 'Comparative Mythology',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'HUM 259': {
        code: 'HUM 259',
        title: 'The Greek and Roman Tradition',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'HUM 260': {
        code: 'HUM 260',
        title: 'Contemporary Humanities',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'PHI 100': {
        code: 'PHI 100',
        title: 'Introduction to Philosophy',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'PHI 111': {
        code: 'PHI 111',
        title: 'Logic',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'PHI 220': {
        code: 'PHI 220',
        title: 'Ethics and Society',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'REL 230': {
        code: 'REL 230',
        title: 'Religions of the World',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    // Literature and Creative Writing Humanities Electives
    'ENG 125': {
        code: 'ENG 125',
        title: 'Introduction to Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 211': {
        code: 'ENG 211',
        title: 'Creative Writing',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 212': {
        code: 'ENG 212',
        title: 'Creative Writing II',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 225': {
        code: 'ENG 225',
        title: 'Reading Literature: Culture and Ideas',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 245': {
        code: 'ENG 245',
        title: 'British Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 246': {
        code: 'ENG 246',
        title: 'American Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 250': {
        code: 'ENG 250',
        title: 'Children\'s Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 255': {
        code: 'ENG 255',
        title: 'World Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 258': {
        code: 'ENG 258',
        title: 'African American Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 275': {
        code: 'ENG 275',
        title: 'Women in Literature',
        credits: 3,
        prerequisites: [],
        category: 'humanities'
    },
    'ENG 112': {
        code: 'ENG 112',
        title: 'College Composition II',
        credits: 3,
        prerequisites: ['ENG 111']
    },
    'ITN 107': {
        code: 'ITN 107',
        title: 'Personal Computer Hardware and Troubleshooting',
        credits: 4,
        prerequisites: []
    },
    'ITN 171': {
        code: 'ITN 171',
        title: 'Unix I',
        credits: 4,
        prerequisites: []
    },
    'MTH 161': {
        code: 'MTH 161',
        title: 'PreCalculus I',
        credits: 3,
        prerequisites: [],
        canUpgrade: true
    },
    // Higher level math courses (upgrade options)
    'MTH 162': {
        code: 'MTH 162',
        title: 'PreCalculus II',
        credits: 3,
        prerequisites: ['MTH 161']
    },
    'MTH 167': {
        code: 'MTH 167',
        title: 'PreCalculus with Trigonometry',
        credits: 5,
        prerequisites: []
    },
    'MTH 245': {
        code: 'MTH 245',
        title: 'Statistics I',
        credits: 3,
        prerequisites: []
    },
    'MTH 261': {
        code: 'MTH 261',
        title: 'Applied Calculus I',
        credits: 3,
        prerequisites: ['MTH 161']
    },
    'MTH 262': {
        code: 'MTH 262',
        title: 'Applied Calculus II',
        credits: 3,
        prerequisites: ['MTH 261']
    },
    'MTH 263': {
        code: 'MTH 263',
        title: 'Calculus I',
        credits: 4,
        prerequisites: ['MTH 161']
    },
    'MTH 264': {
        code: 'MTH 264',
        title: 'Calculus II',
        credits: 4,
        prerequisites: ['MTH 263']
    },
    'MTH 265': {
        code: 'MTH 265',
        title: 'Calculus III',
        credits: 4,
        prerequisites: ['MTH 264']
    },
    'MTH 266': {
        code: 'MTH 266',
        title: 'Linear Algebra',
        credits: 3,
        prerequisites: ['MTH 263']
    },
    'MTH 267': {
        code: 'MTH 267',
        title: 'Differential Equations',
        credits: 3,
        prerequisites: ['MTH 264']
    },
    'MTH 283': {
        code: 'MTH 283',
        title: 'Probability and Statistics',
        credits: 3,
        prerequisites: ['MTH 263']
    },
    'ITN 101': {
        code: 'ITN 101',
        title: 'Introduction to Network Concepts',
        credits: 4,
        prerequisites: []
    },
    'ITE 152': {
        code: 'ITE 152',
        title: 'Introduction to Digital and Information Literacy and Computer Applications',
        credits: 3,
        prerequisites: []
    },
    'ITN 260': {
        code: 'ITN 260',
        title: 'Network Security Basics',
        credits: 4,
        prerequisites: ['ITN 101'], // or ITN 154
        prerequisiteOptions: [['ITN 101', 'ITN 154']] // OR logic: need one of these
    },
    'CST 100': {
        code: 'CST 100',
        title: 'Principles of Public Speaking',
        credits: 3,
        prerequisites: []
    },
    'ECO 150': {
        code: 'ECO 150',
        title: 'Economic Essentials: Theory and Applications',
        credits: 3,
        prerequisites: []
    },
    'ITN 267': {
        code: 'ITN 267',
        title: 'Legal Topics in Network Security',
        credits: 3,
        prerequisites: ['ITN 260'], // prerequisite or co-requisite
        corequisites: ['ITN 260'] // can be taken in same semester
    },
    'ITN 261': {
        code: 'ITN 261',
        title: 'Network Attacks, Computer Crime and Hacking',
        credits: 4,
        prerequisites: ['ITN 171', 'ITN 260']
    },
    'ITN 262': {
        code: 'ITN 262',
        title: 'Network Communication, Security and Authentication',
        credits: 4,
        prerequisites: ['ITN 171', 'ITN 260']
    },
    'ITN 263': {
        code: 'ITN 263',
        title: 'Internet/Intranet Firewalls and eCommerce Security',
        credits: 4,
        prerequisites: ['ITN 171', 'ITN 260']
    },
    // IT Approved Electives
    'ITN 111': {
        code: 'ITN 111',
        title: 'Server Administration (Windows 2019)',
        credits: 3,
        prerequisites: [],
        category: 'it_elective'
    },
    'ITN 154': {
        code: 'ITN 154',
        title: 'Network Fundamentals, Router Basics, and Configuration (ICND1) - Cisco',
        credits: 4,
        prerequisites: ['ITN 101'],
        category: 'it_elective'
    },
    'ITN 170': {
        code: 'ITN 170',
        title: 'Linux System Administration',
        credits: 3,
        prerequisites: ['ITN 171'],
        category: 'it_elective'
    },
    'ITN 257': {
        code: 'ITN 257',
        title: 'Cloud Computing: Infrastructure and Services',
        credits: 3,
        prerequisites: [],
        category: 'it_elective'
    },
    'ITN 275': {
        code: 'ITN 275',
        title: 'Incident Response and Computer Forensics',
        credits: 3,
        prerequisites: ['ITN 260'],
        category: 'it_elective'
    },
    'ITN 268': {
        code: 'ITN 268',
        title: 'Cloud Computing Administration',
        credits: 3,
        prerequisites: [],
        category: 'it_elective'
    },
    'ITN 290': {
        code: 'ITN 290',
        title: 'Coordinated Internship in ITN',
        credits: 3,
        prerequisites: [], // Prerequisite: Instructor permission (not enforceable in system)
        category: 'it_elective'
    },
    'ITN 297': {
        code: 'ITN 297',
        title: 'Cooperative Education in ITN',
        credits: 3,
        prerequisites: [], // Prerequisite: Instructor permission (not enforceable in system)
        category: 'it_elective'
    }
};

// State management
let studentPlan = {
    1: [],
    2: [],
    3: [],
    4: []
};

// Track courses marked as completed or transfer credit
let completedCourses = new Set();

// Helper function to safely check if a course is completed
function isCourseCompleted(courseCode) {
    if (!(completedCourses instanceof Set)) {
        completedCourses = new Set();
        return false;
    }
    return completedCourses.has(courseCode);
}

// Track placeholder positions (which semester has which placeholder)
let placeholderPositions = {
    humanities: 1,  // Default to Semester 1
    it_elective: 4  // Default to Semester 4
};

// Default suggested plan based on curriculum guide
function getDefaultPlan() {
    return {
        1: ['ENG 111', 'ITN 106', 'ITP 100', 'SDV 101'], // Humanities Elective left for student to choose
        2: ['ENG 112', 'ITN 107', 'ITN 171', 'MTH 161', 'ITN 101'],
        3: ['ITE 152', 'ITN 260', 'CST 100', 'ECO 150', 'ITN 267'],
        4: ['ITN 261', 'ITN 262', 'ITN 263'] // IT Approved Elective left for student to choose
    };
}

// Required courses for each semester (excluding electives)
const requiredCourses = {
    1: ['ENG 111', 'ITN 106', 'ITP 100', 'SDV 101'],
    2: ['ENG 112', 'ITN 107', 'ITN 171', 'MTH 161', 'ITN 101'],
    3: ['ITE 152', 'ITN 260', 'CST 100', 'ECO 150', 'ITN 267'],
    4: ['ITN 261', 'ITN 262', 'ITN 263']
};

function isPlanComplete() {
    // Check if all required courses are present in their designated semesters
    // Note: With dynamic semesters, we check if required courses exist anywhere
    // Also consider courses marked as completed/transfer credit
    const allCourses = [];
    Object.values(studentPlan).forEach(semesterCourses => {
        allCourses.push(...semesterCourses);
    });
    
    // Add completed/transfer courses
    completedCourses.forEach(courseCode => {
        if (!allCourses.includes(courseCode)) {
            allCourses.push(courseCode);
        }
    });

    // Check if all required courses exist (regardless of semester or completed status)
    for (let semester = 1; semester <= 4; semester++) {
        const required = requiredCourses[semester];
        const hasAllRequired = required.every(courseCode =>
            allCourses.includes(courseCode)
        );

        if (!hasAllRequired) {
            return false;
        }
    }

    // Check if Humanities elective is selected
    if (!hasElectiveSelected('humanities')) {
        return false;
    }

    // Check if IT elective is selected
    if (!hasElectiveSelected('it_elective')) {
        return false;
    }

    return true;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Setup event listeners first
        if (typeof setupEventListeners === 'function') {
            setupEventListeners();
        }

        // Load theme preference (after event listeners are set up)
        if (typeof loadTheme === 'function') {
            loadTheme();
        }

        // Setup system theme listener
        if (typeof setupSystemThemeListener === 'function') {
            setupSystemThemeListener();
        }

        // Load completed courses
        if (typeof loadCompletedCoursesFromStorage === 'function') {
            loadCompletedCoursesFromStorage();
        }

        // Load saved plan
        if (typeof loadFromStorage === 'function') {
            loadFromStorage(false); // Load silently on first load
        }
        
        // Remove any courses from semesters that are marked as completed
        // (in case they were marked before this feature was added)
        // Ensure completedCourses is a Set before using .has()
        if (completedCourses instanceof Set) {
            Object.keys(studentPlan).forEach(semester => {
                const semesterNum = parseInt(semester);
                studentPlan[semesterNum] = studentPlan[semesterNum].filter(code => !isCourseCompleted(code));
            });
        }

        // Render courses after loading
        if (typeof renderCourses === 'function') {
            renderCourses();
        }
        
        // Update completed courses section
        if (typeof updateCompletedCoursesSection === 'function') {
            updateCompletedCoursesSection();
        }

        // Update PDF button state on initial load
        if (typeof updatePDFButtonState === 'function') {
            updatePDFButtonState();
        }
    } catch (error) {
        console.error('Error during initialization:', error);
        alert('An error occurred while loading the page. Please refresh.');
    }
});

function setupEventListeners() {
    // Instructions button
    const instructionsBtn = document.getElementById('instructionsBtn');
    if (instructionsBtn) {
        instructionsBtn.addEventListener('click', showInstructionsModal);
    }

    // Save/Clear buttons
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const clearBtn = document.getElementById('clearBtn');

    if (saveBtn) {
        saveBtn.addEventListener('click', saveToStorage);
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', resetToDefault);
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAll);
    }

    // Theme selector
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    }

    // Search functionality
    const courseSearch = document.getElementById('courseSearch');
    if (courseSearch) {
        courseSearch.addEventListener('input', (e) => {
            filterCourses(e.target.value);
        });
    }

    // Modal close
    // Close button for prerequisite modal
    const prereqCloseBtn = document.querySelector('#prerequisiteModal .close');
    if (prereqCloseBtn) {
        prereqCloseBtn.addEventListener('click', () => {
            closeModal('prerequisiteModal');
        });
    }

    // Close button for math upgrade modal
    const mathCloseBtn = document.querySelector('#mathUpgradeModal .close');
    if (mathCloseBtn) {
        mathCloseBtn.addEventListener('click', () => {
            closeModal('mathUpgradeModal');
        });
    }

    // Close button for instructions modal
    const instructionsCloseBtn = document.querySelector('#instructionsModal .close');
    if (instructionsCloseBtn) {
        instructionsCloseBtn.addEventListener('click', () => {
            closeModal('instructionsModal');
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const prerequisiteModal = document.getElementById('prerequisiteModal');
            const mathUpgradeModal = document.getElementById('mathUpgradeModal');
            const instructionsModal = document.getElementById('instructionsModal');
            if (prerequisiteModal.classList.contains('show')) {
                closeModal('prerequisiteModal');
            } else if (mathUpgradeModal.classList.contains('show')) {
                closeModal('mathUpgradeModal');
            } else if (instructionsModal.classList.contains('show')) {
                closeModal('instructionsModal');
            }
        }
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const prerequisiteModal = document.getElementById('prerequisiteModal');
        if (e.target === prerequisiteModal) {
            closeModal('prerequisiteModal');
        }

        const mathUpgradeModal = document.getElementById('mathUpgradeModal');
        if (e.target === mathUpgradeModal) {
            closeModal('mathUpgradeModal');
        }

        const instructionsModal = document.getElementById('instructionsModal');
        if (e.target === instructionsModal) {
            closeModal('instructionsModal');
        }
    });

    // Setup drag and drop for semesters
    setupDragAndDrop();

    // Add semester button
    const addSemesterBtn = document.getElementById('addSemesterBtn');
    if (addSemesterBtn) {
        addSemesterBtn.addEventListener('click', addNewSemester);
    }
}


function setupDragAndDrop() {
    // Setup drag and drop for all existing semesters
    const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);

    semesters.forEach(semester => {
        const coursesList = document.querySelector(`.courses-list[data-semester="${semester}"]`);
        const semesterContainer = document.querySelector(`.semester[data-semester="${semester}"]`);

        if (coursesList && !coursesList.dataset.dragSetup) {
            coursesList.addEventListener('dragover', handleDragOver);
            coursesList.addEventListener('drop', (e) => handleDrop(e, semester));
            coursesList.addEventListener('dragenter', handleDragEnter);
            coursesList.addEventListener('dragleave', handleDragLeave);
            coursesList.dataset.dragSetup = 'true';
        }

        // Also allow dropping on the semester container
        if (semesterContainer && !semesterContainer.dataset.dragSetup) {
            semesterContainer.addEventListener('dragover', handleDragOver);
            semesterContainer.addEventListener('drop', (e) => handleDrop(e, semester));
            semesterContainer.addEventListener('dragenter', handleDragEnter);
            semesterContainer.addEventListener('dragleave', handleDragLeave);
            semesterContainer.dataset.dragSetup = 'true';
        }
    });
}

let draggedElement = null;
let draggedCourseCode = null;
let draggedFromSemester = null;

function handleDragStart(e) {
    // Don't handle if it's a placeholder (handled separately)
    if (e.target.dataset.isPlaceholder === 'true') {
        return;
    }

    // Don't start drag if clicking the upgrade button
    if (e.target.classList.contains('upgrade-btn') || e.target.closest('.upgrade-btn')) {
        e.preventDefault();
        return false;
    }

    // Find the card element (might be clicking on a child element)
    const card = e.target.closest('.course-card') || e.target;

    draggedElement = card;
    draggedElement.classList.add('dragging');
    draggedCourseCode = card.dataset.courseCode;

    // Check if dragging from a semester
    draggedFromSemester = card.dataset.currentSemester ? parseInt(card.dataset.currentSemester) : null;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', draggedCourseCode);

    // Add visual feedback
    card.style.opacity = '0.5';
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    e.target.style.opacity = '1';

    // Remove drop zone highlights
    document.querySelectorAll('.semester').forEach(sem => {
        sem.classList.remove('drag-over');
    });
    document.querySelectorAll('.courses-list').forEach(list => {
        list.classList.remove('drag-over');
    });

    // Clear drag flag after a delay to allow click detection
    if (e.target.dataset.dragStarted === 'true') {
        setTimeout(() => {
            e.target.dataset.dragStarted = 'false';
        }, 100);
    }

    draggedElement = null;
    draggedCourseCode = null;
    draggedFromSemester = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    const target = e.target.closest('.semester') || e.target.closest('.courses-list');
    if (target) {
        target.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    const target = e.target.closest('.semester') || e.target.closest('.courses-list');
    if (target && !target.contains(e.relatedTarget)) {
        target.classList.remove('drag-over');
    }
}

function handleDrop(e, targetSemester) {
    e.preventDefault();
    e.stopPropagation();

    // Don't handle drop if clicking on remove button
    if (e.target.classList.contains('remove-btn')) {
        return;
    }

    const target = e.target.closest('.semester') || e.target.closest('.courses-list');
    if (target) {
        target.classList.remove('drag-over');
    }

    // Handle placeholder drop - just move it, don't prompt for selection
    if (draggedElement && draggedElement.dataset.isPlaceholder === 'true') {
        const category = draggedElement.dataset.placeholderCategory;

        // Update placeholder position
        placeholderPositions[category] = targetSemester;

        // Update UI to show placeholder in new location
        updateUI();
        return;
    }

    if (!draggedCourseCode) return;

    const course = courses[draggedCourseCode];
    if (!course) return;

    // Check prerequisites if adding from available courses
    if (draggedFromSemester === null && !canAddCourse(draggedCourseCode, targetSemester)) {
        showPrerequisiteModal(course, targetSemester);
        return;
    }

    // If moving from one semester to another, check prerequisites for target semester
    if (draggedFromSemester !== null && !canAddCourse(draggedCourseCode, targetSemester)) {
        showPrerequisiteModal(course, targetSemester);
        return;
    }

    // If dragging to the same semester, do nothing
    if (draggedFromSemester === targetSemester) {
        return;
    }

    // Check credit limit (18 credits per semester) before adding
    // Calculate target semester credits (course hasn't been removed from old semester yet)
    let targetSemesterCredits = getSemesterCredits(targetSemester);

    // If moving from another semester, check if adding to target would exceed limit
    // If dragging from available courses, check current credits + new course
    const newTotalCredits = targetSemesterCredits + course.credits;

    // Check if semester is already at or would exceed 18 credits
    if (targetSemesterCredits >= 18) {
        alert(`Cannot add ${draggedCourseCode}: Semester ${targetSemester} is already at the 18 credit limit.\n\nCurrent credits: ${targetSemesterCredits}`);
        updateUI();
        return;
    }

    if (newTotalCredits > 18) {
        alert(`Cannot add ${draggedCourseCode}: This would exceed the 18 credit limit for Semester ${targetSemester}.\n\nCurrent credits: ${targetSemesterCredits}\n${draggedCourseCode} credits: ${course.credits}\nTotal would be: ${newTotalCredits}`);
        updateUI();
        return;
    }

    // If dragging from one semester to another
    if (draggedFromSemester !== null) {
        // Remove from old semester
        studentPlan[draggedFromSemester] = studentPlan[draggedFromSemester].filter(
            code => code !== draggedCourseCode
        );
    }

    // Add to new semester (if not already there)
    if (!studentPlan[targetSemester].includes(draggedCourseCode)) {
        studentPlan[targetSemester].push(draggedCourseCode);
    }

    // After adding/moving, check if any courses in the target semester should be removed
    // due to prerequisite violations (e.g., if we moved a prerequisite to the same semester)
    // This must run immediately after the move to catch violations
    const removedCourses = checkAndRemoveInvalidCourses();

    // If courses were removed, notify the user
    if (removedCourses.length > 0) {
        const courseList = removedCourses.map(code => courses[code] ? courses[code].code : code).join(', ');
        alert(`The following courses were moved to Available Courses because their prerequisites are no longer met:\n${courseList}`);
    }

    updateUI();
}

function hasElectiveSelected(category) {
    // Check all semesters dynamically
    const hasInSemester = Object.keys(studentPlan).some(semester => {
        return hasElectiveInSemester(parseInt(semester), category);
    });
    
    // Also check if a completed course of this category exists
    if (!hasInSemester) {
        return Array.from(completedCourses).some(courseCode => {
            const course = courses[courseCode];
            return course && course.category === category;
        });
    }
    
    return hasInSemester;
}

function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) {
        console.error('coursesGrid element not found');
        return;
    }

    coursesGrid.textContent = '';

    // If plan is complete, hide all courses
    if (isPlanComplete()) {
        const completeMsg = document.createElement('div');
        completeMsg.className = 'plan-complete-message';
        completeMsg.textContent = '🎉 Your plan is complete! All required courses and electives have been selected.';
        coursesGrid.textContent = '';
        coursesGrid.appendChild(completeMsg);
        return;
    }

    const hasHumanities = hasElectiveSelected('humanities');
    const hasITElective = hasElectiveSelected('it_elective');
    const coursesInSemesters = [];
    Object.values(studentPlan).forEach(semesterCourses => {
        semesterCourses.forEach(courseCode => {
            coursesInSemesters.push(courseCode);
        });
    });

    // Verify courses object exists
    if (!courses || typeof courses !== 'object') {
        console.error('Courses object not found or invalid');
        return;
    }

    // Show only one math course in Available Courses (the current one, default MTH 161)
    // Don't show if it's in a semester or marked as completed
    const mathCourseToShow = courses[currentMathCourse];
    if (mathCourseToShow && 
        !coursesInSemesters.includes(currentMathCourse) && 
        !isCourseCompleted(currentMathCourse)) {
        const courseCard = createCourseCard(mathCourseToShow);
        if (courseCard) {
            coursesGrid.appendChild(courseCard);
        }
    }

    Object.values(courses).forEach(course => {
        // Hide courses that are already in a semester
        if (coursesInSemesters.includes(course.code)) {
            return; // Skip this course - it's already in a semester
        }
        
        // Hide courses that are marked as completed (they're in the completed section)
        if (isCourseCompleted(course.code)) {
            return; // Skip this course - it's in the completed section
        }

        // Skip math courses - we only show the currentMathCourse above
        if (course.code.startsWith('MTH ')) {
            return;
        }

        // Hide all humanities electives if one is already selected
        if (course.category === 'humanities' && hasHumanities) {
            return; // Skip this course - hide all humanities electives when one is selected
        }

        // Hide all IT electives if one is already selected
        if (course.category === 'it_elective' && hasITElective) {
            return; // Skip this course - hide all IT electives when one is selected
        }

        const courseCard = createCourseCard(course);
        if (courseCard && coursesGrid) {
            coursesGrid.appendChild(courseCard);
        }
    });

    // Debug: Log if no courses were added
    if (coursesGrid.children.length === 0) {
        console.log('No courses rendered. Debug info:', {
            completedCourses,
            hasHumanities,
            hasITElective,
            currentMathCourse,
            totalCourses: Object.keys(courses).length
        });
    }
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.dataset.courseCode = course.code;

    // Check if course is locked (check without specific semester first for display purposes)
    // We'll do a more thorough check when actually adding to a semester
    // Skip prerequisite checking for math courses (students may have transfer credit)
    const completedCourses = getAllCompletedCourses();
    let hasAllPrerequisites = true; // Default to true for math courses

    if (!course.code.startsWith('MTH ')) {
        hasAllPrerequisites = course.prerequisites.length === 0;

        // Check OR prerequisites
        if (course.prerequisiteOptions && course.prerequisiteOptions.length > 0) {
            hasAllPrerequisites = course.prerequisiteOptions.every(optionGroup =>
                optionGroup.some(prereq => completedCourses.includes(prereq))
            );
        } else if (course.prerequisites.length > 0) {
            // Check AND prerequisites
            hasAllPrerequisites = course.prerequisites.every(prereq => completedCourses.includes(prereq));
        }
    }

    const isLocked = !hasAllPrerequisites;

    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    const keyboardHint = !isLocked ? ' Press Enter or Space to add to a semester, or drag to move.' : '';
    card.setAttribute('aria-label', `${course.code}: ${course.title}, ${course.credits} credits.${keyboardHint}`);
    card.setAttribute('title', !isLocked ? 'Click to add, or drag to move. Keyboard: Press Enter or Space.' : 'Prerequisites not met');

    if (isLocked) {
        card.classList.add('locked');
        card.setAttribute('aria-disabled', 'true');
        card.setAttribute('aria-label', `${card.getAttribute('aria-label')} - Locked: Prerequisites not met`);
    } else {
        card.setAttribute('aria-disabled', 'false');
    }
    
    // Check if course is marked as completed/transfer
    const isCompleted = isCourseCompleted(course.code);
    
    // Add completed class if marked as completed/transfer
    if (isCompleted) {
        card.classList.add('completed-course');
    }
    
    // Add category class for styling
    if (course.category === 'humanities') {
        card.classList.add('humanities-elective');
    } else if (course.category === 'it_elective') {
        card.classList.add('it-elective');
    }

    const categoryBadge = course.category === 'humanities'
        ? '<div class="category-badge humanities-badge">Humanities Elective</div>'
        : course.category === 'it_elective'
            ? '<div class="category-badge it-badge">IT Elective</div>'
            : '';

    // Check which prerequisites are met (completedCourses already declared above)

    // Special handling for courses requiring instructor permission
    // Don't show prerequisites for math courses
    let prerequisitesHTML = '';
    if (course.code.startsWith('MTH ')) {
        prerequisitesHTML = '<div class="prerequisites"><strong>Prerequisites:</strong> None</div>';
    } else if (course.code === 'ITN 290' || course.code === 'ITN 297') {
        prerequisitesHTML = '<div class="prerequisites"><strong>Prerequisites:</strong> <span class="prereq-special">Instructor Permission</span></div>';
    } else if (course.prerequisiteOptions && course.prerequisiteOptions.length > 0) {
        // Handle OR prerequisites
        const orGroups = course.prerequisiteOptions.map(optionGroup => {
            const options = optionGroup.map(prereq => {
                const isMet = completedCourses.includes(prereq);
                return `<span class="${isMet ? 'prereq-met' : 'prereq-unmet'}">${prereq}</span>`;
            }).join(' OR ');
            return `(${options})`;
        });
        const coreqText = course.corequisites && course.corequisites.length > 0
            ? ` <span class="prereq-special">(or co-requisite: ${course.corequisites.join(', ')})</span>`
            : '';
        prerequisitesHTML = `
            <div class="prerequisites">
                <strong>Prerequisites:</strong> ${orGroups.join(' AND ')}${coreqText}
            </div>
        `;
    } else if (course.prerequisites.length > 0) {
        const prereqText = course.prerequisites.map(prereq => {
            const isMet = completedCourses.includes(prereq);
            return `<span class="${isMet ? 'prereq-met' : 'prereq-unmet'}">${prereq}</span>`;
        }).join(', ');
        const coreqText = course.corequisites && course.corequisites.length > 0
            ? ` <span class="prereq-special">(or co-requisite: ${course.corequisites.join(', ')})</span>`
            : '';
        prerequisitesHTML = `
            <div class="prerequisites">
                <strong>Prerequisites:</strong> ${prereqText}${coreqText}
            </div>
        `;
    } else {
        prerequisitesHTML = '<div class="prerequisites"><strong>Prerequisites:</strong> None</div>';
    }

    // Build card content safely
    card.appendChild(categoryBadge ? document.createRange().createContextualFragment(categoryBadge) : document.createDocumentFragment());

    const codeDiv = document.createElement('div');
    codeDiv.className = 'course-code';
    codeDiv.textContent = course.code;
    card.appendChild(codeDiv);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'course-title';
    titleDiv.textContent = course.title;
    card.appendChild(titleDiv);

    const creditsDiv = document.createElement('div');
    creditsDiv.className = 'course-credits';
    creditsDiv.textContent = `${course.credits} Credits`;
    card.appendChild(creditsDiv);

    card.appendChild(document.createRange().createContextualFragment(prerequisitesHTML));

    // Add completed/transfer checkbox
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'completed-checkbox-container';
    // Prevent clicks on checkbox container from triggering course card click
    checkboxContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `completed-${course.code}`;
    checkbox.className = 'completed-checkbox';
    checkbox.checked = isCompleted;
    checkbox.setAttribute('aria-label', `Mark ${course.code} as completed or transfer credit`);
    checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        toggleCourseCompleted(course.code);
    });
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = `completed-${course.code}`;
    checkboxLabel.className = 'completed-checkbox-label';
    checkboxLabel.textContent = isCompleted ? '✓ Completed' : 'Completed';
    checkboxLabel.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxLabel);
    card.appendChild(checkboxContainer);

    // Add upgrade button for the current math course being shown in Available Courses
    if (course.code.startsWith('MTH ') && course.code === currentMathCourse) {
        const upgradeBtn = document.createElement('button');
        upgradeBtn.className = 'upgrade-btn';
        upgradeBtn.textContent = 'Or Higher (click to change)';
        upgradeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            showMathUpgradeModal(course.code);
            return false;
        });
        card.appendChild(upgradeBtn);
    }

    // Make draggable if not locked (math courses are never locked)
    if (!isLocked || course.code.startsWith('MTH ')) {
        card.draggable = true;
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        // Keep click handler as fallback
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking the upgrade button
            if (e.target.classList.contains('upgrade-btn') || e.target.closest('.upgrade-btn')) {
                return;
            }
            // Don't trigger if clicking the checkbox or checkbox container
            if (e.target.classList.contains('completed-checkbox') || 
                e.target.classList.contains('completed-checkbox-label') ||
                e.target.closest('.completed-checkbox-container')) {
                return;
            }
            // Only trigger click handler if not dragging
            if (!e.target.classList.contains('dragging')) {
                showSemesterSelector(course);
            }
        });
        // Keyboard navigation
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showSemesterSelector(course);
            }
        });
    } else {
        card.addEventListener('click', () => showPrerequisiteModal(course));
        // Keyboard navigation for locked courses
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showPrerequisiteModal(course);
            }
        });
    }

    return card;
}

function showSemesterSelector(course) {
    const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);
    const semesterList = semesters.join(', ');
    const semester = prompt(`Select semester (${semesterList}) to add ${course.code}:\n\nOr enter a new semester number to create it:`);

    if (!semester || semester.trim() === '') {
        return;
    }

    const semesterNum = parseInt(semester.trim(), 10);

    if (isValidSemesterNumber(semesterNum)) {
        // Create semester if it doesn't exist
        if (!studentPlan[semesterNum]) {
            studentPlan[semesterNum] = [];
            // Create the semester element if it doesn't exist
            if (!document.querySelector(`.semester[data-semester="${semesterNum}"]`)) {
                const semestersContainer = document.getElementById('semestersContainer');
                const addSemesterContainer = document.querySelector('.add-semester-container');
                const semesterDiv = document.createElement('div');
                semesterDiv.className = 'semester';
                semesterDiv.dataset.semester = semesterNum;

                const headerDiv = document.createElement('div');
                headerDiv.className = 'semester-header';

                const h3 = document.createElement('h3');
                h3.textContent = `Semester ${semesterNum} `;
                const dateSpan = document.createElement('span');
                dateSpan.className = 'semester-date';
                dateSpan.textContent = `(${getSemesterName(semesterNum)})`;
                h3.appendChild(dateSpan);
                headerDiv.appendChild(h3);

                const creditsSpan = document.createElement('span');
                creditsSpan.className = 'credits';
                creditsSpan.textContent = 'Credits: ';
                const creditsValue = document.createElement('span');
                creditsValue.className = 'semester-credits';
                creditsValue.textContent = '0';
                creditsSpan.appendChild(creditsValue);
                headerDiv.appendChild(creditsSpan);

                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-semester-btn';
                removeBtn.textContent = '×';
                removeBtn.title = 'Remove semester';
                removeBtn.addEventListener('click', () => removeSemester(semesterNum));
                headerDiv.appendChild(removeBtn);

                semesterDiv.appendChild(headerDiv);

                const coursesList = document.createElement('div');
                coursesList.className = 'courses-list';
                coursesList.dataset.semester = semesterNum;
                semesterDiv.appendChild(coursesList);

                semestersContainer.insertBefore(semesterDiv, addSemesterContainer);

                // Setup drag and drop
                const newCoursesList = semesterDiv.querySelector(`.courses-list[data-semester="${semesterNum}"]`);
                const newSemesterContainer = semesterDiv;

                if (newCoursesList) {
                    newCoursesList.addEventListener('dragover', handleDragOver);
                    newCoursesList.addEventListener('drop', (e) => handleDrop(e, semesterNum));
                    newCoursesList.addEventListener('dragenter', handleDragEnter);
                    newCoursesList.addEventListener('dragleave', handleDragLeave);
                }

                newSemesterContainer.addEventListener('dragover', handleDragOver);
                newSemesterContainer.addEventListener('drop', (e) => handleDrop(e, semesterNum));
                newSemesterContainer.addEventListener('dragenter', handleDragEnter);
                newSemesterContainer.addEventListener('dragleave', handleDragLeave);
            }
        }
        addCourseToSemester(course.code, semesterNum);
    } else if (semester) {
        alert(`Please enter a valid semester number (${semesterList} or higher)`);
    }
}

function showPrerequisiteModal(course, targetSemester = null) {
    const modal = document.getElementById('prerequisiteModal');
    const message = document.getElementById('prerequisiteMessage');
    const missingDiv = document.getElementById('missingPrerequisites');

    // Clear previous content
    missingDiv.textContent = '';

    message.textContent = `You cannot add ${course.code} until you complete the following prerequisites:`;

    const missing = getMissingPrerequisites(course.code, targetSemester);

    if (missing.length === 0) {
        // Fallback: show all prerequisites if none are detected as missing
        // This handles edge cases where the logic might miss something
        if (course.prerequisites && course.prerequisites.length > 0) {
            const allPrereqs = course.prerequisites.filter(p => p !== 'Instructor Permission');
            if (allPrereqs.length > 0) {
                const ul = document.createElement('ul');
                ul.setAttribute('role', 'list');
                allPrereqs.forEach(prereq => {
                    const li = document.createElement('li');
                    li.setAttribute('role', 'listitem');
                    const prereqSemester = getCourseSemester(prereq);
                    if (prereqSemester !== null && targetSemester !== null && prereqSemester >= targetSemester) {
                        li.textContent = `${prereq} (currently in Semester ${prereqSemester})`;
                    } else {
                        li.textContent = prereq;
                    }
                    ul.appendChild(li);
                });
                missingDiv.appendChild(ul);
            } else {
                const p = document.createElement('p');
                p.textContent = 'No prerequisites required.';
                missingDiv.appendChild(p);
            }
        } else {
            const p = document.createElement('p');
            p.textContent = 'No prerequisites required.';
            missingDiv.appendChild(p);
        }
    } else {
        const ul = document.createElement('ul');
        ul.setAttribute('role', 'list');
        missing.forEach(prereq => {
            const li = document.createElement('li');
            li.setAttribute('role', 'listitem');
            li.textContent = prereq;
            ul.appendChild(li);
        });
        missingDiv.appendChild(ul);
    }

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');

    // Focus management
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.focus();
    }

    // Trap focus in modal
    trapFocusInModal(modal);
}

function getMissingPrerequisites(courseCode, targetSemester = null) {
    const course = courses[courseCode];
    if (!course) return [];

    // Handle special prerequisites like "Instructor Permission"
    if (course.prerequisites.length === 0 ||
        (course.prerequisites.length === 1 && course.prerequisites[0] === 'Instructor Permission')) {
        // Check OR prerequisites
        if (course.prerequisiteOptions && course.prerequisiteOptions.length > 0) {
            const completedCourses = getAllCompletedCourses();
            const missing = [];

            course.prerequisiteOptions.forEach(optionGroup => {
                const hasOneFromGroup = optionGroup.some(prereq => completedCourses.includes(prereq));
                if (!hasOneFromGroup) {
                    missing.push(`One of: ${optionGroup.join(' OR ')}`);
                } else if (targetSemester !== null) {
                    // Check semester order for the satisfied prerequisite
                    const satisfiedPrereq = optionGroup.find(prereq => completedCourses.includes(prereq));
                    if (satisfiedPrereq) {
                        const prereqSemester = getCourseSemester(satisfiedPrereq);
                        const isCorequisite = course.corequisites && course.corequisites.includes(satisfiedPrereq);
                        if (prereqSemester !== null && prereqSemester >= targetSemester && !isCorequisite) {
                            missing.push(`${satisfiedPrereq} (currently in Semester ${prereqSemester})`);
                        }
                    }
                }
            });

            return missing;
        }
        return [];
    }

    const completedCourses = getAllCompletedCourses();
    const missing = [];

    // Check OR prerequisites first
    if (course.prerequisiteOptions && course.prerequisiteOptions.length > 0) {
        course.prerequisiteOptions.forEach(optionGroup => {
            const hasOneFromGroup = optionGroup.some(prereq => completedCourses.includes(prereq));
            if (!hasOneFromGroup) {
                missing.push(`One of: ${optionGroup.join(' OR ')}`);
            } else if (targetSemester !== null) {
                const satisfiedPrereq = optionGroup.find(prereq => completedCourses.includes(prereq));
                if (satisfiedPrereq) {
                    const prereqSemester = getCourseSemester(satisfiedPrereq);
                    const isCorequisite = course.corequisites && course.corequisites.includes(satisfiedPrereq);
                    if (prereqSemester !== null && prereqSemester >= targetSemester && !isCorequisite) {
                        missing.push(`${satisfiedPrereq} (currently in Semester ${prereqSemester})`);
                    }
                }
            }
        });
    }

    // Check regular AND prerequisites
    course.prerequisites.forEach(prereq => {
        // Skip special prerequisites
        if (prereq === 'Instructor Permission') {
            return;
        }

        // Skip if this prerequisite is part of an OR group (already handled above)
        if (course.prerequisiteOptions && course.prerequisiteOptions.some(group => group.includes(prereq))) {
            return;
        }

        // Check if prerequisite is missing entirely
        if (!completedCourses.includes(prereq)) {
            missing.push(prereq);
        } else if (targetSemester !== null) {
            // Check if prerequisite is in the same or later semester
            const prereqSemester = getCourseSemester(prereq);
            const isCorequisite = course.corequisites && course.corequisites.includes(prereq);
            if (prereqSemester !== null && prereqSemester >= targetSemester && !isCorequisite) {
                missing.push(`${prereq} (currently in Semester ${prereqSemester})`);
            }
        }
    });

    return missing;
}

function getCourseSemester(courseCode) {
    for (const [semester, courses] of Object.entries(studentPlan)) {
        if (courses.includes(courseCode)) {
            return parseInt(semester);
        }
    }
    return null;
}

function getAllCompletedCourses() {
    const completed = [];
    // Add courses from semesters
    Object.values(studentPlan).forEach(semesterCourses => {
        semesterCourses.forEach(courseCode => {
            completed.push(courseCode);
        });
    });
    // Add courses marked as completed/transfer credit
    completedCourses.forEach(courseCode => {
        if (!completed.includes(courseCode)) {
            completed.push(courseCode);
        }
    });
    return completed;
}

function canAddCourse(courseCode, targetSemester = null) {
    const course = courses[courseCode];
    if (!course) return false;

    // Skip prerequisite checking for math courses (students may have transfer credit)
    if (courseCode.startsWith('MTH ')) {
        return true;
    }

    // Check OR prerequisites first (if defined)
    if (course.prerequisiteOptions && course.prerequisiteOptions.length > 0) {
        // For OR prerequisites, at least one option group must be satisfied
        const orGroupSatisfied = course.prerequisiteOptions.some(optionGroup => {
            // At least one course in this OR group must be completed
            const completedCourses = getAllCompletedCourses();
            const hasOneFromGroup = optionGroup.some(prereq => completedCourses.includes(prereq));

            if (!hasOneFromGroup) return false;

            // If target semester is specified, check semester order
            if (targetSemester !== null) {
                // Find which prerequisite from this group is satisfied
                const satisfiedPrereq = optionGroup.find(prereq => completedCourses.includes(prereq));
                if (satisfiedPrereq) {
                    const prereqSemester = getCourseSemester(satisfiedPrereq);
                    // For OR prerequisites, the satisfied one must be in an earlier semester
                    // (unless it's also a co-requisite)
                    if (prereqSemester !== null && prereqSemester >= targetSemester) {
                        // Check if it's a co-requisite (can be in same semester)
                        if (course.corequisites && course.corequisites.includes(satisfiedPrereq)) {
                            // Co-requisite can be in same semester
                            return prereqSemester <= targetSemester;
                        }
                        return false; // Must be in earlier semester
                    }
                }
            }
            return true;
        });

        if (!orGroupSatisfied) return false;
    }

    // Check regular AND prerequisites
    if (course.prerequisites.length > 0) {
        const completedCourses = getAllCompletedCourses();

        // Check if all prerequisites are completed
        const allPrerequisitesMet = course.prerequisites.every(prereq => completedCourses.includes(prereq));

        if (!allPrerequisitesMet) return false;

        // If target semester is specified, ensure prerequisites are in earlier semesters
        // (unless they're co-requisites)
        if (targetSemester !== null) {
            for (const prereq of course.prerequisites) {
                const prereqSemester = getCourseSemester(prereq);
                if (prereqSemester !== null) {
                    const isCorequisite = course.corequisites && course.corequisites.includes(prereq);
                    if (isCorequisite) {
                        // Co-requisite can be in same or earlier semester
                        if (prereqSemester > targetSemester) {
                            return false;
                        }
                    } else {
                        // Regular prerequisite must be in earlier semester
                        if (prereqSemester >= targetSemester) {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
}

function addCourseToSemester(courseCode, semester) {
    const course = courses[courseCode];
    if (course) {
        announceToScreenReader(`${courseCode} added to Semester ${semester}`);
    }
    // Check if course is already in this semester
    if (studentPlan[semester].includes(courseCode)) {
        alert(`${courseCode} is already in Semester ${semester}`);
        return;
    }

    // Check if course is in any semester
    const existingSemester = Object.keys(studentPlan).find(s => studentPlan[s].includes(courseCode));
    if (existingSemester) {
        alert(`${courseCode} is already in Semester ${existingSemester}. Remove it first to move it.`);
        return;
    }

    // Check prerequisites
    if (!canAddCourse(courseCode, semester)) {
        showPrerequisiteModal(course, semester);
        return;
    }

    // Check credit limit (18 credits per semester) - MUST be before adding
    if (!course) {
        alert(`Course ${courseCode} not found.`);
        return;
    }

    const currentCredits = getSemesterCredits(semester);

    // Check if semester is already at 18 credits (exactly full)
    if (currentCredits >= 18) {
        alert(`Cannot add ${courseCode}: Semester ${semester} is already at the 18 credit limit.\n\nCurrent credits: ${currentCredits}`);
        return;
    }

    const newTotalCredits = currentCredits + course.credits;

    // Check if adding would exceed 18 credits
    if (newTotalCredits > 18) {
        alert(`Cannot add ${courseCode}: This would exceed the 18 credit limit for Semester ${semester}.\n\nCurrent credits: ${currentCredits}\n${courseCode} credits: ${course.credits}\nTotal would be: ${newTotalCredits}`);
        return;
    }

    studentPlan[semester].push(courseCode);

    // After adding, check if this course should be removed due to prerequisite violations
    checkAndRemoveInvalidCourses();

    updateUI();
}

function getSemesterCredits(semester) {
    let total = 0;
    if (studentPlan[semester]) {
        studentPlan[semester].forEach(courseCode => {
            const course = courses[courseCode];
            if (course) {
                total += course.credits;
            }
        });
    }
    return total;
}

function removeCourseFromSemester(courseCode, semester) {
    const course = courses[courseCode];
    if (course) {
        announceToScreenReader(`${courseCode} removed from Semester ${semester}`);
    }
    studentPlan[semester] = studentPlan[semester].filter(code => code !== courseCode);

    // Check if removing this course breaks prerequisites for other courses
    const removedCourses = checkAndRemoveInvalidCourses();

    if (removedCourses.length > 0) {
        const courseList = removedCourses.map(code => courses[code] ? courses[code].code : code).join(', ');
        alert(`Removed ${courseCode}.\n\nThe following courses were also removed because their prerequisites are no longer met:\n${courseList}`);
    }

    updateUI();
}

function checkAndRemoveInvalidCourses() {
    const allRemovedCourses = [];
    let removedInPass = true;

    // Keep checking until no more courses are removed (handles cascading prerequisites)
    while (removedInPass) {
        removedInPass = false;
        const removedThisPass = [];

        // Check all semesters for courses with unmet prerequisites
        Object.keys(studentPlan).forEach(semesterKey => {
            const semester = parseInt(semesterKey);
            const coursesToRemove = [];

            studentPlan[semester].forEach(courseCode => {
                const course = courses[courseCode];
                if (!course) return;

                // Skip prerequisite checking for math courses (students may have transfer credit)
                if (courseCode.startsWith('MTH ')) {
                    return;
                }

                // Check if prerequisites are still met (including semester order)
                if (!canAddCourse(courseCode, semester)) {
                    coursesToRemove.push(courseCode);
                }
            });

            // Remove invalid courses from this semester
            coursesToRemove.forEach(courseCode => {
                studentPlan[semester] = studentPlan[semester].filter(code => code !== courseCode);
                removedThisPass.push(courseCode);
                removedInPass = true;
            });
        });

        allRemovedCourses.push(...removedThisPass);
    }

    return allRemovedCourses;
}

function updateUI() {
    // Update completed courses section
    updateCompletedCoursesSection();
    
    // Update semester displays for all existing semesters
    const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);
    semesters.forEach(semester => {
        updateSemesterDisplay(semester);
    });

    // Update course cards (lock/unlock based on prerequisites)
    renderCourses();

    // Update total credits
    updateTotalCredits();

    // Update PDF button state based on plan completion
    updatePDFButtonState();
}

// Update the completed courses section
function updateCompletedCoursesSection() {
    const completedList = document.getElementById('completedCoursesList');
    const completedSection = document.getElementById('completedCoursesSection');
    const creditsSpan = document.querySelector('.completed-courses-credits');
    
    if (!completedList || !completedSection) return;
    
    completedList.textContent = '';
    
    // Calculate total credits for completed courses
    let totalCredits = 0;
    Array.from(completedCourses).forEach(courseCode => {
        const course = courses[courseCode];
        if (course) {
            totalCredits += course.credits;
        }
    });
    
    // Update credits display
    if (creditsSpan) {
        creditsSpan.textContent = totalCredits;
    }
    
    if (completedCourses.size === 0) {
        // Hide section if no completed courses
        completedSection.style.display = 'none';
        return;
    }
    
    // Show section
    completedSection.style.display = 'block';
    
    // Sort completed courses by code
    const sortedCompleted = Array.from(completedCourses).sort();
    
    sortedCompleted.forEach(courseCode => {
        const course = courses[courseCode];
        if (!course) return;
        
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item completed-course-item';
        courseItem.dataset.courseCode = course.code;
        courseItem.setAttribute('role', 'listitem');
        
        const courseInfo = document.createElement('div');
        courseInfo.className = 'course-info';
        
        const headerRow = document.createElement('div');
        headerRow.className = 'course-header-row';
        
        const codeDiv = document.createElement('div');
        codeDiv.className = 'course-code';
        codeDiv.textContent = course.code;
        headerRow.appendChild(codeDiv);
        
        const categoryBadge = course.category === 'humanities'
            ? '<span class="category-badge-small humanities-badge">Humanities</span>'
            : course.category === 'it_elective'
                ? '<span class="category-badge-small it-badge">IT Elective</span>'
                : '';
        
        if (categoryBadge) {
            headerRow.appendChild(document.createRange().createContextualFragment(categoryBadge));
        }
        
        courseInfo.appendChild(headerRow);
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'course-title';
        titleDiv.textContent = course.title;
        courseInfo.appendChild(titleDiv);
        
        const creditsDiv = document.createElement('div');
        creditsDiv.className = 'course-credits';
        creditsDiv.textContent = `${course.credits} Credits`;
        courseInfo.appendChild(creditsDiv);
        
        courseItem.appendChild(courseInfo);
        
        // Add checkbox to unmark as completed
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'course-item-actions';
        
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'completed-checkbox-container semester-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `completed-list-${course.code}`;
        checkbox.className = 'completed-checkbox';
        checkbox.checked = true;
        checkbox.setAttribute('aria-label', `Unmark ${course.code} as completed or transfer credit`);
        checkbox.addEventListener('change', (e) => {
            e.stopPropagation();
            toggleCourseCompleted(course.code);
        });
        
        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = `completed-list-${course.code}`;
        checkboxLabel.className = 'completed-checkbox-label';
        checkboxLabel.textContent = '✓ Completed';
        
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxLabel);
        actionsContainer.appendChild(checkboxContainer);
        
        courseItem.appendChild(actionsContainer);
        completedList.appendChild(courseItem);
    });
}

function addNewSemester() {
    try {
        const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);
        const nextSemester = semesters.length > 0 ? Math.max(...semesters) + 1 : 5;

        // Add to student plan
        studentPlan[nextSemester] = [];

        // Create semester HTML
        const semestersContainer = document.getElementById('semestersContainer');
        if (!semestersContainer) {
            console.error('semestersContainer not found');
            return;
        }

        const semesterDiv = document.createElement('div');
        semesterDiv.className = 'semester';
        semesterDiv.dataset.semester = nextSemester;

        const headerDiv = document.createElement('div');
        headerDiv.className = 'semester-header';

        const h3 = document.createElement('h3');
        h3.textContent = `Semester ${nextSemester} `;
        const dateSpan = document.createElement('span');
        dateSpan.className = 'semester-date';
        dateSpan.textContent = `(${getSemesterName(nextSemester)})`;
        h3.appendChild(dateSpan);
        headerDiv.appendChild(h3);

        const creditsSpan = document.createElement('span');
        creditsSpan.className = 'credits';
        creditsSpan.textContent = 'Credits: ';
        const creditsValue = document.createElement('span');
        creditsValue.className = 'semester-credits';
        creditsValue.textContent = '0';
        creditsSpan.appendChild(creditsValue);
        headerDiv.appendChild(creditsSpan);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-semester-btn';
        removeBtn.textContent = '×';
        removeBtn.title = 'Remove semester';
        removeBtn.addEventListener('click', () => removeSemester(nextSemester));
        headerDiv.appendChild(removeBtn);

        semesterDiv.appendChild(headerDiv);

        const coursesList = document.createElement('div');
        coursesList.className = 'courses-list';
        coursesList.dataset.semester = nextSemester;
        semesterDiv.appendChild(coursesList);

        // Append to semesters container
        semestersContainer.appendChild(semesterDiv);

        // Setup drag and drop for new semester
        const newSemesterCoursesList = semesterDiv.querySelector(`.courses-list[data-semester="${nextSemester}"]`);
        const newSemesterContainer = semesterDiv;

        if (newSemesterCoursesList) {
            newSemesterCoursesList.addEventListener('dragover', handleDragOver);
            newSemesterCoursesList.addEventListener('drop', (e) => handleDrop(e, nextSemester));
            newSemesterCoursesList.addEventListener('dragenter', handleDragEnter);
            newSemesterCoursesList.addEventListener('dragleave', handleDragLeave);
        }

        newSemesterContainer.addEventListener('dragover', handleDragOver);
        newSemesterContainer.addEventListener('drop', (e) => handleDrop(e, nextSemester));
        newSemesterContainer.addEventListener('dragenter', handleDragEnter);
        newSemesterContainer.addEventListener('dragleave', handleDragLeave);

        updateUI();
    } catch (error) {
        console.error('Error adding semester:', error);
        alert('Error adding semester: ' + error.message);
    }
}

function removeSemester(semester) {
    if (confirm(`Remove Semester ${semester}? All courses in this semester will be removed.`)) {
        delete studentPlan[semester];
        const semesterElement = document.querySelector(`.semester[data-semester="${semester}"]`);
        if (semesterElement) {
            semesterElement.remove();
        }
        updateUI();
    }
}

// Make removeSemester available globally
window.removeSemester = removeSemester;

function hasElectiveInSemester(semester, category) {
    return studentPlan[semester].some(courseCode => {
        const course = courses[courseCode];
        return course && course.category === category;
    });
}

function createElectivePlaceholder(category, semester) {
    const placeholder = document.createElement('div');
    placeholder.className = `course-item placeholder ${category === 'humanities' ? 'humanities-elective' : 'it-elective'}`;
    placeholder.draggable = true;
    placeholder.dataset.placeholderCategory = category;
    placeholder.dataset.currentSemester = semester;

    const categoryName = category === 'humanities' ? 'Humanities' : 'IT';
    const credits = category === 'humanities' ? '3' : '3-4';
    const badgeClass = category === 'humanities' ? 'humanities-badge' : 'it-badge';

    const placeholderInfo = document.createElement('div');
    placeholderInfo.className = 'course-info';

    const headerRow = document.createElement('div');
    headerRow.className = 'course-header-row';

    const codeDiv = document.createElement('div');
    codeDiv.className = 'course-code placeholder-text';
    codeDiv.textContent = `${categoryName} Elective`;
    headerRow.appendChild(codeDiv);

    const badge = document.createElement('span');
    badge.className = `category-badge-small ${badgeClass}`;
    badge.textContent = categoryName;
    headerRow.appendChild(badge);

    placeholderInfo.appendChild(headerRow);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'course-title placeholder-text';
    titleDiv.textContent = `Click to select ${categoryName.toLowerCase()} elective • Drag to move`;
    placeholderInfo.appendChild(titleDiv);

    const creditsDiv = document.createElement('div');
    creditsDiv.className = 'course-credits';
    creditsDiv.textContent = `${credits} Credits`;
    placeholderInfo.appendChild(creditsDiv);

    placeholder.appendChild(placeholderInfo);

    // Make it draggable
    placeholder.addEventListener('dragstart', handlePlaceholderDragStart);
    placeholder.addEventListener('dragend', handleDragEnd);

    // Make it clickable to select an elective (only when clicking, not dragging)
    placeholder.addEventListener('click', (e) => {
        // Only show selector if it wasn't a drag operation
        if (e.target.dataset.dragStarted !== 'true') {
            showElectiveSelector(category, semester);
        }
    });
    placeholder.style.cursor = 'grab';

    return placeholder;
}

function showElectiveSelector(category, semester) {
    // Get available electives of this category
    const availableElectives = Object.values(courses).filter(course =>
        course.category === category &&
        !getAllCompletedCourses().includes(course.code)
    );

    if (availableElectives.length === 0) {
        alert(`No ${category === 'humanities' ? 'Humanities' : 'IT'} electives available.`);
        return;
    }

    // Create a simple selection dialog
    const options = availableElectives.map(course =>
        `${course.code} - ${course.title}`
    ).join('\n');

    const selection = prompt(
        `Select a ${category === 'humanities' ? 'Humanities' : 'IT'} elective for Semester ${semester}:\n\n${options}\n\nEnter course code (e.g., ${availableElectives[0].code}):`
    );

    if (selection) {
        const trimmedSelection = selection.trim().toUpperCase();

        // Validate course code format
        if (!/^[A-Z]{2,4} \d{3}$/.test(trimmedSelection)) {
            alert('Invalid course code format. Please enter a code like "ART 100".');
            return;
        }

        const selectedCourse = availableElectives.find(course =>
            course.code.toUpperCase() === trimmedSelection
        );

        if (selectedCourse) {
            addCourseToSemester(selectedCourse.code, semester);
        } else {
            alert('Invalid course code. Please try again.');
        }
    }
}

function handlePlaceholderDragStart(e) {
    draggedElement = e.target;
    draggedElement.classList.add('dragging');
    draggedElement.dataset.isPlaceholder = 'true';
    draggedFromSemester = e.target.dataset.currentSemester ? parseInt(e.target.dataset.currentSemester) : null;

    // Mark that dragging has started
    draggedElement.dataset.dragStarted = 'true';

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', 'placeholder');

    // Add visual feedback
    e.target.style.opacity = '0.5';
}

function updateSemesterDisplay(semester) {
    const coursesList = document.querySelector(`.courses-list[data-semester="${semester}"]`);
    const creditsSpan = document.querySelector(`.semester[data-semester="${semester}"] .semester-credits`);

    coursesList.textContent = '';

    let semesterCredits = 0;

    // Render existing courses
    studentPlan[semester].forEach(courseCode => {
        const course = courses[courseCode];
        if (!course) return;

        semesterCredits += course.credits;

        const categoryBadge = course.category === 'humanities'
            ? '<span class="category-badge-small humanities-badge">Humanities</span>'
            : course.category === 'it_elective'
                ? '<span class="category-badge-small it-badge">IT Elective</span>'
                : '';

        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.draggable = true;
        courseItem.dataset.courseCode = course.code;
        courseItem.dataset.currentSemester = semester;
        courseItem.setAttribute('role', 'listitem');
        courseItem.setAttribute('tabindex', '0');
        courseItem.setAttribute('aria-label', `${course.code}: ${course.title}, ${course.credits} credits in Semester ${semester}. Press Enter or Space to move, or drag to another semester.`);
        courseItem.setAttribute('title', 'Press Enter or Space to move, or drag to another semester');

        if (course.category === 'humanities') {
            courseItem.classList.add('humanities-elective');
        } else if (course.category === 'it_elective') {
            courseItem.classList.add('it-elective');
        }

        const courseInfo = document.createElement('div');
        courseInfo.className = 'course-info';

        const headerRow = document.createElement('div');
        headerRow.className = 'course-header-row';

        const codeDiv = document.createElement('div');
        codeDiv.className = 'course-code';
        codeDiv.textContent = course.code;
        headerRow.appendChild(codeDiv);

        if (categoryBadge) {
            headerRow.appendChild(document.createRange().createContextualFragment(categoryBadge));
        }

        // Add upgrade button for the current math course (if it's in Available Courses)
        const completedCoursesForUpgrade = getAllCompletedCourses();
        if (course.code.startsWith('MTH ') && course.code === currentMathCourse && !completedCoursesForUpgrade.includes(course.code)) {
            const upgradeBtn = document.createElement('button');
            upgradeBtn.className = 'upgrade-btn-small';
            upgradeBtn.textContent = 'Or Higher';
            upgradeBtn.title = 'Or Higher (click to change)';
            upgradeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showMathUpgradeModal(course.code);
            });
            headerRow.appendChild(upgradeBtn);
        }

        courseInfo.appendChild(headerRow);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'course-title';
        titleDiv.textContent = course.title;
        courseInfo.appendChild(titleDiv);

        const creditsDiv = document.createElement('div');
        creditsDiv.className = 'course-credits';
        creditsDiv.textContent = `${course.credits} Credits`;
        courseInfo.appendChild(creditsDiv);

        courseItem.appendChild(courseInfo);
        
        // Don't show checkbox in semester if course is already completed
        // (it should have been moved to completed section)
        const isCompleted = isCourseCompleted(course.code);
        if (isCompleted) {
            // This shouldn't happen, but if it does, skip rendering this course
            return;
        }
        
        // Create a container for checkbox and remove button
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'course-item-actions';
        
        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'completed-checkbox-container semester-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `completed-sem-${semester}-${course.code}`;
        checkbox.className = 'completed-checkbox';
        checkbox.checked = false;
        checkbox.setAttribute('aria-label', `Mark ${course.code} as completed or transfer credit`);
        checkbox.addEventListener('change', (e) => {
            e.stopPropagation();
            toggleCourseCompleted(course.code);
        });
        
        const checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = `completed-sem-${semester}-${course.code}`;
        checkboxLabel.className = 'completed-checkbox-label';
        checkboxLabel.textContent = 'Completed';
        
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxLabel);
        actionsContainer.appendChild(checkboxContainer);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('aria-label', `Remove ${course.code} from Semester ${semester}`);
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeCourseFromSemester(course.code, semester);
        });
        actionsContainer.appendChild(removeBtn);
        courseItem.appendChild(actionsContainer);

        // Add drag handlers
        courseItem.addEventListener('dragstart', handleDragStart);
        courseItem.addEventListener('dragend', handleDragEnd);

        // Keyboard navigation for course items in semesters
        courseItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                // Show semester selector to move course
                // Note: showSemesterSelector will handle the case where course is already in a semester
                showSemesterSelector(course);
            }
        });

        coursesList.appendChild(courseItem);
    });

    // Add placeholder for Humanities Elective (show in tracked semester if not selected)
    if (semester === placeholderPositions.humanities && !hasElectiveSelected('humanities')) {
        const placeholder = createElectivePlaceholder('humanities', semester);
        coursesList.appendChild(placeholder);
    }

    // Add placeholder for IT Elective (show in tracked semester if not selected)
    if (semester === placeholderPositions.it_elective && !hasElectiveSelected('it_elective')) {
        const placeholder = createElectivePlaceholder('it_elective', semester);
        coursesList.appendChild(placeholder);
    }

    // Show empty message only if semester is completely empty and has no placeholders
    if (coursesList.children.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-semester';
        emptyMsg.textContent = 'No courses added yet';
        coursesList.textContent = '';
        coursesList.appendChild(emptyMsg);
    }

    creditsSpan.textContent = semesterCredits;

    // Add visual indicator if semester is full (18 credits)
    const semesterHeader = document.querySelector(`.semester[data-semester="${semester}"] .semester-header`);
    if (semesterHeader) {
        if (semesterCredits >= 18) {
            semesterHeader.classList.add('semester-full');
        } else {
            semesterHeader.classList.remove('semester-full');
        }
    }
}

function updateTotalCredits() {
    let total = 0;
    const countedCourses = new Set();
    
    // Add credits from courses in semesters
    Object.values(studentPlan).forEach(semesterCourses => {
        semesterCourses.forEach(courseCode => {
            if (!countedCourses.has(courseCode)) {
                const course = courses[courseCode];
                if (course) {
                    total += course.credits;
                    countedCourses.add(courseCode);
                }
            }
        });
    });
    
    // Add credits from completed/transfer courses (only if not already counted)
    if (completedCourses instanceof Set) {
        completedCourses.forEach(courseCode => {
            if (!countedCourses.has(courseCode)) {
                const course = courses[courseCode];
                if (course) {
                    total += course.credits;
                    countedCourses.add(courseCode);
                }
            }
        });
    }
    
    document.getElementById('totalCredits').textContent = total;
}

function filterCourses(searchTerm) {
    // If plan is complete, don't filter (there are no courses to show anyway)
    if (isPlanComplete()) {
        return;
    }

    const courseCards = document.querySelectorAll('.course-card');
    const term = searchTerm.toLowerCase();

    const hasHumanities = hasElectiveSelected('humanities');
    const hasITElective = hasElectiveSelected('it_elective');
    const coursesInSemesters = [];
    Object.values(studentPlan).forEach(semesterCourses => {
        semesterCourses.forEach(courseCode => {
            coursesInSemesters.push(courseCode);
        });
    });

    courseCards.forEach(card => {
        const courseCode = card.dataset.courseCode;
        const course = courses[courseCode];
        if (!course) return;

        // Hide courses that are already in a semester
        if (coursesInSemesters.includes(courseCode)) {
            card.style.display = 'none';
            return;
        }
        
        // Hide courses that are marked as completed (they're in the completed section)
        if (isCourseCompleted(courseCode)) {
            card.style.display = 'none';
            return;
        }

        // Math courses are now available directly (no prerequisites enforced)

        // Hide all humanities electives if one is already selected
        if (course.category === 'humanities' && hasHumanities) {
            card.style.display = 'none';
            return;
        }

        // Hide all IT electives if one is already selected
        if (course.category === 'it_elective' && hasITElective) {
            card.style.display = 'none';
            return;
        }

        const matches =
            course.code.toLowerCase().includes(term) ||
            course.title.toLowerCase().includes(term);

        card.style.display = matches ? 'block' : 'none';
    });
}

function saveToStorage() {
    // Check if plan is complete before allowing PDF creation
    if (!isPlanComplete()) {
        alert('Please complete your plan before creating a PDF. All required courses and electives must be selected.');
        return;
    }

    try {
        // Still save to localStorage for persistence
        localStorage.setItem('cyberplan_studentPlan', JSON.stringify(studentPlan));
        localStorage.setItem('cyberplan_placeholderPositions', JSON.stringify(placeholderPositions));
        localStorage.setItem('cyberplan_currentMathCourse', currentMathCourse);
        saveCompletedCoursesToStorage();

        // Generate PDF
        const pdfGenerated = generatePDF();

        if (pdfGenerated) {
            alert('PDF created successfully!');
        } else {
            alert('PDF generation failed. Please refresh the page and try again.');
        }
    } catch (e) {
        alert('Error creating PDF: ' + e.message);
    }
}

function generatePDF() {
    // Check for jsPDF library - it might be loaded as window.jspdf or just available globally
    let jsPDF;
    if (window.jspdf && window.jspdf.jsPDF) {
        jsPDF = window.jspdf.jsPDF;
    } else if (window.jsPDF) {
        jsPDF = window.jsPDF;
    } else {
        console.error('jsPDF library not found. Available:', Object.keys(window).filter(k => k.toLowerCase().includes('pdf')));
        return false;
    }

    try {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text('Tidewater Community College', 105, 20, { align: 'center' });

        doc.setFontSize(14);
        doc.setFont(undefined, 'normal');
        doc.text('Associate of Applied Science: Cyber Security (345)', 105, 28, { align: 'center' });

        doc.setFontSize(10);
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 105, 35, { align: 'center' });

        // Get all semesters sorted
        const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);

        let yPos = 45;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 20;
        const lineHeight = 7;

        // Calculate total credits
        let totalCredits = 0;

        semesters.forEach((semesterNum) => {
            const semesterCourses = studentPlan[semesterNum] || [];
            const semesterCredits = getSemesterCredits(semesterNum);
            totalCredits += semesterCredits;

            // Check if we need a new page
            if (yPos > pageHeight - 50) {
                doc.addPage();
                yPos = 20;
            }

            // Semester header
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            const semesterName = getSemesterName(semesterNum);
            doc.text(`Semester ${semesterNum} (${semesterName})`, margin, yPos);

            yPos += lineHeight;

            // Courses in this semester
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');

            if (semesterCourses.length === 0) {
                doc.text('  No courses scheduled', margin + 5, yPos);
                yPos += lineHeight;
            } else {
                semesterCourses.forEach((courseCode) => {
                    const course = courses[courseCode];
                    if (course) {
                        const categoryBadge = course.category === 'humanities' ? '[H]' :
                            course.category === 'it_elective' ? '[IT]' : '';
                        const courseText = `${courseCode} - ${course.title} (${course.credits} credits) ${categoryBadge}`;
                        doc.text(courseText, margin + 5, yPos);
                        yPos += lineHeight;
                    }
                });
            }

            // Semester credits
            doc.setFont(undefined, 'italic');
            doc.text(`  Total: ${semesterCredits} credits`, margin + 5, yPos);
            yPos += lineHeight + 3;
        });

        // Check if we need a new page for summary
        if (yPos > pageHeight - 30) {
            doc.addPage();
            yPos = 20;
        }

        // Summary
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Summary', margin, yPos);
        yPos += lineHeight;

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text(`Total Credits: ${totalCredits}`, margin + 5, yPos);
        yPos += lineHeight;

        // Check for selected electives
        const allCourses = getAllCompletedCourses();
        const humanitiesElective = allCourses.find(code => courses[code]?.category === 'humanities');
        const itElective = allCourses.find(code => courses[code]?.category === 'it_elective');

        if (humanitiesElective) {
            const humanitiesCourse = courses[humanitiesElective];
            const humanitiesText = humanitiesCourse
                ? `Humanities Elective: ${humanitiesElective} - ${humanitiesCourse.title}`
                : `Humanities Elective: ${humanitiesElective}`;
            doc.text(humanitiesText, margin + 5, yPos);
            yPos += lineHeight;
        }
        if (itElective) {
            const itCourse = courses[itElective];
            const itText = itCourse
                ? `IT Elective: ${itElective} - ${itCourse.title}`
                : `IT Elective: ${itElective}`;
            doc.text(itText, margin + 5, yPos);
            yPos += lineHeight;
        }
        
        // Add completed/transfer courses section if any exist
        const completedOnly = Array.from(completedCourses).filter(code => {
            // Only include courses that are not in any semester
            return !Object.values(studentPlan).some(semesterCourses => semesterCourses.includes(code));
        });
        
        if (completedOnly.length > 0) {
            // Check if we need a new page
            if (yPos > pageHeight - 50) {
                doc.addPage();
                yPos = 20;
            }
            
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text('Completed/Transfer Courses', margin, yPos);
            yPos += lineHeight;
            
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');
            completedOnly.forEach((courseCode) => {
                const course = courses[courseCode];
                if (course) {
                    const courseText = `${courseCode} - ${course.title} (${course.credits} credits) [Completed/Transfer]`;
                    doc.text(courseText, margin + 5, yPos);
                    yPos += lineHeight;
                }
            });
        }

        // Save the PDF
        const fileName = `TCC_CyberSecurity_Plan_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        return true;
    } catch (e) {
        console.error('Error generating PDF:', e);
        return false;
    }
}

function isValidPlanStructure(plan) {
    if (!plan || typeof plan !== 'object') return false;
    // Check that all values are arrays
    for (const key in plan) {
        if (!Array.isArray(plan[key])) return false;
        // Validate course codes in arrays
        for (const courseCode of plan[key]) {
            if (!isValidCourseCode(courseCode)) return false;
        }
    }
    return true;
}

function loadFromStorage(showAlert = true) {
    try {
        const saved = localStorage.getItem('cyberplan_studentPlan');
        const savedPositions = localStorage.getItem('cyberplan_placeholderPositions');

        if (saved) {
            let parsedPlan;
            try {
                parsedPlan = JSON.parse(saved);
            } catch (e) {
                throw new Error('Invalid saved plan data format.');
            }

            // Validate plan structure
            if (!isValidPlanStructure(parsedPlan)) {
                throw new Error('Saved plan has invalid structure. Resetting to default.');
            }

            studentPlan = parsedPlan;

            if (savedPositions) {
                try {
                    const parsedPositions = JSON.parse(savedPositions);
                    if (parsedPositions && typeof parsedPositions === 'object') {
                        placeholderPositions = parsedPositions;
                    }
                } catch (e) {
                    console.warn('Invalid placeholder positions, using defaults');
                }
            }

            const savedMathCourse = localStorage.getItem('cyberplan_currentMathCourse');
            if (savedMathCourse && isValidCourseCode(savedMathCourse)) {
                currentMathCourse = savedMathCourse;
            }
            
            // Load completed courses
            loadCompletedCoursesFromStorage();
            
            // Ensure completedCourses is a Set (in case loading failed)
            if (!(completedCourses instanceof Set)) {
                completedCourses = new Set();
            }
            
            updateUI();
            if (showAlert) {
                alert('Plan loaded successfully!');
            }
        } else {
            // Load default suggested plan if no saved plan exists
            studentPlan = getDefaultPlan();
            placeholderPositions = {
                humanities: 1,
                it_elective: 4
            };
            currentMathCourse = 'MTH 161';
            updateUI();
            if (showAlert) {
                alert('No saved plan found. Loaded default suggested plan.');
            }
        }
    } catch (e) {
        alert('Error loading plan: ' + e.message);
    }
}

function resetToDefault() {
    if (confirm('Reset to the default suggested plan? This will replace your current plan. Completed/transfer course markings will be preserved.')) {
        studentPlan = getDefaultPlan();
        placeholderPositions = {
            humanities: 1,
            it_elective: 4
        };
        currentMathCourse = 'MTH 161'; // Reset to default math course
        // Note: completedCourses is preserved
        saveToStorage();
        updateUI();
    }
}

function clearAll() {
    if (confirm('Are you sure you want to clear all courses? This cannot be undone. This will also clear all completed/transfer course markings.')) {
        studentPlan = {
            1: ['SDV 101'], // Default SDV 101 in Semester 1
            2: [],
            3: [],
            4: []
        };
        placeholderPositions = {
            humanities: 1,
            it_elective: 4
        };
        currentMathCourse = 'MTH 161'; // Reset to default math course
        // Clear completed courses as well
        completedCourses.clear();
        saveToStorage();

        // Remove any extra semesters (5+) from the DOM
        const semestersContainer = document.getElementById('semestersContainer');
        if (semestersContainer) {
            const allSemesters = semestersContainer.querySelectorAll('.semester');
            allSemesters.forEach(semesterDiv => {
                const semesterNum = parseInt(semesterDiv.dataset.semester);
                if (semesterNum > 4) {
                    semesterDiv.remove();
                }
            });
        }

        updateUI();

        // Ensure courses are rendered (updateUI calls renderCourses, but this ensures it happens)
        setTimeout(() => {
            renderCourses();
        }, 0);
    }
}

// Toggle course completed/transfer status
function toggleCourseCompleted(courseCode) {
    if (completedCourses.has(courseCode)) {
        // Unmarking as completed - remove from completed set
        completedCourses.delete(courseCode);
    } else {
        // Marking as completed - add to completed set
        completedCourses.add(courseCode);
        
        // Remove course from any semester it's in
        Object.keys(studentPlan).forEach(semester => {
            const semesterNum = parseInt(semester);
            if (studentPlan[semesterNum].includes(courseCode)) {
                studentPlan[semesterNum] = studentPlan[semesterNum].filter(code => code !== courseCode);
            }
        });
    }
    
    // Save to localStorage
    saveCompletedCoursesToStorage();
    
    // Update UI to reflect changes (prerequisites may have changed)
    updateUI();
}

// Save completed courses to localStorage
function saveCompletedCoursesToStorage() {
    try {
        localStorage.setItem('cyberplan_completedCourses', JSON.stringify(Array.from(completedCourses)));
    } catch (e) {
        console.error('Error saving completed courses:', e);
    }
}

// Load completed courses from localStorage
function loadCompletedCoursesFromStorage() {
    try {
        const saved = localStorage.getItem('cyberplan_completedCourses');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                completedCourses = new Set(parsed);
            } else {
                // If it's not an array, reset to empty Set
                completedCourses = new Set();
            }
        } else {
            // No saved data, ensure it's a Set
            completedCourses = new Set();
        }
    } catch (e) {
        console.error('Error loading completed courses:', e);
        // On error, ensure it's still a Set
        completedCourses = new Set();
    }
}

// Make removeCourseFromSemester available globally for onclick handlers
window.removeCourseFromSemester = removeCourseFromSemester;

// Update PDF button state based on plan completion
function updatePDFButtonState() {
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) {
        const planComplete = isPlanComplete();
        saveBtn.disabled = !planComplete;
        if (planComplete) {
            saveBtn.classList.remove('btn-disabled');
            saveBtn.title = 'Create PDF of your completed plan';
        } else {
            saveBtn.classList.add('btn-disabled');
            saveBtn.title = 'Complete your plan (all required courses and electives) to create PDF';
        }
    }
}

// Theme management
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('cyberplan_theme') || 'system';
    setTheme(savedTheme);
}

function setTheme(theme) {
    // Handle "system" theme
    if (theme === 'system') {
        document.documentElement.removeAttribute('data-theme');
        // Apply system preference via media query (already handled in CSS)
        const systemTheme = getSystemTheme();
        updateThemeSelector('system');
        // Don't save 'system' to localStorage, let CSS handle it
        return;
    }

    // Apply explicit theme
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeSelector(theme);
    localStorage.setItem('cyberplan_theme', theme);
}

function updateThemeSelector(theme) {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.value = theme;
    }
}

// Listen for system theme changes
function setupSystemThemeListener() {
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        // Use addListener for older browsers, addEventListener for modern
        const handler = (e) => {
            const currentTheme = localStorage.getItem('cyberplan_theme') || 'system';
            if (currentTheme === 'system') {
                // System preference changed, update theme
                document.documentElement.removeAttribute('data-theme');
                updateThemeSelector('system');
            }
        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handler);
        } else if (mediaQuery.addListener) {
            // Fallback for older browsers
            mediaQuery.addListener(handler);
        }
    }
}

// Calculate semester name (Fall 2025, Spring 2026, etc.)
function getSemesterName(semesterNum, startYear = 2025, startTerm = 'Fall') {
    const terms = ['Fall', 'Spring', 'Summer'];
    let currentTermIndex = startTerm === 'Fall' ? 0 : startTerm === 'Spring' ? 1 : 2;
    let currentYear = startYear;

    // Calculate which term and year this semester is
    // Semester 1 is Fall 2025 (no increment), so we need (semesterNum - 1) increments
    for (let i = 1; i < semesterNum; i++) {
        currentTermIndex++;
        if (currentTermIndex >= terms.length) {
            currentTermIndex = 0;
            currentYear++;
        }
    }

    // Spring and Summer should use the year of the following Fall
    // So if we're in Spring or Summer, increment the year by 1
    if (currentTermIndex === 1 || currentTermIndex === 2) {
        currentYear++;
    }

    return `${terms[currentTermIndex]} ${currentYear}`;
}

// Accessibility helper functions
function announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
        // Clear after announcement
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    }
}

function trapFocusInModal(modal) {
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const trapHandler = function (e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    };

    modal.addEventListener('keydown', trapHandler);
    // Store handler for cleanup if needed
    modal.dataset.trapHandler = 'true';
}

function showMathUpgradeModal(currentCourseCode) {
    const modal = document.getElementById('mathUpgradeModal');
    const optionsDiv = document.getElementById('mathUpgradeOptions');

    // Get all higher level math courses
    const mathCourses = [
        'MTH 162', 'MTH 167', 'MTH 245', 'MTH 261', 'MTH 262',
        'MTH 263', 'MTH 264', 'MTH 265', 'MTH 266', 'MTH 267', 'MTH 283'
    ].map(code => courses[code]).filter(course => course);

    optionsDiv.textContent = '';

    mathCourses.forEach(course => {
        const option = document.createElement('div');
        option.className = 'math-upgrade-option';
        option.setAttribute('role', 'option');
        option.setAttribute('aria-label', `${course.code}: ${course.title}, ${course.credits} credits`);

        const optionInfo = document.createElement('div');
        optionInfo.className = 'math-option-info';

        const codeDiv = document.createElement('div');
        codeDiv.className = 'math-option-code';
        codeDiv.textContent = course.code;
        optionInfo.appendChild(codeDiv);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'math-option-title';
        titleDiv.textContent = course.title;
        optionInfo.appendChild(titleDiv);

        const creditsDiv = document.createElement('div');
        creditsDiv.className = 'math-option-credits';
        creditsDiv.textContent = `${course.credits} Credits`;
        optionInfo.appendChild(creditsDiv);

        option.appendChild(optionInfo);

        const selectBtn = document.createElement('button');
        selectBtn.className = 'btn btn-primary';
        selectBtn.textContent = 'Select';
        selectBtn.addEventListener('click', () => {
            upgradeMathCourse(currentCourseCode, course.code);
        });
        option.appendChild(selectBtn);

        optionsDiv.appendChild(option);
    });

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');

    // Focus management
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.focus();
    }

    // Trap focus in modal
    trapFocusInModal(modal);
}

function upgradeMathCourse(oldCourseCode, newCourseCode) {
    // Find which semester has the old course
    let foundSemester = null;
    Object.keys(studentPlan).forEach(semester => {
        if (studentPlan[semester].includes(oldCourseCode)) {
            foundSemester = parseInt(semester);
        }
    });

    if (foundSemester !== null) {
        // Replace the course if it exists in a semester
        studentPlan[foundSemester] = studentPlan[foundSemester].map(code =>
            code === oldCourseCode ? newCourseCode : code
        );
    } else {
        // If the old course isn't in any semester (it's in Available Courses),
        // update the current math course to show the new one
        currentMathCourse = newCourseCode;
    }

    // Close modal
    document.getElementById('mathUpgradeModal').classList.remove('show');

    // Update UI
    updateUI();
}

// Show instructions modal
function showInstructionsModal() {
    const modal = document.getElementById('instructionsModal');
    const content = document.getElementById('instructionsContent');
    
    if (!modal || !content) return;
    
    // Set the instructions content
    content.innerHTML = `
        <h1 id="instructionsModal-title">CyberPlan Instructions</h1>
        
        <p>Welcome to <strong>CyberPlan</strong>, a simple tool to help you build your academic plan for the Cybersecurity program. Follow the steps below to create your semester-by-semester schedule and export it as a PDF for review.</p>
        
        <p>Website: <a href="https://jkirchtcc.github.io/cyberplan/" target="_blank" rel="noopener noreferrer">https://jkirchtcc.github.io/cyberplan/</a></p>
        
        <h2>1. Getting Started</h2>
        <p>For the best experience, use a <strong>laptop or desktop computer</strong>.</p>
        <p>The drag-and-drop features do not work well on smartphones.</p>
        <p>Nothing is saved online. Your plan exists only in your browser until you download it.</p>
        
        <h2>2. Choose How You Want to Start</h2>
        <p>CyberPlan gives you two ways to begin your plan:</p>
        
        <h3>Option A: Reset to Default (Recommended for Most Students)</h3>
        <p>This loads a pre-built plan based on the standard TCC Cybersecurity curriculum.</p>
        <p>All required courses are already placed for you.</p>
        <p>After loading the default plan, you only need to:</p>
        <ul>
            <li>Drag your <strong>Humanities Elective</strong> into <strong>Semester 1</strong></li>
            <li>Drag your <strong>IT Elective</strong> into <strong>Semester 4</strong></li>
        </ul>
        <p>This option is the fastest way to complete the assignment.</p>
        
        <h3>Option B: Clear All (Custom Plan)</h3>
        <p>This removes everything except one required course: <strong>SDV 101 stays in Semester 1</strong> by default because it usually is taken during your first semester, but you can move it if needed.</p>
        <p>Choose this option if:</p>
        <ul>
            <li>You already transferred credits</li>
            <li>You want to customize every semester</li>
            <li>You want to build the plan completely from scratch</li>
        </ul>
        <p>You can place any transferred courses into Semester 1, Semester 2, or whichever term makes sense for you. Each course has a <strong>Completed</strong> checkbox so you can mark transfer credit or prior completion.</p>
        
        <h2>3. Building Your Plan</h2>
        
        <h3>Drag and Drop Courses</h3>
        <p>You can drag any course or elective placeholder from the right panel into any semester box on the left.</p>
        <p>You can rearrange courses at any time by dragging them again, or even move them between semesters. The system will help prevent prerequisite issues by warning you if you try to place a course before its prerequisites are completed.</p>
        
        <h3>Credit Limits</h3>
        <p>Each semester is limited to <strong>18 credits</strong>.</p>
        <p>If adding a course would push a semester above 18 credits, the planner will prevent it from dropping into that semester.</p>
        <p>This keeps you within a realistic course load.</p>
        
        <h3>Adding More Semesters</h3>
        <p>If you need additional terms (for example, summer courses or a lighter workload):</p>
        <ul>
            <li>Click <strong>Add Semester</strong> at the bottom of the page</li>
            <li>A new semester will appear and can be filled like the others</li>
        </ul>
        
        <h3>Marking Completed Courses</h3>
        <p>If you already completed a course (through transfer credit or prior enrollment):</p>
        <ul>
            <li>Check the <strong>Completed</strong> box on the course</li>
            <li>The course will move to the <strong>Completed/Transfer Courses</strong> section at the top</li>
            <li>A checkmark will appear showing the requirement is already finished</li>
        </ul>
        <p>This helps your advisor understand which classes you still need.</p>
        
        <h2>4. Reviewing Your Plan</h2>
        <p>Before exporting your plan, make sure:</p>
        <ul>
            <li>All required courses appear in your schedule</li>
            <li>Electives are placed in the correct semesters</li>
            <li>No semester exceeds 18 credits</li>
            <li>Completed courses are marked correctly</li>
            <li>The plan matches your timeline and goals</li>
        </ul>
        <p>You may adjust any course by dragging it to a new location.</p>
        
        <h2>5. PDF of Your Plan</h2>
        <p>When everything looks correct:</p>
        <ol>
            <li>Click <strong>Create PDF</strong></li>
            <li>Your browser will generate a PDF of your plan</li>
            <li>Save the PDF to your computer</li>
            <li>Email it to your instructor for review</li>
        </ol>
        <p>A simple email might say:</p>
        <blockquote>
            <p>Attached is my academic plan created with CyberPlan for my SDV 101 TCC Academic Plan Assignment.</p>
            <p>I have included my Advisement Transcript Report (ATR) located in the Student Information System (SIS) in the myTCC web portal.</p>
            <p>I have included the CyberPlan PDF as part of my Academic Plan Worksheet, and have answered the questions below:</p>
            
            <h4>Academic Planning:</h4>
            <p>Are you required to take any developmental courses? If yes, what are they? (For example, pre-college Math or English. SDV is not a development course, contrary to its name).</p>
            <p>If you are about to graduate and this is your last semester at TCC, indicate that here. (Remember that you should still fill in the worksheet on the previous page for this semester including the degree/program title).</p>
            
            <h4>Transfer Planning:</h4>
            <p>Do you plan to transfer? If yes, complete the following questions:</p>
            <ul>
                <li>Which college or university do you plan to attend?</li>
                <li>To what program of study do you plan to transfer?</li>
                <li>If you have selected a specific program, identify the transfer agreement set in place with that institution: TCC provides a gateway to ODU with a guaranteed admission agreement.</li>
            </ul>
            <p>For more information about transferring, visit the VCCS Transfer Guides located at the following website: <a href="http://www.tcc.edu/academics/degrees/transfer" target="_blank" rel="noopener noreferrer">http://www.tcc.edu/academics/degrees/transfer</a></p>
            <p>If you do not plan to transfer, what is your plan for post-graduation? Will you go straight into a profession? Explain in the space below:</p>
        </blockquote>
        
        <h2>6. Troubleshooting</h2>
        <ul>
            <li><strong>Dragging does not work:</strong> Refresh the page.</li>
            <li><strong>PDF is blank or missing content:</strong> Scroll through the page once and try again.</li>
            <li><strong>Course disappears:</strong> It likely dropped into another semester. Scroll to check all terms.</li>
            <li><strong>Plan looks wrong:</strong> Use <strong>Reset to Default</strong> to start over.</li>
        </ul>
        
        <h2>7. Feedback and Improvements</h2>
        <p>If you run into any issues or have ideas for improvements, you can submit feedback here:</p>
        <p><a href="https://github.com/jkirchtcc/cyberplan" target="_blank" rel="noopener noreferrer">https://github.com/jkirchtcc/cyberplan</a></p>
    `;
    
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    
    // Focus management
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.focus();
    }
    
    // Trap focus in modal
    trapFocusInModal(modal);
}

// Make functions available globally
window.showMathUpgradeModal = showMathUpgradeModal;
window.upgradeMathCourse = upgradeMathCourse;
window.showInstructionsModal = showInstructionsModal;

