# Task Manager API

Backend REST API for managing users and tasks, built with Node.js, Express and Prisma ORM.

## 🚀 Features

* User registration and login
* Task creation and management
* Relational database (User → Tasks)
* Clean architecture (routes, controllers, services)
* Prisma ORM integration

## 🛠️ Tech Stack

* Node.js
* Express
* Prisma ORM
* SQLite (or your DB)

## 📦 Installation

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
npm install
```

## ⚙️ Setup

1. Create a `.env` file:

```
DATABASE_URL="file:./dev.db"
```

2. Run migrations:

```bash
npx prisma migrate dev
```

3. Start server:

```bash
npm run dev
```

---

## 📌 API Endpoints

### Users

* `POST /users/register`
* `POST /users/login`

### Tasks

* `POST /tasks`
* `GET /tasks`
* `GET /tasks/:id`
* `DELETE /tasks/:id`

---

## 🧠 Concepts Practiced

* REST API design
* Database relationships (1:N)
* Separation of concerns
* Error handling
* Backend architecture

---

## 📈 Future Improvements

* Pagination
* Role-based access
* Testing

---

## 👨‍💻 Author

Marco Novas
