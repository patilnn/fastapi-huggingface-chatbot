const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

function appendMessage(text, who = 'bot') {
  const el = document.createElement('div');
  el.className = 'bubble ' + (who === 'user' ? 'user' : 'bot');
  el.innerText = text;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}

async function sendText() {
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';

  const typing = document.createElement('div');
  typing.className = 'bubble bot';
  typing.innerText = '...';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  try {
    const res = await fetch('/pi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    typing.innerText = data.reply || 'No reply';
  } catch (err) {
    typing.innerText = 'Error: could not reach server.';
  }

  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', sendText);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendText();
  }
});

appendMessage('Welcome! Start by typing a message.', 'bot');
