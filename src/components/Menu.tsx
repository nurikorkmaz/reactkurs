import { MenuKart } from "./MenuKart";

export const Menu = () => {
  const gunlukMenuler = [
    {
      gun: "pazartesi",
      ogun: "akşam",
      yemekAdi: "döner",
      kalori: 300,
    },
    {
      gun: "salı",
      ogun: "akşam",
      yemekAdi: "pide",
      kalori: 250,
    },
    {
      gun: "çarşamba",
      ogun: "akşam",
      yemekAdi: "çorba-salata",
      kalori: 200,
    },
    {
      gun: "perşembe",
      ogun: "akşam",
      yemekAdi: "makarna",
      kalori: 350,
    },
    {
      gun: "cuma",
      ogun: "akşam",
      yemekAdi: "balık",
      kalori: 150,
    },
  ];

  return (
    <div>
      {gunlukMenuler.map((gunluk, index) => {
        return <MenuKart key={index} menuler={gunluk} />;
      })}
    </div>
  );
};
