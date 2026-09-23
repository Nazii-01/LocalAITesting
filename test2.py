import os

# Safely attempts to read OLLAMA_MODEL from your environment, 
# defaulting to the 3B model tag if none is found.
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "qwen2.5-coder:3b")
