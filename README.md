# Kinecto - Video Meeting Application

A modern, feature-rich video calling application built with React, Firebase, and ZegoCloud. Experience seamless video conferences with advanced collaboration tools.

## 🚀 Features

### Core Functionality
- **Video Calling**: High-quality video conferences with multiple participants
- **Audio Communication**: Clear audio with microphone controls
- **Screen Sharing**: Share your screen with participants
- **Text Chat**: Real-time messaging during video calls
- **User Management**: See all participants in the call

### Authentication System
- **User Registration**: Create new accounts with email/password
- **Secure Login**: Firebase-based authentication
- **Session Management**: Persistent login state
- **Logout Functionality**: Secure sign-out with local storage cleanup

### Video Conference Features
- **Dynamic Room Creation**: Automatic room ID generation
- **Custom Room Access**: Join specific rooms via URL parameters
- **Participant Controls**: Mute/unmute audio and video
- **Layout Options**: Auto and manual layout arrangements
- **Maximum Capacity**: Support for up to 50 participants per room

### User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Navigation**: Easy access to all features
- **Landing Page**: Professional homepage with feature showcase

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Modern UI framework
- **React Router DOM 6.15.0**: Client-side routing
- **React Bootstrap 2.8.0**: UI component library
- **Styled Components 4.3.2**: CSS-in-JS styling
- **Rebass 4.0.7**: Component library
- **Tachyons 4.12.0**: Utility-first CSS

### Backend Services
- **Firebase 10.1.0**: Authentication and backend services
- **ZegoCloud SDK**: Video calling infrastructure
  - @zegocloud/zego-uikit-prebuilt 1.8.10
  - @zegocloud/zego-uikit-rn 2.2.0

### Development Tools
- **React Scripts 5.0.1**: Build and development server
- **ESLint**: Code quality and consistency
- **Testing Library**: Jest and React Testing Library

## 📋 Application Structure

### Pages and Routes
- **`/`** (Home): Landing page with hero section and features
- **`/login`**: Authentication page (login/signup)
- **`/video-app`**: Video calling interface (authentication required)
- **`/video-app?roomID=XYZ`**: Join specific room

### Key Components
- **Navbar**: Navigation with authentication state
- **HeroBanner**: Landing page hero section
- **Features**: Feature showcase
- **Login/Signup**: Authentication forms with flip animation
- **VideoApp**: Main video conference interface
- **Footer**: Application footer with information

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase project configuration
- ZegoCloud account and credentials

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase credentials in `src/Page/Firebase.js`
4. Configure ZegoCloud credentials in `src/Page/VideoApp.jsx`
5. Start the development server:
   ```bash
   npm start
   ```

### Configuration Required
- **Firebase**: Update `firebaseConfig` object with your project credentials
- **ZegoCloud**: Update `appID` and `serverSecret` in VideoApp component

## 🎯 Usage

### For Users
1. Visit the application homepage
2. Click "Login" to access your account or create a new one
3. After login, navigate to the video calling section
4. Create a new room or join an existing one
5. Enjoy video conferencing with all available features

### Room Access
- **Automatic Room**: System generates random room ID
- **Custom Room**: Use URL parameter `?roomID=YOUR_ROOM_ID`
- **Share Links**: Generate sharing links for participants

## 🔧 Development

### Available Scripts
- `npm start`: Run development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

### Code Quality
- ESLint configuration for code consistency
- Proper error handling and logging
- Component-based architecture
- Responsive design principles

## 📱 Features in Detail

### Video Controls
- Turn camera on/off when joining
- Toggle microphone during calls
- Camera and microphone toggle buttons
- Audio/video settings panel

### Collaboration Tools
- Screen sharing functionality
- Real-time text chat
- Participant list display
- Layout customization options

### Security
- Firebase authentication
- Secure room access
- Private room IDs
- Session management

## 🌐 Browser Support
- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## 📄 License
This project is open source and available under the MIT License.

## 👥 Author
Developed by Dhruvil Patel

---

**Kinecto** - Where seamless communication meets powerful collaboration tools.
