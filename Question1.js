const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
async function getPosts() {
    let POST_LIST;
    await fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            POST_LIST = data
        });
    renderPostList(POST_LIST);
}
function createPosts() {
    const inputTitle = document.querySelector(".title").value;
    const inputBody = document.querySelector(".body").value;
    console.log(inputTitle, inputBody);
    fetch(API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
            title: inputTitle,
            body: inputBody,
            userId: Math.random() * 10,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            alert(JSON.stringify(json));
        });
}
function renderPostList(posts) {
    const content = document.querySelector(".content");
    const htmlList = posts.map((post) => {
        return `  
     <ul>
        <li>title: ${post.title}</li>
        <li>body: ${post.body}</li>
      </ul>
      `;
    });
    content.innerHTML = htmlList.join("");
}

const buttonFetch = document.querySelector(".btnfetch");
const buttonCreate = document.querySelector(".btncreate");

buttonFetch.addEventListener("click", () => { getPosts() })
buttonCreate.addEventListener("click", () => { createPosts() })

