import { pool } from '../db.js';

export const getAllEvents = async (req, res) => {
        console.log(req.userId)
        const result = await pool.query('SELECT * FROM events');
        console.log(result);
        return res.json(result.rows);
  
}

export const getEvent = async (req, res) => {
    const result = await pool.query('SELECT * FROM events WHERE id = $1',
        [req.params.id
        ]);
    if (result.rows.length === 0) {
        return res.status(404).send({ message: "No existe un evento con ese ID" });
    }
    return res.json(result.rows[0]);
}

export const createEvent = async (req, res, next) => {
    const { name, description } = req.body;
    //db insert
    try {
        const result = await pool.query('INSERT INTO events (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]);
    
    res.json(result.rows[0]);
    }
    catch (error) {
        if (error.code === '23505') {
            return res.send("El evento ya existe");
        }
        next(error);
    }

};  

export const updateEvent = async (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    const result = await pool.query('UPDATE events SET name = $1, description = $2 WHERE id = $3 RETURNING *',
        [name, description, id]);
    if (result.rowCount === 0) {
        return res.status(404).send({ message: "No existe un evento con ese ID" });
    }
    res.json(result.rows[0]);
    console.log(result);

    return  res.json(result.rows[0]);
}

export const deleteEvent = async(req, res) => {

   const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING *',
        [req.params.id])
        console.log(result);
        if (result.rowCount === 0) {
            return res.status(404).send({ message: "No existe un evento con ese ID" });
        }
    return res.sendStatus(204);
}
