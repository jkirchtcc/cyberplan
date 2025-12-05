# Testing Guide

## Quick Start

### Option 1: Open Directly in Browser
1. Navigate to the project folder: `/Users/joel/02-github/cyberplan`
2. Double-click `index.html` to open it in your default browser
3. Or right-click `index.html` → "Open With" → Choose your browser (Chrome, Firefox, Safari, etc.)

### Option 2: Use a Local Server (Recommended)
For better testing and to avoid CORS issues, use a local server:

**Using Python 3:**
```bash
cd /Users/joel/02-github/cyberplan
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js (if you have it):**
```bash
cd /Users/joel/02-github/cyberplan
npx http-server -p 8000
```
Then open: http://localhost:8000

**Using VS Code:**
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Test Scenarios

### 1. Basic Course Addition
- [ ] Click on "ENG 111" (should be unlocked)
- [ ] Enter semester "1" when prompted
- [ ] Verify ENG 111 appears in Semester 1
- [ ] Verify Semester 1 credits show "3"
- [ ] Verify Total Credits show "3"

### 2. Prerequisite Enforcement
- [ ] Try clicking "ENG 112" (should be locked - requires ENG 111)
- [ ] Verify lock icon appears on ENG 112
- [ ] Add "ENG 111" to Semester 1
- [ ] Verify ENG 112 becomes unlocked (lock icon disappears)
- [ ] Add "ENG 112" to Semester 2
- [ ] Verify it works without error

### 3. Complex Prerequisites
- [ ] Try clicking "ITN 261" (should be locked - requires ITN 171 and ITN 260)
- [ ] Add "ITN 171" to Semester 2
- [ ] Verify ITN 261 is still locked
- [ ] Add "ITN 101" to Semester 2
- [ ] Add "ITN 260" to Semester 3
- [ ] Verify ITN 261 becomes unlocked
- [ ] Add "ITN 261" to Semester 4

### 4. Course Removal
- [ ] Add a course to any semester
- [ ] Click the "Remove" button on that course
- [ ] Verify course is removed from the semester
- [ ] Verify credits are updated correctly
- [ ] If the removed course was a prerequisite, verify dependent courses become locked again

### 5. Search Functionality
- [ ] Type "ENG" in the search box
- [ ] Verify only ENG courses are shown
- [ ] Type "Security" in the search box
- [ ] Verify courses with "Security" in the title are shown
- [ ] Clear the search box
- [ ] Verify all courses are shown again

### 6. Save/Load Functionality
- [ ] Add several courses to different semesters
- [ ] Click "Save Plan"
- [ ] Verify alert says "Plan saved successfully!"
- [ ] Click "Clear All" and confirm
- [ ] Verify all courses are removed
- [ ] Click "Load Plan"
- [ ] Verify alert says "Plan loaded successfully!"
- [ ] Verify all your courses are restored

### 7. Duplicate Prevention
- [ ] Add "ENG 111" to Semester 1
- [ ] Try adding "ENG 111" to Semester 2
- [ ] Verify alert prevents duplicate addition
- [ ] Remove "ENG 111" from Semester 1
- [ ] Now add it to Semester 2
- [ ] Verify it works

### 8. Credit Calculation
- [ ] Add courses to Semester 1: ENG 111 (3), ITN 106 (4), ITP 100 (4), SDV 101 (1)
- [ ] Verify Semester 1 shows 12 credits
- [ ] Add a Humanities elective (3 credits)
- [ ] Verify Semester 1 shows 15 credits
- [ ] Verify Total Credits shows 15

### 9. Humanities Electives
- [ ] Search for "ART" in the search box
- [ ] Verify ART courses appear
- [ ] Search for "MUS"
- [ ] Verify MUS courses appear
- [ ] Add "ART 100" to Semester 1
- [ ] Verify it works correctly

### 10. Responsive Design
- [ ] Resize browser window to mobile size
- [ ] Verify layout adapts correctly
- [ ] Verify courses panel stacks below semesters on small screens
- [ ] Verify all buttons and controls remain accessible

### 11. Prerequisite Modal
- [ ] Click on a locked course (e.g., ITN 261)
- [ ] Verify modal appears showing missing prerequisites
- [ ] Verify modal lists ITN 171 and ITN 260
- [ ] Click the X or outside the modal to close
- [ ] Verify modal closes

### 12. Edge Cases
- [ ] Try adding a course with invalid semester number (e.g., "5" or "abc")
- [ ] Verify it handles gracefully
- [ ] Try clicking "Load Plan" when no plan is saved
- [ ] Verify appropriate message appears
- [ ] Try "Clear All" and verify confirmation dialog works

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browser (if testing on mobile device)

## Console Testing

Open browser Developer Tools (F12) and check:
- [ ] No JavaScript errors in console
- [ ] No CSS warnings
- [ ] localStorage is being used (Application tab → Local Storage)

## Expected Behavior Summary

✅ **Should Work:**
- Adding unlocked courses to semesters
- Removing courses from semesters
- Prerequisites automatically lock/unlock courses
- Credits calculate correctly
- Save/Load persists data
- Search filters courses
- Modal shows for locked courses

❌ **Should NOT Work:**
- Adding locked courses (should show modal)
- Adding duplicate courses (should show alert)
- Adding courses to invalid semesters (should show alert)

## Troubleshooting

**If courses don't appear:**
- Check browser console for JavaScript errors
- Verify all files (index.html, styles.css, app.js) are in the same folder
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**If styles look broken:**
- Verify styles.css is in the same folder as index.html
- Check browser console for CSS loading errors

**If save/load doesn't work:**
- Check if localStorage is enabled in your browser
- Try in a different browser
- Check browser console for errors

