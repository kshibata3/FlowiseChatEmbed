// src/services/metadataService.js

const fetchMetadata = async (url) => {
  try {
    const response = await fetch(`http://localhost:8080/metadata?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching metadata:', error);
    throw error; // Re-throw to handle it in the calling code
  }
};

export default fetchMetadata;
