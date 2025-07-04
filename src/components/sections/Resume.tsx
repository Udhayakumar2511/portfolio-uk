import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { EDUCATION, CERTIFICATIONS } from '../../data/userInfo';

const Resume: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Resume" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <div className="space-y-10">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-10 border-l-2 border-cyan-500">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-gray-500 mb-2">{edu.period}</p>
                    <p className="text-lg font-medium text-cyan-600 mb-3">{edu.institution}</p>
                    <p className="text-gray-600 mb-3">{edu.description}</p>
                    {edu.gpa && (
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                  <p className="text-cyan-600 mb-2">{cert.issuer}</p>
                  <p className="text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Research Publications</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">SmartBin</h4>
              <p className="text-gray-600 mb-3">Team Member</p>
              <p className="text-gray-600 mb-4">
                AI-based intelligent waste classification system using TensorFlow and OpenCV, 
                ensuring efficient waste management with notification and monitoring system.
              </p>
              <div className="text-sm text-gray-500">November 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;