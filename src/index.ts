import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';
const prisma = new PrismaClient();
const app = express();

app.get('/', async (req: Request, res: Response) => {
  try {
    const password = await bcrypt.hash('babayo', 10);
    const user = await prisma.user.create({
      data: {
        name: 'Bayu Maulana',
        email: 'bayumaulana@example.com',
        password: password,
      },
    });
    res.status(404).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong', error });
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
