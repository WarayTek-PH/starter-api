## BASIC SETUP

1. Install mo xampp and nodejs
2. Run Apache + Mysql sa xampp
3. Create ka ng database, yung name dapat facebook or kahit ano gusto niyo basta consistent
4. CREATE database facebook;
5. Punta ka sa backend na folder tapos type `npm i`
6. Create ka ng .env file dito sa backend folder (Make sure naka cd backend ka)
   Note: Pwede mo rin i copy paste yung .env.sample tas ichange yung name sa .env
7. Ilagay mo to sa .env

```env
DATABASE_URL="mysql://username:password@localhost:3306/facebook"
```

Wag mo kalimutan iedit yung username,password,host ng mysql mo (IMPORTANT! kung nagkakaroon ka ng access denied, gawa ka nalang ng new account sa mysql)

8. `npm i`
9. `npx prisma generate`
10. `npm run start`
11. `npx prisma migrate dev --name init `(i run mo tong command para sa migration ng database, yung init kahit ano lang yan depende sa gusto mo iname sa migration)
12. `npx prisma db seed`
13. Good to go kana

# ROUTES

Yung mga routes magsastart sa http://localhost:3001/

**Note** : see [guide](https://jsonplaceholder.typicode.com/guide) for usage examples.

POSTS

| METHOD | PATH     | DESC          |
| :----- | -------- | ------------- |
| GET    | /posts   | get all posts |
| GET    | /posts/1 | get one post  |
| POST   | /posts   | create a post |
| PUT    | /posts/1 | update a post |
| PATCH  | /posts/1 | update a post |
| DELETE | /posts/1 | delete a post |

TODOS

| METHOD | PATH     | DESC          |
| :----- | -------- | ------------- |
| GET    | /todos   | get all todos |
| GET    | /todos/1 | get one todo  |
| POST   | /todos   | create a todo |
| PUT    | /todos/1 | update a todo |
| PATCH  | /todos/1 | update a todo |
| DELETE | /todos/1 | delete a todo |
