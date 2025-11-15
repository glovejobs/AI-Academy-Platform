import 'dotenv/config';
import { createServer } from './index.js';

const PORT = parseInt(process.env.PORT || '3000', 10);
const app = createServer();

app.listen(PORT, () => {
  console.log(`\n🚀 AI Academy API Server running!`);
  console.log(`   ➜  Local:   http://localhost:${PORT}/api`);
  console.log(`   ➜  Health:  http://localhost:${PORT}/api/ping\n`);
});
