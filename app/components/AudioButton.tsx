"use client";
import { useRef, useState } from "react";

type Props = {
  media: Word;
};

function AudioButton({ media }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const phonetic1 = media.phonetics[0];
  const phonetic2 = media.phonetics[1];
  const phonetic3 = media.phonetics[2];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      audioPlayer.current?.play();
      setTimeout(() => {
        audioPlayer.current?.pause();
        setIsPlaying(false);
      }, 1700);
    } else {
      audioPlayer.current?.pause();
    }
  };

  return (
    <div className="flex justify-center">
      {phonetic1.audio !== "" ||
      phonetic2.audio !== "" ||
      phonetic3.audio !== "" ? (
        <>
          <audio
            src={phonetic1.audio || phonetic2.audio || phonetic3.audio}
            controlsList="nodownload noplaybackrate"
            ref={audioPlayer}
          >
            This browser does not support this file
          </audio>
          <button
            className="bg-[#e9d0fa] p-5 rounded-full flex justify-center items-center hover:bg-[#e3bffa] dark:bg-[#3d1a53] dark:hover:bg-[#4e2169] hover:transition hover:duration-200 ease-in-out"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-[#a544e9]  dark:fill-[#9c4be0]"
                viewBox="0 0 320 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-[#a544e9] translate-x-0.5 dark:fill-[#9c4be0]"
                viewBox="0 0 384 512"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            )}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default AudioButton;
