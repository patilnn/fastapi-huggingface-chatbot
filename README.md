# 🤖 MedChatbot — FastAPI + Hugging Face Integration

A modern chatbot built using **FastAPI** and **Hugging Face API**, designed to provide intelligent conversational responses directly through a web interface.  
This project demonstrates how to integrate a **Python backend API** with **AI text generation models**.

## 🧠 Features

✅ Built with **FastAPI** (high-performance Python web framework)  
✅ Uses **Hugging Face Inference API** for AI responses  
✅ Beautiful chat-style UI built using **HTML, CSS, and JavaScript**  
✅ API route (`/pi`) for real-time message exchange  
✅ Secure environment variable handling with `.env`


## ⚙️ Installation & Setup
### 1️⃣ Clone this repository
```bash
git clone https://github.com/your-username/fastapi-medchatbot.git
cd fastapi-medchatbot
 ```

### 2️ Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate   # (Mac/Linux)
venv\Scripts\activate      # (Windows)
```
### 3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Create .env file
Create a file named .env in the root folder and add your Hugging Face token:
```bash
HF_TOKEN=your_huggingface_token_here
```

### 5️⃣ Run the FastAPI app
```bash
uvicorn main:app --reload
```

Now open your browser and visit 👉
🔗 http://127.0.0.1:8000/
You’ll see your chatbot interface live!

---
💬 API Endpoint
| Method | Endpoint | Description                                        |
| ------ | -------- | -------------------------------------------------- |
| POST   | /pi      | Send message to Hugging Face API and receive reply |

---
🚀 Deployment
You can easily deploy this project on:
    <ul>
      <li>Render</li>
      <li>Railway</li>
      <li>Google Cloud Run</li>
      <li>Vercel (with FastAPI adapter)</li>
    </ul>

🧩 Technologies Used
    <ul>
      <li>Python 3.10+</li>
      <li>FastAPI</li>
      <li>Jinja2 Templates</li>
      <li>Requests</li>
      <li>Hugging Face API</li>
      <li>HTML, CSS, JavaScript</li>
    </ul>

---
🧑‍💻 Author <br>
Nishant Patil<br>
Passionate about AI, Web Development, and Cloud Computing<br>
Connect on GitHub<br>

---
🛡️ License<br>
This project is licensed under the MIT License — feel free to use and modify.

---