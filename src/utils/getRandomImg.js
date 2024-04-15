export const getRandomImg = (arrayOfImages) => {
  const randomNum = Math.floor(Math.random() * arrayOfImages.length);
  console.log(randomNum);
  return arrayOfImages[randomNum];
}