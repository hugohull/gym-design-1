function setupVideoControls() {
        const video = document.querySelector('#services-1838 video');
        const controlButton = document.querySelector('#services-1838 .cs-video-control');
        const icon = controlButton.querySelector('.cs-icon');

        if (!video || !controlButton) {
            console.error('Video controls not found');
            return;
        }

        // Ensure button is clickable
        controlButton.style.pointerEvents = 'auto';

        // Control button click handler
        controlButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (video.paused) {
                video.play();
                icon.src = '/assets/svgs/pause.svg';
                icon.alt = 'pause icon';
                controlButton.setAttribute('aria-label', 'click to pause video');
            } else {
                video.pause();
                icon.src = 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/play-right.svg';
                icon.alt = 'play icon';
                controlButton.setAttribute('aria-label', 'click to play video');
            }
        });

        // If video ends, switch back to play icon
        video.addEventListener('ended', () => {
            icon.src = 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/play-right.svg';
            icon.alt = 'play icon';
            controlButton.setAttribute('aria-label', 'click to play video');
        });
    }

    // Call the function to activate the event listeners
    setupVideoControls();
                                