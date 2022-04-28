class FizzbuzzService {
  static applyValidationInExplorer(explorer) {

    if (!explorer.score) throw new Error("El score no puede ser nulo");
    if (typeof explorer.score !== "number") throw new Error("El score debe ser un numero");
    
    if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
      explorer.trick = 'FIZZBUZZ'
      return explorer
    }
    if (explorer.score % 3 === 0) {
      explorer.trick = 'FIZZ'
      return explorer
    }
    if (explorer.score % 5 === 0) {
      explorer.trick = 'BUZZ'
      return explorer
    }
    explorer.trick = explorer.score
    return explorer
  }
}
module.exports = FizzbuzzService
