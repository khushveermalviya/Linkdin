import React, { useState } from 'react';
import { 
  User, MapPin, Building, Calendar, Users, Edit2, Check, X, Plus, Camera, 
  Sun, Moon, Award, GraduationCap, Briefcase, Heart, MessageCircle, Share,
  ExternalLink, ChevronDown, ChevronUp, Settings, MoreHorizontal
} from 'lucide-react';
import { mockData } from '../Data/data';
// Mock data to simulate your data structure


const LinkedInComponents = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [showForms, setShowForms] = useState({});
  
  // State for different sections
  const [aboutText, setAboutText] = useState(mockData.aboutData.text);
  const [services, setServices] = useState(mockData.servicesData);
  const [experiences, setExperiences] = useState(mockData.experienceData);
  const [education, setEducation] = useState(mockData.educationData);
  const [certifications, setCertifications] = useState(mockData.certificationsData);
  
  const [tempData, setTempData] = useState('');
  const [newExperience, setNewExperience] = useState({ role: '', company: '', duration: '', description: '' });

  const toggleExpanded = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleForm = (section) => {
    setShowForms(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleEdit = (section, data = '') => {
    setEditingSection(section);
    setTempData(data);
  };

  const handleSave = (section) => {
    if (section === 'about') {
      setAboutText(tempData);
    }
    setEditingSection(null);
    setTempData('');
  };

  const handleCancel = () => {
    setEditingSection(null);
    setTempData('');
  };

  const addExperience = () => {
    if (newExperience.role && newExperience.company) {
      setExperiences([{ ...newExperience, id: Date.now() }, ...experiences]);
      setNewExperience({ role: '', company: '', duration: '', description: '' });
      toggleForm('experience');
    }
  };

  const ThemeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 z-50 transform hover:scale-110 ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  const AboutSection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>About</h2>
          <button 
            onClick={() => handleEdit('about', aboutText)}
            className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100`}
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        
        {editingSection === 'about' ? (
          <div className="space-y-4 animate-in slide-in-from-top duration-300">
            <textarea
              value={tempData}
              onChange={(e) => setTempData(e.target.value)}
              rows={8}
              className={`w-full border-2 rounded-lg px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              placeholder="Tell us about yourself..."
            />
            <div className="flex gap-3">
              <button 
                onClick={() => handleSave('about')} 
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Check className="w-4 h-4" />
                Save
              </button>
              <button 
                onClick={handleCancel} 
                className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed whitespace-pre-line`}>
              {expandedSections.about ? aboutText : aboutText.slice(0, 200) + (aboutText.length > 200 ? '...' : '')}
            </p>
            {aboutText.length > 200 && (
              <button 
                onClick={() => toggleExpanded('about')}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
              >
                {expandedSections.about ? 'Show less' : 'Show more'}
                {expandedSections.about ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const ServicesSection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <span 
              key={index}
              className={`px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'} rounded-full text-sm font-medium cursor-pointer transition-all duration-200 hover:shadow-sm border border-transparent hover:border-blue-200 dark:hover:border-blue-800`}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const FeaturedSection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured</h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockData.featuredPosts.map((post) => (
            <div
              key={post.id}
              className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group/card border border-transparent hover:border-blue-200 dark:hover:border-blue-800`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className={`font-medium text-sm mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ActivitySection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Activity</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
            Show all activity
          </button>
        </div>
        
        <div className="space-y-4">
          {mockData.activityPosts.map((post) => (
            <div key={post.id} className={`p-4 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-all duration-200 cursor-pointer group/post`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3`}>
                {post.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-200 opacity-0 group-hover/post:opacity-100">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExperienceSection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
          <button 
            onClick={() => toggleForm('experience')}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {showForms.experience && (
          <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600`}>
            <h3 className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Experience</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Title *"
                value={newExperience.role}
                onChange={(e) => setNewExperience({...newExperience, role: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Company *"
                value={newExperience.company}
                onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Duration (e.g., Jan 2020 - Present)"
                value={newExperience.duration}
                onChange={(e) => setNewExperience({...newExperience, duration: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <textarea
                placeholder="Description"
                rows={4}
                value={newExperience.description}
                onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <div className="flex gap-3">
                <button 
                  onClick={addExperience}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  Save
                </button>
                <button 
                  onClick={() => toggleForm('experience')}
                  className="px-6 py-2.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-4 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-200 -mx-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-all duration-200`}>
                <Briefcase className="w-6 h-6 text-gray-500 group-hover/item:text-blue-600 transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {exp.duration}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h2>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
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

  const CertificateSection = () => (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Licenses & Certifications</h2>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex gap-4 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-200 -mx-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-all duration-200`}>
                <Award className="w-6 h-6 text-gray-500 group-hover/item:text-blue-600 transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {cert.name}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500">
                      Issued {cert.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <AboutSection />
        <ServicesSection />
        <FeaturedSection />
        <ActivitySection />
        <ExperienceSection />
        <EducationSection />
        <CertificateSection />
      </div>
    </div>
  );
};

// Export individual components for use


// Export individual components for use - COMPLETION STARTS HERE

export const ServicesSection = ({ servicesData, darkMode = false, onEdit }) => {
  const [services, setServices] = useState(servicesData || []);
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
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h2>
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
              placeholder="Add a service..."
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

export const ExperienceSection = ({ experienceData, darkMode = false, onAdd, onEdit }) => {
  const [experiences, setExperiences] = useState(experienceData || []);
  const [showForm, setShowForm] = useState(false);
  const [newExperience, setNewExperience] = useState({ 
    role: '', 
    company: '', 
    duration: '', 
    description: '' 
  });

  const addExperience = () => {
    if (newExperience.role && newExperience.company) {
      const updatedExperiences = [{ ...newExperience, id: Date.now() }, ...experiences];
      setExperiences(updatedExperiences);
      if (onAdd) onAdd(newExperience);
      setNewExperience({ role: '', company: '', duration: '', description: '' });
      setShowForm(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {showForm && (
          <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600`}>
            <h3 className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Experience</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Title *"
                value={newExperience.role}
                onChange={(e) => setNewExperience({...newExperience, role: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Company *"
                value={newExperience.company}
                onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Duration (e.g., Jan 2020 - Present)"
                value={newExperience.duration}
                onChange={(e) => setNewExperience({...newExperience, duration: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <textarea
                placeholder="Description"
                rows={4}
                value={newExperience.description}
                onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <div className="flex gap-3">
                <button 
                  onClick={addExperience}
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
          {experiences.map((exp) => (
            <div key={exp.id} className="flex gap-4 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-200 -mx-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-all duration-200`}>
                <Briefcase className="w-6 h-6 text-gray-500 group-hover/item:text-blue-600 transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {exp.duration}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const FeaturedSection = ({ featuredData, darkMode = false, onEdit }) => {
  const [posts] = useState(featuredData || [
    { id: 1, title: "Building Scalable React Applications", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=300&fit=crop", likes: 142, comments: 23 },
    { id: 2, title: "Modern JavaScript Best Practices", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=300&fit=crop", likes: 89, comments: 15 },
    { id: 3, title: "Cloud Architecture Patterns", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop", likes: 203, comments: 41 }
  ]);

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured</h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group/card border border-transparent hover:border-blue-200 dark:hover:border-blue-800`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className={`font-medium text-sm mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ActivitySection Component
export const ActivitySection = ({ activityData, darkMode = false, onEdit }) => {
  const [posts] = useState(activityData || [
    { id: 1, content: "Just shipped a new feature that improves user experience by 30%! Excited to see the impact on our users.", likes: 45, comments: 8 },
    { id: 2, content: "Great discussion on microservices architecture at today's tech meetup. The future of scalable systems looks promising!", likes: 67, comments: 12 },
    { id: 3, content: "Mentoring junior developers is one of the most rewarding aspects of my job. Seeing them grow and succeed is incredible.", likes: 134, comments: 25 }
  ]);

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Activity</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
            Show all activity
          </button>
        </div>
        
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className={`p-4 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-all duration-200 cursor-pointer group/post`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3`}>
                {post.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-200 opacity-0 group-hover/post:opacity-100">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// EducationSection Component
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

// CertificateSection Component
export const CertificateSection = ({ certificationsData, darkMode = false, onAdd, onEdit }) => {
  const [certifications, setCertifications] = useState(certificationsData || [
    { id: 1, name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
    { id: 2, name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2022" },
    { id: 3, name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2021" }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newCertification, setNewCertification] = useState({ 
    name: '', 
    issuer: '', 
    year: '' 
  });

  const addCertification = () => {
    if (newCertification.name && newCertification.issuer) {
      const updatedCertifications = [{ ...newCertification, id: Date.now() }, ...certifications];
      setCertifications(updatedCertifications);
      if (onAdd) onAdd(newCertification);
      setNewCertification({ name: '', issuer: '', year: '' });
      setShowForm(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Licenses & Certifications</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {showForm && (
          <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600`}>
            <h3 className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Certification</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Certification Name *"
                value={newCertification.name}
                onChange={(e) => setNewCertification({...newCertification, name: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Issuing Organization *"
                value={newCertification.issuer}
                onChange={(e) => setNewCertification({...newCertification, issuer: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <input
                type="text"
                placeholder="Year (e.g., 2023)"
                value={newCertification.year}
                onChange={(e) => setNewCertification({...newCertification, year: e.target.value})}
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
              />
              <div className="flex gap-3">
                <button 
                  onClick={addCertification}
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
          {certifications.map((cert) => (
            <div key={cert.id} className="flex gap-4 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-200 -mx-4">
              <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-900/30 transition-all duration-200`}>
                <Award className="w-6 h-6 text-gray-500 group-hover/item:text-blue-600 transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {cert.name}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500">
                      Issued {cert.year}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-all duration-200 opacity-0 group-hover/item:opacity-100">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// AboutSection Component (from previous completion)
// export const AboutSection = ({ aboutData, darkMode = false, onEdit }) => {
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(aboutData?.text || "Passionate software engineer with 8+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies.\n\nI love solving complex problems and mentoring junior developers. Currently focused on building innovative solutions that impact millions of users globally.");
//   const [expanded, setExpanded] = useState(false);

//   const handleSave = () => {
//     if (onEdit) onEdit(text);
//     setEditing(false);
//   };

//   return (
//     <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-4">
//           <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>About</h2>
//           <button 
//             onClick={() => setEditing(true)}
//             className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100`}
//           >
//             <Edit2 className="w-4 h-4" />
//           </button>
//         </div>
        
//         {editing ? (
//           <div className="space-y-4 animate-in slide-in-from-top duration-300">
//             <textarea
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               rows={8}
//               className={`w-full border-2 rounded-lg px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
//               placeholder="Tell us about yourself..."
//             />
//             <div className="flex gap-3">
//               <button 
//                 onClick={handleSave}
//                 className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//               >
//                 <Check className="w-4 h-4" />
//                 Save
//               </button>
//               <button 
//                 onClick={() => setEditing(false)}
//                 className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
//               >
//                 <X className="w-4 h-4" />
//                 Cancel
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed whitespace-pre-line`}>
//               {expanded ? text : text.slice(0, 200) + (text.length > 200 ? '...' : '')}
//             </p>
//             {text.length > 200 && (
//               <button 
//                 onClick={() => setExpanded(!expanded)}
//                 className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
//               >
//                 {expanded ? 'Show less' : 'Show more'}
//                 {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // ServicesSection Component (from previous completion)
// export const ServicesSection = ({ servicesData, darkMode = false, onEdit }) => {
//   const [services, setServices] = useState(servicesData || [
//     "Web Development", "Mobile Apps", "Cloud Architecture", "DevOps", 
//     "Technical Consulting", "Team Leadership", "Code Review", "Mentoring"
//   ]);
//   const [editing, setEditing] = useState(false);
//   const [newService, setNewService] = useState('');

//   const addService = () => {
//     if (newService.trim()) {
//       const updatedServices = [...services, newService.trim()];
//       setServices(updatedServices);
//       if (onEdit) onEdit(updatedServices);
//       setNewService('');
//     }
//   };

//   const removeService = (index) => {
//     const updatedServices = services.filter((_, i) => i !== index);
//     setServices(updatedServices);
//     if (onEdit) onEdit(updatedServices);
//   };

//   return (
//     <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm mb-6 overflow-hidden group hover:shadow-md transition-all duration-300`}>
//       <div className="p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h2>
//           <button 
//             onClick={() => setEditing(!editing)}
//             className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
//           >
//             <Edit2 className="w-4 h-4" />
//           </button>
//         </div>
        
//         {editing && (
//           <div className="mb-4 flex gap-2">
//             <input
//               type="text"
//               value={newService}
//               onChange={(e) => setNewService(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && addService()}
//               placeholder="Add a service..."
//               className={`flex-1 px-3 py-2 border rounded-lg text-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'}`}
//             />
//             <button 
//               onClick={addService}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
//             >
//               Add
//             </button>
//           </div>
//         )}
        
//         <div className="flex flex-wrap gap-2">
//           {services.map((service, index) => (
//             <span 
//               key={index}
//               className={`px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-blue-50'} rounded-full text-sm font-medium cursor-pointer transition-all duration-200 hover:shadow-sm border border-transparent hover:border-blue-200 dark:hover:border-blue-800 relative group/service`}
//               onClick={() => editing && removeService(index)}
//             >
//               {service}
//               {editing && (
//                 <X className="w-3 h-3 absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover/service:opacity-100 transition-opacity" />
//               )}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// Default export - the main component with mock data
const LinkedInProfileDemo = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const mockData = {
    aboutData: {
      text: "Passionate software engineer with 8+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies.\n\nI love solving complex problems and mentoring junior developers. Currently focused on building innovative solutions that impact millions of users globally."
    },
    servicesData: [
      "Web Development", "Mobile Apps", "Cloud Architecture", "DevOps", 
      "Technical Consulting", "Team Leadership", "Code Review", "Mentoring"
    ],
    experienceData: [
      { id: 1, role: "Senior Software Engineer", company: "TechCorp Inc.", duration: "Jan 2022 - Present", description: "Lead development of microservices architecture serving 1M+ users daily. Mentored 5 junior developers and improved team productivity by 40%." },
      { id: 2, role: "Software Engineer", company: "StartupXYZ", duration: "Mar 2020 - Dec 2021", description: "Built responsive web applications using React and Node.js. Implemented CI/CD pipelines and reduced deployment time by 60%." }
    ]
  };

  const ThemeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 z-50 transform hover:scale-110 ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <AboutSection 
          aboutData={mockData.aboutData} 
          darkMode={darkMode}
          onEdit={(newText) => console.log('About updated:', newText)}
        />
        <ServicesSection 
          servicesData={mockData.servicesData} 
          darkMode={darkMode}
          onEdit={(newServices) => console.log('Services updated:', newServices)}
        />
        <ExperienceSection 
          experienceData={mockData.experienceData} 
          darkMode={darkMode}
          onAdd={(newExp) => console.log('Experience added:', newExp)}
          onEdit={(updatedExp) => console.log('Experience updated:', updatedExp)}
        />
      </div>
    </div>
  );
};

export default LinkedInProfileDemo;