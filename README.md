# StreamFlix

StreamFlix is a React-based web application that enables users to browse and search for movies. The project is currently under development, with new features being added progressively.

## 📌 Features

- **Movie Search**: Users can search for movies by title, genre, or keywords.
- **Responsive Design**: The application is optimized for various devices, ensuring a seamless experience on desktops, tablets, and mobile phones.
- **API Integration**: Fetches movie data from The Movie Database (TMDb) API.
- **Redux State Management**: Utilizes Redux for efficient state handling.
- **Axios for API Calls**: Makes HTTP requests using Axios for data retrieval.

## 🚀 Live Demo

Experience the application live at: [StreamFlix Live Demo](https://streamflix-g56b.onrender.com/)

## 🛠️ Installation

To run this project locally, follow these steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Priyans1727C/StreamFlix.git
cd StreamFlix
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

- Obtain an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/).
- Create a `.env` file in the root directory and add your API key:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

### 4️⃣ Start the Development Server

```bash
npm start
```

The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux
- **HTTP Requests**: Axios
- **API**: The Movie Database (TMDb) API
- **Routing**: React Router

## 📁 Folder Structure

```
StreamFlix/
├── public/               # Static files
│   ├── index.html
│   └── ...
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── redux/            # Redux state management
│   ├── api/         # API calls using Axios
│   ├── App.js            # Main application file
│   ├── index.js          # Entry point
│   └── ...
├── .env                  # Environment variables (not included in repo)
├── .gitignore            # Ignored files and folders
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/YourFeatureName`.
3. **Make your changes**.
4. **Commit your changes**: `git commit -m 'Add some feature'`.
5. **Push to the branch**: `git push origin feature/YourFeatureName`.
6. **Open a pull request**.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---