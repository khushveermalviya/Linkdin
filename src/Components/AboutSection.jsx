import React, { useState } from 'react';
import { Edit2, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

export const AboutSection = ({ darkMode = false }) => {
  // Initialize the "About" text with a default value
  const [text, setText] = useState(
    'Motivated and detail-oriented Frontend Developer with strong knowledge of JavaScript, React, and Tailwind CSS. Experience in building responsive, user-friendly web applications with a solid understanding of modern development practices. Created and deployed Edusystem.tech, a comprehensive school management system, showcasing real-world problem-solving and cross-functional collaboration. A quick learner eager to contribute to impactful projects.'
  );
  const [editing, setEditing] = useState(false); // Track if the section is in edit mode
  const [expanded, setExpanded] = useState(false); // Track if the text is expanded

  const handleSave = () => {
    setEditing(false); // Exit editing mode
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2
            className={`text-xl font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About
          </h2>
          <button
            onClick={() => setEditing(true)} // Enable editing mode
            className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100`}
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>

        {editing ? (
          <div className="space-y-4 animate-in slide-in-from-top duration-300">
            <textarea
              value={text} // Controlled input for editing
              onChange={(e) => setText(e.target.value)} // Update text state on change
              rows={8}
              className={`w-full border-2 rounded-lg px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 placeholder-gray-500'
              }`}
              placeholder="Tell us about yourself..."
            />
            <div className="flex gap-3">
              <button
                onClick={handleSave} // Save changes
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Check className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={() => setEditing(false)} // Cancel editing
                className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p
              className={`${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } leading-relaxed whitespace-pre-line`}
            >
              {expanded
                ? text // Show full text if expanded
                : text.slice(0, 200) + (text.length > 200 ? '...' : '')} {/* Truncate text */}
            </p>
            {text.length > 200 && (
              <button
                onClick={() => setExpanded(!expanded)} // Toggle expanded state
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
              >
                {expanded ? 'Show less' : 'Show more'}
                {expanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};