import obtenerScore from "./puntaje.js";
describe("Marcador de puntaje de juego", () => {
it("en caso de que ambos jugadores tengas 0 el marcador es love love", () => {
    expect(obtenerScore(0,0)).toEqual("love,love");
  });
  it("en caso de que el score1 este ganando con 15 - 0 ", () => {
    expect(obtenerScore(1,0)).toEqual("15 - 0");
  });
  it("en caso de que el score1 este ganando con 30 - 0 ", () => {
    expect(obtenerScore(2,0)).toEqual("30 - 0");
  });
  it("en caso de que el score1 este ganando con 40 - 0 ", () => {
    expect(obtenerScore(3,0)).toEqual("40 - 0");
  });
});

