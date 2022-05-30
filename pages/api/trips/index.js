import prisma from 'lib/prisma'

export default async function handler(req, res) {
  // discards every request that's not using the 'GET' method
  if (req.method !== 'GET') {
    res.status(405).json({message: 'Method Not Allowed'})
    return
  }

  const trips = await prisma.trip.findMany()
  res.status(200).json(trips)
}