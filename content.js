let isMuted = false;

function muteTab() {
  if (!isMuted) {
    document.querySelector("video").muted = true;
    isMuted = true;
    console.log("[VNX] Tab muted due to ad.");
  }
}

function unmuteTab() {
  if (isMuted) {
    document.querySelector("video").muted = false;
    isMuted = false;
    console.log("[VNX] Tab unmuted, content resumed.");
  }
}

function detectAd() {
  const adOverlay = document.querySelector(".ad-showing, .ytp-ad-player-overlay");
  if (adOverlay) {
    muteTab();
  } else {
    unmuteTab();
  }
}

setInterval(detectAd, 1000);