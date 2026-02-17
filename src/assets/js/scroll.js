(function () {
var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) return;

var items = document.querySelectorAll('.reveal');
if (!items.length) return;

var io = new IntersectionObserver(
    function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
    });
    },
    {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
    }
);

items.forEach(function (el) {
    io.observe(el);
});
})();
