import { useEffect } from "react";
import { animate } from "framer-motion";

export const BackgroundAnimation = () => {
  useEffect(() => {
    // 色相を青→紫→ピンク→赤→ピンク→紫→青と往復アニメーション
    const controls = animate(0, 60, {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse", // 往復（0→130→0→130...）
      ease: "linear",
      onUpdate: (latest) => {
        document.documentElement.style.setProperty(
          "--hue-offset",
          latest.toString()
        );
      },
    });

    // クリーンアップ
    return () => controls.stop();
  }, []);

  return null; // UIを持たないコンポーネント
};
