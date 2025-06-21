import React, { useState } from 'react';
import { Edit2, X } from 'lucide-react';

export const ServicesSection = ({ servicesData = ['React', 'Tailwind', 'JavaScript', 'Node.js', 'Docker', 'Grafana', 'DevOps', 'AWS', 'Kubernetes', 'IaC'], darkMode = false, onEdit }) => {
  const [services, setServices] = useState(servicesData);
  const [editing, setEditing] = useState(false);
  const [newService, setNewService] = useState('');

  const addService = () => {
    if (newService.trim()) {
      const updatedServices = [...services, newService.trim()];
      setServices(updatedServices);
      if (onEdit) onEdit(updatedServices);
      setNewService('');
    }
  };

  const removeService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
    if (onEdit) onEdit(updatedServices);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Skills</h2>
          <button 
            onClick={() => setEditing(!editing)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        
        {editing && (
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addService()}
              placeholder="Add a Skill..."
              className={`flex-1 px-3 py-2 border rounded-lg text-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
            />
            <button 
              onClick={addService}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Add
            </button>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <span 
              key={index}
              className={`px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'} rounded-full text-sm font-medium cursor-pointer transition-all duration-200 hover:shadow-sm border border-transparent hover:border-blue-200 dark:hover:border-blue-800 relative group/service`}
              onClick={() => editing && removeService(index)}
            >
              {service}
              {editing && (
                <X className="w-3 h-3 absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover/service:opacity-100 transition-opacity" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};