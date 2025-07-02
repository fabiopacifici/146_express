const PORT = process.env.PORT || 3000;

const playlists = [
  {
    id: 1,
    name: 'Focus music',
    url: 'https://www.youtube.com/watch?v=3bv-6DyGCGY',
    thumb: `http://localhost:${PORT}/img/hqdefault.avif`,
    description: 'A collection of music to help you focus and concentrate.',
  },
   {
    id: 2,
    name: 'Dark Techno',
    url: 'https://www.youtube.com/watch?v=MsxI4ja_u30&t=2410s',
    thumb: `http://localhost:${PORT}/img/dark_techno.avif`,
    description: 'Relaxing music to unwind and chill out.',
   },
  {
    id: 3,
    name: 'Coding music',
    url: 'https://www.youtube.com/watch?v=AF8LSurfct4&t=18s',
    thumb: `http://localhost:${PORT}/img/coding_music.avif`,
    description: 'Epic soundtracks to inspire and motivate.',
  },
  {
    id: 4,
    name: 'Epic music',
    url: 'https://www.youtube.com/watch?v=3bv-6DyGCGY',
    thumb: `http://localhost:${PORT}/img/epic_music.avif`,
    description: 'A collection of epic music to get you pumped up.',
  },
  {
    id: 5,
    name: 'Chill music',
    url: 'https://www.youtube.com/watch?v=MsxI4ja_u30&t=2410s',
    thumb: `http://localhost:${PORT}/img/chill_music.avif`,
    description: 'Relaxing music to unwind and chill out.',
  },
]
module.exports = playlists; 