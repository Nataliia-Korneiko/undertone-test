function ready(e) {
  const showAnimationButton = document.querySelector(".animation-list__button");
  const loadedAnimation = document.querySelector(".animation-list");
  const firstLi = document.querySelector(
    ".animation-list__item:nth-of-type(1)"
  );
  const video = document.querySelector(".player__video");
  const videoWrapper = document.querySelector(".player__video-wrapper");
  const playButton = document.querySelector(".player__button-video-play");
  const showButton = document.querySelector(".player__button-video");
  const showText = document.querySelector(".player__button-text");
  let isPlaying = false;
  let isShowing = false;

  function handleShowAnimation() {
    loadedAnimation.classList.remove("loaded");
    firstLi.style.zIndex = "3";
    showAnimationButton.style.zIndex = "2";
  }

  function handlePlay() {
    video.play();
    isPlaying = true;
    playButton.classList.add("hidden");
  }

  function handleStop(e) {
    if (isPlaying) {
      e.target.pause();
      isPlaying = false;
      playButton.classList.remove("hidden");
    }
  }

  function handleShow() {
    if (isShowing) {
      video.pause();
      videoWrapper.classList.add("hidden");
      playButton.classList.add("hidden");
      showText.classList.remove("hidden");
      isShowing = false;
    } else if (!isShowing) {
      videoWrapper.classList.remove("hidden");
      playButton.classList.remove("hidden");
      showText.classList.add("hidden");
      isShowing = true;
    }
  }

  showAnimationButton.addEventListener("click", handleShowAnimation);
  video.addEventListener("click", handleStop);
  playButton.addEventListener("click", handlePlay);
  showButton.addEventListener("click", handleShow);
}

document.addEventListener("DOMContentLoaded", ready);
