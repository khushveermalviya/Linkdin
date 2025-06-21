import React, { useState } from 'react';
import { 
  User, MapPin, Building, Calendar, Users, Edit2, Check, X, Plus, Camera, 
  Sun, Moon, Award, GraduationCap, Briefcase, Heart, MessageCircle, Share,
  ExternalLink, ChevronDown, ChevronUp, Settings, MoreHorizontal
} from 'lucide-react';
import { mockData } from '../Data/data';
export const EducationSection = ({ educationData, darkMode = false, onAdd, onEdit }) => {
    const [education, setEducation] = useState(educationData || [
      { id: 1, degree: "Master of Science in Computer Science", school: "Stanford University", duration: "2018 - 2020" },
      { id: 2, degree: "Bachelor of Science in Software Engineering", school: "UC Berkeley", duration: "2014 - 2018" }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newEducation, setNewEducation] = useState({ 
      degree: '', 
      school: '', 
      duration: '' 
    });
  
    const addEducation = () => {
      if (newEducation.degree && newEducation.school) {
        const updatedEducation = [{ ...newEducation, id: Date.now() }, ...education];
        setEducation(updatedEducation);
        if (onAdd) onAdd(newEducation);
        setNewEducation({ degree: '', school: '', duration: '' });
        setShowForm(false);
      }
    };
  
    return (
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
            <button 
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {showForm && (
            <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600`}>
              <h3 className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Education</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="School *"
                  value={newEducation.school}
                  onChange={(e) => setNewEducation({...newEducation, school: e.target.value})}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                />
                <input
                  type="text"
                  placeholder="Degree *"
                  value={newEducation.degree}
                  onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 2018 - 2020)"
                  value={newEducation.duration}
                  onChange={(e) => setNewEducation({...newEducation, duration: e.target.value})}
                  className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
                />
                <div className="flex gap-3">
                  <button 
                    onClick={addEducation}
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    Save
                  </button>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="flex gap-4 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-200 -mx-4">
                <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-all duration-200`}>
                  <GraduationCap className="w-6 h-6 text-gray-500 group-hover/item:text-blue-600 transition-colors duration-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {edu.school}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                        {edu.degree}
                      </p>
                      <p className="text-sm text-gray-500">
                        {edu.duration}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };