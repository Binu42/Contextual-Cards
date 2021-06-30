export const getGradient = (degree, colors) => {
  let gradient = `linear-gradient(${degree ? degree : 0}deg,`;
  let i = 1;
  for (let color of colors) {
    if (i++ !== colors.length) gradient += `${color}, `;
    else gradient += `${color})`;
  }
  return gradient;
};
