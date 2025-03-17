const songs = [
    {
      title: "Song 1",
      artist: "Yo Yo Honey Singh",
      src: "audio.mp4"
    },
    {
      title: "Song 2",
      artist: "Yo Yo Honey Singh",
      src: "audio2.mp4"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      src: "https://www.example.com/song3.mp3"
    }
  ];
 
  
  let currentSongIndex = 0;
  const audio = document.getElementById('audio');
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
 
  
  // Load song
  function loadSong(song) {
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
  }
  
  // Play song
  function playSong() {
    audio.play();
    playBtn.innerHTML = "⏸";
  }
  
  // Pause song
  function pauseSong() {
    audio.pause();
    playBtn.innerHTML = "▶️";
  }
  
  // Toggle between play and pause
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });
  
  // Next song
  nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
  });
  
  // Previous song
  prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
  });
  
  // Load initial song
  loadSong(songs[currentSongIndex]);
  