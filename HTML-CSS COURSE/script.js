const videos = [
  {
    title: "Belajar HTML dalam 10 Menit",
    thumbnail: "https://i.ytimg.com/vi/dD2EISBDjWM/hqdefault.jpg",
  },
  {
    title: "Tutorial CSS Grid & Flexbox",
    thumbnail: "https://i.ytimg.com/vi/jV8B24rSN5o/hqdefault.jpg",
  },
  {
    title: "JavaScript Dasar untuk Pemula",
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  },
];

function loadVideos(videoList) {
  const container = document.getElementById("videoGrid");
  container.innerHTML = "";
  videoList.forEach((video) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" />
      <div class="video-info">
        <h4>${video.title}</h4>
        <p>Channel XYZ</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function searchVideos() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = videos.filter((video) =>
    video.title.toLowerCase().includes(query)
  );
  loadVideos(filtered);
}

window.onload = () => {
  loadVideos(videos);
};
