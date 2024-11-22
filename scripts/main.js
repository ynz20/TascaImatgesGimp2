const images = Array.from(document.querySelectorAll("img"));
const infoContainers = Array.from(document.querySelectorAll(".image-info"));

async function getImageInfo(url, imgElement) {
  return new Promise(async (resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = async () => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const format = url.split(".").pop();
        const dimensions = {
          width: img.width,
          height: img.height,
        };
        const alt = imgElement.alt;
        const size = blob.size;

        resolve({ format, dimensions, alt, size });
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = reject;
  });
}

async function displayImageInfo(url, container, imgElement) {
  try {
    const info = await getImageInfo(url, imgElement);
    const formatElement = document.createElement("p");
    formatElement.textContent = `Format: ${info.format}`;
    container.appendChild(formatElement);

    const dimensionsElement = document.createElement("p");
    dimensionsElement.textContent = `Dimensions: ${info.dimensions.width}x${info.dimensions.height}`;
    container.appendChild(dimensionsElement);

    const altElement = document.createElement("p");
    altElement.textContent = `Alt: ${info.alt}`;
    container.appendChild(altElement);

    const sizeInKB = (info.size / 1024).toFixed(2);
    const sizeElement = document.createElement("p");
    sizeElement.textContent = `Size: ${sizeInKB} KB`;
    container.appendChild(sizeElement);

    // Calculate and display savings (estalvi)
    const originalImage = document.querySelector(`img[alt*="Original"]`);
    if (originalImage && originalImage.src !== imgElement.src) {
      const originalInfo = await getImageInfo(originalImage.src, originalImage);
      const estalvi = (
        ((originalInfo.size - info.size) / originalInfo.size) * 100
      ).toFixed(2);
      const estalviElement = document.createElement("p");
      estalviElement.textContent = `Estalvi: ${estalvi}%`;
      container.appendChild(estalviElement);
    }
  } catch (error) {
    console.error(error);
  }
}

images.forEach((img, i) => {
  displayImageInfo(img.src, infoContainers[i], img);
});