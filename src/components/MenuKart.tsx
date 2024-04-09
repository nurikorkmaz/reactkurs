interface yemekListesi {
  gun: string;
  ogun: string;
  yemekAdi: string;
  kalori: number;
}
interface Props {
  menuler: yemekListesi;
}

export const MenuKart = ({ menuler }: Props) => {
  return (
    <div>
      <div>{menuler.gun}</div>
      <div>{menuler.ogun} yemeği</div>
      <div>{menuler.yemekAdi}</div>
      <div>{menuler.kalori} kcal</div>
    </div>
  );
};
