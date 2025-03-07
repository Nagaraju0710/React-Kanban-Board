🚀 Kanban Board

🌟 Overview

The Kanban Board is a simple task management application built using React and Material UI. It allows users to add, search, and manage tasks by dragging and dropping them between different statuses.

✨ Features

📝 Add new tasks with a title and description

🔍 Search tasks by title

🎯 Drag and drop tasks between different columns

📌 Task statuses: To Do, In Progress, Peer Review, Done

🛠 Technologies Used

⚛️ React

🎨 Material UI

🖱 React DnD (Drag and Drop)

📦 Installation and Setup

✅ Prerequisites

Make sure you have the following installed:

⬇️ Node.js (v14 or later)

📦 npm or yarn

    
## 🔧 Steps to Run the Application

### Clone the repository:

git clone [https://github.com/your-repo/kanban-board.git](https://github.com/Nagaraju0710/React-Kanban-Board.git)
cd kanban-board

## deploy link:
https://nagaraju0710.github.io/

## Install dependencies:

npm install

or using yarn:

yarn install

Start the development server:

npm start

or using yarn:

yarn start

## Open your browser and navigate to:

🌐 http://localhost:3000/

📁 Project Structure

KanbanBoard/
│── src/
│   ├── Components/
│   │   ├── KanbanBoard.jsx
│   │   ├── Column.jsx
│   │   ├── Task.jsx
│   ├── styles/
│   │   ├── KanbanBoard.css
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md

## 🛠 Troubleshooting

If you encounter the following error:

ERROR in ./src/Components/KanbanBoard.jsx 50:30-41
export 'DndProvider' (imported as 'DndProvider') was not found in 'react-dnd-html5-backend'

## 🛠 Solution:

Ensure you are importing from react-dnd and react-dnd-html5-backend correctly:

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

If the issue persists, reinstall the packages:

### npm install react-dnd react-dnd-html5-backend

## 🤝 Contributing

Feel free to fork the project and submit pull requests. Any contributions are welcome! 🎉

## 📜 License

This project is licensed under the MIT License. 📝



