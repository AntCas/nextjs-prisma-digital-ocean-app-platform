import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async (_: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
  //res.status(200).json({ text: 'Hello' })
}
