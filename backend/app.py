# install libraries ---
# pip install fastapi uvicorn 
# 1. Library imports
import uvicorn
from fastapi import FastAPI
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
import pickle
# 2. Create the app object
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# 3. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}
# 5. Run the API with uvicorn
if __name__ == '__main__':
    uvicorn.run(app, port=80, host='0.0.0.0')
##---------------------
# 3. load the model
model = pickle.load(open("Social_media_ads.pkl", "rb"))
@app.get("/predictPurchased")
def getPrediction(Age : int, EstimatedSalary : int, Gender : int):
    y_pred = model.predict([[Age,EstimatedSalary,Gender]])
    return {'Purchased': str(y_pred[0])}
# uvicorn app:app --reload
# uvicorn app:app --host 0.0.0.0 --port 80
