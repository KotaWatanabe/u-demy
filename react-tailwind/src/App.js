import React from 'react';


function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-x mb-2">
        Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Downloads: </strong>
            3000
          </li>
          <li>
            <strong>Likes: </strong>
            4000
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
      </div>
    </div>
  );
}

export default App;
