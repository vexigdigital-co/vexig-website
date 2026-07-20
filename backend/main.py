from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os

app = FastAPI(title="Vexig API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection (use memory/mock if not available initially)
# Assuming a local MongoDB or an atlas connection string in env
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
client = None
db = None

@app.on_event("startup")
async def startup_db_client():
    global client, db
    try:
        client = AsyncIOMotorClient(MONGO_URL, serverSelectionTimeoutMS=2000)
        # Verify connection
        await client.server_info()
        db = client.vexig_db
        print("Connected to MongoDB")
    except Exception as e:
        print(f"MongoDB connection failed, running in mock mode: {e}")
        db = None

@app.on_event("shutdown")
async def shutdown_db_client():
    if client:
        client.close()

# Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str
    company: str | None = None

class NewsletterForm(BaseModel):
    email: EmailStr

# Routes
@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    doc = form.dict()
    doc["created_at"] = datetime.utcnow()
    
    if db is not None:
        await db.contacts.insert_one(doc)
    else:
        # Mock mode
        print(f"Mock Save Contact: {doc}")
        
    return {"status": "success", "message": "Contact form submitted"}

@app.post("/api/newsletter")
async def subscribe_newsletter(form: NewsletterForm):
    doc = form.dict()
    doc["created_at"] = datetime.utcnow()
    
    if db is not None:
        await db.newsletter.insert_one(doc)
    else:
        # Mock mode
        print(f"Mock Save Newsletter: {doc}")
        
    return {"status": "success", "message": "Subscribed successfully"}
