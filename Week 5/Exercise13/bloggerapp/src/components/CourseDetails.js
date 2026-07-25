import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 101, title: 'React for Beginners', duration: '4 Weeks' },
    { id: 102, title: 'Advanced State Management', duration: '6 Weeks' },
    { id: 103, title: 'Fullstack Next.js', duration: '8 Weeks' }
  ];

  return (
    <div style={styles.card}>
      <h3>Course Details</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.title}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { padding: '15px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f5fffa' }
};

export default CourseDetails;
