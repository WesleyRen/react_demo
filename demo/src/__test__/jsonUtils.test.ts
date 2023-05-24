import { flattenJson, flattenJson2 } from "../code-snippets/jsonUtils";

const json = {
  "name": "John",
  "age": 30,
  "cars": {
      "car1": "Ford",
      "car2": "BMW",
      "car3": "Fiat"
  }
}
const expected = {
  name: 'John',
  age: 30,
  'cars.car1': 'Ford',
  'cars.car2': 'BMW',
  'cars.car3': 'Fiat'
};


describe(flattenJson.name, () => {
  test('flattens JSON object', () => {
    expect(expected).toEqual(flattenJson(json));
  })
})

describe(flattenJson2.name, () => {
  test('flattens JSON object', () => {    
    expect(expected).toEqual(flattenJson2(json));
  })
})