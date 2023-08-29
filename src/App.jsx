import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Hello, I'm John Driscoll!</h1>
        <p className="text-gray-700">
          I'm a junior web developer with a passion for creating robust web solutions.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View My Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
