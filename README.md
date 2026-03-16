# 🌉 INSIGHT BRIDGE - Interactive Demo

An AI-native platform demonstration for consulting firms to **rapidly understand client operations at project kickoff** using structured Digital Twins, source-referenced answers, and enterprise-grade governance.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation & Setup in VSCode](#installation--setup-in-vscode)
4. [How to Run](#how-to-run)
5. [Demo Features](#demo-features)
6. [Example Queries](#example-queries)
7. [File Structure](#file-structure)
8. [How to Export & Share](#how-to-export--share)
9. [Troubleshooting](#troubleshooting)
10. [About Insight Bridge](#about-insight-bridge)

---

## 🎯 Overview

### What is Insight Bridge?

Insight Bridge is an **AI-native consulting knowledge platform** that helps project leaders and junior consultants understand how a client organization truly operates **from Day 1** of a project.

**Key capabilities demonstrated in this demo:**

✅ **Client Digital Twin** - Structured representation of processes, KPIs, governance  
✅ **Question-Filtering Engine** - Blocks redundant questions before reaching the client  
✅ **Source-Referenced Answers** - Every insight traced to an authorized document (zero hallucination)  
✅ **Industry Baseline Comparison** - Compare client operations against industry benchmarks  
✅ **Enterprise Governance** - Project-scoped access controls and audit trails  

### The Problem Insight Bridge Solves

- Consulting projects start with **weeks of repetitive interviews**
- Knowledge is **scattered across documents** (SharePoint, Teams, reports)
- Senior clients waste time **explaining information that already exists internally**
- Generic AI tools carry **hallucination, governance, and data-boundary risks**

### The Insight Bridge Difference

- Builds **structured Digital Twins**, not just search
- Combines **client reality + industry benchmarks**
- Operates **only on authorized, auditable sources**
- Reduces discovery time by **25-40%** while improving quality

---

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (version 14.0.0 or higher) - [Download here](https://nodejs.org/)
- **VSCode** (optional but recommended) - [Download here](https://code.visualstudio.com/)
- **Git** (optional for version control)
- **Terminal/Command Prompt** access
- **~50 MB** disk space

### Check if Node.js is installed:

```bash
node --version
npm --version
```

If these commands don't work, install Node.js from the link above.

---

## 🚀 Installation & Setup in VSCode

### Step 1: Create a Project Folder

In your terminal/command prompt, create a new directory:

```bash
# Navigate to where you want the project
cd ~/Documents
# (or: cd C:\Users\YourName\Documents on Windows)

# Create and enter the project folder
mkdir insight-bridge-demo
cd insight-bridge-demo
```

### Step 2: Initialize the Project Structure

Copy the provided files into your folder in this **exact order**:

```
insight-bridge-demo/
├── app.js                          # Main application
├── agent.js                        # Core AI agent logic
├── package.json                    # Node.js configuration
├── README.md                       # This file
└── data/
    ├── sample_client_twin.json     # Client data (structured)
    ├── industry_baseline.json      # Industry benchmarks
    └── project_config.json         # Project metadata
```

### Step 3: Create the File Structure

**Option A: Manual Creation (in VSCode)**

1. Open VSCode
2. Click **File → Open Folder** and select `insight-bridge-demo`
3. Right-click in Explorer and create files:
   - `app.js`
   - `agent.js`
   - `package.json`
   - `README.md`
   - Folder: `data`
   - Inside `data`: `sample_client_twin.json`, `industry_baseline.json`, `project_config.json`

4. Copy the code content from this guide into each file

**Option B: Terminal Creation (Faster)**

```bash
# Create folders
mkdir data

# Create empty files
touch app.js agent.js package.json README.md
touch data/sample_client_twin.json data/industry_baseline.json data/project_config.json
```

Then copy the provided code into each file using VSCode.

### Step 4: Install Dependencies

Open the **integrated terminal** in VSCode (**Ctrl + `** or **Cmd + `**) and run:

```bash
npm install
```

This command reads `package.json` and installs dependencies (currently none, but ready to scale).

### Step 5: Make the App Executable (Linux/Mac only)

```bash
chmod +x app.js
```

---

## ▶️ How to Run

### Launch the Demo

In your VSCode terminal:

```bash
npm start
```

Or directly:

```bash
node app.js
```

**You should see:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                          🌉 INSIGHT BRIDGE DEMO 🌉                           ║
║                   Customer-Driven Innovation: AI-Native Platform for         ║
║                           Consulting Firms                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝

Welcome to Insight Bridge...

👤 You: _
```

### Start Interacting

The prompt waits for your input. Type a question and press **Enter**:

```
👤 You: What are the client's main processes?
```

The platform will respond with **source-referenced answers** from the Digital Twin.

### Exit the Demo

Type `exit` or `quit`:

```
👤 You: exit
```

---

## 🎯 Demo Features

### 1. **Question-Filtering Engine** ⛔

The platform **blocks redundant questions** before they reach the client:

```
👤 You: What is the company name?

⛔ QUESTION FILTERED

Reason: Basic company information already established in project scope.
Suggestion: This information is already available in your Digital Twin.
```

### 2. **Source-Referenced Answers** 📌

Every answer is traced back to authorized documents:

```
👤 You: What are the KPIs?

📊 CLIENT KEY PERFORMANCE INDICATORS:

• Revenue Growth
  Current Value: €450M
  Target: €500M (11% growth)
  📌 Source: Financial_Performance_Dashboard.xlsx

• Order Fulfillment Cycle
  Current Value: 12 days
  Target: 7 days
  📌 Source: Operations_Dashboard.xlsx

┌─────────────────────────────────────────────────────────┐
│ 📌 SOURCE TRANSPARENCY                                  │
│ All answers above are sourced from authorized client    │
│ documents. No AI hallucination or speculation.          │
└─────────────────────────────────────────────────────────┘
```

### 3. **Industry Benchmark Comparison** 🔄

See how the client compares to industry standards:

```
👤 You: Compare our performance to industry standard

📊 CLIENT vs INDUSTRY BASELINE:

KPI COMPARISON:
✅ Gross Margin: Client 32% vs Industry 38%
⚠️  Order Cycle: Client 12 days vs Industry 7 days
```

### 4. **Intelligent Query Routing** 🎯

The agent automatically classifies queries and responds appropriately:

- **Process queries** → Process maps with cycle times and owners
- **KPI queries** → Performance metrics with industry comparison
- **Governance queries** → Decision authorities and approval chains
- **Systems queries** → Technology stack and integration status
- **Comparison queries** → Client vs. industry analysis
- **Recommendation queries** → Prioritized discovery questions

### 5. **Project Status Dashboard** 📊

View Digital Twin completeness and project metrics:

```
👤 You: status

🌉 INSIGHT BRIDGE STATUS REPORT

📊 DIGITAL TWIN COMPLETENESS:
  ✓ Client Organization: 100%
  ✓ Processes Documented: 4/5 (80%)
  ✓ KPIs Tracked: 8/10 (80%)
  ✓ Governance Mapped: 85%
  ✓ Technology Stack: 100%
```

---

## 💡 Example Queries

Try these queries to see the platform in action:

### Process Exploration
```
"What are the main processes?"
"Explain the order-to-cash flow"
"Who owns the supply chain?"
"What are the process bottlenecks?"
"How long does the procurement cycle take?"
```

### KPI & Performance Analysis
```
"Show me the client's KPIs"
"What is the revenue growth?"
"How is the Perfect Order Rate performing?"
"What are the cash conversion cycle metrics?"
"Compare inventory turnover to target"
```

### Governance & Decision-Making
```
"How is governance structured?"
"Who owns the strategic decisions?"
"What is the approval chain for capital expenditure?"
"What are the decision authorities?"
"How long do approvals typically take?"
```

### Technology & Systems
```
"What systems does the client use?"
"Describe the technology stack"
"How are systems integrated?"
"What are the IT challenges?"
"Which systems need modernization?"
```

### Benchmarking & Insights
```
"Compare our performance to industry standard"
"How do we stack up against competitors?"
"What are the gaps vs. industry?"
"What improvement opportunities exist?"
"Where can we add the most value?"
```

### Strategic Recommendations
```
"What questions should I ask the client?"
"What are the top priorities?"
"Where should we focus?"
"What recommendations do you have?"
"What are quick wins vs. long-term initiatives?"
```

### Special Commands
```
"status"      → Show Digital Twin completeness
"help"        → Display available commands
"exit"        → Exit the demo
```

---

## 📁 File Structure Explained

### `app.js` - Main Application
- Entry point for the demo
- Displays welcome banner and help text
- Manages user input and conversation flow
- Handles special commands (`help`, `status`, `exit`)

### `agent.js` - Core AI Agent
- **Query Processing** - Analyzes user questions
- **Question Filtering** - Blocks redundant questions
- **Query Classification** - Routes to appropriate handler
- **Source Referencing** - Links answers to data sources
- **Industry Comparison** - Benchmarks client vs. industry

**Key methods:**
- `processQuery()` - Main query engine
- `filterQuestion()` - Question-filtering logic
- `classifyQuery()` - Query type detection
- `handleProcessQuery()` - Process-specific responses
- `handleKPIQuery()` - Performance metric responses
- `handleGovernanceQuery()` - Governance structure
- `handleSystemsQuery()` - Technology stack
- `handleComparisonQuery()` - Industry benchmarking
- `showStatus()` - Project status dashboard

### `sample_client_twin.json` - Client Data
Structured representation of the client organization:
- **Organization** - Divisions, geographic footprint
- **Processes** - Order-to-Cash, Procurement, Supply Chain, Finance
- **KPIs** - Revenue, Gross Margin, Cycle Times, Customer Satisfaction
- **Governance** - Decision authorities, approval chains, SLAs
- **Systems** - ERP, CRM, Supply Chain, BI platforms

### `industry_baseline.json` - Industry Benchmarks
Industry standards for comparison:
- **Processes** - Cycle times, automation levels, best practices
- **KPIs** - Performance benchmarks (e.g., 7-day O2C vs. client's 12 days)
- **Governance** - Decision structures and timelines
- **Systems** - Technology stack and upgrade frequencies
- **Maturity Levels** - Digital transformation benchmarks

### `project_config.json` - Project Metadata
- Client information
- Project scope and timeline
- Data authorization status
- Discovery metrics
- Next steps

### `package.json` - Node.js Configuration
- Project metadata (name, version, author)
- Scripts (start, demo, test)
- Node.js version requirements
- Ready to add dependencies as the platform scales

---

## 📤 How to Export & Share

### Option 1: Zip File (Easiest)

**On Windows:**
1. Right-click the `insight-bridge-demo` folder
2. Select **Send to → Compressed (zipped) folder**
3. Name it `insight-bridge-demo.zip`
4. Share the `.zip` file

**On Mac/Linux:**
```bash
zip -r insight-bridge-demo.zip insight-bridge-demo/
```

### Option 2: GitHub Repository

1. **Create a GitHub account** (if you don't have one): [github.com](https://github.com)

2. **Create a new repository:**
   - Name: `insight-bridge-demo`
   - Description: "Insight Bridge - Interactive Demo Platform"
   - Make it **Public** (so others can access)

3. **Push your code to GitHub:**

```bash
# Initialize git in your folder
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Insight Bridge demo platform"

# Add remote repository (replace YOUR_USERNAME and REPO_URL)
git remote add origin https://github.com/YOUR_USERNAME/insight-bridge-demo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

4. **Share the GitHub link** with team members

### Option 3: Cloud Storage

Upload the `insight-bridge-demo` folder to:
- **Google Drive** - Right-click → Download (as zip)
- **OneDrive** - Share link directly
- **Dropbox** - Share link

### Option 4: Email

Simply zip and email `insight-bridge-demo.zip` to colleagues.

---

## 📥 How Others Can Use Your Demo

### For Team Members on Their Computer:

1. **Receive the files** (via GitHub, zip, or cloud storage)

2. **Extract the zip** (if applicable):
   - Double-click `insight-bridge-demo.zip`
   - Extract to desired location

3. **Open in VSCode:**
   ```bash
   cd insight-bridge-demo
   code .
   ```

4. **Install Node modules:**
   ```bash
   npm install
   ```

5. **Run the demo:**
   ```bash
   npm start
   ```

That's it! They'll see the interactive Insight Bridge demo.

---

## 🐛 Troubleshooting

### Issue: "Node.js not found"
**Solution:** 
- Check if Node is installed: `node --version`
- If not, download from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### Issue: "Cannot find module 'readline'"
**Solution:** 
- This is built into Node.js
- Try deleting `node_modules` and running `npm install` again

### Issue: "File not found" error
**Solution:** 
- Ensure your file structure matches exactly:
  ```
  insight-bridge-demo/
  ├── app.js
  ├── agent.js
  ├── package.json
  ├── data/
  │   ├── sample_client_twin.json
  │   ├── industry_baseline.json
  │   └── project_config.json
  ```
- Check file paths in `agent.js` line 15-17

### Issue: Demo doesn't respond to queries
**Solution:** 
- Ensure all JSON files are valid (no syntax errors)
- Check the terminal for error messages
- Try the command `status` to verify data is loading

### Issue: "Permission denied" (Mac/Linux)
**Solution:** 
```bash
chmod +x app.js
npm start
```

### Issue: Terminal window closes immediately
**Solution:** 
- Run from VSCode integrated terminal: **Ctrl + `**
- Or run from command line directly (don't double-click app.js)

---

## 🎓 About Insight Bridge

### The Innovation

Insight Bridge was developed as part of a customer-driven innovation project at **ESCP Business School**. The platform addresses a critical pain point in management consulting: the inefficient and time-consuming project discovery phase.

### Key Statistics

- **Time Saved:** 25-40% reduction in discovery hours
- **Team:** 7 ESCP students + industry mentors
- **Research:** 10 qualitative interviews across consulting, M&A, healthcare, industrial sectors
- **Market Size:** €500M SOM in Western Europe alone

### The Team

- Emanuela Manganella
- Giulia Ciccarelli
- Pietro Amoriello
- Jacques Quarez
- Adrien Rabain
- Maximilian Titho

### Why This Matters

In consulting projects:
- **Traditional Discovery:** 4-6 weeks, multiple interviews, scattered knowledge
- **Insight Bridge Discovery:** 1-2 weeks, structured Digital Twin, source-referenced answers

### What's Next?

This demo showcases the **core functionality**. A production platform would include:
- Live document ingestion and processing
- Real-time collaboration features
- Integration with enterprise repositories (Confluence, SharePoint, Teams)
- Advanced analytics and ML-driven recommendations
- Multi-language support
- Mobile applications

---

## 📞 Support & Questions

If you encounter issues or have questions:

1. **Check the Troubleshooting** section above
2. **Review file structure** to ensure it matches the guide
3. **Test queries** from the Example Queries section
4. **Check VSCode Console** for error messages (Ctrl + `)

---

## 📄 License

This demo is provided as-is for educational and demonstration purposes.

---

## ✨ Quick Start Reminder

```bash
# 1. Navigate to project folder
cd insight-bridge-demo

# 2. Run the demo
npm start

# 3. Try a query
👤 You: What are the client's main processes?

# 4. Exit anytime
👤 You: exit
```

---

## 🌉 Welcome to the Future of Consulting Discovery!

Enjoy exploring Insight Bridge. This demo represents the vision of making client discovery faster, smarter, and more insightful.

**Happy consulting! 🚀**

---

*Insight Bridge - Customer-Driven Innovation | ESCP Business School | 2024*
