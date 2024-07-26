document.addEventListener("DOMContentLoaded", function() {
    const promoItems = document.querySelectorAll(".promo-item");
    const bettingItems = document.querySelectorAll(".betting-item");

    promoItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 500);
    });

    bettingItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
        }, index * 500 + promoItems.length * 500); 
    });
});
