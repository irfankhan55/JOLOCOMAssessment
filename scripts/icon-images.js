const fs = require('fs');
const imageFileNames = () => {
  const array = fs
    .readdirSync('src/assets/icons')
    .filter((file) => {
      return file.endsWith('.png');
    })
    .map((file) => {
      return file
        .replace('@2x.png', '')
        .replace('@3x.png', '')
        .replace('.png', '');
    });
  return Array.from(new Set(array));
};
const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      const varName = name.split('-').join('_');
      // return `${varName}: require('../../assets/icons/${name}.png')`;
      // return `export const ${varName} = require('../../assets/icons/${name}.png');`;
      return `\t${varName}: require('../../assets/icons/${name}.png'),`;
    })
    .join('\n');
  // const string = `const images = {\n\t${properties}\n};\nexport default images;\n`;
  const string = `export default {\n${properties}\n}\n`;
  fs.writeFileSync('src/res/icons/index.ts', string, 'utf8');
};
generate();
