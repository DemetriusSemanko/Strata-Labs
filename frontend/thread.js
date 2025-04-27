//const apiBase = `${window.location.protocol}//${window.location.hostname}:3000`;
const urlParams = new URLSearchParams(window.location.search);
const threadId = urlParams.get('id');

async function loadThread() {
    const res = await fetch(`/api/threads/${threadId}`);
    const thread = await res.json();
    document.getElementById("threadTitle").innerText = thread.title;
    document.getElementById("threadBody").innerText = thread.body;
}

async function loadReplies() {
    const res = await fetch(`/api/threads/${threadId}/replies`);
    const replies = await res.json();
    const replyList = document.getElementById("replyList");
    replyList.innerHTML = replies.map(reply => 
        `<li><strong>${reply.username || "Anonymous"}:</strong> ${reply.body}</li>`
    ).join("");
}

async function submitReply() {
    const username = document.getElementById("username").value.trim();
    const body = document.getElementById("replyBody").value.trim();
    if (!body) return;

    await fetch(`/api/threads/${threadId}/replies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, body }),
    });
    document.getElementById("username").value = "";
    document.getElementById("replyBody").value = "";
    loadReplies();
}

loadThread();
loadReplies();
