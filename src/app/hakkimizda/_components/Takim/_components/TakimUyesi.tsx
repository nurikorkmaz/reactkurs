interface Props {
  adsoyad: string;
  gorevi: string;
}

export const TakimUyesi = ({ adsoyad, gorevi }: Props) => {
  return (
    <div>
      <img src="resim" alt="" />
      <div>{adsoyad}</div>
      <div>{gorevi}</div>
    </div>
  );
};
