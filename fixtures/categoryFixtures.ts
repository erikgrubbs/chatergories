import faker from "faker";

export interface Category {
  id: number;
  name: string;
  following?: boolean;
}

const makeCategories = (): Array<Category> => {
  const categories = [];
  const noOfCategories = faker.random.number({ min: 8, max: 14 });
  for (let i = 0; i < noOfCategories; i++) {
    categories.push({
      id: faker.random.uuid(),
      name: faker.random.word("commerce"),
      following: !!faker.random.number({ min: 0, max: 1 }),
    });
  }
  return categories;
};

export default makeCategories();
