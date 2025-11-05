# 🤖 MedChatbot — FastAPI + Hugging Face Integration

A modern chatbot built using **FastAPI** and **Hugging Face API**, designed to provide intelligent conversational responses directly through a web interface.  
This project demonstrates how to integrate a **Python backend API** with **AI text generation models**.

---

## 🧠 Features

✅ Built with **FastAPI** (high-performance Python web framework)  
✅ Uses **Hugging Face Inference API** for AI responses  
✅ Beautiful chat-style UI built using **HTML, CSS, and JavaScript**  
✅ API route (`/pi`) for real-time message exchange  
✅ Secure environment variable handling with `.env`  
✅ Easy to deploy on **Render**, **Railway**, or **Google Cloud**

---

## 🗂️ Project Structure

📦 demo/
┣ 📂 templates/
┃ ┗ 📜 index.html
┣ 📂 static/
┃ ┣ 📜 style.css
┃ ┗ 📜 script.js
┣ 📜 main.py
┣ 📜 requirements.txt
┣ 📜 .env.example
┗ 📜 README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository
```bash
git clone https://github.com/your-username/fastapi-medchatbot.git
cd fastapi-medchatbot
2️⃣ Create a virtual environment
bash
Copy code
python -m venv venv
source venv/bin/activate   # (Mac/Linux)
venv\Scripts\activate      # (Windows)
3️⃣ Install dependencies
bash
Copy code
pip install -r requirements.txt
4️⃣ Create .env file
Create a file named .env in the root folder and add your Hugging Face token:

ini
Copy code
HF_TOKEN=your_huggingface_token_here
5️⃣ Run the FastAPI app
bash
Copy code
uvicorn main:app --reload
Now open your browser and visit 👉
🔗 http://127.0.0.1:8000/

You’ll see your chatbot interface live!

💬 API Endpoint
Method	Endpoint	Description
POST	/pi	Send message to Hugging Face API and receive reply

Example request (JSON):

json
Copy code
{
  "text": "What is happiness?"
}
Example response:

json
Copy code
{
  "reply": "Happiness is a state of well-being and contentment..."
}
🚀 Deployment
You can easily deploy this project on:

Render

Railway

Google Cloud Run

Vercel (with FastAPI adapter)

🧩 Technologies Used
Python 3.10+

FastAPI

Jinja2 Templates

Requests

Hugging Face API

HTML, CSS, JavaScript

🧑‍💻 Author
Nishant Patil
🌐 Passionate about AI, Web Development, and Cloud Computing
📫 Connect on GitHub

🛡️ License
This project is licensed under the MIT License — feel free to use and modify.

