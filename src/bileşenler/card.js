import axios from "axios";


const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const container=document.createElement("div");
container.setAttribute("class","card")


const baslik=document.createElement("div");
baslik.setAttribute("class","headline");
baslik.textContent=makale.anabaslik;
container.append(baslik)

const yazar=document.createElement("div");
yazar.setAttribute("class","author");
container.append(yazar)

const imgcontainer=document.createElement("div");
imgcontainer.setAttribute("class","img-container");
yazar.append(imgcontainer)

const image=document.createElement("img");
image.setAttribute("src",makale.yazarFoto);
imgcontainer.append(image)

const kimyazdi=document.createElement("span");
kimyazdi.textContent= makale.yazarAdi + "tarafından";
yazar.append(kimyazdi)

container.addEventListener("click",(e)=>{console.log(container.querySelector(".headline").textContent)})

return container;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const tumcard=document.querySelector(secici);
axios
.get("http://localhost:5001/api/makaleler")
.then((response)=>{
  console.log(response);
for(const [key,value] of Object.entries(response.data.makaleler)){
  value.forEach((e)=>{
  tumcard.append(Card(e));  
  })
}
  
})
}

export { Card, cardEkleyici }

