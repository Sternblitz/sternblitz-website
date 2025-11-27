# Deployment Anleitung für Sternblitz

Deine Website ist bereit für den Launch! 🚀
Der Build war erfolgreich und die Dateien liegen im Ordner `dist`.

Hier sind die einfachsten Wege, die Seite online zu bringen:

## Option 1: Netlify Drop (Am einfachsten & schnellsten)
Ideal, wenn du die Seite sofort online haben willst, ohne Git-Setup.

1. Gehe auf [app.netlify.com/drop](https://app.netlify.com/drop).
2. Öffne deinen Finder und navigiere zu deinem Projektordner:
   `/Users/lanoaziz/Desktop/sternblitz-website`
3. Ziehe den Ordner **`dist`** (nicht den ganzen Projektordner!) in das Feld auf der Netlify-Seite.
4. **Fertig!** Deine Seite ist sofort online. Du erhältst eine URL (z.B. `random-name.netlify.app`), die du später in den Einstellungen auf deine Domain ändern kannst.

## Option 2: Vercel (Professionell & Automatisch)
Besser, wenn du Updates später einfach per Befehl hochladen willst.

1. Installiere Vercel CLI (falls noch nicht vorhanden):
   `npm i -g vercel`
2. Führe im Terminal folgenden Befehl aus:
   `vercel`
3. Folge den Anweisungen (Login, Bestätigen mit Enter).
   - Setze `Output Directory` auf `dist` (sollte automatisch erkannt werden).

## Wichtig für Domains
Wenn du deine Domain (z.B. `sternblitz.de`) verbinden willst:
- Bei **Netlify**: Gehe zu "Domain Settings" > "Add custom domain".
- Bei **Vercel**: Gehe zu "Settings" > "Domains".

Du musst dann bei deinem Domain-Anbieter (z.B. Strato, GoDaddy) die DNS-Einträge anpassen (A-Record oder CNAME), die dir Netlify/Vercel anzeigt.
