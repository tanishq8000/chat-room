# 💬 Chat Room

A real-time chat application built with React, Socket.IO, and MongoDB. Users can join chat rooms, send messages, and see message history - all in real-time with a modern, responsive interface.

## ✨ Features

- 🚀 **Real-time messaging** using Socket.IO
- 💾 **Persistent message history** with MongoDB
- 🎨 **Modern UI** designed with Tailwind CSS
- 👥 **Multiple users** can chat simultaneously
- 📱 **Responsive design** for all devices
- 🔄 **Load previous messages** when joining
- ⚡ **Fast and lightweight** with Vite

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **Socket.IO Client 4.8.1** - Real-time communication
- **Tailwind CSS 3.4.19** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express 5.2.1** - Web framework
- **Socket.IO 4.8.1** - WebSocket server
- **MongoDB** with Mongoose 9.0.2 - Database
- **dotenv 17.2.3** - Environment variables
- **CORS 2.8.5** - Cross-origin resource sharing

## 📁 Project Structure

```
chat-room/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── Components/    # React components (Join, Chat)
│   │   ├── socket.js      # Socket.IO client configuration
│   │   └── App.jsx        # Main app component
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Backend Node.js server
│   ├── models/
│   │   └── Message.js     # MongoDB message schema
│   ├── db.js              # Database connection
│   ├── index.js           # Server entry point
│   ├── .env               # Environment variables (not in repo)
│   └── package.json
│
└── package.json           # Root package.json for scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-room
   ```

2. **Install dependencies**

   Install root dependencies:
   ```bash
   npm install
   ```

   Install server dependencies:
   ```bash
   cd server
   npm install
   cd ..
   ```

   Install client dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB connection string from MongoDB Atlas or your local MongoDB instance.

4. **Update CORS origin** (if needed)

   In `server/index.js`, update the CORS origin to match your frontend URL:
   ```javascript
   const io = new Server(server, {
     cors: {
       origin: "http://localhost:5173", // Change this for development
       methods: ["GET", "POST"],
       credentials: true,
     },
   });
   ```

## 🎯 Running the Application

### Development Mode

**Option 1: Run both client and server separately**

In one terminal, start the server:
```bash
npm run server
```

In another terminal, start the client:
```bash
npm run client
```

**Option 2: Run from respective directories**

Server (from `server/` directory):
```bash
npm run dev    # Uses nodemon for auto-restart
# or
npm start      # Regular node
```

Client (from `client/` directory):
```bash
npm run dev
```

The client will be available at `http://localhost:5173` (default Vite port)
The server will run on `http://localhost:3000` (or the PORT specified in .env)

### Production

Build the client:
```bash
cd client
npm run build
```

Start the server:
```bash
cd server
npm start
```

## 🌐 Deployment

This project is configured for deployment with separate client and server hosting:

- **Client**: Deployed on Vercel (configured origin: `https://chat-room-alpha-umber.vercel.app`)
- **Server**: Can be deployed on platforms like Render, Railway, or Heroku

### Deployment Checklist

- [ ] Update CORS origin in `server/index.js` to your production client URL
- [ ] Set `MONGO_URI` environment variable in your server hosting platform
- [ ] Ensure MongoDB allows connections from your server's IP
- [ ] Update Socket.IO server URL in `client/src/socket.js` if needed
- [ ] Build the client with `npm run build` before deploying

## 🔧 Configuration

### Socket.IO Configuration

Update the server URL in `client/src/socket.js` to point to your backend:
```javascript
const socket = io("http://localhost:3000"); // Development
// or
const socket = io("https://your-server-url.com"); // Production
```

### MongoDB Configuration

The Message schema stores:
- `user` - Username of the sender
- `text` - Message content
- `time` - Timestamp (auto-generated)

Messages are sorted by time and limited to the last 50 messages when a user joins.

## 📝 Usage

1. Open the application in your browser
2. Enter a username to join the chat
3. Start sending messages
4. Messages are stored in MongoDB and will persist across sessions
5. New users will see the last 50 messages when they join

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

ISC

## 👨‍💻 Author

Tanishq Khandelwal

---

**Happy Chatting! 💬✨**
