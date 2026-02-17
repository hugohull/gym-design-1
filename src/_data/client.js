module.exports = {
    name: "Hugo Hull Web Designs",
    email: "support@hugohull.com",
    phoneForTel: "0116 123 4567",
    phoneFormatted: "(0116) 123-4567",
    address: {
        lineOne: "3 E Gates",
        city: "Leicester",
        state: "Leicestershire",
        zip: "LE1 5YA",
        country: "UK",
        mapLink: "https://www.google.com/maps/place/The+Clock+Tower/@52.6362689,-1.1332372,20z",
    },
    socials: {
        facebook: "https://www.facebook.com/HugoHullWebDesign/",
        x: "https://x.com",
        instagram: "https://www.instagram.com/hugohullwebdesigns/",
        pinterest: "https://www.pinterest.com",
        tiktok: "https://www.tiktok.com/",
        googleProfile: "https://share.google/8Aj7x49Ea33g1wKxB"
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.hugohull.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
