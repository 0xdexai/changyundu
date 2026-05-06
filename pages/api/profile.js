import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'assests', 'My pic.png')
  try {
    const img = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    res.status(200).send(img)
  } catch (e) {
    res.status(404).send('Not found')
  }
}
