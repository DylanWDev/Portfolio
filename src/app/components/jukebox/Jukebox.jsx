import React, { useState, useEffect } from "react";
import MusicDiscButton from "./MusicDiscButton";

export default function Jukebox() {
  const [volume, setVolume] = useState(0);
  const [volumeImage, setVolumeImage] = useState("/images/icons/mute.png");
  const [selectedMusicDisc, setSelectedMusicDisc] = useState(
    "/images/music-discs/13.png"
  );
  const [selectMp3, setSelectMp3] = useState("/music/music-discs/13.mp3");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    handlePlay();
    updateVolumeImage(volume);
  }, []);

  useEffect(() => {
    if (audio) {
      audio.volume = volume / 100;
    }
    updateVolumeImage(volume);
  }, [volume, audio]);

  useEffect(() => {
    const storedMusicDisc = localStorage.getItem("selectedMusicDisc");
    const storedMp3 = localStorage.getItem("selectMp3");

    if (storedMusicDisc && storedMp3) {
      setSelectedMusicDisc(storedMusicDisc);
      setSelectMp3(storedMp3);
    }
  }, []);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const updateVolumeImage = (newVolume) => {
    if (newVolume < 1) {
      setVolumeImage("/images/icons/mute.png");
    } else if (newVolume <= 30) {
      setVolumeImage("/images/icons/speaker-low.png");
    } else if (newVolume <= 70) {
      setVolumeImage("/images/icons/speaker-mid.png");
    } else {
      setVolumeImage("/images/icons/speaker-full.png");
    }
  };

  const handleMusicDiscClick = () => {
    setIsModalOpen(true);
  };

  const handleMusicDiscSelection = (newMusicDisc, newMp3) => {
    setSelectedMusicDisc(newMusicDisc);
    setSelectMp3(newMp3);
    setIsModalOpen(false);
    handlePlay();

    localStorage.setItem("selectedMusicDisc", newMusicDisc);
    localStorage.setItem("selectMp3", newMp3);
  };

  const handlePlay = () => {
    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(selectMp3);
    newAudio.volume = volume / 100;
    newAudio.play();
    setAudio(newAudio);
  };

  const handlePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const handleClosedModel = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="flex flex-col z-10 fixed bottom-0 right-0 m-5">
        <div
          className="flex justify-center items-center flex-row-reverse"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="size-7 ml-auto transition ease-in-out hover:scale-110 cursor-pointer"
            src={volumeImage}
            alt="volume button"
          />

          {isHovered && (
            <>
              <input
                type="range"
                id="volume"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="appearance-none mr-1 accent-gray-800 bg-gray-700 h-2 outline-none"
                style={{
                  // Adjust the height of the thumb here
                  height: "8px",
                }}
              />
              <span className="text-gray-600">{volume}%</span>
            </>
          )}
        </div>
        <img
          className="ml-auto bottom-0 right-0 size-20 transition ease-in-out hover:scale-110 cursor-pointer"
          src={selectedMusicDisc}
          alt="Selected Music Disc"
          onClick={handleMusicDiscClick}
        />
      </div>

      {isModalOpen && (
        // Your modal or UI for music disc selection goes here
        // For simplicity, I'm using a basic alert in this example
        <div className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-gray-100 p-5 shadow-lg">
            <div className="flex justify-center items-center gap-5 mb-5">
              <h2 className="text-lg font-bold">Choose a Music Disc</h2>
              <button className="transition bg-gray-600 size-7 text-xl hover:bg-gray-700" onClick={handleClosedModel}>x</button>
            </div>
            <div className="bg-white p-8 shadow-md h-60 overflow-y-auto">
              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/13.png",
                    "music/13.mp3"
                  )
                }
                imageSrc="/images/music-discs/13.png"
                label="Music Disc 13"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/blocks.png",
                    "music/blocks.mp3"
                  )
                }
                imageSrc="/images/music-discs/blocks.png"
                label="Music Disc Blocks"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/cat.png",
                    "music/cat.mp3"
                  )
                }
                imageSrc="/images/music-discs/cat.png"
                label="Music Disc Cat"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/chirp.png",
                    "music/chirp.mp3"
                  )
                }
                imageSrc="/images/music-discs/chirp.png"
                label="Music Disc chirp"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/far.png",
                    "music/far.mp3"
                  )
                }
                imageSrc="/images/music-discs/far.png"
                label="Music Disc far"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/mall.png",
                    "music/mall.mp3"
                  )
                }
                imageSrc="/images/music-discs/mall.png"
                label="Music Disc mall"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/mellohi.png",
                    "music/mellohi.mp3"
                  )
                }
                imageSrc="/images/music-discs/mellohi.png"
                label="Music Disc mellohi"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/otherside.png",
                    "music/otherside.mp3"
                  )
                }
                imageSrc="/images/music-discs/otherside.png"
                label="Music Disc otherside"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/ward.png",
                    "music/ward.mp3"
                  )
                }
                imageSrc="/images/music-discs/ward.png"
                label="Music Disc ward"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/wait.png",
                    "music/wait.mp3"
                  )
                }
                imageSrc="/images/music-discs/wait.png"
                label="Music Disc wait"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/strad.png",
                    "music/strad.mp3"
                  )
                }
                imageSrc="/images/music-discs/strad.png"
                label="Music Disc strad"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/stal.png",
                    "music/stal.png"
                  )
                }
                imageSrc="/images/music-discs/stal.png"
                label="Music Disc stal"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/11.png",
                    "music/11.pm3"
                  )
                }
                imageSrc="/images/music-discs/11.png"
                label="Music Disc 11"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/relic.png",
                    "music/relic.mp3"
                  )
                }
                imageSrc="/images/music-discs/relic.png"
                label="Music Disc relic"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/5.png",
                    "music/5.mp3"
                  )
                }
                imageSrc="/images/music-discs/5.png"
                label="Music Disc 5"
              />

              <MusicDiscButton
                onClick={() =>
                  handleMusicDiscSelection(
                    "/images/music-discs/pigstep.png",
                    "music/pigstep.mp3"
                  )
                }
                imageSrc="/images/music-discs/pigstep.png"
                label="Music Disc pigstep"
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                className={`border-solid border-2 text-white p-1 h-8 text-center w-16 transition ${
                  isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                }`}
                onClick={handlePlayPause}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
