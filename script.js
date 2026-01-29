const gazeDot = document.getElementById("gazeDot");

window.onload = function () {

  webgazer.setGazeListener((data) => {
    if (!data) return;

    const x = data.x;
    const y = data.y;

    // 画面外に行かないよう制限（安定化）
    const clampedX = Math.max(0, Math.min(window.innerWidth, x));
    const clampedY = Math.max(0, Math.min(window.innerHeight, y));

    gazeDot.style.left = clampedX + "px";
    gazeDot.style.top  = clampedY + "px";
  })
  .begin();

  // ===== 配信向け設定 =====

  // ❌ カメラ映像を表示しない（配信に映さない）
  webgazer.showVideo(false);

  // ❌ 顔の枠も消す
  webgazer.showFaceOverlay(false);
  webgazer.showFaceFeedbackBox(false);

  // ❌ 予測点も消す
  webgazer.showPredictionPoints(false);

  // 🎯 精度モード（回帰モデルを精度寄りに）
  webgazer.setRegression('ridge');

  // 📈 マウスクリック学習を有効（クリックで精度上がる）
  webgazer.applyKalmanFilter(true);

  console.log("Gaze tracking started");
};
