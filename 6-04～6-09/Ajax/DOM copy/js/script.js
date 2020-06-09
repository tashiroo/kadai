const divElement = document.getElementById("root");

const profiles = [
  {
    name: "akira mukai",
    phoneNumber: "xxx-xxxx-xxxx",
    sex: "女性",
    address: "tokyo",
  },
  {
    name: "akira mukai",
    phoneNumber: 09055345359,
    sex: "女性",
    address: "tokyo",
  },
];

 const imgEle = document.createElement("img")
 imgEle.src = "https://api.adorable.io/avatars/285/abott@adorable.png"
 imgEle.classList.add("profile");

  const hTowEle = document.createElement("h2");
  hTowEle.innerText = profiles[0].name;
  hTowEle.classList.add("profile");
  
  const pEle = document.createElement("p");
  pEle.innerText = "電話番号 :"+ profiles[0].phoneNumber;
  pEle.classList.add("profile");

  const pniEle = document.createElement("p");
  pniEle.innerText = "性別 : " + profiles[0].sex;
  pniEle.classList.add("profile");

  const psanEle = document.createElement("p");
  psanEle.innerText = "所在 : " + profiles[0].address;
  psanEle.classList.add("profile");

  const textEle = document.createElement("p");
  textEle.innerText = "こんにちは,これはDOMとコンポネートの練習で作った架空のプロフィールです";
  textEle.classList.add("text");

  const dEle = document.createElement("div");
  dEle.classList.add("profile-div");
  dEle.appendChild(imgEle)
  dEle.appendChild(hTowEle)
  dEle.appendChild(pniEle);
  dEle.appendChild(pEle);
  dEle.appendChild(psanEle);
  dEle.appendChild(textEle);
  divElement.appendChild(dEle);
