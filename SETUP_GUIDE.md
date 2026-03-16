# 🌉 INSIGHT BRIDGE DEMO - COMPLETE SETUP GUIDE

## 📖 Complete Guide to Create, Test, and Share Your Insight Bridge Demo

---

## PART 1: UNDERSTANDING WHAT YOU'RE BUILDING

### What is This Project?

This is an **interactive CLI application** that simulates the Insight Bridge platform - a consulting knowledge platform that helps teams understand client operations rapidly.

**When you run it, you'll get:**
```
👤 You: What are the client's main processes?

🤖 Insight Bridge:
📋 CLIENT PROCESSES:

• Order-to-Cash
  Steps: Customer Order Submission → Order Validation → Inventory Check → ...
  Owner: VP of Operations
  Cycle Time: 12 days
  📌 Source: Process_Audit_Report.pdf
```

### Key Components

1. **app.js** - Welcome screen, handles user input
2. **agent.js** - AI logic that processes queries
3. **data/*.json** - Client and industry data files
4. **package.json** - Node.js project configuration
5. **README.md** - Full documentation

---

## PART 2: INSTALLATION IN VSCODE (STEP-BY-STEP)

### Prerequisites Check

Before starting, verify you have Node.js installed:

```bash
node --version
npm --version
```

**Expected output:**
```
v16.0.0  (or higher)
8.0.0    (or higher)
```

If you don't see version numbers, [download Node.js here](https://nodejs.org/).

---

### Step 1: Create Project Folder

**Option A: Using Terminal (Recommended)**

```bash
# Navigate to a convenient location
cd ~/Documents
# (on Windows: cd C:\Users\YourName\Documents)

# Create project folder
mkdir insight-bridge-demo
cd insight-bridge-demo
```

**Option B: Using File Explorer**

1. Create a new folder called `insight-bridge-demo`
2. Create a subfolder inside it called `data`

---

### Step 2: Open in VSCode

```bash
code .
```

This opens VSCode in the current folder. You'll see:

```
📁 insight-bridge-demo
   ├─ 📁 data  (you may need to create this)
   └─ (files will appear here)
```

---

### Step 3: Create Files (in This Order)

#### 3.1 Create `package.json`

1. Right-click in Explorer → **New File**
2. Name: `package.json`
3. Copy and paste the code provided

**Location:** `insight-bridge-demo/package.json`

#### 3.2 Create `app.js`

1. Right-click in Explorer → **New File**
2. Name: `app.js`
3. Copy and paste the code provided

**Location:** `insight-bridge-demo/app.js`

#### 3.3 Create `agent.js`

1. Right-click in Explorer → **New File**
2. Name: `agent.js`
3. Copy and paste the code provided

**Location:** `insight-bridge-demo/agent.js`

#### 3.4 Create `README.md`

1. Right-click in Explorer → **New File**
2. Name: `README.md`
3. Copy and paste the full documentation

**Location:** `insight-bridge-demo/README.md`

#### 3.5 Create Data Folder

1. Right-click in Explorer → **New Folder**
2. Name: `data`

#### 3.6 Create Data Files

Inside the `data` folder, create:

**3.6.1 `sample_client_twin.json`**
- Right-click in `data` folder → **New File**
- Name: `sample_client_twin.json`
- Paste the client data

**Location:** `insight-bridge-demo/data/sample_client_twin.json`

**3.6.2 `industry_baseline.json`**
- Right-click in `data` folder → **New File**
- Name: `industry_baseline.json`
- Paste the industry baseline data

**Location:** `insight-bridge-demo/data/industry_baseline.json`

**3.6.3 `project_config.json`**
- Right-click in `data` folder → **New File**
- Name: `project_config.json`
- Paste the project configuration

**Location:** `insight-bridge-demo/data/project_config.json`

#### 3.7 Create `.gitignore` (Optional but Recommended)

1. Right-click in Explorer → **New File**
2. Name: `.gitignore`
3. Paste the gitignore content

**Location:** `insight-bridge-demo/.gitignore`

---

### Step 4: Verify File Structure

After creating all files, your folder structure should look exactly like this:

```
📁 insight-bridge-demo/
├─ 📄 app.js
├─ 📄 agent.js
├─ 📄 package.json
├─ 📄 README.md
├─ 📄 QUICKSTART.md (optional)
├─ 📄 .gitignore (optional)
└─ 📁 data/
   ├─ 📄 sample_client_twin.json
   ├─ 📄 industry_baseline.json
   └─ 📄 project_config.json
```

**Check in VSCode Explorer** - you should see this exact structure.

---

### Step 5: Install Dependencies

Open the **integrated terminal** in VSCode:
- Press **Ctrl + `** (backtick) on Windows/Linux
- Press **Cmd + `** on Mac

Type:

```bash
npm install
```

**Expected output:**
```
up to date, audited X packages in Y seconds
```

(Currently there are no external dependencies, but this step prepares the project for scaling)

---

### Step 6: Make Executable (Linux/Mac Only)

In the terminal, run:

```bash
chmod +x app.js
```

This makes the file executable on Unix systems.

---

## PART 3: TESTING THE DEMO

### Launch the Application

In the VSCode terminal, type:

```bash
npm start
```

**Or alternatively:**

```bash
node app.js
```

### Expected Output

You should see:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                          🌉 INSIGHT BRIDGE DEMO 🌉                           ║
║                   Customer-Driven Innovation: AI-Native Platform for         ║
║                           Consulting Firms                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝

Welcome to Insight Bridge - Your AI-powered consulting knowledge platform.

This demo showcases how Insight Bridge helps consulting teams:
  ✓ Rapidly understand client operations from Day 1
  ✓ Build structured Client Digital Twins from authorized documents
  ✓ Filter redundant questions before reaching the client
  ✓ Provide source-referenced answers (zero hallucinations)
  ✓ Compare against Industry Baseline for benchmarking

SAMPLE SCENARIO: You are on-boarding a retail client at project kickoff.
Available commands:
  • Ask questions about the client (e.g., "What are the client's KPIs?")
  • Request process maps (e.g., "Show client processes")
  • Compare with industry (e.g., "Compare our governance with industry standard")
  • Get recommendations (e.g., "What questions should I ask?")
  • Type 'help' for more commands
  • Type 'exit' to quit

────────────────────────────────────────────────────────────────────────────────

👤 You: _
```

### Test with Sample Queries

Try these one by one:

**Query 1: Explore Processes**
```
👤 You: What are the main processes?

🤖 Insight Bridge:
📋 CLIENT PROCESSES:

• Order-to-Cash
  Steps: Customer Order Submission → Order Validation → ...
  Owner: VP of Operations
  Cycle Time: 12 days
  📌 Source: Process_Audit_Report.pdf
```

**Query 2: View KPIs**
```
👤 You: Show me the KPIs

🤖 Insight Bridge:
📊 CLIENT KEY PERFORMANCE INDICATORS:
...
```

**Query 3: See Project Status**
```
👤 You: status

🤖 Insight Bridge:
DIGITAL TWIN COMPLETENESS:
  ✓ Client Organization: 100%
  ✓ Processes Documented: 4/5
  ✓ KPIs Tracked: 8/10
  ✓ Governance Mapped: 85%
  ✓ Technology Stack: 100%
...
```

**Query 4: View Help**
```
👤 You: help

════════════════════════════════════════════════════════════════════════════════
                          AVAILABLE COMMANDS
════════════════════════════════════════════════════════════════════════════════

📊 QUERY EXAMPLES:
  "What are the client's main processes?"
  "Show me the KPIs"
  ...
```

**Query 5: Exit**
```
👤 You: exit

🌉 Thank you for exploring Insight Bridge. Goodbye!
```

---

## PART 4: EXPORTING & SHARING

### Option A: Zip File (Easiest)

**On Windows:**
1. Open File Explorer
2. Navigate to the parent folder of `insight-bridge-demo`
3. Right-click `insight-bridge-demo` → **Send to → Compressed (zipped) folder**
4. A `insight-bridge-demo.zip` file is created
5. Send this file via email, Google Drive, etc.

**On Mac/Linux:**
```bash
# Navigate to parent directory
cd ~/Documents

# Create zip file
zip -r insight-bridge-demo.zip insight-bridge-demo/

# Result: insight-bridge-demo.zip is created
```

### Option B: GitHub Repository

**Step 1: Create GitHub Account**
- Go to [github.com](https://github.com)
- Sign up (free)

**Step 2: Create New Repository**
- Click **New** (or + icon)
- Name: `insight-bridge-demo`
- Description: "Insight Bridge - AI-native consulting platform demo"
- Make it **Public**
- Click **Create repository**

**Step 3: Push Code to GitHub**

```bash
# Initialize git
git init

# Add all files
git add .

# Create commit
git commit -m "Initial commit: Insight Bridge demo platform"

# Copy the URL from GitHub (something like https://github.com/YOUR_NAME/insight-bridge-demo.git)
# Then run:
git remote add origin https://github.com/YOUR_NAME/insight-bridge-demo.git
git branch -M main
git push -u origin main
```

**Step 4: Share the Link**
- GitHub URL: `https://github.com/YOUR_NAME/insight-bridge-demo`
- Share this link with colleagues

### Option C: Cloud Storage

**Google Drive:**
1. Upload the `insight-bridge-demo` folder
2. Right-click → Share → Generate sharing link
3. Send the link

**OneDrive/Dropbox:**
1. Upload folder
2. Share → Create shared link
3. Send to team

### Option D: Direct File Sharing

Simply send the `insight-bridge-demo` folder via:
- Email (as attachment)
- Slack (drag and drop)
- File transfer services (WeTransfer, etc.)

---

## PART 5: HOW OTHERS CAN USE IT

### On Their Computer

**Step 1: Get the Files**
- Receive zip file → Extract it
- Or clone from GitHub:
  ```bash
  git clone https://github.com/USERNAME/insight-bridge-demo.git
  cd insight-bridge-demo
  ```
- Or receive the folder directly

**Step 2: Open in VSCode**
```bash
code .
```

**Step 3: Install Dependencies**
```bash
npm install
```

**Step 4: Run the Demo**
```bash
npm start
```

**Step 5: Start Exploring**
```
👤 You: What are the client's main processes?
```

---

## PART 6: CUSTOMIZATION & EXTENSION

### Customize Client Data

Edit `data/sample_client_twin.json`:

```json
{
  "projectMetadata": {
    "clientName": "YOUR_CLIENT_NAME",  ← Change this
    "clientIndustry": "YOUR_INDUSTRY", ← Change this
    ...
  },
  ...
}
```

### Add Your Own Processes

In `sample_client_twin.json`, add to the processes object:

```json
"Your_Process_Name": {
  "steps": ["Step 1", "Step 2", "Step 3"],
  "owner": "Owner Name",
  "cycleTime": "X days",
  "source": "Document_Name.pdf"
}
```

### Add More KPIs

In `sample_client_twin.json`, add to the KPIs:

```json
"Your_KPI_Name": {
  "currentValue": "123",
  "target": "456",
  "owner": "Owner Name",
  "frequency": "Monthly",
  "source": "Dashboard_Name.xlsx"
}
```

### Modify Query Responses

In `agent.js`, update the handlers to customize responses:

```javascript
// Find handleGeneralQuery() and modify
handleGeneralQuery(query) {
  let response = '📖 INSIGHT BRIDGE RESPONSE:\n\n';
  
  if (keywords.includes('your_keyword')) {
    response += 'Your custom response here';
  }
  
  return response;
}
```

---

## PART 7: TROUBLESHOOTING

### Problem: "Command not found: node"

**Solution:**
1. Check: `node --version`
2. If not found, install [Node.js](https://nodejs.org/)
3. Restart terminal
4. Try again

### Problem: "Cannot find module 'readline'"

**Solution:**
- This is built into Node.js
- Check your Node version: `node --version` (should be 14+)
- Try: `npm install`

### Problem: "File not found" in agent.js

**Solution:**
- Verify folder structure is exactly correct:
  ```
  insight-bridge-demo/
  ├── app.js
  ├── agent.js
  └── data/
      ├── sample_client_twin.json
      ├── industry_baseline.json
      └── project_config.json
  ```

### Problem: JSON syntax errors

**Solution:**
1. Open the JSON file
2. In VSCode, right-click → "Format Document"
3. Check for missing commas or quotes
4. Use [jsonlint.com](https://jsonlint.com/) to validate

### Problem: Application closes immediately

**Solution:**
1. Run from VSCode terminal (Ctrl + `) not by double-clicking
2. Or run from regular command line:
   ```bash
   cd insight-bridge-demo
   npm start
   ```

### Problem: Permission denied on Mac/Linux

**Solution:**
```bash
chmod +x app.js
npm start
```

---

## PART 8: DEMONSTRATION SCRIPT

Use this to demonstrate the platform to stakeholders:

### 5-Minute Demo

```
Welcome! Let me show you Insight Bridge.

[Type: npm start]

Insight Bridge is an AI-native platform that helps consulting teams 
understand client operations from Day 1.

[Type: What are the main processes?]

See how we instantly get a structured map of processes with sources?
No hallucinations, everything is traceable.

[Type: Show me the KPIs]

Here are all the performance metrics. Notice each one is source-referenced 
to an authorized document.

[Type: Compare our performance to industry standard]

This is where we see the gap analysis. The client's Order-to-Cash is 
12 days vs. industry standard of 7 days. That's an improvement opportunity.

[Type: What questions should I ask?]

Finally, we get AI-generated prioritized questions based on the gaps. 
This focuses your discovery on high-value conversations.

[Type: status]

And this shows Digital Twin completeness. Everything is tracked and auditable.

[Type: exit]

That's Insight Bridge. Faster, smarter, more rigorous consulting discovery.
```

---

## PART 9: NEXT STEPS FOR PRODUCTION

To enhance this into a production platform, consider:

### Phase 1: Enhancement
- [ ] Add live document upload
- [ ] Connect to actual Confluence/SharePoint
- [ ] Add database for persistent storage
- [ ] Build web UI (React frontend)

### Phase 2: Integration
- [ ] API integration with enterprise tools
- [ ] SSO authentication
- [ ] Multi-project support
- [ ] User management

### Phase 3: Intelligence
- [ ] Real NLP for query understanding
- [ ] ML models for gap identification
- [ ] Predictive analytics
- [ ] Automated insight generation

### Phase 4: Deployment
- [ ] Cloud deployment (AWS/Azure)
- [ ] Scalability architecture
- [ ] Security compliance (ISO 27001, SOC 2)
- [ ] Commercial licensing

---

## QUICK REFERENCE

### File Locations (Copy-Paste Paths)

**Windows:**
```
C:\Users\YOUR_USERNAME\Documents\insight-bridge-demo\
```

**Mac:**
```
/Users/YOUR_USERNAME/Documents/insight-bridge-demo/
```

**Linux:**
```
/home/YOUR_USERNAME/Documents/insight-bridge-demo/
```

### Essential Commands

```bash
# Navigate to project
cd insight-bridge-demo

# View files
ls -la

# Run the demo
npm start

# Exit demo
exit

# Initialize git
git init

# Push to GitHub
git push -u origin main

# Create zip
zip -r insight-bridge-demo.zip insight-bridge-demo/
```

---

## ✅ Checklist Before Sharing

- [ ] All files created (8 files total)
- [ ] Correct folder structure
- [ ] `npm install` completed
- [ ] `npm start` runs without errors
- [ ] Tested with sample queries
- [ ] Exported as zip or pushed to GitHub
- [ ] Shared with team

---

## 🎉 You're Ready!

You now have a fully functional Insight Bridge demo that you can:
✅ Run locally on your computer
✅ Share with colleagues
✅ Demonstrate to clients
✅ Customize for your needs
✅ Deploy in cloud (future)

**Start with:** `npm start`

**Questions?** Check README.md or QUICKSTART.md

Happy consulting! 🌉

---

*Insight Bridge Demo | ESCP Business School | 2024*
