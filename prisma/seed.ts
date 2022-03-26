import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Joseph Degorio",
  },
  {
    name: "Ryan Tillaman",
  },
];

const postData: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    body: "Lorem Ipsum",
  },
  {
    title: "Post 2",
    body: "Lorem Ipsum",
  },
  {
    title: "Post31",
    body: "Lorem Ipsum",
  },
];

const todoData: Prisma.TodoCreateInput[] = [
  {
    body: "Todo 1",
  },
  {
    body: "Todo 2",
  },
  {
    body: "Todo31",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const p of postData) {
    const post = await prisma.post.create({
      data: p,
    });
    console.log(`Created post with id: ${post.id}`);
  }

  for (const t of todoData) {
    const todo = await prisma.todo.create({
      data: t,
    });
    console.log(`Created todo with id: ${todo.id}`);
  }
  console.log(`Seeding finished.`);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
