# TCC Cyber Security Course Planner

A web application for planning courses in the Tidewater Community College Associate of Applied Science: Cyber Security (345) program. This tool helps students visualize their course plan across four semesters while automatically enforcing prerequisite requirements.

## Features

- **Interactive Course Planning**: Add courses to semesters by clicking on available courses
- **Prerequisite Enforcement**: Courses with unmet prerequisites are locked and cannot be added until prerequisites are completed
- **Visual Feedback**: 
  - Locked courses are visually indicated with a lock icon and reduced opacity
  - Hover effects and smooth animations for better user experience
- **Credit Tracking**: Automatically calculates and displays credits for each semester and total credits
- **Save/Load Functionality**: Save your plan to browser localStorage and load it later
- **Search**: Filter available courses by course code or title
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to Use

1. **Open the application**: Simply open `index.html` in your web browser
2. **Add courses**: Click on any unlocked course in the "Available Courses" panel
3. **Select semester**: When prompted, enter the semester number (1-4) where you want to add the course
4. **Remove courses**: Click the "Remove" button on any course in a semester to remove it
5. **Save your plan**: Click "Save Plan" to save your current plan to browser storage
6. **Load saved plan**: Click "Load Plan" to restore a previously saved plan
7. **Clear all**: Click "Clear All" to remove all courses from your plan

## Prerequisites

The application enforces the following prerequisite relationships:

- **ENG 112** requires **ENG 111**
- **ITN 260** requires **ITN 101** (or ITN 154)
- **ITN 267** requires **ITN 260** (prerequisite or co-requisite)
- **ITN 261** requires **ITN 171** and **ITN 260**
- **ITN 262** requires **ITN 171** and **ITN 260**
- **ITN 263** requires **ITN 171** and **ITN 260**

## Course List

### Semester 1 (15 credits)
- ENG 111 - College Composition I (3)
- ITN 106 - Microcomputer Operating Systems (4)
- ITP 100 - Software Design (4)
- SDV 101 - Orientation to Computer Science and Information Technology (1)
- Humanities Elective (3) - See Humanities Electives section below

### Semester 2 (18 credits)
- ENG 112 - College Composition II (3) *requires ENG 111*
- ITN 107 - Personal Computer Hardware and Troubleshooting (4)
- ITN 171 - Unix I (4)
- MTH 161 - PreCalculus I (3)
- ITN 101 - Introduction to Network Concepts (4)

### Semester 3 (16 credits)
- ITE 152 - Introduction to Digital and Information Literacy and Computer Applications (3)
- ITN 260 - Network Security Basics (4) *requires ITN 101*
- CST 100 - Principles of Public Speaking (3)
- ECO 150 - Economic Essentials: Theory and Applications (3)
- ITN 267 - Legal Topics in Network Security (3) *requires ITN 260*

### Semester 4 (15-16 credits)
- ITN 261 - Network Attacks, Computer Crime and Hacking (4) *requires ITN 171, ITN 260*
- ITN 262 - Network Communication, Security and Authentication (4) *requires ITN 171, ITN 260*
- ITN 263 - Internet/Intranet Firewalls and eCommerce Security (4) *requires ITN 171, ITN 260*
- IT Approved Elective (3-4)

### IT Approved Electives
- ITN 111 - Server Administration (Windows 2019)
- ITN 154 - Network Fundamentals, Router Basics, and Configuration (ICND1) - Cisco
- ITN 170 - Linux System Administration
- ITN 257 - Cloud Computing: Infrastructure and Services
- ITN 275 - Incident Response and Computer Forensics
- ITN 268 - Cloud Computing Administration
- ITN 290 - Coordinated Internship in ITN
- ITN 297 - Cooperative Education in ITN

## Humanities Electives

Students must select one Humanities elective (3 credits) for Semester 1. The following courses are available:

### Artistic Expression
- ART 100 - Art Appreciation
- ART 101 - History of Art: Prehistoric to Gothic
- ART 102 - History of Art: Renaissance to Modern
- CST 130 - Introduction to the Theatre
- CST 151 - Film Appreciation I
- CST 152 - Film Appreciation II
- MUS 121 - Music in Society
- MUS 221 - History of Western Music Prior to 1750
- MUS 222 - History of Western Music 1750 to Present

### Human Culture
- ASL 125 - History of the U.S. Deaf Community
- HUM 201 - Early Humanities
- HUM 202 - Modern Humanities
- HUM 220 - Introduction to African-American Studies
- HUM 256 - Comparative Mythology
- HUM 259 - The Greek and Roman Tradition
- HUM 260 - Contemporary Humanities
- PHI 100 - Introduction to Philosophy
- PHI 111 - Logic
- PHI 220 - Ethics and Society
- REL 230 - Religions of the World

### Literature and Creative Writing
- ENG 125 - Introduction to Literature
- ENG 211 - Creative Writing
- ENG 212 - Creative Writing II
- ENG 225 - Reading Literature: Culture and Ideas
- ENG 245 - British Literature
- ENG 246 - American Literature
- ENG 250 - Children's Literature
- ENG 255 - World Literature
- ENG 258 - African American Literature
- ENG 275 - Women in Literature

*Source: [TCC Catalog - General Education Core Requirements](https://catalog.tcc.edu/content.php?catoid=21&navoid=1053)*

## Technical Details

- **Pure JavaScript**: No frameworks or dependencies required
- **Local Storage**: Plans are saved in browser localStorage
- **Responsive CSS**: Uses CSS Grid and Flexbox for layout
- **Modern UI**: Gradient backgrounds, smooth animations, and intuitive design

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- LocalStorage API

## License

GNU General Public License v3.0

