export const formatAttribute = (attribute) => {
  const { text, entities } = attribute;
  let returnAttribute = '';
  for (let alphabet of text) {
    if (alphabet.toString() !== '{' && alphabet.toString() !== '}') {
      returnAttribute += alphabet;
      continue;
    } else if (alphabet === '}') continue;
    else {
      if (!entities.length) return false;
      const { url, text, color, font_style } = entities[0];
      returnAttribute += `<a href="${url}" style="color: ${color}; font-style: ${font_style}">${text}</a>`;
      entities.shift();
    }
  }
  return returnAttribute;
};
