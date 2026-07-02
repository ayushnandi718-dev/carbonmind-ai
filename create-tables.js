const { Client } = require("pg");
const client = new Client({
  connectionString:
    "postgresql://postgres:tPzKDDiNgC5SLwub@db.fbawlqmlxcijqiysgwte.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await client.connect();
  console.log("Connected!");

  await client.query(`
    CREATE TABLE IF NOT EXISTS emission_logs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      log_date DATE NOT NULL DEFAULT CURRENT_DATE,
      transport_emission NUMERIC DEFAULT 0,
      electricity_emission NUMERIC DEFAULT 0,
      food_emission NUMERIC DEFAULT 0,
      total_emission NUMERIC DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  console.log("OK emission_logs");

  await client.query(`
    CREATE TABLE IF NOT EXISTS ai_insights (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      insight_text TEXT NOT NULL,
      week_start DATE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  console.log("OK ai_insights");

  await client.query(`
    CREATE TABLE IF NOT EXISTS goals (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      target_emission NUMERIC NOT NULL,
      period TEXT NOT NULL DEFAULT 'weekly',
      active BOOLEAN DEFAULT true,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  console.log("OK goals");

  await client.end();
  console.log("All tables created!");
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
