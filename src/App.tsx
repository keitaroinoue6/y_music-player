import "./App.css";
import { useRef, useState } from "react";
const songs = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist 1",
    coverUrl: "/music.jpg",
    musicUrl: "/music1.mp3",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    coverUrl: "/music.jpg",
    musicUrl: "/music2.mp3",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist 3",
    coverUrl: "/music.jpg",
    musicUrl: "/music3.mp3",
  },
  {
    id: 4,
    title: "Song 4",
    artist: "Artist 4",
    coverUrl: "/music.jpg",
    musicUrl: "/music4.mp3",
  },
  {
    id: 5,
    title: "Song 5",
    artist: "Artist 5",
    coverUrl: "/music.jpg",
    musicUrl: "/music5.mp3",
  },
];

function App() {
  // []の中身は第一引数に現在の値、第二引数に更新する関数
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // 現在の曲のインデックスを保持
  const [isPlaying, setIsPlaying] = useState(false); // 再生中かどうかを管理
  const audioRef = useRef<HTMLAudioElement>(null); // 音声ファイルを管理するためのref
  const currentSong = songs[currentSongIndex]; // currentSongという変数で、songs配列から現在のインデックスに基づいて曲の情報を取得

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => prev - 1);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => prev + 1);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if(!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <div>
        <div>
          <img
            src={currentSong.coverUrl}
            alt="cover"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div>
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
        </div>
        <div>
          <button onClick={handlePrevious}>戻る</button>
          <button onClick={togglePlayPause}>
            {isPlaying ? "停止" : "再生"}
          </button>
          <button onClick={handleNext}>次へ</button>
        </div>
        <audio
          ref={audioRef}
          src={currentSong.musicUrl}
          onEnded={handleNext}
          onLoadedData={() => setIsPlaying(true)}
        />
      </div>
    </>
  );
}

export default App;
