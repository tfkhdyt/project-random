const generateRandomNim = () => {
  const nim = String(Math.round(Math.random() * 1e5));
  if (nim[0] == '0' || nim.length != 5) generateRandomNim();
  else return '3012' + nim;
};

module.exports = generateRandomNim;
