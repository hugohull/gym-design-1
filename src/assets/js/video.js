document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#services-1838 video');

    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
        const playPromise = video.play();

        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
                // Ignore autoplay interruptions from the browser.
            });
        }
    };

    playVideo();

    video.addEventListener('ended', playVideo);
});