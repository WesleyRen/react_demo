import { flattenJson, flattenObject, unflattenJson, unflattenObject } from "../code-snippets/jsonUtils";

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

describe(flattenObject.name, () => {
  test('flattens JSON object', () => {    
    expect(expected).toEqual(flattenObject(json));
  })
})

const flattenedObject = {
  'user.name': 'John',
  'user.age': 30,
  'user.address.city': 'New York',
  'user.address.country': 'USA'
};

const nestedObject = {
  "user": {
    "address": {
      "city": "New York",
      "country": "USA",
    },
    "age": 30,
    "name": "John",
  }
}

describe(unflattenJson.name, () => {
  test('unflattens JSON object', () => {
    expect(nestedObject).toEqual(unflattenJson(flattenedObject));
  })
})

describe(unflattenObject.name, () => {
  test('unflattens JSON object', () => {
    expect(nestedObject).toEqual(unflattenObject(flattenedObject));
  })
})

