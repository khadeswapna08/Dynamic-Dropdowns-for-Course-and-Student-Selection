document.addEventListener('DOMContentLoaded', function() {
    const courseSelect = document.getElementById('courseSelect');
    const studentSelect = document.getElementById('studentSelect');
    const selectionForm = document.getElementById('selectionForm');

    // Populate courses dropdown
    function populateCourses() {
        // You can fetch course data from PHP backend or use static data for demo
        const courses = [
            { id: 1, name: 'Course A' },
            { id: 2, name: 'Course B' },
            { id: 3, name: 'Course C' }
        ];

        courses.forEach(course => {
            let option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });

        // Trigger student population on course change
        courseSelect.addEventListener('change', populateStudents);
    }

    // Populate students based on selected course
    function populateStudents() {
        // Clear previous options
        studentSelect.innerHTML = '';

        // You can fetch student data based on selected course from PHP backend
        // For demo, using static data
        const selectedCourseId = courseSelect.value;
        const students = {
            1: [{ id: 1, name: 'Student 1' }, { id: 2, name: 'Student 2' }],
            2: [{ id: 3, name: 'Student 3' }, { id: 4, name: 'Student 4' }],
            3: [{ id: 5, name: 'Student 5' }, { id: 6, name: 'Student 6' }]
        }[selectedCourseId] || [];

        students.forEach(student => {
            let option = document.createElement('option');
            option.value = student.id;
            option.textContent = student.name;
            studentSelect.appendChild(option);
        });
    }

    // Initialize the form
    populateCourses();

    // Form submission handling
    selectionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedCourse = courseSelect.options[courseSelect.selectedIndex].text;
        const selectedStudent = studentSelect.options[studentSelect.selectedIndex].text;

        // You can handle submission logic here, like sending data to PHP backend
        console.log(`Selected Course: ${selectedCourse}, Selected Student: ${selectedStudent}`);
    });
});
