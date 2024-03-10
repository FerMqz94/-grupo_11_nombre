const path = require("path");
const fs = require("fs");

const loadData = (filenameJSON = "products") => {
  const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
  const dataJSON = fs.readFileSync(pathJSON, 'utf-8');
  const dataJS = JSON.parse(dataJSON); 
  return dataJS;
}
const saveData = (data, filenameJSON = "products") => {
    const dataJSON = JSON.stringify(data, null, 3); // PRODUCTOS STRINGIFICADO
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
    fs.writeFileSync(pathJSON, dataJSON, "utf-8");
}

module.exports = {
  saveData,
  loadData
}