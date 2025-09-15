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

##  Project Structure
```mermaid
graph TD
    subgraph "User's Browser"
        A["🌐 Frontend <br>(HTML, CSS, JS)"]
    end

    subgraph "Backend Server (Python/Flask)"
        B["🐍 Flask App <br>(app.py)"]
        C{API Endpoints}
        D[Phishing Analyzer]
        E["Threat Query <br>(RAG Chain)"]
    end

    subgraph "Data & AI Layer"
        F[🧠 Google Gemini API]
        G["💾 ChromaDB <br>(Vector Store)"]
    end

    subgraph "Setup Process (Offline)"
        H[📄 knowledge_base.txt] --> I[⚙️ rag_setup.py]
        I -- Creates/Updates --> G
    end

    %% --- Connections ---
    A -- API Request --> C
    C --> D
    C --> E
    D -- Direct Prompt --> F
    E -- Retrieves Context --> G
    E -- Uses Context in Prompt --> F
    F -- AI Response --> B
    B -- JSON Response --> A

    style A fill:#D6EAF8,stroke:#3498DB,stroke-width:2px
    style B fill:#D5F5E3,stroke:#2ECC71,stroke-width:2px
    style F fill:#FCF3CF,stroke:#F1C40F,stroke-width:2px
    style G fill:#EBDEF0,stroke:#8E44AD,stroke-width:2px
    style H fill:#FDEDEC,stroke:#E74C3C,stroke-width:2px

    style A fill:#D6EAF8,stroke:#3498DB,stroke-width:2px
    style B fill:#D5F5E3,stroke:#2ECC71,stroke-width:2px
    style F fill:#FCF3CF,stroke:#F1C40F,stroke-width:2px
    style G fill:#EBDEF0,stroke:#8E44AD,stroke-width:2px
    style H fill:#FDEDEC,stroke:#E74C3C,stroke-width:2px

