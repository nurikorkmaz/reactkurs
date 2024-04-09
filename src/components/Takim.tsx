import { TakimUyesi } from "./TakimUyesi";

export const Takim = () => {
  const takimUyeleri = [
    { adi: "nuri", yas: 25 },
    {
      adi: "emre",
      yas: 26,
    },
    {
      adi: "ali",
      yas: 41,
    },
  ];

  return (
    <div>
      {takimUyeleri.map((uye, index) => {
        return <TakimUyesi key={index} uyeninVerisi={uye} />;
      })}
    </div>
  );
};
