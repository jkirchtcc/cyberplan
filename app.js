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
    const allCourses = [];
    Object.values(studentPlan).forEach(semesterCourses => {
        allCourses.push(...semesterCourses);
    });

    // Check if all required courses exist (regardless of semester)
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
    renderCourses();
    setupEventListeners();
    loadFromStorage(false); // Load silently on first load
});

function setupEventListeners() {
    // Save/Load/Clear buttons
    document.getElementById('saveBtn').addEventListener('click', saveToStorage);
    document.getElementById('loadBtn').addEventListener('click', loadFromStorage);
    document.getElementById('resetBtn').addEventListener('click', resetToDefault);
    document.getElementById('clearBtn').addEventListener('click', clearAll);

    // Search functionality
    document.getElementById('courseSearch').addEventListener('input', (e) => {
        filterCourses(e.target.value);
    });

    // Modal close
    // Close button for prerequisite modal
    document.querySelector('#prerequisiteModal .close').addEventListener('click', () => {
        document.getElementById('prerequisiteModal').classList.remove('show');
    });

    // Close button for math upgrade modal
    document.querySelector('#mathUpgradeModal .close').addEventListener('click', () => {
        document.getElementById('mathUpgradeModal').classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const prerequisiteModal = document.getElementById('prerequisiteModal');
        if (e.target === prerequisiteModal) {
            prerequisiteModal.classList.remove('show');
        }

        const mathUpgradeModal = document.getElementById('mathUpgradeModal');
        if (e.target === mathUpgradeModal) {
            mathUpgradeModal.classList.remove('show');
        }
    });

    // Setup drag and drop for semesters
    setupDragAndDrop();

    // Add semester button
    document.getElementById('addSemesterBtn').addEventListener('click', addNewSemester);
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
    return Object.keys(studentPlan).some(semester => {
        return hasElectiveInSemester(parseInt(semester), category);
    });
}

function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';

    // If plan is complete, hide all courses
    if (isPlanComplete()) {
        coursesGrid.innerHTML = '<div class="plan-complete-message">🎉 Your plan is complete! All required courses and electives have been selected.</div>';
        return;
    }

    const hasHumanities = hasElectiveSelected('humanities');
    const hasITElective = hasElectiveSelected('it_elective');
    const completedCourses = getAllCompletedCourses();

    // Show only one math course in Available Courses (the current one, default MTH 161)
    const mathCourseToShow = courses[currentMathCourse];
    if (mathCourseToShow && !completedCourses.includes(currentMathCourse)) {
        const courseCard = createCourseCard(mathCourseToShow);
        coursesGrid.appendChild(courseCard);
    }

    Object.values(courses).forEach(course => {
        // Hide courses that are already in a semester
        if (completedCourses.includes(course.code)) {
            return; // Skip this course - it's already in a semester
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
        coursesGrid.appendChild(courseCard);
    });
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

    if (isLocked) {
        card.classList.add('locked');
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

    // Add upgrade button for the current math course being shown in Available Courses
    const upgradeButton = course.code.startsWith('MTH ') && course.code === currentMathCourse ?
        '<button class="upgrade-btn" onclick="event.stopPropagation(); event.preventDefault(); showMathUpgradeModal(\'' + course.code + '\'); return false;">Or Higher (click to change)</button>' : '';

    card.innerHTML = `
        ${categoryBadge}
        <div class="course-code">${course.code}</div>
        <div class="course-title">${course.title}</div>
        <div class="course-credits">${course.credits} Credits</div>
        ${prerequisitesHTML}
        ${upgradeButton}
    `;

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
            // Only trigger click handler if not dragging
            if (!e.target.classList.contains('dragging')) {
                showSemesterSelector(course);
            }
        });
    } else {
        card.addEventListener('click', () => showPrerequisiteModal(course));
    }

    return card;
}

function showSemesterSelector(course) {
    const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);
    const semesterList = semesters.join(', ');
    const semester = prompt(`Select semester (${semesterList}) to add ${course.code}:\n\nOr enter a new semester number to create it:`);
    const semesterNum = parseInt(semester);

    if (semesterNum >= 1) {
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
                semesterDiv.innerHTML = `
                    <div class="semester-header">
                        <h3>Semester ${semesterNum} <span class="semester-date">(${getSemesterName(semesterNum)})</span></h3>
                        <span class="credits">Credits: <span class="semester-credits">0</span></span>
                        <button class="remove-semester-btn" onclick="removeSemester(${semesterNum})" title="Remove semester">×</button>
                    </div>
                    <div class="courses-list" data-semester="${semesterNum}"></div>
                `;
                semestersContainer.insertBefore(semesterDiv, addSemesterContainer);

                // Setup drag and drop
                const coursesList = semesterDiv.querySelector(`.courses-list[data-semester="${semesterNum}"]`);
                const semesterContainer = semesterDiv;

                coursesList.addEventListener('dragover', handleDragOver);
                coursesList.addEventListener('drop', (e) => handleDrop(e, semesterNum));
                coursesList.addEventListener('dragenter', handleDragEnter);
                coursesList.addEventListener('dragleave', handleDragLeave);

                semesterContainer.addEventListener('dragover', handleDragOver);
                semesterContainer.addEventListener('drop', (e) => handleDrop(e, semesterNum));
                semesterContainer.addEventListener('dragenter', handleDragEnter);
                semesterContainer.addEventListener('dragleave', handleDragLeave);
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

    message.textContent = `You cannot add ${course.code} until you complete the following prerequisites:`;

    const missing = getMissingPrerequisites(course.code, targetSemester);

    if (missing.length === 0) {
        // Fallback: show all prerequisites if none are detected as missing
        // This handles edge cases where the logic might miss something
        if (course.prerequisites && course.prerequisites.length > 0) {
            const allPrereqs = course.prerequisites.filter(p => p !== 'Instructor Permission');
            if (allPrereqs.length > 0) {
                missingDiv.innerHTML = '<ul>' + allPrereqs.map(prereq => {
                    const prereqSemester = getCourseSemester(prereq);
                    if (prereqSemester !== null && targetSemester !== null && prereqSemester >= targetSemester) {
                        return `<li>${prereq} (currently in Semester ${prereqSemester})</li>`;
                    } else {
                        const completedCourses = getAllCompletedCourses();
                        if (!completedCourses.includes(prereq)) {
                            return `<li>${prereq}</li>`;
                        } else {
                            return `<li>${prereq}</li>`;
                        }
                    }
                }).join('') + '</ul>';
            } else {
                missingDiv.innerHTML = '<p>No prerequisites required.</p>';
            }
        } else {
            missingDiv.innerHTML = '<p>No prerequisites required.</p>';
        }
    } else {
        missingDiv.innerHTML = '<ul>' + missing.map(prereq =>
            `<li>${prereq}</li>`
        ).join('') + '</ul>';
    }

    modal.classList.add('show');
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
    Object.values(studentPlan).forEach(semesterCourses => {
        semesterCourses.forEach(courseCode => {
            completed.push(courseCode);
        });
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
        showPrerequisiteModal(courses[courseCode], semester);
        return;
    }

    // Check credit limit (18 credits per semester) - MUST be before adding
    const course = courses[courseCode];
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
    // Update semester displays for all existing semesters
    const semesters = Object.keys(studentPlan).map(Number).sort((a, b) => a - b);
    semesters.forEach(semester => {
        updateSemesterDisplay(semester);
    });

    // Update course cards (lock/unlock based on prerequisites)
    renderCourses();

    // Update total credits
    updateTotalCredits();
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
        semesterDiv.innerHTML = `
            <div class="semester-header">
                <h3>Semester ${nextSemester} <span class="semester-date">(${getSemesterName(nextSemester)})</span></h3>
                <span class="credits">Credits: <span class="semester-credits">0</span></span>
                <button class="remove-semester-btn" onclick="removeSemester(${nextSemester})" title="Remove semester">×</button>
            </div>
            <div class="courses-list" data-semester="${nextSemester}"></div>
        `;

        // Append to semesters container
        semestersContainer.appendChild(semesterDiv);

        // Setup drag and drop for new semester
        const coursesList = semesterDiv.querySelector(`.courses-list[data-semester="${nextSemester}"]`);
        const semesterContainer = semesterDiv;

        if (coursesList) {
            coursesList.addEventListener('dragover', handleDragOver);
            coursesList.addEventListener('drop', (e) => handleDrop(e, nextSemester));
            coursesList.addEventListener('dragenter', handleDragEnter);
            coursesList.addEventListener('dragleave', handleDragLeave);
        }

        semesterContainer.addEventListener('dragover', handleDragOver);
        semesterContainer.addEventListener('drop', (e) => handleDrop(e, nextSemester));
        semesterContainer.addEventListener('dragenter', handleDragEnter);
        semesterContainer.addEventListener('dragleave', handleDragLeave);

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

    placeholder.innerHTML = `
        <div class="course-info">
            <div class="course-header-row">
                <div class="course-code placeholder-text">${categoryName} Elective</div>
                <span class="category-badge-small ${badgeClass}">${categoryName}</span>
            </div>
            <div class="course-title placeholder-text">Click to select ${categoryName.toLowerCase()} elective • Drag to move</div>
            <div class="course-credits">${credits} Credits</div>
        </div>
    `;

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
        const selectedCourse = availableElectives.find(course =>
            course.code.toUpperCase() === selection.trim().toUpperCase()
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

    coursesList.innerHTML = '';

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

        if (course.category === 'humanities') {
            courseItem.classList.add('humanities-elective');
        } else if (course.category === 'it_elective') {
            courseItem.classList.add('it-elective');
        }

        // Add upgrade button for the current math course (if it's in Available Courses)
        const completedCoursesForUpgrade = getAllCompletedCourses();
        const upgradeButton = course.code.startsWith('MTH ') && course.code === currentMathCourse && !completedCoursesForUpgrade.includes(course.code) ?
            `<button class="upgrade-btn-small" onclick="event.stopPropagation(); showMathUpgradeModal('${course.code}')" title="Or Higher (click to change)">Or Higher</button>` : '';

        courseItem.innerHTML = `
            <div class="course-info">
                <div class="course-header-row">
                    <div class="course-code">${course.code}</div>
                    ${categoryBadge}
                    ${upgradeButton}
                </div>
                <div class="course-title">${course.title}</div>
                <div class="course-credits">${course.credits} Credits</div>
            </div>
            <button class="remove-btn" onclick="event.stopPropagation(); removeCourseFromSemester('${course.code}', ${semester})">Remove</button>
        `;

        // Add drag handlers
        courseItem.addEventListener('dragstart', handleDragStart);
        courseItem.addEventListener('dragend', handleDragEnd);

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
        coursesList.innerHTML = '<div class="empty-semester">No courses added yet</div>';
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
    Object.values(studentPlan).forEach(semesterCourses => {
        semesterCourses.forEach(courseCode => {
            const course = courses[courseCode];
            if (course) {
                total += course.credits;
            }
        });
    });
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
    const completedCourses = getAllCompletedCourses();

    courseCards.forEach(card => {
        const courseCode = card.dataset.courseCode;
        const course = courses[courseCode];
        if (!course) return;

        // Hide courses that are already in a semester
        if (completedCourses.includes(courseCode)) {
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
    try {
        localStorage.setItem('cyberplan_studentPlan', JSON.stringify(studentPlan));
        localStorage.setItem('cyberplan_placeholderPositions', JSON.stringify(placeholderPositions));
        localStorage.setItem('cyberplan_currentMathCourse', currentMathCourse);

        // Generate PDF
        generatePDF();

        alert('Plan saved successfully! PDF downloaded.');
    } catch (e) {
        alert('Error saving plan: ' + e.message);
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
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
        doc.text(`Humanities Elective: ${humanitiesElective}`, margin + 5, yPos);
        yPos += lineHeight;
    }
    if (itElective) {
        doc.text(`IT Elective: ${itElective}`, margin + 5, yPos);
        yPos += lineHeight;
    }

    // Save the PDF
    const fileName = `TCC_CyberSecurity_Plan_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
}

function loadFromStorage(showAlert = true) {
    try {
        const saved = localStorage.getItem('cyberplan_studentPlan');
        const savedPositions = localStorage.getItem('cyberplan_placeholderPositions');

        if (saved) {
            studentPlan = JSON.parse(saved);
            if (savedPositions) {
                placeholderPositions = JSON.parse(savedPositions);
            }
            const savedMathCourse = localStorage.getItem('cyberplan_currentMathCourse');
            if (savedMathCourse) {
                currentMathCourse = savedMathCourse;
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
    if (confirm('Reset to the default suggested plan? This will replace your current plan.')) {
        studentPlan = getDefaultPlan();
        placeholderPositions = {
            humanities: 1,
            it_elective: 4
        };
        currentMathCourse = 'MTH 161'; // Reset to default math course
        updateUI();
    }
}

function clearAll() {
    if (confirm('Are you sure you want to clear all courses? This cannot be undone.')) {
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
    }
}

// Make removeCourseFromSemester available globally for onclick handlers
window.removeCourseFromSemester = removeCourseFromSemester;

// Math upgrade functionality
// Track which math course is currently shown in Available Courses (defaults to MTH 161)
let currentMathCourse = 'MTH 161';

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

function showMathUpgradeModal(currentCourseCode) {
    const modal = document.getElementById('mathUpgradeModal');
    const optionsDiv = document.getElementById('mathUpgradeOptions');

    // Get all higher level math courses
    const mathCourses = [
        'MTH 162', 'MTH 167', 'MTH 245', 'MTH 261', 'MTH 262',
        'MTH 263', 'MTH 264', 'MTH 265', 'MTH 266', 'MTH 267', 'MTH 283'
    ].map(code => courses[code]).filter(course => course);

    optionsDiv.innerHTML = '';

    mathCourses.forEach(course => {
        const option = document.createElement('div');
        option.className = 'math-upgrade-option';
        option.innerHTML = `
            <div class="math-option-info">
                <div class="math-option-code">${course.code}</div>
                <div class="math-option-title">${course.title}</div>
                <div class="math-option-credits">${course.credits} Credits</div>
                ${'' /* No prerequisite display for math courses */}
            </div>
            <button class="btn btn-primary" onclick="upgradeMathCourse('${currentCourseCode}', '${course.code}')">Select</button>
        `;
        optionsDiv.appendChild(option);
    });

    modal.classList.add('show');
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

// Make functions available globally
window.showMathUpgradeModal = showMathUpgradeModal;
window.upgradeMathCourse = upgradeMathCourse;

