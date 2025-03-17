import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Plus } from "lucide-react";
import Header from "./components/ui/Header";
import ChartGrid from "./components/ui/ChartGrid";
import AddChartModel from "./components/ui/AddChartModel";
import { CHART_TYPES } from "./components/constants/index";

function App() {
  const [layouts, setLayouts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const user = { name: "John Doe" };

  const handleAddChart = (type) => {
    if (type === CHART_TYPES.IMAGE) {
      setSelectedType(type);
    } else {
      addChartToLayout(type);
    }
  };

  const addChartToLayout = (type, imageUrl = null) => {
    const newLayout = {
      i: `${type}-${Date.now()}`,
      x: (layouts.length * 2) % 12,
      y: Math.floor(layouts.length / 2) * 4,
      w: 6,
      h: 4,
      type,
      imageUrl,
    };
    setLayouts([...layouts, newLayout]);
    setShowAddModal(false);
    toast.success("Chart added successfully!");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      addChartToLayout(CHART_TYPES.IMAGE, imageUrl);
      setImageFile(null);
      setSelectedType(null);
    }
  };

  // Save dashboard
  const handleSave = () => {
    setEditMode(false);
    toast.success("Dashboard saved successfully!");
  };

  const handleRemoveChart = (id) => {
    setLayouts(layouts.filter((layout) => layout.id !== id));
    toast.success("Chart removed successfully!");
  };
  return (
    <div className="min-h-screen min-w-screen bg-gray-900">
      {/* Header */}
      <Header
        user={user}
        editMode={editMode}
        setEditMode={setEditMode}
        handleSave={handleSave}
      />

      <main className="container mx-auto p-4">
        {/* Add Block - works if editMode is true   */}
        {editMode && (
          <button
            onClick={() => setShowAddModal(true)}
            className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Block
          </button>
        )}

        {/* Chart Grid */}
        <ChartGrid
          layouts={layouts}
          editMode={editMode}
          handleRemoveChart={handleRemoveChart}
        />
      </main>

      {/*  Add Chart Model*/}
      {showAddModal && (
        <AddChartModel
          handleAddChart={handleAddChart}
          selectedType={selectedType}
          handleFileUpload={handleFileUpload}
          setShowAddModal={setShowAddModal}
        />
      )}

      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
