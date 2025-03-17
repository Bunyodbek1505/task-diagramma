import React, { useState } from "react";
import { AlignRight, UserCircle } from "lucide-react";

const Header = ({ user, editMode, setEditMode, handleSave }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-gray-800 text-white p-4">
      <div className="container flex items-center justify-between">
        {/* Title */}
        <h1 className="text-sm md:text-2xl font-bold w-full text-center sm:text-left">
          Dashboard
        </h1>

        {/* Desktop Controls (Hidden in mobile) */}
        <div className="hidden sm:flex items-center gap-4">
          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm"
            >
              Save Dashboard
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
            >
              Edit Dashboard
            </button>
          )}
          <div className="flex items-center gap-1 text-sm">
            <UserCircle className="w-5 h-5" />
            <span>{user.name}</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <AlignRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-1 flex flex-col gap-5 sm:hidden mt-2  bg-gray-700 p-4 rounded-md z-99">
          <div className="flex items-center gap-2">
            <UserCircle className="w-5 h-5" />
            <span>{user.name}</span>
          </div>
          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 w-full px-4 py-2 rounded mb-2"
            >
              Save Dashboard
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 hover:bg-blue-600 w-full px-4 py-2 rounded mb-2"
            >
              Edit Dashboard
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
