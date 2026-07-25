import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                this.setState({ error: error });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error occurred: " + error.message);
    }

    render() {
        if (this.state.error) {
            return <div>Error loading posts.</div>;
        }

        return (
            <div>
                <h2>Posts</h2>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
