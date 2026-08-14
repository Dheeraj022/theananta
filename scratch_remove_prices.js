const fs = require('fs');
const path = require('path');

const files = [
  'src/data/hotels.ts',
  'src/data/villas.ts',
  'src/data/tours.ts'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove price: 1500, or price: '1500',
  content = content.replace(/\s*price:\s*['"]?[^'"]+['"]?,?/g, '');
  content = content.replace(/\s*priceLabel:\s*['"]?[^'"]+['"]?,?/g, '');
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Processed', file);
});
