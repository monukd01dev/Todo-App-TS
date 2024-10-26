# TODO-TS

**TODO-TS** is a simple, fully-functional TODO application built with TypeScript, designed to offer a streamlined task management experience. This app allows users to add, mark as completed, and delete tasks, with all task data stored locally in the browser’s localStorage, ensuring persistence across sessions. Initially a learning project, **TODO-TS** is practical for real-life use.

[**Live Demo on Vercel**](https://todo-app-ts-red.vercel.app/)

## Features

- **Add Todo**: Quickly add new tasks to your list with an intuitive interface.
- **Mark Todo as Completed**: Easily mark tasks as completed to track progress.
- **Delete Todo**: Remove tasks that are no longer relevant.
- **Persistent Storage**: Todos are saved in localStorage, ensuring they are available across sessions.

## Tech Stack

- **TypeScript**: Ensures type safety and improved tooling.
- **Vite**: Bundler used for fast development and optimized builds.
- **Tailwind CSS**: Provides responsive, customizable styling.
- **DOM API**: Uses native DOM manipulation for simplicity and direct control.

## How It Works

1. **Adding a Todo**: New tasks are added to the list and saved in localStorage.
2. **Marking as Completed**: Clicking on a task marks it as completed.
3. **Deleting a Todo**: Click delete to remove a task from both UI and localStorage.
4. **LocalStorage Persistence**: On page load, the app retrieves and displays the todo list from localStorage, ensuring all tasks are available across sessions.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/todo-ts.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd Todo-App-TS
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Run the project**:
    ```bash
    npm run dev
    ```
    Vite will start a development server, and you can access the app at the provided local URL.

## Usage

- **Adding a Todo**: Enter your task and click the "Add" button.
- **Completing a Todo**: Click a task to mark it as completed.
- **Deleting a Todo**: Click the "Delete" button next to any task to remove it.

## Project Motivation

TODO-TS was created as part of my journey to learn and practice TypeScript. This project provided hands-on experience with TypeScript while using Vite, Tailwind CSS, and the DOM API to build a practical, real-world application.

## License

This project is open-source and available under the MIT License.

---

Check out the [**Live Demo on Vercel**](https://todo-app-ts-red.vercel.app/) and stay organized with **TODO-TS**!
