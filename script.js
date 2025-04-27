
// Einfache Demo-Funktion für den Plan
function generatePlan() {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = `
    <ul>
      <li>Montag Mittag: Fried Rice</li>
      <li>Montag Abend: Salat & Brot</li>
      <li>Dienstag Mittag: Hackbraten</li>
      <li>Dienstag Abend: Gemüsepfanne</li>
      <li>...</li>
    </ul>
  `;
}
