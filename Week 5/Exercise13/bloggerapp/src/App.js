import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showBlogs, setShowBlogs] = useState(false);

  // Method 1: Element Variables (switch/if-else inside render logic)
  let courseContent;
  if (activeTab === 'courses') {
    courseContent = <CourseDetails />;
  } else {
    courseContent = null; // Prevent rendering
  }

  // Method 2: Helper Function with if/else
  const renderBookDetails = () => {
    if (activeTab === 'books') {
      return <BookDetails />;
    }
    return null;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('books')} style={btnStyle(activeTab === 'books')}>Show Books</button>
        <button onClick={() => setActiveTab('courses')} style={btnStyle(activeTab === 'courses')}>Show Courses</button>
        <button onClick={() => setShowBlogs(!showBlogs)} style={btnStyle(showBlogs)}>Toggle Blogs Independent</button>
      </div>

      {/* 1. Conditional Rendering using Helper Function (if/else) */}
      {renderBookDetails()}

      {/* 2. Conditional Rendering using Element Variable */}
      {courseContent}

      {/* 3. Conditional Rendering using Logical && Operator */}
      {showBlogs && <BlogDetails />}

      {/* 4. Conditional Rendering using Ternary Operator */}
      <div style={{ marginTop: '30px', borderTop: '2px solid #ddd', paddingTop: '10px' }}>
        <h3>Ternary Operator Demonstration</h3>
        {activeTab === 'books' ? <p>You are currently viewing the Books section.</p> : <p>You are NOT viewing the Books section.</p>}
      </div>
    </div>
  );
}

const btnStyle = (isActive) => ({
  padding: '10px 15px',
  marginRight: '10px',
  backgroundColor: isActive ? '#007bff' : '#e0e0e0',
  color: isActive ? 'white' : 'black',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
});

export default App;
