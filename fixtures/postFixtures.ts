import faker from "faker";
import categoryFixtures, { Category } from "./categoryFixtures";

export interface CommentType {
  user: string;
  score: number;
  text: string;
}

export interface Post {
  category: Category;
  score: number;
  id: string;
  name: string;
  content: string;
  comments: Array<Comment>;
  trending?: boolean;
}

const makeComment = (): CommentType => ({
  user: faker.internet.userName(),
  score: faker.random.number({ min: 0, max: 1000 }),
  text: faker.lorem.paragraph(),
});

const makePosts = (): Array<Post> => {
  const posts = [];
  const noOfPosts = faker.random.number({ min: 20, max: 50 });
  for (let i = 0; i < noOfPosts; i++) {
    const comments: Array<CommentType> = [];
    const noOfComments = faker.random.number({ min: 5, max: 150 });
    for (let i = 0; i < noOfComments; i++) {
      comments.push(makeComment());
    }
    posts.push({
      category:
        categoryFixtures[
          Math.floor(Math.random() * (categoryFixtures.length - 1))
        ],
      score: faker.random.number({ min: 1, max: 9999 }),
      id: faker.random.uuid(),
      name: faker.random.words(4),
      content: faker.lorem.paragraphs(4),
      trending: !!faker.random.number({ min: 0, max: 1 }),
      comments,
    });
  }
  return posts;
};

export default makePosts().sort((postA, postB) => postB.score - postA.score);
