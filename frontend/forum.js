// const apiBase = `${window.location.protocol}//${window.location.hostname}:3000`;
// const apiBase = `http://forum-api:3000`;

async function fetchThreads() {
    const res = await fetch(`/api/threads`);
    const threads = await res.json();
    const threadList = document.getElementById("threadList");
    threadList.innerHTML = threads.map(thread =>
        `<li><a href="thread.html?id=${thread._id}">${thread.title}</a></li>`
    ).join("");
}

async function createThread() {
    const title = document.getElementById("newTitle").value.trim();
    const body = document.getElementById("newBody").value.trim();
    if (!title || !body) return;

    await fetch(`/api/threads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
    });
    location.reload();
}

fetchThreads();
