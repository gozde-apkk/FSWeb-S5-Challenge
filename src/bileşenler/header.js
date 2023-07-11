import axios from "axios";

const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const head=document.createElement("div");
  head.setAttribute("class","header")
  
  
  const tarihkismi=document.createElement("span");
  tarihkismi.setAttribute("class","date");
  tarihkismi.textContent=tarih;
  head.appendChild(tarihkismi)
  
  const anabaslik=document.createElement("h1");
  anabaslik.textContent=baslik;
  head.appendChild(anabaslik)
  
  const paragraf=document.createElement("span");
  paragraf.setAttribute("class","temp");
  paragraf.textContent=yazi;
  head.appendChild(paragraf)
  
  return head;
  
  }


const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
  const eklenti=document.querySelector(secici);
  eklenti.append(Header("Teknoloji Zamanı", "11 Kasım 2022", "teknoloji gezisi"));
  return eklenti;
}

export { Header, headerEkleyici }
