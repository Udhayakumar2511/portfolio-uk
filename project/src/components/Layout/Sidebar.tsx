import React from 'react';
import { NAV_ITEMS, SOCIAL_LINKS, USER_NAME } from '../../data/userInfo';
import { Github, Linkedin, Mail, Twitter, Home, User, FileText, Briefcase, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5" />;
      case 'User': return <User className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Mail': return <Mail className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github': return <Github className="w-5 h-5" />;
      case 'Linkedin': return <Linkedin className="w-5 h-5" />;
      case 'Mail': return <Mail className="w-5 h-5" />;
      case 'Twitter': return <Twitter className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white flex flex-col z-10">
      <div className="p-4">
        {/* Logo or header can go here */}
      </div>
      
      <div className="flex flex-col items-center py-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500 mb-4">
          <img 
            src="/images/profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mb-1">{USER_NAME}</h1>
        <div className="flex space-x-3 mt-3">
          {SOCIAL_LINKS.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
            >
              {getSocialIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
      
      <nav className="mt-6 flex-1">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item, index) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className={`flex items-center px-6 py-3 hover:bg-gray-800 transition-colors duration-300 ${
                    isActive ? 'text-cyan-400 border-l-4 border-cyan-400 bg-gray-800' : ''
                  }`}
                >
                  <span className="mr-3">
                    {getIcon(item.icon)}
                  </span>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </aside>
  );
};

export default Sidebar;