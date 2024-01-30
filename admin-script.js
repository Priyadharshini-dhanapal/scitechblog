function addBlogPost() {
    const title = document.getElementById('postTitle').value;
    const category = document.getElementById('postCategory').value;
    const content = document.getElementById('postContent').value;

    // Check if all fields are filled
    if (!title || !category || !content) {
        alert('Please fill in all fields');
        return;
    }

    // Get a reference to the 'posts' node in the Firebase database
    const postsRef = database.ref('posts');

    // Push a new post to the database
    postsRef.push({
        title: title,
        category: category,
        content: content,
        date: new Date().toISOString().split('T')[0]  // Get the current date in YYYY-MM-DD format
    });

    // Clear form fields
    document.getElementById('postTitle').value = '';
    document.getElementById('postCategory').value = '';
    document.getElementById('postContent').value = '';

    alert('Post added successfully!');
    // admin.js

function createBlog() {
    // Existing code for getting form values

    // Get selected category
    const category = document.getElementById('blogCategory').value;

    // Include category in the data sent to the server
    const blogData = {
        title,
        content,
        imageUrl,
        videoUrl,
        category,
    };

    // Continue with existing fetch code
    // ...
}

}