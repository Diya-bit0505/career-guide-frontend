// create-structure.js
const fs = require('fs').promises;
const path = require('path');

// Helper to create dirs recursively if not exist
async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

// Helper to create empty file after ensuring directory exists
async function createFile(filePath, content = '') {
  const dir = path.dirname(filePath);
  await ensureDir(dir);
  await fs.writeFile(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

async function main() {
  try {
    // Root files
    await createFile('career-guide-frontend/index.html');
    await createFile('career-guide-frontend/package.json');
    await createFile('career-guide-frontend/postcss.config.cjs');
    await createFile('career-guide-frontend/tailwind.config.cjs');
    await createFile('career-guide-frontend/vite.config.js');

    // Src folder files & folders
    await createFile('career-guide-frontend/src/App.vue');
    await createFile('career-guide-frontend/src/main.js');

    // Assets
    await createFile('career-guide-frontend/src/assets/index.css');

    // Components/CareerPack
    await createFile('career-guide-frontend/src/components/CareerPack/Projects.vue');
    await createFile('career-guide-frontend/src/components/CareerPack/Resources.vue');
    await createFile('career-guide-frontend/src/components/CareerPack/SkillMap.vue');

    // Data
    await createFile('career-guide-frontend/src/data/jobOpenings.json');

    // Router
    await createFile('career-guide-frontend/src/router/index.js');

    // Views
    await createFile('career-guide-frontend/src/views/AccessDenied.vue');
    await createFile('career-guide-frontend/src/views/AlumniPage.vue');
    await createFile('career-guide-frontend/src/views/CareerPackPage.vue');
    await createFile('career-guide-frontend/src/views/EvidencePage.vue');
    await createFile('career-guide-frontend/src/views/JDAnalyzerPage.vue');
    await createFile('career-guide-frontend/src/views/NotFound.vue');
    await createFile('career-guide-frontend/src/views/QuizPage.vue');
    await createFile('career-guide-frontend/src/views/ResultsPage.vue');
    await createFile('career-guide-frontend/src/views/TestimonialsPage.vue');

    // Views/Auth
    await createFile('career-guide-frontend/src/views/Auth/Login.vue');
    await createFile('career-guide-frontend/src/views/Auth/Register.vue');

    console.log('Folder structure and files created successfully.');
  } catch (err) {
    console.error('Error creating structure:', err);
  }
}

main();