// 飛答 FlyQuiz — Firebase 設定
// 1. 到 Firebase 主控台 → 專案設定 → 一般 → 你的應用程式（網頁）→ 複製 firebaseConfig
// 2. 把下面的 null 換成那一段設定（記得要有 databaseURL）
// 留著 null 就是「試玩模式」：只能在同一台電腦的瀏覽器分頁之間互動。

window.FEIDA_FIREBASE_CONFIG = null;

/* 範例：
window.FEIDA_FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "flyquiz-xxxx.firebaseapp.com",
  databaseURL: "https://flyquiz-xxxx-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flyquiz-xxxx",
  appId: "1:1234567890:web:abcdef"
};
*/
