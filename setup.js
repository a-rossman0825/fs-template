//@ts-nocheck

import fs from 'fs';
import path from 'path';
import { createInterface } from 'readline';


const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// user input prompting
function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function setup(){
  console.log('Welcome to your Fullstack Project Template setup.\n');

  //Project name from user
  const projectName = await prompt('Enter your project name (.eg., cool-fs-app)');
  if (!projectName || projectName.trim() === '') {
    console.log('Project name is required');
    rl.close();
    return;
  }

  console.log(`\n Setting up project: ${projectName}\n`);

  const tokens = {
    '{{PROJECT_NAME}}': projectName.toLowerCase(),
    '{{PROJECT_NAME_UNDERSCORE}}': projectName.toLowerCase().replace(/-/g, '_'),
    '{{PROJECT_NAME_UPPER}}': projectName.toUpperCase().replace(/-/g, '_'),
    '{{PROJECT_NAME_PASCAL}}': projectName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(''),
    // replace existing fs-template instances
    'fs-template': projectName.toLowerCase(),
    'fs_template': projectName.toLowerCase().replace(/-/g, '_')
  };

  console.log('Token Replacements: ');
  Object.entries(tokens).forEach(([token, value]) => {
    console.log(`    ${token} ➡️ ${value}`);
  });
  console.log();

  const filesToProcess = [
    'client/package.json',
    'client/index.html',
    'server/DTOs/ExampleDTO.cs',
    'server/DTOs/AccountDTO.cs',
    'server/Program.cs',
    'server/Data/AppDbContext.cs',
    'server/Services/ExampleService.cs',
    'server/Services/AccountService.cs',
    'server/Models/Example.cs',
    'server/Models/Account.cs',
    'server/Repositories/AccountsRepository.cs',
    'server/Repositories/ExamplesRepository.cs',
    'server/Controllers/AccountController.cs',
    'server/Controllers/ExampleController.cs',
    'server/Startup.cs',
    'server/Globals.cs',
    'server/Properties/launchSettings.json',
    'server/wwwroot/index.html'
  ];
  console.log('Processing files...');

  filesToProcess.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        Object.entries(tokens).forEach(([token, value]) => {
          content = content.replace(new RegExp(token, 'g'), value);
        });

        fs.writeFileSync(file, content);
        console.log(`     Updated: ${file}`);
      } catch (error) {
        console.log(`    Error processing ${file}: ${error.message}`);
      }
    } else {
      console.log(`    File not found: ${file}`);
    }
  });

  if (fs.existsSync('fs-template.code-workspace')) {
    fs.renameSync('fs-template.code-workspace', `${projectName.toLowerCase()}.code-workspace`);
    console.log(`    Created workspace file: ${projectName.toLowerCase()}.code-workspace`);
  }

  rl.close();
  console.log('Setup complete.');
}

setup().catch(console.error);