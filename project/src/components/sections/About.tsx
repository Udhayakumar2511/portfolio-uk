import React from 'react';
import { User, Calendar, Globe, Phone, Mail, Briefcase } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { CONTACT_INFO, USER_BIO, SKILLS } from '../../data/userInfo';

const skillColorMap: Record<string, string> = {
  // Languages
  "C++": "bg-blue-200 text-blue-900",
  "Python": "bg-yellow-300 text-yellow-900",
  "Java": "bg-orange-300 text-orange-900",
  "JavaScript": "bg-yellow-200 text-yellow-800",
  "HTML/CSS": "bg-pink-200 text-pink-900",

  // Frameworks
  "React": "bg-cyan-200 text-cyan-900",
  "Node.js": "bg-green-200 text-green-900",
  "JUnit": "bg-emerald-200 text-emerald-900",
  "TensorFlow": "bg-orange-200 text-orange-900",

  // Tools
  "Git/GitHub": "bg-gray-300 text-gray-900",
  "VS Code": "bg-indigo-300 text-indigo-900",
  "Arduino IDE": "bg-teal-200 text-teal-900",

  // Libraries
  "pandas": "bg-purple-200 text-purple-900",
  "NumPy": "bg-blue-100 text-blue-900",
  "Matplotlib": "bg-indigo-200 text-indigo-900",
  "ScikitLearn": "bg-green-100 text-green-900"
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">AI & Machine Learning Engineer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {USER_BIO}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Currently focused on developing skills in data science, machine learning, and artificial intelligence with a passion for creating innovative solutions to real-world problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-cyan-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Date of Birth</p>
                  <p className="font-medium">May 30, 2005</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-cyan-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 text-cyan-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">GitHub</p>
                  <p className="font-medium">{CONTACT_INFO.github}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-cyan-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm">Available for</p>
                  <p className="font-medium">Internships, Projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            
            {SKILLS.map((skillGroup, index) => (
  <div key={index} className="mb-8">
    <h4 className="text-lg font-semibold mb-4">{skillGroup.category}</h4>
    <div className="flex flex-wrap gap-3">
      {skillGroup.items.map((skill, skillIndex) => {
        const colorClass = skillColorMap[skill] || "bg-gray-200 text-gray-900"; // fallback color
        return (
          <span
            key={skillIndex}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${colorClass} shadow hover:scale-105 transition-transform duration-300`}
          >
            {skill}
          </span>
        );
      })}
    </div>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
