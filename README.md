# 📝 Task Manager (Node.js + Express + EJS)

A simple and clean **Task Manager web app** built using **Node.js**, **Express**, and **EJS**.
Users can create tasks with a title and description, and view them dynamically on the homepage.

---

## 🚀 Features

* ✨ Create tasks with title & details
* 📄 View all tasks on the homepage
* ⚡ Fast and lightweight server using Express
* 🎨 Clean UI using Tailwind CSS
* 🔁 Dynamic rendering using EJS templates

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Templating Engine:** EJS
* **Frontend:** HTML, Tailwind CSS
* **File System:** Node.js `fs` module

---

## 📁 Project Structure

```
project/
│
├── views/
│   └── index.ejs
│   └── show.ejs
│   └── edit.ejs
│
├── public/
│   └── .gitkeep
│
├── files/          # Stores created tasks
│   └── 2 sample files are already present
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/ExWhyZed00/Note-Taking-App.git
cd Note-Taking-App
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
npx nodemon index.js
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🧠 How It Works

* User submits a form with **title** and **details**
* Server saves the task as a `.txt` file inside the `files/` directory
* All files are read using `fs.readdir()`
* Tasks are dynamically displayed using EJS

---

## ⚠️ Limitations

* ❗ Data is stored in local files (not persistent in cloud deployment)
* ❗ No delete functionality (yet)

---

## 🚀 Future Improvements

* ✅ Add delete & edit functionality
* 🗄️ Integrate MongoDB for persistent storage
* 🔐 Add authentication system
* 🌐 Deploy with database support

---

## 🙌 Acknowledgements

* Express.js documentation
* EJS templating engine

---

## 📌 Author

**Akansh Harlalka**
- LinkedIn: [Akansh Harlalka](https://www.linkedin.com/in/akansh-harlalka-4771b9275/)
- Email: akanshharlalka@yahoo.com

---

## 📝 License

This project is open source and available under the MIT License.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!

---
