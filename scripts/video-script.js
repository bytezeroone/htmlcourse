let videosHTML = '';

videos.forEach((video) => {
    videosHTML += `
        <div class="video-preview">
        <div class="thumbnail-row">
            <img class="thumbnail" src="${video.image}" alt="">
                <div class="video-time">14:20</div>
        </div>
        <div class="video-info-grid">
            <div class="chanel-picture">
                <img class="profile-picture" src="${video.avatar}" alt="">
            </div>
            <div class="video-info">
                <p class="video-title">${video.title}
                    <p>
                        <p class="video-author">${video.author}</p>
                        <p class="video-stats">${video.stats.views} &#183; ${video.stats.date}</p>
            </div>
        </div>
    </div>
    `
});
console.log(videosHTML);

document.querySelector('.js-video-grid')
    .innerHTML = videosHTML;




