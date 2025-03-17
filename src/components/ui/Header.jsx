import React from "react";
import { UserCircle } from "lucide-react";

const Header = ({ user, editMode, setEditMode, handleSave }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-4">
          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
            >
              Save Dashboard
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Edit Dashboard
            </button>
          )}
          <div className="flex items-center gap-1">
            <UserCircle className="w-6 h-6" />
            <span>{user.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
