import puntuacion from "./puntaje.js";
describe("Marcador de puntaje de juego", () => {
it("en caso de qeu ambos jugadores tengas 0 el marcador es love love", () => {
    expect(puntuacion(0,0)).toEqual("love,love");
  });
});