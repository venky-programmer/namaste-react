const addWatermark = async (inputPath, outputPath, watermarkText) => {
  try {
    const numberOfWatermarks = 9; // Total number of watermarks
    const gap = 100; // Gap between watermarks
    const watermarkBuffers = [];

    // Create watermark SVG for each instance
    for (let i = 0; i < numberOfWatermarks; i++) {
      const yPosition = (i * gap) + 150; // Calculate y position for each watermark
      const watermarkBuffer = Buffer.from(
        `<svg width='1200' height='1000' xmlns='https://www.w3.org/2000/svg'>
          <rect width='100%' height='100%' fill='rgba(0,0,0,0)'/>
          <text x='50%' y='${yPosition}' dominant-baseline='middle' text-anchor='middle' font-size='150' fill='white' opacity='0.6'>
            ${watermarkText}
          </text>
         </svg>`
      );
      watermarkBuffers.push(watermarkBuffer);
    }

    // Create composite array for sharp
    const composites = watermarkBuffers.map(buffer => ({ input: buffer, gravity: "center" }));

    await sharp(inputPath)
      .composite(composites)
      .toFile(outputPath);
  } catch (error) {
    logger.error("Error adding watermark:" + error.message);
    throw new Error(`Error adding watermark: ${error.message}`);
  }
};
