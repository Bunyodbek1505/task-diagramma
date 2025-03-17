import React from "react";
import { CHART_TYPES } from "../constants/index";

const AddChartModel = ({
  handleAddChart,
  selectedType,
  handleFileUpload,
  setShowAddModal,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-white text-xl mb-4">Add New Block</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.values(CHART_TYPES).map((type) => {
            console.log(type);
            return (
              <button
                key={type}
                onClick={() => handleAddChart(type)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded capitalize"
              >
                {type}
              </button>
            );
          })}
        </div>
        {selectedType === CHART_TYPES.IMAGE && (
          <div className="mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="block w-full p-2 border rounded bg-gray-700 text-white"
            />
          </div>
        )}
        <button
          onClick={() => setShowAddModal(false)}
          className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddChartModel;
