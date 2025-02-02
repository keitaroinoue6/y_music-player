import "./App.css";
import { useState } from "react";
const songs = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist 1",
    coverUrl: "/music.jpg",
    musicUrl: "/music.mp3",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    coverUrl: "/music.jpg",
    musicUrl: "/music.mp3",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist 3",
    coverUrl: "/music.jpg",
    musicUrl: "/music.mp3",
  },
  {
    id: 4,
    title: "Song 4",
    artist: "Artist 4",
    coverUrl: "/music.jpg",
    musicUrl: "/music.mp3",
  },
  {
    id: 5,
    title: "Song 5",
    artist: "Artist 5",
    coverUrl: "/music.jpg",
    musicUrl: "/music.mp3",
  },
];

function App() {
  // []の中身は第一引数に現在の値、第二引数に更新する関数
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // 現在の曲のインデックスを保持
  const currentSong = songs[currentSongIndex]; // currentSongという変数で、songs配列から現在のインデックスに基づいて曲の情報を取得

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <div>
          <img src={currentSong.coverUrl} alt="cover" />
        </div>
        <div>
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
        </div>
        <div>
          <button onClick={handlePrevious}>戻る</button>
          <button onClick={handleNext}>次へ</button>
        </div>
      </div>
    </>
  );
}

export default App;
