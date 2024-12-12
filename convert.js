import fs from 'fs';
import { marked } from 'marked';

// Lese die task-3.md Datei
fs.readFile('task-3.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  // Konvertiere Markdown zu HTML
  const htmlContent = marked(data);

  // Schreibe die resultierende HTML-Datei
  fs.writeFile('task-3.html', htmlContent, (err) => {
    if (err) {
      console.error('Fehler beim Schreiben der HTML-Datei:', err);
    } else {
      console.log('task-3.html wurde erfolgreich erstellt!');
    }
  });
});
