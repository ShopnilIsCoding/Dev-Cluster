# Dev Cluster

Dev Cluster Client is a web application built with React and Vite, designed to manage student records efficiently. This project includes functionalities for adding, viewing, editing, and deleting student records. It also features user authentication, client-side routing, and responsive design.

## Live Demo

Check out the live application [here](https://dev-cluster-client.vercel.app).

## Test Credentials

You can use the following credentials to test the application:

- **Email**: `devcluster@gmail.com`
- **Password**: `Cluster99`

## Features

- **Add Students**: Form to add new students with details such as name, class, division, roll number, address, and profile picture.
- **Manage Students**: View, edit, and delete student records.
- **User Authentication**: Secure login and logout functionality.
- **Responsive Design**: Optimized for different screen sizes.
- **Client-side Routing**: Efficient navigation without reloading the page.
- **Pagination and Filtering**: Manage large lists of students with ease.
- **Notifications**: User feedback using React Toastify.
- **Helmet**: Manage document head data for better SEO and accessibility.

## Requirements

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later) or **yarn** (version 1.x or later)

## Packages

### Dependencies

- **firebase**: `^10.12.3`
- **localforage**: `^1.10.0`
- **match-sorter**: `^6.3.4`
- **react**: `^18.3.1`
- **react-dom**: `^18.3.1`
- **react-helmet-async**: `^2.0.5`
- **react-icons**: `^5.2.1`
- **react-modal**: `^3.16.1`
- **react-router-dom**: `^6.24.1`
- **react-toastify**: `^10.0.5`
- **sort-by**: `^1.2.0`
- **sweetalert2**: `^11.12.2`
- **uuid**: `^10.0.0`

### Dev Dependencies

- **vite**: `^3.0.0`
- **eslint**: `^8.23.0`
- **tailwindcss**: `^3.1.8`

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ShopnilIsCoding/Dev-Cluster.git
   cd Dev Cluster Client
2. Install dependencies:
   ```bash
   npm install
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy your Firebase configuration details and create a `.env.local` file in the root directory with the following content:
     ```plaintext
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```
4. Run the development server:
   ```bash
   npm run dev
5. Build for production:
   ```bash
   npm run build