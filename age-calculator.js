function calcExactAge(birthDate) {
  const now = new Date();
  const bday = new Date(birthDate);
  if (isNaN(bday)) return null;

  let years = now.getFullYear() - bday.getFullYear();
  let months = now.getMonth() - bday.getMonth();
  let days = now.getDate() - bday.getDate();
  let hours = now.getHours() - bday.getHours();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  if (hours < 0) {
    days--;
    hours += 24;
  }

  return { years, months, days, hours };
}

export function renderAgeCalculator(container) {
  const section = document.createElement('section');
  section.className = 'age-calculator';
  section.innerHTML = `
    <h2>Age Calculator</h2>
    <form>
      <label for="birthdate">Select your birth date:</label>
      <input type="date" id="birthdate" required>
      <button type="submit">Calculate Age</button>
    </form>
    <p id="age-result">Your exact age will appear here.</p>
  `;

  const form = section.querySelector('form');
  const result = section.querySelector('#age-result');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const bdate = section.querySelector('#birthdate').value;
    const age = calcExactAge(bdate);
    if (!age) {
      result.textContent = 'Please enter a valid date.';
      return;
    }
    result.textContent = `You are ${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours old.`;
  });

  container.appendChild(section);
}
