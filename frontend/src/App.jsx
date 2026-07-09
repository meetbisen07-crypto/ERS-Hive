import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import LoginPage from './Components/loginPage';
import NotificationPage from './Components/NotificationPage';
import { Routes, Route } from 'react-router-dom';

const ForgotPasswordPage = () => (
  <div className="flex items-center justify-center w-screen h-screen bg-[#0a0a0a] text-white font-mono flex-col space-y-4">
    <h1 className="text-xl font-bold text-[#facc15]">Password Recovery</h1>
    <p className="text-xs text-zinc-500">Enter your email address to receive a recovery link.</p>
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="bg-[#121115] border border-zinc-800 text-white text-xs p-2 rounded-lg outline-none focus:border-[#facc15] w-64"
    />
    <button className="bg-[#facc15] text-black font-bold text-xs px-4 py-2 rounded-lg">
      Send Link
    </button>
  </div>
);

function App() {
  return (
    <Routes>

      <Route path="/" element={<LoginPage />} />

     
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />


      <Route 
        path="/notifications" 
        element={
          <div className="flex w-screen h-screen overflow-hidden bg-[#0a0a0a]">
            <Sidebar active="notifications" />
            <div className="flex-1 h-full overflow-y-auto p-6 flex flex-col items-start space-y-6">
              <SearchBar />
              <NotificationPage />
            </div>
          </div>
        } 
      />
    </Routes>
  );
}

export default App;