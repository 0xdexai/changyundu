import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const videoPath = path.join(process.cwd(), 'assests', 'gitlab.mp4')

  if (!fs.existsSync(videoPath)) {
    res.status(404).json({ error: 'Video file not found.' })
    return
  }

  const stat = fs.statSync(videoPath)
  const fileSize = stat.size
  const range = req.headers.range

  if (!range) {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
      'Accept-Ranges': 'bytes'
    })
    fs.createReadStream(videoPath).pipe(res)
    return
  }

  const parts = range.replace(/bytes=/, '').split('-')
  const start = Number.parseInt(parts[0], 10)
  const end = parts[1] ? Number.parseInt(parts[1], 10) : fileSize - 1
  const chunkSize = end - start + 1

  res.writeHead(206, {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': chunkSize,
    'Content-Type': 'video/mp4'
  })

  fs.createReadStream(videoPath, { start, end }).pipe(res)
}
