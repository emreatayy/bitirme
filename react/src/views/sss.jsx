import React, {useState} from "react";
import "../../src/styles/defaultLayout.css"

export default function sss() {


  return (
    <>
      <div className="faq">
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label className="label" htmlFor="first">Soru 1</label>
            <div className="content">
              <p>
                Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha
                fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir.
                Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir
                ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve
                filmler ekleniyor!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label className="label" htmlFor="second">Soru 2</label>
            <div className="content">
              <p>
                Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda
                sabit bir aylık ücretle izleyin. Aylık plan ücretleri 63,99 TL ile 130,99 TL arasında değişmektedir.
                Ekstra maliyet yok, sözleşme yok.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label className="label" htmlFor="third">Soru 3</label>
            <div className="content">
              <p>
                İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı
                TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını
                sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.
                Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve
                internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde
                götürün.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label className="label" htmlFor="fourth">Soru 4</label>
            <div className="content">
              <p>
                Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki
                tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya
                durdurun.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label className="label" htmlFor="fifth">Soru 5</label>
            <div className="content">
              <p>
                Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal
                içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman,
                istediğiniz kadar çok şey izleyin.
              </p>
              <p>
                asd
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label className="label" htmlFor="sixth">Soru 6</label>
            <div className="content">
              <p>
                Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri
                kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir.
                Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği
                içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli
                içerikleri engelleyebilirsiniz.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
