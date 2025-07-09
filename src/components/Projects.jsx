import React from 'react';

export const Projects = () => (
  <section className="p-10 bg-white text-center">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <ul className="space-y-4">
      {['metoo.care', 'Pixalive', 'skillfund', 'masterIn', 'rentdaady'].map(project => (
        <li key={project} className="border p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold">{project}</h3>
          <p className="text-gray-600">Worked on backend and UI integration using Node.js and React.js</p>
        </li>
      ))}
    </ul>
  </section>
);