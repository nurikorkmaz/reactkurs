interface TakimUyesiYapi {
  adi: string;
  yas: number;
}

interface Props {
  uyeninVerisi: TakimUyesiYapi;
}

export const TakimUyesi = ({ uyeninVerisi }: Props) => {
  return (
    <div>
      {uyeninVerisi.adi} {uyeninVerisi.yas}
    </div>
  );
};
