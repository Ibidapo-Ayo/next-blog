export const calculateReadTime =(htmlContent, wordsPerMinute = 200) => {
  const textContent = htmlContent.replace(/<[^>]*>/g, "");

  const words = textContent.split(/\s+/).length;

  const minutes = words / wordsPerMinute;

  return Math.ceil(minutes);
}
