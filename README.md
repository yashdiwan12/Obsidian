# Obsidian
Build awareness with tools to identify digital threats, spot scams, and stay safe online.

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.3.3-green)

Obsidian is an AI-powered security advisor born from personal experience with cybercrime. It provides practical tools to help individuals and families identify sophisticated digital threats through AI-powered analysis and educational resources.

---

## Features

* **Threat Query**: Get instant answers to cybersecurity questions with AI-powered analysis.
* **Phishing Analyzer**: Examine suspicious emails, messages, and websites for potential scams.
* **Educational Resources**: Learn about common cyber threats with clear, practical guidance.
* **Community Protection**: Share knowledge to create stronger defenses against cybercriminals.

---

##  Quick Start

### Prerequisites

* Python 3.8 or higher
* A Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yashdiwan12/Obsidian](https://github.com/yashdiwan12/Obsidian)
    cd Obsidian
    ```

2.  **Set up a virtual environment**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use: venv\Scripts\activate
    ```

3.  **Install dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure environment variables**
    Create a `.env` file in the root directory and add your API key. You can do this with a single command:
    ```bash
    echo 'GEMINI_API_KEY="YOUR_API_KEY_HERE"' > .env
    ```

5.  **Initialize the knowledge base**
    ```bash
    python rag_setup.py
    ```

6.  **Start the application**
    ```bash
    python app.py
    ```

7.  **Open the frontend**
    Open `index.html` in your web browser, or serve it with a local server for best results:
    ```bash
    python -m http.server 8000
    ```
    The backend will be running at `http://127.0.0.1:5001` and the frontend at `http://localhost:8000`.

---

## Usage

1.  **Ask Security Questions**: Use the **Threat Query** tool to get answers to your cybersecurity questions.
2.  **Analyze Suspicious Content**: Submit potentially phishing emails, messages, or URLs to the **Phishing Analyzer**.
3.  **Learn About Threats**: Browse the educational content to improve your security awareness and knowledge.

---

##  Project Structure
graph TD
    subgraph Obsidian Project
        A(Obsidian)
    end

    subgraph Backend
        B(🧠 Backend Logic)
    end

    subgraph Frontend
        C(🌐 Frontend Interface)
    end

    subgraph Data
        D(📚 Knowledge & Data)
    end

    subgraph Config
        E(🛠️ Configuration & Setup)
    end

    A --> B
    A --> C
    A --> D
    A --> E

    B --> B1["📄 app.py <br> Flask server for API requests"]
    B --> B2["📄 rag_setup.py <br> Builds the vector database"]

    C --> C1["📄 index.html <br> The main landing page"]
    C --> C2["📄 tools.html <br> Central hub for all tools"]
    C --> C3["📄 threat-query.html <br> Page for the Threat Query tool"]
    C --> C4["📄 phishing-analyzer.html <br> Page for Phishing Analysis"]
    C --> C5["📄 about.html <br> The 'About Us' page"]
    C --> C6["🎨 style.css <br> All CSS for styling"]
    C --> C7["⚙️ script.js <br> Client-side JavaScript"]

    D --> D1["📄 knowledge_base.txt <br> Raw text data for the AI"]
    D --> D2["🗂️ db/ <br> Auto-generated vector database"]

    E --> E1["📄 .env <br> Stores your secret API key"]
    E --> E2["📄 requirements.txt <br> Lists Python packages"]
    E --> E3["📄 README.md <br> Project documentation"]

##  Updating the Knowledge Base

When you modify the `knowledge_base.txt` file, you need to rebuild the vector database for the changes to take effect.

1.  Stop the server (`Ctrl+C` in the terminal).
2.  Delete the `db` folder.
3.  Run the setup script again:
    ```bash
    python rag_setup.py
    ```
4.  Restart the server:
    ```bash
    python app.py
    ```

---

## Troubleshooting

| Issue                         | Solution                                                                         |
| :---------------------------- | :------------------------------------------------------------------------------- |
| "Could not connect to server" | Ensure `app.py` is running in your terminal.                                     |
| API key errors                | Verify your `.env` file contains the correct and valid Gemini API key.             |
| Knowledge not updating        | Remember to rebuild the database after changing `knowledge_base.txt` (see above). |
| Import errors                 | Check that all dependencies are installed with `pip install -r requirements.txt`.  |


---

## Contributing

We welcome contributions! Please feel free to submit pull requests, open issues, or suggest new features.

1.  **Fork** the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

