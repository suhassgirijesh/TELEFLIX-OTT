function loadMovie() {
    const input = document.getElementById("gdriveLink").value;
    const videoIdMatch = input.match(/[-\w]{25,}/);
    if (videoIdMatch) {
      const videoId = videoIdMatch[0];
      const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
      document.getElementById("videoPlayer").src = embedUrl;
    } else {
      alert("Please enter a valid Google Drive share link.");
    }
  }
  