let text =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque in efficitur nulla. sed porttitor eros atsodales mattis. nulla a sapien ut lectus molestie fringilla eu ut tortor. fusce vestibulum ullamcorper odised ultrices. vivamus quam dui, ullamcorper vel massa nec, laoreet vehicula lacus. etiam efficitsollicitudin massa sit amet vulputate. ut non enim nec augue interdum consectetur. vivamus et dutincidunt, tempus nibh ut, lobortis lorem. nullam nec sem eget nulla varius fringilla. curabitur tincidunt doloret velit tempor ullamcorper. phasellus at erat id est lacinia imperdiet et sed tortor. aenean at eros lacinia,dapibus dolor in, vehicula mi. suspendisse finibus sem metus, at consectetur est sagittis at. nammalesuada dictum finibus. nulla condimentum quam lorem, ac interdum felis rhoncus quis. suspendissefringilla, orci sed malesuada dictum, massa elit volutpat justo, at vehicula ligula erat id velit. morbi a iaculisligula. aliquam quis ex vitae sapien ullamcorper tempor. suspendisse nisi ex, gravida vel nibh et, molestievulputate metus. nam imperdiet magna ut congue iaculis. nam vehicula sagittis nisi, efficitur consecteturerat dignissim eu. vestibulum vitae magna ante. praesent at pellentesque metus, in volutpat massa. duisodio erat, pulvinar non nibh eget, euismod suscipit urna. nulla semper convallis hendrerit. phasellus luctus,ligula ac semper laoreet, ligula lacus pretium mauris, eget accumsan enim ligula a augue. vivamussollicitudin dapibus vulputate. sed vitae orci ac neque pretium semper sed at mi. morbi egestaspellentesque lacus quis pretium.";

let wordsChange = [
  { sed: "UNO" },
  { vehicula: "DOS" },
  { vivamus: "TRES" },
  { nam: "CUATRO" },
  { eros: "CINCO" },
  { vestibulum: "SEIS" },
  { quam: "SIETE" },
  { sollicitudin: "OCHO" },
  { finibus: "NUEVE" },
  { dictum: "DIEZ" },
  { morbi: "ONCE" },
];

//const conteoReemplazos = {}

function contarOcurrencias(texto, palabra) {
  const regex = new RegExp(palabra, "g");
  return texto.match(regex) || [].length;
}

for (const word of wordsChange) {
  for (const [oldWord, newWord] of Object.entries(word)) {
    const conteoAntes = contarOcurrencias(text, oldWord);
    console.log(`${oldWord}: ${conteoAntes.length}`);
    text = text.replaceAll(oldWord, newWord);
  }
}

let showText = document.querySelector("#contenedor-texto");
showText.append(text);


