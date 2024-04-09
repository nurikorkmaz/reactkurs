import { KartYapisi } from "./Video";

interface Props {
  kartVerisi: KartYapisi;
}

export const VideoKartı = ({ kartVerisi }: Props) => {
  return (
    <div>
      <div>{kartVerisi.videoSirasi}. </div>
      <div>{kartVerisi.videoBasligi}</div>
      <div>{kartVerisi.videoSuresi} dk.</div>
    </div>
  );
};
