Obsidian
=================================================

Build awareness with tools to identify digital threats, spot scams, and stay safe online.

Python 3.8+ | Flask 2.3.3 | License: MIT

Obsidian is an AI-powered security advisor born from personal experience with cybercrime. It provides practical tools to help individuals and families identify sophisticated digital threats through AI-powered analysis and educational resources.


-------------------------------------------------
Features
-------------------------------------------------

* Threat Query: Get instant answers to cybersecurity questions with AI-powered analysis.
* Phishing Analyzer: Examine suspicious emails, messages, and websites for potential scams.
* Educational Resources: Learn about common cyber threats with clear, practical guidance.
* Community Protection: Share knowledge to create stronger defenses against cybercriminals.

-------------------------------------------------
Quick Start
-------------------------------------------------

Prerequisites
* Python 3.8 or higher
* A Gemini API key from Google AI Studio

Installation
1. Clone the repository
   git clone https://github.com/yashdiwan12/Obsidian
   cd Obsidian

2. Set up a virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install dependencies
   pip install -r requirements.txt

4. Configure environment variables
   Create a .env file in the root directory and add your API key:
   echo 'GEMINI_API_KEY="YOUR_API_KEY_HERE"' > .env

5. Initialize the knowledge base
   python rag_setup.py

6. Start the application
   python app.py

7. Open the frontend
   Open index.html in your web browser, or serve it with a local server for best results:
   python -m http.server 8000
   
   The backend will be running at http://127.0.0.1:5001 and the frontend at http://localhost:8000 (if using the HTTP server).

-------------------------------------------------
Usage
-------------------------------------------------

1. Ask Security Questions: Use the Threat Query tool to get answers to your cybersecurity questions.
2. Analyze Suspicious Content: Submit potentially phishing emails, messages, or URLs to the Phishing Analyzer.
3. Learn About Threats: Browse the educational content to improve your security awareness and knowledge.

-------------------------------------------------
Project Structure
-------------------------------------------------

obsidian-ai-security/
├── app.py               # Flask backend server
├── rag_setup.py         # Knowledge base initialization script
├── knowledge_base.txt   # Customizable security knowledge
├── db/                  # Vector database (auto-generated)
├── index.html           # Main frontend interface
├── threat-query.html    # Threat query tool
├── phishing-analyzer.html # Phishing analysis tool
├── about.html           # About page
├── Mstyle.css           # Main stylesheet
├── script.js            # Frontend JavaScript
├── requirements.txt     # Python dependencies
└── README.md            # This file

-------------------------------------------------
Updating the Knowledge Base
-------------------------------------------------

When you modify the knowledge_base.txt file, you need to rebuild the vector database for the changes to take effect.

1. Stop the server (Ctrl+C in the terminal).
2. Delete the db folder.
3. Run the setup script again:
   python rag_setup.py
4. Restart the server:
   python app.py

-------------------------------------------------
Troubleshooting
-------------------------------------------------

Issue: "Could not connect to server"
Solution: Ensure app.py is running in your terminal.

Issue: API key errors
Solution: Verify your .env file contains the correct and valid Gemini API key.

Issue: Knowledge not updating
Solution: Remember to rebuild the database after changing knowledge_base.txt (see above).

Issue: Import errors
Solution: Check that all dependencies are installed with `pip install -r requirements.txt`.

-------------------------------------------------
Contributing
-------------------------------------------------

We welcome contributions! Please feel free to submit pull requests, open issues, or suggest new features.

1. Fork the Project.
2. Create your Feature Branch (git checkout -b feature/AmazingFeature).
3. Commit your Changes (git commit -m 'Add some AmazingFeature').
4. Push to the Branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.

-------------------------------------------------
License
-------------------------------------------------

This project is distributed under the MIT License. See the LICENSE file for more information.
