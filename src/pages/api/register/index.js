import prisma from '../../../../lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export default async function handler(req, res) {
  const { email } = JSON.parse(req.body);
  console.log('I am here');
  let result = '';
  try {
    result = await prisma.user.create({
      data: {
        email,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    if(error instanceof PrismaClientKnownRequestError) {
      res.status(422).json({ error: error.message, code: error.code });
    } else {
    res.status(500).json(error);
    }
  }
}