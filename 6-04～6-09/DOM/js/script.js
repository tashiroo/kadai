const divElement = document.getElementById("root");

const nameList = [
  "akira mukai",
  "sadaharu tanaka",
  "mayu kosugi",
  "kyouko koike",
  "kazuha terada",
];
for (let i = 0; i < 5; i++) {
  document.write("<li>");

  document.write(nameList[i]);
  document.write("</li>");
}

