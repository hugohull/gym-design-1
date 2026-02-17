function initWhyChooseVideo() {
    const section = document.querySelector('#why-choose-1874');
    if (!section) return;

    const video = section.querySelector('video');
    const playButton = section.querySelector('.cs-play');
    if (!video || !playButton) return;

    // Ensure we start paused and the play button is visible
    video.removeAttribute('autoplay');
    video.pause();
    playButton.classList.remove('cs-hide');

    const updatePlayButton = () => {
        if (video.paused) {
            playButton.classList.remove('cs-hide');
        } else {
            playButton.classList.add('cs-hide');
        }
    };

    playButton.addEventListener('click', (event) => {
        event.preventDefault();
        video.play();
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);
}

// Call the function to activate the event listeners
initWhyChooseVideo();
                                
