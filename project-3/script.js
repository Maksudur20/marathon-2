const postsContainer = document.querySelector('#posts');

let posts = [];

const getPosts = () => {
    fetch('https://dummyjson.com/posts')
        .then((response) => response.json())
        .then((data) => {
            posts = data.posts;
            posts.forEach((post) => createPost(post));
        })
        .catch((error) => {
            console.log('Error:', error);
        });
};

getPosts();

const createPost = (post) => {
    let postDiv = `
        <div class="post">
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            <div class="post-footer">
                <p>Likes: ${post.reactions.likes}</p>
                <p>Dislikes: ${post.reactions.dislikes}</p>
                <p>Views: ${post.views}</p>
            </div>
        </div>    
    `;
    postsContainer.innerHTML += postDiv;
};
