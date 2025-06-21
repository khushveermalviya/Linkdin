import React, { useState } from 'react';
import { 
  User, MapPin, Building, Calendar, Users, Edit2, Check, X, Plus, Camera, 
  Sun, Moon, Award, GraduationCap, Briefcase, Heart, MessageCircle, Share,
  ExternalLink, ChevronDown, ChevronUp, Settings, MoreHorizontal
} from 'lucide-react';
import { mockData } from '../Data/data';
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