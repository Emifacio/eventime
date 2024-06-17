import pg  from 'pg';

export const pool = new pg.Pool({
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'eventsdb'
});

pool.on('connect', () => {
    console.log('connected to the db');
});