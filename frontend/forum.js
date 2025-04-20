// const API_URL = "http://localhost:3000/api";
const API_URL = "http://forum-api:3000/api";

async function fetchPosts() {
    const response = await fetch(`${API_URL}/posts`);
    const posts = await response.json();
    const postsList = document.getElementById("posts");
    postsList.innerHTML = "";
    posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.content;
        postsList.appendChild(li);
    });
}

async function submitPost() {
    const content = document.getElementById("postContent").value;
    await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content })
    });
    fetchPosts();
}

window.onload = fetchPosts;