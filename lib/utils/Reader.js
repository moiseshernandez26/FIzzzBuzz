const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        if(!fs.existsSync(filePath)) {
            return new Error("El archivo no existe");
        }
        const rawdata = fs.readFileSync(filePath);
        return JSON.parse(rawdata);
    }
}
module.exports = Reader;
