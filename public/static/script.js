const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');
const chips = document.querySelectorAll('.chip');

function appendMessage(text, who = 'bot', extraClass = '') {
  const el = document.createElement('div');
  const base = who === 'user' ? 'user' : 'bot';
  el.className = `bubble ${base} ${extraClass}`.trim();
  el.innerText = text;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
  return el;
}

async function sendText() {
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';

  sendBtn.disabled = true;
  input.disabled = true;
  const typing = appendMessage('Thinking...', 'bot', 'typing');

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
  } finally {
    sendBtn.disabled = false;
    input.disabled = false;
    input.focus();
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

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const prompt = chip.getAttribute('data-prompt');
    if (!prompt) return;
    input.value = prompt;
    input.focus();
    sendText();
  });
});

appendMessage('Welcome. Ask anything to get started.', 'bot');
