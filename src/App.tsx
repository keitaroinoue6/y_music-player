import { Volume2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./App.css";
import { useRef, useState } from "react";
import { Slider } from "./components/ui/slider";
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
  const [volume, setVolume] = useState(30); // 音量を管理
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
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    if (!audioRef.current) return;
    audioRef.current.volume = value[0] / 100;
    setVolume(value[0]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <div className="flex justify-center mb-4">
            <img
              src={currentSong.coverUrl}
              alt="cover"
              className="w-48 h-48 rounded-sm"
            />
          </div>
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-white">{currentSong.title}</h2>
            <p className="text-gray-600 text-white">{currentSong.artist}</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={handlePrevious}
              className="text-white p-2 hover:bg-gray-800 rounded-full"
            >
              <SkipBack className="w-6 h-6" />
            </button>
            <button
              onClick={togglePlayPause}
              className="text-white p-2 hover:bg-gray-800 rounded-full"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="text-white p-2 hover:bg-gray-800 rounded-full"
            >
              <SkipForward className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Volume2 className="h-6 w-6 text-gray-500" />
            <Slider
              value={[volume]}
              max={100}
              min={0}
              step={1}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
          </div>
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
