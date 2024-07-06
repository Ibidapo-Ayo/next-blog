export const calculateReadTime =(htmlContent, wordsPerMinute = 200) => {
  const words = htmlContent?.split(" ").length;

  const minutes = words / wordsPerMinute;

  return Math.ceil(minutes);
}
