import React, { useState } from 'react';
import { 
  User, MapPin, Building, Calendar, Users, Edit2, Check, X, Plus, Camera, 
  Sun, Moon, Award, GraduationCap, Briefcase, Heart, MessageCircle, Share,
  ExternalLink, ChevronDown, ChevronUp, Settings, MoreHorizontal
} from 'lucide-react';
import { mockData } from '../Data/data';

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
  