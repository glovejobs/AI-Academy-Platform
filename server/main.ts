import 'dotenv/config';
import { createServer } from './index.js';

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0'; // Bind to all interfaces for cloud deployment
const app = createServer();

app.listen(PORT, HOST, () => {
  console.log(`\n🚀 AI Academy API Server running!`);
  console.log(`   ➜  Network: http://${HOST}:${PORT}/api`);
  console.log(`   ➜  Health:  http://${HOST}:${PORT}/api/ping\n`);
}).on('error', (err: Error) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
