// import markdownit from "markdown-it";

async function renderPosts() {
  // Inject into custom element blog.js
  // <div class="container-articles"></div>
  // renderPosts();

  const articlesContainer = document.querySelector(".container-articles");
  const posts = await getPosts();
  posts.forEach((post) => {
    const linkElement = document.createElement("a");
    linkElement.classList.add("post-title");
    linkElement.textContent = post.title;
    // linkElement.href = post.href;
    linkElement.onclick = () => {
      console.log(`Opening ${post.href}`);
    };
    const timeElement = document.createElement("time");
    timeElement.textContent = post.date;

    const articleElement = document.createElement("article");
    articleElement.appendChild(linkElement);
    articleElement.appendChild(timeElement);

    articlesContainer.appendChild(articleElement);
  });
}

window.renderPosts = renderPosts;

async function getPosts() {
  try {
    const response = await fetch("posts.xml");
    const xmlString = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    const posts = [];
    const postElements = xmlDoc.querySelectorAll("post");

    postElements.forEach((postElement) => {
      const id = postElement.id;
      const title = postElement.querySelector("title").textContent;
      const date = postElement.querySelector("date").textContent;
      const href = `post.html?id=${id}`;

      posts.push({ title, date, href });
    });
    return posts;
  } catch (error) {
    return await Promise.reject(error);
  }
}

window.getPosts = getPosts;

async function renderPostContent() {
  const postContainer = document.querySelector(".container-post");
  const href = window.location.href;
  const postId = new URL(href).searchParams.get("id");

  const response = await fetch(`posts/${postId}.md`);
  const mdString = await response.text();

  // const md = new markdownit();

  console.log(mdString);
}

window.renderPostContent = renderPostContent;
