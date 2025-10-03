// Simple client-side validation to show red feedback after submit
const form = document.getElementById('internship-form');

const fields = {
  firstName: document.getElementById('first-name-input'),
  lastName: document.getElementById('last-name-input'),
  email: document.getElementById('email-input'),
  college: document.getElementById('college-input'),
  graduationYear: document.getElementById('grad-year-select'), // ✅ Corrected
  rollNo: document.getElementById('roll-no-input'),
  conditions: document.getElementById('conditions-checkbox')
};

const errors = {
  firstName: document.getElementById('first-name-error'),
  lastName: document.getElementById('last-name-error'),
  email: document.getElementById('email-error'),
  college: document.getElementById('college-error'),
  graduationYear: document.getElementById('graduation-year-error'),
  rollNo: document.getElementById('roll-no-error'),
  conditions: document.getElementById('conditions-error')
};

function showError(key, message) {
  const input = fields[key];
  const errorEl = errors[key];
  if (input) input.classList.add('invalid');
  if (errorEl) {
    errorEl.style.display = 'block';
    errorEl.textContent = message;
  }
}

function clearErrors() {
  Object.keys(errors).forEach(k => {
    const el = errors[k];
    if (el) el.style.display = 'none';
  });
  Object.values(fields).forEach(input => {
    if (input && input.classList) input.classList.remove('invalid');
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearErrors();

  let valid = true;

  if (!fields.firstName.value.trim()) {
    showError('firstName', 'First name required!');
    valid = false;
  }
  if (!fields.lastName.value.trim()) {
    showError('lastName', 'Last name required!');
    valid = false;
  }
  if (!fields.email.value.trim()) {
    showError('email', 'Email required!');
    valid = false;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(fields.email.value.trim())) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }
  }
  if (!fields.college.value.trim()) {
    showError('college', 'Please provide a valid college.');
    valid = false;
  }
  if (!fields.graduationYear.value) {
    showError('graduationYear', 'Please select a valid Graduation Year.');
    valid = false;
  }
  if (!fields.rollNo.value.trim()) {
    showError('rollNo', 'Please provide a valid Roll no.');
    valid = false;
  }

  if (!fields.conditions.checked) {
    showError('conditions', 'You must agree before submitting.');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully (demo).');
  }
});
