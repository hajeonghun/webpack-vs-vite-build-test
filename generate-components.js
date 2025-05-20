const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const appFilePath = path.join(__dirname, 'src', 'App.jsx');

const COMPONENTS_COUNT = 5000;

// 디렉토리 생성
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

// 1. 컴포넌트 500개 생성
for (let i = 1; i <= COMPONENTS_COUNT; i++) {
    const componentName = `Component${String(i).padStart(3, '0')}`;
    const componentCode = `export default function ${componentName}() {
  return <div>${componentName}</div>;
}
`;
    fs.writeFileSync(path.join(componentsDir, `${componentName}.jsx`), componentCode);
}

// 2. App.jsx 생성 (혹은 덮어쓰기)
let appCode = `import React from 'react';\n`;

for (let i = 1; i <= COMPONENTS_COUNT; i++) {
    const componentName = `Component${String(i).padStart(3, '0')}`;
    appCode += `import ${componentName} from './components/${componentName}.jsx';\n`;
}

appCode += `\nexport default function App() {\n  return (\n    <div>\n`;

for (let i = 1; i <= COMPONENTS_COUNT; i++) {
    const componentName = `Component${String(i).padStart(3, '0')}`;
    appCode += `      <${componentName} />\n`;
}

appCode += `    </div>\n  );\n}\n`;

fs.writeFileSync(appFilePath, appCode);

console.log(`✅ ${COMPONENTS_COUNT} components generated and App.jsx updated.`);
