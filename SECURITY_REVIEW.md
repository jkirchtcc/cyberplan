# Security Review and Error Analysis

## Critical Security Issues

### 1. **XSS (Cross-Site Scripting) Vulnerabilities** ⚠️ HIGH RISK

**Location:** Multiple uses of `innerHTML` with user-controlled data

**Issues:**
- **Line 908-964**: `innerHTML` used with course data (code, title) without sanitization
- **Line 957-964**: Semester number from user input (`semesterNum`) used directly in `innerHTML`
- **Line 1365-1372**: Dynamic semester creation uses `innerHTML` with user-controlled `nextSemester`
- **Line 1003-1025**: Prerequisite lists built with `innerHTML` and user data
- **Line 1547-1570**: Course items in semesters use `innerHTML` with course data

**Risk:** If course titles or codes contain malicious HTML/JavaScript, it could execute in the browser.

**Recommendation:**
- Use `textContent` instead of `innerHTML` where possible
- Sanitize all user input before inserting into DOM
- Use `DOMPurify` library for HTML sanitization if HTML is required
- Escape special characters: `<`, `>`, `&`, `"`, `'`

### 2. **Unvalidated User Input** ⚠️ MEDIUM RISK

**Location:** `showSemesterSelector()` and `showElectiveSelector()`

**Issues:**
- **Line 943-944**: `prompt()` input parsed with `parseInt()` without validation
- **Line 1476-1478**: User-entered course code used without validation
- No check if `parseInt()` returns `NaN`
- No validation that course code exists in `courses` object

**Risk:** Invalid input could cause runtime errors or unexpected behavior.

**Recommendation:**
```javascript
const semesterNum = parseInt(semester);
if (isNaN(semesterNum) || semesterNum < 1) {
    alert('Please enter a valid semester number.');
    return;
}
```

### 3. **Inline Event Handlers** ⚠️ MEDIUM RISK

**Location:** Multiple locations using `onclick` attributes

**Issues:**
- **Line 961, 1369**: `onclick="removeSemester(${semesterNum})"` in `innerHTML`
- **Line 1556**: `onclick` for removing courses
- **Line 1545**: `onclick` for math upgrade button

**Risk:** If `semesterNum` or course codes contain malicious content, it could execute.

**Recommendation:**
- Use `addEventListener()` instead of inline handlers
- Attach event listeners after DOM creation
- Validate all data before using in event handlers

### 4. **CDN Without Integrity Check** ⚠️ MEDIUM RISK

**Location:** `index.html` line 9

**Issue:**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

**Risk:** If CDN is compromised, malicious code could be injected.

**Recommendation:**
- Add Subresource Integrity (SRI) hash:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" 
        integrity="sha384-[HASH]" 
        crossorigin="anonymous"></script>
```

### 5. **LocalStorage Data Validation** ⚠️ LOW-MEDIUM RISK

**Location:** `loadFromStorage()` function

**Issues:**
- **Line 1785**: `JSON.parse(saved)` without validation of data structure
- No check if parsed data matches expected format
- Malformed data could cause runtime errors

**Risk:** Corrupted or malicious localStorage data could break the application.

**Recommendation:**
```javascript
try {
    const parsed = JSON.parse(saved);
    if (!isValidPlanStructure(parsed)) {
        throw new Error('Invalid plan structure');
    }
    studentPlan = parsed;
} catch (e) {
    // Handle error, reset to default
}
```

## Logic Errors and Bugs

### 1. **Missing Null Check in generatePDF()**

**Location:** Line 1672

**Issue:**
```javascript
const { jsPDF } = window.jspdf;
```
If jsPDF library fails to load, this will throw an error.

**Recommendation:**
```javascript
if (!window.jspdf) {
    alert('PDF library not loaded. Please refresh the page.');
    return;
}
const { jsPDF } = window.jspdf;
```

### 2. **Potential Division by Zero or NaN**

**Location:** Various credit calculations

**Issue:** If course credits are undefined or NaN, calculations could fail silently.

**Recommendation:** Add validation:
```javascript
const credits = course.credits || 0;
if (isNaN(credits)) {
    console.error(`Invalid credits for course ${courseCode}`);
    return 0;
}
```

### 3. **Race Condition in Drag and Drop**

**Location:** `handleDragStart()` with `setTimeout`

**Issue:** Line 637-639 uses `setTimeout` to reset drag state, which could cause timing issues.

**Recommendation:** Use proper event handling instead of setTimeout workarounds.

## Best Practices Issues

### 1. **Error Handling**

**Issues:**
- Some functions lack try-catch blocks
- Error messages exposed to users could reveal implementation details
- No logging for debugging

**Recommendation:**
- Add comprehensive error handling
- Log errors to console for debugging
- Show user-friendly error messages

### 2. **Input Sanitization**

**Recommendation:** Create a sanitization function:
```javascript
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}
```

### 3. **Data Validation**

**Recommendation:** Create validation functions:
```javascript
function isValidSemesterNumber(num) {
    return Number.isInteger(num) && num >= 1 && num <= 100;
}

function isValidCourseCode(code) {
    return typeof code === 'string' && 
           /^[A-Z]{2,4} \d{3}$/.test(code) &&
           courses.hasOwnProperty(code);
}
```

## Recommendations Summary

### High Priority
1. ✅ Replace `innerHTML` with `textContent` or sanitize HTML
2. ✅ Add input validation for all user inputs
3. ✅ Replace inline `onclick` handlers with `addEventListener`
4. ✅ Add SRI hash for jsPDF CDN

### Medium Priority
5. ✅ Add data validation for localStorage loads
6. ✅ Add null checks for external library dependencies
7. ✅ Improve error handling throughout

### Low Priority
8. ✅ Add input sanitization utility functions
9. ✅ Add logging for debugging
10. ✅ Consider using a framework/library for better security practices

## Testing Recommendations

1. **XSS Testing:**
   - Try entering `<script>alert('XSS')</script>` in course codes/titles
   - Test with special characters: `<>"'&`

2. **Input Validation:**
   - Test with NaN, null, undefined inputs
   - Test with negative numbers, very large numbers
   - Test with empty strings

3. **LocalStorage:**
   - Test with corrupted JSON data
   - Test with malicious data structures
   - Test with extremely large data

4. **Edge Cases:**
   - Test with 0 courses
   - Test with maximum semesters
   - Test drag-and-drop edge cases

