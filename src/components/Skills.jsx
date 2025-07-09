import React from 'react';

export const Skills = () => (
  <section className="p-10 bg-gray-50 text-center">
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <ul className="flex flex-wrap justify-center gap-4">
      {['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'HTML', 'CSS'].map(skill => (
        <li key={skill} className="bg-white border px-4 py-2 rounded shadow">{skill}</li>
      ))}
    </ul>
  </section>
);