// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres', // Ganti dengan username PostgreSQL
  host: 'localhost', // Atau IP address server PostgreSQL
  database: 'cratifysite.id', // Ganti dengan nama database
  password: 'Miawaug123@', // Ganti dengan password PostgreSQL
  port: 5432, // Port PostgreSQL (default: 5432)
});

export default pool;
