import prisma from '../../../../lib/prisma';

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
    res.status(400).json();
    console.log(result);
  }
}
