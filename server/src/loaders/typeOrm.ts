import 'reflect-metadata';
import { createConnection } from 'typeorm';

const DBConn = async () => {
  try {
    const connection = await createConnection();
    await connection.synchronize;
  } catch (error) {
    throw new Error(error);
  }
};

export default DBConn;
