# 🚀 VectorShift Frontend Technical Assessment – Pipeline Builder

This repository contains a **node-based visual pipeline builder** built as part of the **VectorShift Frontend Technical Assessment**. The project is divided into a **React-based frontend** and a **FastAPI-based backend**, allowing users to visually create pipelines, connect nodes, and validate the pipeline structure via backend analysis.

---

## 🧩 Project Overview

The application allows users to:

* Drag and drop different types of nodes
* Connect nodes using edges
* Build a pipeline visually (similar to VectorShift UI)
* Submit the pipeline to a backend
* Receive validation results such as:

  * Total number of nodes
  * Total number of edges
  * Whether the pipeline forms a **Directed Acyclic Graph (DAG)**

---

## 📂 Folder Structure

```
frontend-20260109T100541Z-1-001/
│
├── backend/
│   └── main.py                # FastAPI backend logic
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── canvas/
│   │   │   ├── PipelineUI.jsx      # Main React Flow canvas
│   │   │   └── PipelineUI.css
│   │   │
│   │   ├── components/
│   │   │   ├── SubmitButton.jsx    # Submits pipeline to backend
│   │   │   └── SubmitButton.css
│   │   │
│   │   ├── nodes/                  # All node definitions
│   │   │   ├── BaseNode.jsx         # Core reusable node abstraction
│   │   │   ├── BaseNode.css
│   │   │   ├── InputNode.jsx
│   │   │   ├── OutputNode.jsx
│   │   │   ├── TextNode.jsx
│   │   │   ├── MathNode.jsx
│   │   │   ├── TransformNode.jsx
│   │   │   ├── ConditionalNode.jsx
│   │   │   ├── FilterNode.jsx
│   │   │   ├── TimerNode.jsx
│   │   │   └── LLMNode.jsx
│   │   │
│   │   ├── store/
│   │   │   └── store.js            # Central state for nodes & edges
│   │   │
│   │   ├── toolbar/
│   │   │   ├── PipelineToolbar.jsx # Toolbar with draggable nodes
│   │   │   └── DraggableNode.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## 🧠 Key Features & Design Decisions

### 1️⃣ Base Node Abstraction

All nodes are built using a **single reusable `BaseNode` component**. This abstraction:

* Eliminates repeated code
* Ensures consistent UI & behavior
* Makes it extremely easy to add new nodes

Creating a new node requires only minimal configuration (inputs, outputs, content).

---

### 2️⃣ Clean Styling Architecture

* JSX and CSS are **strictly separated**
* Each node has its own `.css` file
* Unified dark theme inspired by modern pipeline tools

---

### 3️⃣ Text Node Enhancements

The Text Node supports:

* Auto-resizing width & height based on user input
* Dynamic variable detection using `{{variableName}}`
* Automatic creation of input handles for each variable

This mimics real VectorShift Text node behavior.

---

### 4️⃣ Math Node

The Math Node supports basic operations:

* Add
* Subtract
* Multiply
* Divide

It has two inputs and one output. The structure is execution-ready and can be extended to fully compute results across pipelines.

---

## 🔗 Backend (FastAPI)

### Backend Responsibilities

The backend:

* Receives pipeline data from frontend
* Counts total nodes and edges
* Validates whether the pipeline is a DAG
* Handles all edge cases safely

### API Endpoint

```
POST /pipelines/parse
```

### Response Format

```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

### DAG Validation Logic

* Builds a graph using node IDs and edges
* Uses DFS to detect cycles
* Returns `false` if a cycle is found

Example of non-DAG:

```
A → B → C → A
```

---

## 🖱️ Frontend ↔ Backend Interaction

The **Submit Button**:

1. Collects all nodes from store
2. Collects all edges
3. Sends them to backend via POST request
4. Displays a user-friendly alert with results

---

## ▶️ How to Run the Project

### 🔧 Backend Setup

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---


## ▶️ How to Run the Project Locally

### 🔹 Clone the Repository
```bash
git clone https://github.com/<your-github-username>/<repo-name>.git
cd <repo-name>



## 🧪 Testing DAG Validation

### Valid DAG

```
Input → Math → Output
```

Result:

```
Is DAG: Yes ✅
```

### Invalid DAG (Cycle)

```
A → B → A
```

Result:

```
Is DAG: No ❌
```

---

## ✅ Assessment Requirements – Completed

✔ Node abstraction implemented
✔ 5+ new nodes added
✔ Clean and unified styling
✔ Auto-resizing Text Node
✔ Dynamic variable handles
✔ Backend integration
✔ DAG validation
✔ User-friendly result display



✨ **Thank you for reviewing!**
