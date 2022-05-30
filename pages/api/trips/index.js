export default function handler(req, res) {
  // discards every request that's not using the 'GET' method
  if (req.method !== 'GET') {
    res.status(405).json({
      message: 'Method Not Allowed'
    })
    return
  }

  res.status(200).json({ test: 'TRIPS!' })
}