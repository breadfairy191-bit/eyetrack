const gazeDot = document.getElementById("gazeDot");

window.onload = function () {

  webgazer.setGazeListener((data) => {
    if (!data) return;

    const x = Math.max(0, Math.min(window.innerWidth, data.x));
    const y = Math.max(0, Math.min(window.innerHeight, data.y));

    gazeDot.style.left = x + "px";
    gazeDot.style.top  = y + "px";
  });

  webgazer.setRegression('ridge');
  webgazer.showVideo(false);
  webgazer.showFaceOverlay(false);
  webgazer.showFaceFeedbackBox(false);
  webgazer.showPredictionPoints(false);
  webgazer.applyKalmanFilter(true);
  webgazer.begin();
};
