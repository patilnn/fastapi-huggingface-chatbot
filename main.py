import os
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from dotenv import load_dotenv
from huggingface_hub import InferenceClient


# Load Environment Variables
load_dotenv()
HF_TOKEN = os.getenv("HF_TOKEN")

# Initialize FastAPI App
app = FastAPI(title="MedChatbot (Hugging Face)")

# Serve static and template directories
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Initialize Hugging Face Inference Client
# Model + Provider configuration
MODEL_NAME = "openai/gpt-oss-safeguard-20b"

client = InferenceClient(
    provider="groq",              # use Groq backend for fast inference
    api_key=HF_TOKEN,             # your Hugging Face token
)

# Define Request Model
class Msg(BaseModel):
    text: str

# Chat Endpoint
@app.post("/pi")
def chat(msg: Msg):
    try:
        # Send message to the model
        completion = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[{"role": "user", "content": msg.text}],
        )

        reply = completion.choices[0].message["content"]
        return {"reply": reply}

    except Exception as e:
        return {"reply": f"⚠️ Error: {str(e)}"}

# Home Route (UI)
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# Run (only when executed directly)
# Run with:  uvicorn main:app --reload
