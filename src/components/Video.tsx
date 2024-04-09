import { VideoKartı } from "./VideoKartı";

export interface KartYapisi {
  videoSirasi: number;
  videoBasligi: string;
  videoSuresi: number;
}

export const Video = () => {
  const videolar: KartYapisi[] = [
    { videoSirasi: 1, videoBasligi: "css kursu", videoSuresi: 15 },
    { videoSirasi: 2, videoBasligi: "html kursu", videoSuresi: 25 },
    { videoSirasi: 3, videoBasligi: "js kursu", videoSuresi: 27 },
  ];

  return (
    <div>
      {videolar.map((video, index) => {
        return <VideoKartı key={index} kartVerisi={video} />;
      })}
    </div>
  );
};
