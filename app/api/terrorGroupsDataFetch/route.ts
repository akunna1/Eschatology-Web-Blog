import { Pool } from "pg";

// Creating one shared pool (reused connections = faster)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // is in .env.local and not exposed to the client
});

export async function GET() {
  try {
    // Querying the database
    const result = await pool.query("SELECT * FROM terrorist_groups");

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Database error:", error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch data" }),
      { status: 500 }
    );
  }
}