/* eslint-disable no-console */
// Add your code here
const form = document.getElementById('regForm');

const handleSubmit = function handleFormSubmit(event) {
  const name = form.elements.name.value ? form.elements.name.value : 'no submission';
  const email = form.elements.email.value ? form.elements.email.value : 'no submission';
  const regStatus = form.elements.regStatus.value ? form.elements.regStatus.value : 'no submission';
  const checkedCourses = form.querySelectorAll('input[name="course"]:checked');
  const anythingElseText = form.elements.textField.value ? form.elements.textField.value : 'no submission';
  let coursesStr = '';
  if (checkedCourses.length === 0) {
    coursesStr = 'no submission';
  } else {
    for (let i = 0, n = checkedCourses.length; i < n; i += 1) {
      coursesStr += `, ${checkedCourses[i].value}`;
    }
    coursesStr = coursesStr.substring(2);
  }

  const response = `========= Form Submission =========
    Username: ${name}
    Email: ${email}
    Registration Status: ${regStatus}
    Courses: ${coursesStr}
    Anything Else: ${anythingElseText}`;

  if (!(name === 'no submission') || !(email === 'no submission') || !(coursesStr === 'no submission') || !(anythingElseText === 'no submission')) {
    console.log(response);
  } else {
    console.warn('You must enter some data to submit this form');
  }
  event.preventDefault();
};

form.addEventListener('submit', handleSubmit);
