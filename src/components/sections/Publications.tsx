import React, { useState } from 'react';
import { PUBLICATIONS } from '../../data/userInfo';
import { ExternalLink, BookOpen, Tag } from 'lucide-react';

const Publications: React.FC = () => {
  const [activePublication, setActivePublication] = useState<string | null>(null);
  
  const togglePublication = (id: string) => {
    if (activePublication === id) {
      setActivePublication(null);
    } else {
      setActivePublication(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Academic Publications</h2>
        <div className="w-20 h-1 bg-cyan-500 mb-6"></div>
        <p className="text-gray-600 mb-8">
          A collection of my research contributions to academic journals and conferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PUBLICATIONS.map((publication) => (
          <div 
            key={publication.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img 
                  src={publication.image} 
                  alt={publication.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{publication.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {publication.authors.join(', ')}
                    </p>
                    <p className="text-sm font-medium text-cyan-600 mb-3">
                      {publication.journal}, {publication.year}, {publication.volume}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePublication(publication.id)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Expand publication details"
                  >
                    <BookOpen className="w-5 h-5 text-cyan-600" />
                  </button>
                </div>
                
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <span className="text-sm text-gray-600 mr-3">DOI: {publication.doi}</span>
                    <a 
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-800 transition-colors duration-200"
                    >
                      View Publication
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                
                {activePublication === publication.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Abstract</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {publication.abstract}
                    </p>
                    <div className="mt-4 text-sm text-gray-600">
                      <p>Pages: {publication.pages}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;