// Create Operation
async function createPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'New Post',
            body: 'This is a new post created via fetch()!',
            userId: 1
        })
    });

    const data = await response.json();
    console.log('Created:', data);
    document.getElementById('output').innerHTML = `<p>Created Post: ${JSON.stringify(data)}</p>`;
}

// Read Operation
async function readPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (response.ok) {
        const data = await response.json();
        console.log('Fetched Posts:', data);
        document.getElementById('output').innerHTML = `<p>Fetched Posts: ${JSON.stringify(data.slice(0, 5), null, 2)}</p>`;
    } else {
        console.error('Error fetching posts:', response.statusText);
    }
}

// Update Operation
async function updatePost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: postId,
            title: 'Updated Post',
            body: 'This is an updated post!',
            userId: 1
        })
    });

    const data = await response.json();
    console.log('Updated:', data);
    document.getElementById('output').innerHTML = `<p>Updated Post: ${JSON.stringify(data)}</p>`;
}

// Delete Operation
async function deletePost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        console.log(`Post ${postId} deleted successfully.`);
        document.getElementById('output').innerHTML = `<p>Post ${postId} deleted successfully.</p>`;
    } else {
        console.error('Error deleting post:', response.statusText);
    }
}
