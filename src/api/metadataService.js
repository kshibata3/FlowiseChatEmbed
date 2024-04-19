const fetchMetadata = async (url) => {
  try {
    const apiKey = '500ea4641f1b0acfc3e91eed823c3be2'; // Replace 'YOUR_API_KEY' with your actual LinkPreview API key
    const response = await fetch(`https://api.linkpreview.net/?key=${apiKey}&q=${encodeURIComponent(url)}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Check if data contains the necessary fields, assume some might be missing
    return {
      title: data.title || 'No title available',
      image: data.image || 'default_image.png', // Specify a default image path if none is found
      description: data.description || 'No description available',
      url: data.url || url, // Fall back to the original URL if none is provided
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    throw error; // Re-throw to handle it in the calling code
  }
};

export default fetchMetadata;
