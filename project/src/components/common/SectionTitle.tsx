import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <div className="w-24 h-1 bg-cyan-500 mt-2"></div>
    </div>
  );
};

export default SectionTitle;