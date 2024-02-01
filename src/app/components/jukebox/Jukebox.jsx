import React, { useState, useEffect } from "react";
import MusicDiscButton from "./button";

export default function Jukebox() {
  const [volume, setVolume] = useState(50);
  const [selectedMusicDisc, setSelectedMusicDisc] = useState(
    localStorage.getItem("selectedMusicDisc") || "/images/music-discs/13.png"
  );
  const [selectMp3, setSelectMp3] = useState(
    localStorage.getItem("selectMp3") || "/music/music-discs/13.mp3"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // This effect will run when the component mounts
    handlePlay();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    // You can also perform any actions based on the volume change here.
  };

  const handleMusicDiscClick = () => {
    setIsModalOpen(true);
  };

  const handleMusicDiscSelection = (newMusicDisc, newMp3) => {
    setSelectedMusicDisc(newMusicDisc);
    setSelectMp3(newMp3);
    setIsModalOpen(false);
    handlePlay();

    // Update local storage with the selected music disc
    localStorage.setItem("selectedMusicDisc", newMusicDisc);
    localStorage.setItem("selectMp3", newMp3);
  };

  const handlePlay = () => {
    const audio = new Audio(selectMp3);
    audio.volume = volume / 100;
    audio.play();
  };

  return (
    <>
      <div className="flex flex-col z-10 fixed bottom-0 right-0 m-5">
        <div className="flex justify-center items-center flex-row-reverse">
          <img
            className="size-7  ml-auto transition ease-in-out hover:scale-110 cursor-pointer"
            src="/images/icons/silent.png"
            alt="mute button"
          />

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
          <div className="bg-white p-8 shadow-lg h-80 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Choose a Music Disc</h2>
            
            
            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/13.png", "music/13.mp3")
              }
              imageSrc="/images/music-discs/13.png"
              label="Music Disc 13"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/blocks.png")
              }
              imageSrc="/images/music-discs/blocks.png"
              label="Music Disc Blocks"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/cat.png")
              }
              imageSrc="/images/music-discs/cat.png"
              label="Music Disc Cat"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/chirp.png")
              }
              imageSrc="/images/music-discs/chirp.png"
              label="Music Disc chirp"
            />
            

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/far.png")
            }
              imageSrc="/images/music-discs/far.png"
              label="Music Disc far"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/mall.png")
              }
              imageSrc="/images/music-discs/mall.png"
              label="Music Disc mall"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/mellohi.png")
              }
              imageSrc="/images/music-discs/mellohi.png"
              label="Music Disc mellohi"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/otherside.png")
              }
              imageSrc="/images/music-discs/otherside.png"
              label="Music Disc otherside"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/ward.png")
              }
              imageSrc="/images/music-discs/ward.png"
              label="Music Disc ward"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/wait.png")
              }
              imageSrc="/images/music-discs/wait.png"
              label="Music Disc wait"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/strad.png")
              }
              imageSrc="/images/music-discs/strad.png"
              label="Music Disc strad"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/stal.png")
              }
              imageSrc="/images/music-discs/stal.png"
              label="Music Disc stal"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/11.png")
              }
              imageSrc="/images/music-discs/11.png"
              label="Music Disc 11"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/relic.png")
              }
              imageSrc="/images/music-discs/relic.png"
              label="Music Disc relic"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/5.png")
              }
              imageSrc="/images/music-discs/5.png"
              label="Music Disc 5"
            />

            <MusicDiscButton
              onClick={() =>
                handleMusicDiscSelection("/images/music-discs/pigstep.png")
              }
              imageSrc="/images/music-discs/pigstep.png"
              label="Music Disc pigstep"
            />
          </div>
        </div>
      )}
    </>
  );
}
