# Deployment Anleitung (Vercel + GitHub) - Empfohlen! 🏆

Da du schon einen Vercel-Account hast, ist der Weg über **GitHub** der beste.
Vorteil: Jedes Mal, wenn du Code pushst, aktualisiert Vercel die Seite automatisch.

## Schritt 1: GitHub Repository erstellen
1. Gehe auf [github.com/new](https://github.com/new).
2. Gib dem Repo einen Namen (z.B. `sternblitz-website`).
3. Klicke auf **Create repository**.

## Schritt 2: Code hochladen
Ich habe Git für dich bereits initialisiert und alles committed. Du musst nur noch das Ziel (dein neues Repo) angeben.
Führe diese Befehle im Terminal aus (ersetze `DEIN_USER` und `DEIN_REPO`):

```bash
git branch -M main
git remote add origin https://github.com/DEIN_USER/sternblitz-website.git
git push -u origin main
```

## Schritt 3: Vercel verbinden
1. Gehe auf dein [Vercel Dashboard](https://vercel.com/dashboard).
2. Klicke auf **"Add New..."** -> **"Project"**.
3. Wähle "Import Git Repository" und suche nach `sternblitz-website`.
4. Klicke auf **Import**.
5. Die Einstellungen (Framework Preset: Vite) sollten automatisch stimmen.
6. Klicke auf **Deploy**.

**Fertig!** 🎉
Deine Seite ist jetzt unter einer `vercel.app` Domain erreichbar und aktualisiert sich automatisch bei jedem Push.

