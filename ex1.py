import os
import logging

logging.basicConfig(level=logging.INFO)

# Fetch from environment or fallback to the 3B model tag
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "qwen2.5-coder:3b")

# Provide clear feedback on which model is spinning up
logging.info(f"Initializing AI system configuration...")
logging.info(f"Active Ollama Engine Model: {OLLAMA_MODEL}")
