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

        // Function to switch icon with fade and scale transition
        function switchIcon(newSrc, newAlt, ariaLabel) {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0)';
            setTimeout(() => {
                icon.src = newSrc;
                icon.alt = newAlt;
                controlButton.setAttribute('aria-label', ariaLabel);
                icon.style.opacity = '1';
                icon.style.transform = 'scale(1)';
            }, 150);
        }

        // Control button click handler
        controlButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (video.paused) {
                video.play();
                switchIcon('/assets/svgs/pause.svg', 'pause icon', 'click to pause video');
            } else {
                video.pause();
                switchIcon('https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/play-right.svg', 'play icon', 'click to play video');
            }
        });

        // If video ends, switch back to play icon
        video.addEventListener('ended', () => {
            switchIcon('https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/play-right.svg', 'play icon', 'click to play video');
        });
    }

    // Call the function to activate the event listeners
    setupVideoControls();
                                