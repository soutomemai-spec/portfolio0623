document.addEventListener("DOMContentLoaded", () => {

  const panels = document.querySelectorAll(".panel");
  const mainSite = document.getElementById("mainSite");

  // ★ 最初から表示
  if (mainSite) {
    mainSite.classList.add("show");
  }

  // スクロールでパネル表示
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  panels.forEach(panel => observer.observe(panel));


  // 🔽 モーダル系
  const data = [
    {title:"🌱 人見知りからのスタート",img:"foto/hoikuenn.jpg",text:`最初は不安でいっぱいでした。\n少しずつ、新しい世界が広がりました。`},
    {title:"🎒 いろんなことに挑戦",img:"foto/shougaku.jpg",text:`いろんなことに挑戦しました。\nできることが増えるのが楽しくなりました。`},
    {title:"🏐 部活に本気で向き合う",img:"foto/Ityuugaku.jpg",text:`バレーに本気で向き合いました。\n悔しさも全部、力になりました。`},
    {title:"🤔 迷いの中で見つけたもの",img:"foto/koukou.jpg",text:`普通科に進学しました。\n情報の授業でパソコンに触れ、\nITに興味を持ちました。`},
    {title:"💻 ITの世界へ",img:"foto/sennmonngakusei.jpg",text:`情報に興味を持ち、この道を選びました。\n現在ITの基礎を学習中です。`}
  ];

  const aboutData = [
    {title:"自己紹介",img:"foto/jikoshoukai (1).jpg",text:`📍 栃木県栃木市出身\n🚀  明るくポジティブな性格\n`},
    {title:"強み",img:"foto/tuyomi (1).jpg",text:`🧩継続力：出席率<span class="highlight">100%</span>を継続中  \n→ 毎日コツコツ努力を積み重ねています。\n<span class="sports">体育祭実行委員</span>・<span class="culture">文化祭実行委員</span>`},
    {
      title:"スキル",
      img:"foto/sukil (2).jpg",
      text: `
<div style="font-size:13px; line-height:1.2; text-align:left;">
・Webクリエイター能力試験 エキスパート<br>
・情報検定 プログラムスキル<br>
・システムデザインスキル
</div>
`
    }
  ];

  window.openModal = function(index, type="story"){
    document.getElementById("modal").style.display="flex";
    const target = type==="about"?aboutData:data;
    document.getElementById("modal-title").innerHTML=target[index].title;
    document.getElementById("modal-img").src=target[index].img;
    document.getElementById("modal-text").innerHTML=target[index].text;
  }

  window.closeModal = function(){
    document.getElementById("modal").style.display="none";
  }

  window.outsideClose = function(e){
    if(e.target.id==="modal") closeModal();
  }

  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  document.querySelectorAll(".panel span").forEach(el => {
    const text = el.textContent;
    el.textContent = "";

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${i * 0.08}s`;
      el.appendChild(span);
    });
  });

});