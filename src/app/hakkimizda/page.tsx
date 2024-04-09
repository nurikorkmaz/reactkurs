import { Bizkimiz } from "./_components/Bizkimiz";
import { Hero } from "./_components/Hero";
import { Sss } from "./_components/Sss";
import { Takim } from "./_components/Takim";

export default function Hakkimizda() {
  return (
    <div>
      <div>
        <Hero
          baslik="Başlık"
          altBaslik="jbhsdkfgbkjhbasskbfkbasfbhjk"
          resimAlt="melody resim"
          resimSrc="/melody.jpg"
          cta="daha fazla"
        />
      </div>
      <br />
      <div>
        <Takim adsoyad="Nuri Korkmaz" gorevi="öğrenci" />
      </div>
      <br />
      <div>
        <Bizkimiz
          tarihceBaslik="Tarihçe"
          tarihceAciklama="kjadkfbkjbdkjbfkjnskjghdanbbjndlknblk"
          referanslarBaslik="Referanslar"
          referanslar="addj land lkandv "
        />
      </div>
      <br />
      <div>
        <Sss sorular="sen kimsin" cevaplar="asıl sen kimsin" />
      </div>
    </div>
  );
}
