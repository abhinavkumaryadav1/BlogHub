# 🚀 BlogHub: A Modern Blogging Platform

Welcome to **BlogHub**, a full-featured blogging application built with a modern tech stack. This platform provides a seamless experience for users to create, read, update, and delete their blog posts, all secured with a robust authentication system. The project leverages the power of React, Redux Toolkit, and Appwrite to deliver a fast, scalable, and user-friendly application.


---

## ✨ Features

* **User Authentication**: Secure user registration and login functionality.
* **CRUD Operations for Posts**: Users can **C**reate, **R**ead, **U**pdate, and **D**elete their own blog posts.
* **Rich Text Editor**: Powered by TinyMCE for a powerful and intuitive post-writing experience.
* **Image Uploads**: Users can upload featured images for their posts, which are managed via Appwrite's storage service.
* **Protected Routes**: Certain pages and actions (like creating a new post) are only accessible to authenticated users.
* **Responsive Design**: A clean and modern UI built with Tailwind CSS that looks great on all devices.

---

## 🛠️ Tech Stack & Tools

* **Frontend**: [React](https://reactjs.org/) (with Vite)
* **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
* **Routing**: [React Router DOM](https://reactrouter.com/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Form Handling**: [React Hook Form](https://react-hook-form.com/)
* **Backend as a Service (BaaS)**: [Appwrite](https://appwrite.io/) for Authentication, Database, and Storage.
* **Rich Text Editor**: [TinyMCE](https://www.tiny.cloud/)

---

## ⚙️ Getting Started: Local Setup

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### **1. Prerequisites**

* Node.js (v18 or higher)
* npm or yarn
* An [Appwrite](https://appwrite.io/) account

### **2. Clone the Repository**

First, clone the project repository to your local machine.

```bash
git clone [https://github.com/your-username/BlogHub.git](https://github.com/your-username/BlogHub.git)
cd BlogHub
```

### **3. Install Dependencies**

Install the necessary npm packages.

```bash
npm install
```

### **4. Appwrite Setup**

This project relies on Appwrite for its backend. You need to configure it correctly.

1.  **Create a Project**: Log in to your Appwrite console and create a new project.
2.  **Create a Web App**: In your project dashboard, create a new Web App. This will give you a **Project ID**.
3.  **Create a Database**:
    * Go to the **Database** section and create a new database. This will give you a **Database ID**.
    * Inside the database, create a new **Collection**. This will give you a **Collection ID**.
    * Define the following **Attributes** and their types for the collection:
        | Key | Type | Size | Required |
        | :---------- | :---------- | :--- | :--- |
        | `title` | `String` | 255 | Yes |
        | `content` | `String` | 10000 | Yes |
        | `featuredImage`| `String` | 255 | Yes |
        | `status` | `String` | 255 | Yes |
        | `userid` | `String` | 255 | Yes |
4.  **Create a Storage Bucket**:
    * Go to the **Storage** section and create a new bucket. This will give you a **Bucket ID**.

### **5. Environment Variables**

Create a `.env` file in the root of your project by copying the sample file.

```bash
cp .env.sample .env
```

Now, open the `.env` file and fill in the values you obtained from your Appwrite console.

```env
VITE_APPWRITE_URL="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)" # Your Appwrite Endpoint
VITE_APPWRITE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_APPWRITE_DATABASE_ID="YOUR_DATABASE_ID"
VITE_APPWRITE_COLLECTION_ID="YOUR_COLLECTION_ID"
VITE_APPWRITE_BUCKET_ID="YOUR_BUCKET_ID"
```

### **6. Run the Application**

Start the local development server.

```bash
npm run dev
```

The application should now be running on `http://localhost:5173/` (or another port if 5173 is busy).

---

## 🧪 Running Tests

This project template does not include a pre-configured testing framework. To add testing capabilities, you would typically integrate a library like **Jest** with **React Testing Library**.

Once configured, you would be able to run your test suite with:

```bash
npm test
```

---

## 🤔 Assumptions & Design Choices

* **Backend as a Service (BaaS)**: I chose **Appwrite** as the backend to simplify development. It handles authentication, database, and file storage out-of-the-box, allowing me to focus on the frontend logic and user experience.
* **State Management**: **Redux Toolkit** was used for centralized state management, particularly for handling the user's authentication status across the entire application. This makes the state predictable and easy to debug.
* **Styling**: **Tailwind CSS** was chosen for its utility-first approach, which allows for rapid UI development without writing custom CSS. All styling is done directly within the JSX components.
* **Component Structure**: Components are organized logically and use a "barrel" export pattern (`src/components/index.js`) for cleaner and more manageable imports throughout the application.
* **Security**: All sensitive keys and configuration details (like Appwrite IDs) are stored in environment variables and are not hardcoded, which is a critical security practice.
