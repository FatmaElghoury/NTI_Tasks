const url = "https://jsonplaceholder.typicode.com/posts";

const postsDiv = document.getElementById("posts");

// ================= GET =================

function getPosts() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const posts = JSON.parse(xhr.response);

            postsDiv.innerHTML = "";

            posts.slice(0, 10).forEach(function (post) {

                postsDiv.innerHTML += `
                    <div class="post" data-id="${post.id}">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>

                        <button onclick="updatePost(${post.id})">
                            Edit
                        </button>

                        <button onclick="deletePost(${post.id})">
                            Delete
                        </button>
                </div>
                `;

            });

        } else {
            console.log("Error:", xhr.status);
        }
    });

    xhr.send();
}

//=============ADDPost===========

const addBtn = document.getElementById("addBtn");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

addBtn.addEventListener("click", function () {

    const title = titleInput.value;
    const body = bodyInput.value;

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const newPost = JSON.parse(xhr.response);

            console.log("New Post:", newPost);

            document.getElementById("posts").innerHTML += `
    <div class="post" data-id="${newPost.id}">
        <h3>${newPost.title}</h3>
        <p>${newPost.body}</p>
          <button onclick="updatePost(${newPost.id})">
            Edit
        </button>

        <button onclick="deletePost(${newPost.id})">
            Delete
        </button>
    </div>
            `;

            titleInput.value = "";
            bodyInput.value = "";

        } else {
            console.log("Error:", xhr.status);
        }

    });

    const data = {
        title: title,
        body: body,
        userId: 1
    };

    xhr.send(JSON.stringify(data));
});
//============UpdatePost===============
function updatePost(id) {

    const newTitle = prompt("Enter new title:");
    const newBody = prompt("Enter new body:");

    if (newTitle === null || newBody === null) {
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open(
        "PUT",
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const updatedPost = JSON.parse(xhr.response);

            console.log("Updated Post:", updatedPost);

            // نجيب العنصر المطلوب من الـ DOM
            const post = document.querySelector(
                `.post[data-id="${id}"]`
            );

            post.querySelector("h3").textContent =
                updatedPost.title;

            post.querySelector("p").textContent =
                updatedPost.body;

        } else {
            console.log("Error:", xhr.status);
        }
    });

    const data = {
        id: id,
        title: newTitle,
        body: newBody,
        userId: 1
    };

    xhr.send(JSON.stringify(data));
}
//============DeletePost===============
function deletePost(id) {

    const confirmDelete = confirm(`Are you sure you want to delete post ${id}?`);

    if (!confirmDelete) {
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open(
        "DELETE",
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            console.log("Post deleted successfully");

            const post = document.querySelector(
                `.post[data-id="${id}"]`
            );

            post.remove();

        } else {
            console.log("Error:", xhr.status);
        }
    });

    xhr.send();
}
//==============load=======================
getPosts();

