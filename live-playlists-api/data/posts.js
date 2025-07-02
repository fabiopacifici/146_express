const PORT = process.env.PORT || 3000;

const posts = [
  {
    id: 1,
    title: 'Focus music',
    thumb: `http://localhost:${PORT}/img/hqdefault.avif`,
    description: 'A collection of music to help you focus and concentrate.',
  },
  {
    id: 2,
    title: 'Dark Techno',
    thumb: `http://localhost:${PORT}/img/dark_techno.avif`,
    description: 'Relaxing music to unwind and chill out.',
  },
  {
    id: 3,
    title: 'Coding music',
    thumb: `http://localhost:${PORT}/img/coding_music.avif`,
    description: 'Epic soundtracks to inspire and motivate.',
  },
  {
    id: 4,
    title: 'Epic music',
    thumb: `http://localhost:${PORT}/img/epic_music.avif`,
    description: 'A collection of epic music to get you pumped up.',
  },
  {
    id: 5,
    title: 'Chill music',
    thumb: `http://localhost:${PORT}/img/chill_music.avif`,
    description: 'Relaxing music to unwind and chill out.',
  },
]
module.exports = posts; 