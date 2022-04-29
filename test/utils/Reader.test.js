describe("Suit test for ExplorerService", () => {
    const Reader = require('../../lib/utils/Reader')
    test('1) Validar que lea un archivo json', () => {
        const explorers = Reader.readJsonFile('./explorers.json')
        expect(explorers).toBeTruthy()
    })

    test('2) Validar que lea un archivo que no existe', () => {
        const explorers = Reader.readJsonFile('./explorer.json')
        expect(explorers).not.toBe(undefined)
    })
});
  