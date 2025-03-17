import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import SparkLineChart from "../charts/SparkLineChart";
import LineChart from "../charts/LineChart";
import SpiralChart from "../charts/SpiralChart";
import BarChart from "../charts/BarChart";
import { CHART_TYPES } from "../constants/index";

const ChartGrid = ({ layouts, editMode, handleRemoveChart }) => {
  // Returns various chart components
  const renderChart = (layout) => {
    switch (layout.type) {
      case CHART_TYPES.SPARKLINE:
        return <SparkLineChart />;
      case CHART_TYPES.LINE:
        return <LineChart />;
      case CHART_TYPES.SPIRAL:
        return <SpiralChart />;
      case CHART_TYPES.BAR:
        return <BarChart />;
      case CHART_TYPES.IMAGE:
        return (
          <img
            src={layout.imageUrl}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
        );
      default:
        return null;
    }
  };

  return (
    // drag-and-drop va responsive library
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layouts }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      width={1200}
      isDraggable={editMode}
      isResizable={editMode}
    >
      {layouts.map((layout) => (
        <div
          key={layout.i}
          className="bg-gray-800  max-w-full max-h-1/2  text-black rounded-lg overflow-hidden relative"
        >
          {editMode && (
            <button
              onClick={() => handleRemoveChart(layout.i)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded"
            >
              Remove
            </button>
          )}
          {renderChart(layout)}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default ChartGrid;
