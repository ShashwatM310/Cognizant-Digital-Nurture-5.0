import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 'b1', title: 'React Performance Tips', author: 'Jane Doe' },
    { id: 'b2', title: 'Understanding Hooks', author: 'John Smith' }
  ];

  return (
    <div style={styles.card}>
      <h3>Blog Details</h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { padding: '15px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff0f5' }
};

export default BlogDetails;
