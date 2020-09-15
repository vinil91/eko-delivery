import parser from './parser';

describe('Parser Function', () => {

  test('Correct input', () => {
    const userInput = 'AX1,XB457,ER43';
    const parsed = parser(userInput);
    const value = {
      graph: {
        edges: [
          { end: "X", id: 1, start: "A", weight: 1 },
          { end: "B", id: 2, start: "X", weight: 457 },
          { end: "R", id: 3, start: "E", weight: 43 },
        ],
        vertexes: ["A", "X", "B", "E", "R"]
      },
      isValueWronglyParsed: false
    }
    expect(parsed).toEqual(value);
  })

  test('Partly correct input', () => {
    const userInput = 'AX235HUIUNIUN,ER43,IUNUI,,,VS7';
    const parsed = parser(userInput);
    const value = {
      graph: {
        edges: [
          { end: "R", id: 1, start: "E", weight: 43 },
          { end: "S", id: 2, start: "V", weight: 7 },
        ],
        vertexes: ["E", "R", "V", "S"]
      },
      isValueWronglyParsed: true
    }
    expect(parsed).toEqual(value);
  })

  test('Incorrect input', () => {
    const userInput = 'IUSH43FIUSHF678UBYU';
    const parsed = parser(userInput);
    const value = {
      graph: {
        edges: [],
        vertexes: []
      },
      isValueWronglyParsed: true
    }
    expect(parsed).toEqual(value);
  })
})