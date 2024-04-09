import { TakimUyesi } from "./_components/TakimUyesi";

interface Props {
  adsoyad: string;
  gorevi: string;
}

export const Takim = ({ adsoyad, gorevi }: Props) => {
  return (
    <div>
      <TakimUyesi adsoyad="nuri korkmaz" gorevi="öğrenci" />
      <TakimUyesi adsoyad="derin korkmaz" gorevi="nurinin kızı" />
    </div>
  );
};
