#!/usr/bin/env node

/**
 * INSIGHT BRIDGE - Express Server
 * Serves the web interface and provides REST API endpoints
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const InsightBridgeAgent = require('./agent');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Initialize Agent
const agent = new InsightBridgeAgent();

// ============================================
// ROUTES
// ============================================

/**
 * GET / - Serve the HTML interface
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * POST /api/query - Process a query
 */
app.post('/api/query', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Query is required and must be a string'
      });
    }

    // Process the query through the agent
    const response = await agent.processQuery(query);

    res.json({
      success: true,
      response: response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Error processing query'
    });
  }
});

/**
 * GET /api/status - Get Digital Twin status
 */
app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    status: {
      projectName: 'RetailCorp Industries',
      industry: 'Retail & Distribution',
      organization: {
        completeness: '100%',
        employees: '2,500',
        divisions: 5
      },
      processes: {
        documented: 4,
        total: 5,
        completeness: '80%'
      },
      kpis: {
        tracked: 8,
        total: 10,
        completeness: '80%'
      },
      governance: {
        mapped: '85%'
      },
      systems: {
        documented: '100%'
      },
      dataQuality: {
        completeness: '85%'
      }
    }
  });
});

/**
 * GET /api/help - Get help information
 */
app.get('/api/help', (req, res) => {
  res.json({
    success: true,
    help: {
      queryExamples: [
        'What are the client\'s main processes?',
        'Show me the KPIs',
        'Who owns the supply chain?',
        'What systems does the client use?',
        'How does this compare to industry standard?',
        'What questions should I NOT ask?',
        'Build a governance map',
        'What are the decision authorities?'
      ],
      specialCommands: [
        'status - Show Digital Twin completeness & project status',
        'help - Display available commands',
        'exit - Exit the demo'
      ],
      features: [
        'Source-referenced answers (every insight links to a source document)',
        'Question-filtering engine (blocks redundant questions)',
        'Digital Twin querying (structured client knowledge)',
        'Industry comparison (Client vs Industry Baseline)',
        'Governance & access control (authorized data only)'
      ]
    }
  });
});

/**
 * GET /api/suggested-queries - Get suggested queries
 */
app.get('/api/suggested-queries', (req, res) => {
  res.json({
    success: true,
    suggestions: [
      'What are the main processes?',
      'Show me the KPIs',
      'Compare to industry standard',
      'What questions should I ask?',
      'Show client governance',
      'What systems are used?',
      'What are the challenges?',
      'What are the strengths?'
    ]
  });
});

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Insight Bridge API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// ERROR HANDLING
// ============================================

/**
 * 404 Handler
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path
  });
});

/**
 * Error Handler
 */
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                   🌉 INSIGHT BRIDGE SERVER STARTED 🌉                        ║
║                                                                              ║
║              Open your browser and navigate to:                             ║
║                   http://localhost:${PORT}                                  ║
║                                                                              ║
║                      Enjoy exploring Insight Bridge!                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
  `);
  console.log(`📍 Server running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation:`);
  console.log(`   POST   /api/query         - Send a query`);
  console.log(`   GET    /api/status        - Get Digital Twin status`);
  console.log(`   GET    /api/help          - Get help information`);
  console.log(`   GET    /api/health        - Health check`);
  console.log(`\n💾 Data files: ./data/`);
  console.log(`🎨 Web interface: http://localhost:${PORT}\n`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n🌉 Server shutting down gracefully...');
  process.exit(0);
});
