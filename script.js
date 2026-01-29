const gazeDot = document.getElementById("gazeDot");

window.onload = function () {

  webgazer.setGazeListener((data) => {
    if (data == null) return;

    const x = data.x;
    const y = data.y;

    gazeDot.style.left = x + "px";
    gazeDot.style.top = y + "px";
  })
  .begin();

  // 精度向上設定
  webgazer.showVideo(true);       // カメラ表示
  webgazer.showPredictionPoints(false);
};
