# App.js - Insight Bridge Main Application

```javascript
#!/usr/bin/env node

/**
 * INSIGHT BRIDGE - Interactive Demo
 * An AI-native platform for consulting firms to rapidly understand client operations
 * This demo simulates the core functionality of Insight Bridge
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const InsightBridgeAgent = require('./agent');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ASCII Art Banner
const banner = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                          🌉 INSIGHT BRIDGE DEMO 🌉                           ║
║                                                                              ║
║           Customer-Driven Innovation: AI-Native Platform for                ║
║                        Consulting Firms                                      ║
║                                                                              ║
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
`;

console.clear();
console.log(banner);

// Initialize the agent
const agent = new InsightBridgeAgent();

// Start the interactive session
function promptUser() {
  rl.question('\n👤 You: ', async (input) => {
    if (!input.trim()) {
      promptUser();
      return;
    }

    const userQuery = input.trim();

    // Handle exit command
    if (userQuery.toLowerCase() === 'exit' || userQuery.toLowerCase() === 'quit') {
      console.log('\n\n🌉 Thank you for exploring Insight Bridge. Goodbye!\n');
      rl.close();
      process.exit(0);
    }

    // Handle help command
    if (userQuery.toLowerCase() === 'help') {
      displayHelp();
      promptUser();
      return;
    }

    // Handle status command
    if (userQuery.toLowerCase() === 'status' || userQuery.toLowerCase() === 'show status') {
      agent.showStatus();
      promptUser();
      return;
    }

    // Process the user query through the agent
    console.log('\n⏳ Insight Bridge Processing...\n');
    
    try {
      const response = await agent.processQuery(userQuery);
      console.log(`\n🤖 Insight Bridge:\n${response}\n`);
    } catch (error) {
      console.log(`\n❌ Error: ${error.message}\n`);
    }

    // Continue the conversation
    promptUser();
  });
}

function displayHelp() {
  const helpText = `
════════════════════════════════════════════════════════════════════════════════
                              AVAILABLE COMMANDS
════════════════════════════════════════════════════════════════════════════════

📊 QUERY EXAMPLES:
  "What are the client's main processes?"
  "Show me the KPIs"
  "Who owns the supply chain?"
  "What systems does the client use?"
  "How does this compare to industry standard?"
  "What questions should I NOT ask?"
  "Build a governance map"
  "What are the decision authorities?"

🎯 SPECIAL COMMANDS:
  status          - Show Digital Twin completeness & project status
  help            - Display this help message
  exit/quit       - Exit the demo

💡 FEATURES DEMONSTRATED:
  ✓ Source-referenced answers (every insight links to a source document)
  ✓ Question-filtering engine (blocks redundant questions)
  ✓ Digital Twin querying (structured client knowledge)
  ✓ Industry comparison (Client vs Industry Baseline)
  ✓ Governance & access control (authorized data only)

💾 DATA SOURCES:
  All answers are sourced from:
  • Client Digital Twin (sample_client_twin.json)
  • Industry Baseline Twin (industry_baseline.json)
  • Project metadata (project_config.json)

════════════════════════════════════════════════════════════════════════════════
`;
  console.log(helpText);
}

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('\n\n🌉 Insight Bridge session ended. Goodbye!\n');
  rl.close();
  process.exit(0);
});

// Start the conversation
promptUser();
```
