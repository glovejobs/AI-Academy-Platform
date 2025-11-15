import 'dotenv/config';
import { db } from './server/db/index.js';
import { sql } from 'drizzle-orm';

async function verifyDatabase() {
  try {
    console.log('🔍 Verifying database connection and tables...\n');

    // Test connection
    const result = await db.execute(sql`SELECT current_database(), current_user`);
    console.log('✅ Database connection successful!');
    console.log(`   Database: ${result[0].current_database}`);
    console.log(`   User: ${result[0].current_user}\n`);

    // List all tables
    const tables = await db.execute(sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    console.log(`✅ Found ${tables.length} tables:\n`);
    tables.forEach((table: any, index: number) => {
      console.log(`   ${index + 1}. ${table.table_name}`);
    });

    console.log('\n🎉 Database setup complete!');
    console.log('\n📊 You can view your database at:');
    console.log('   https://supabase.com/dashboard/project/kngwmwouascrirmhzyka/editor');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error verifying database:', error);
    process.exit(1);
  }
}

verifyDatabase();
