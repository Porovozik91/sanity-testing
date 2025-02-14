import { connection } from './db';


export async function getIntroduksjoner() {
  const [rows] = await connection.execute('SELECT * FROM introduksjoner');
  return rows;
}


export async function getProsjekter() {
  const [rows] = await connection.execute('SELECT * FROM prosjekter');
  return rows;
}


export async function getEventer() {
  const [rows] = await connection.execute('SELECT * FROM eventer');
  return rows;
}
