import { flattenJson } from "../code-snippets/jsonUtils";

describe(flattenJson.name, () => {
  test('flattens JSON object', () => {
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
    
    expect(expected).toEqual(flattenJson(json));
  })
})