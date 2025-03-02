import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ramji@123',
    database: 'blog'
})
