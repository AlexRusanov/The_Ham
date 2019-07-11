/*
 Our Services Section script
 */
const ourServicesTabs = document.querySelector(".our-services-tabs");

const addDataAtrToTabs = (tabsList, dataAtr) => {
    tabsList.forEach((elem) => elem.setAttribute(dataAtr, `${elem.innerText.toLowerCase()}`))
};

const hideTabAndContent = (activeTab, tabsContentList, activeTabClass, dataAtr, event) => {
    if (activeTab && activeTab !== event.target) {
        activeTab.classList.remove(activeTabClass);

        tabsContentList.forEach((elem) => {
            if (event.target.getAttribute(dataAtr) !== elem.getAttribute(dataAtr) && elem.style.display !== "none") {
                elem.style.display = "none";
            }
        })
    }
};

const makeTabActive = (activeTabClass, event) => {
    event.target.classList.add(activeTabClass);
    return event.target;
};

//Services Tabs onclick listener
addDataAtrToTabs(document.querySelectorAll(".our-services-title"), "data-content");

let activeServiceTab = document.querySelector(".our-services-title");
activeServiceTab.classList.add('our-services-activetitle');

const tabsItemsContent = document.querySelectorAll(".tabs-item-content");
tabsItemsContent[0].style.display = "flex";

ourServicesTabs.onclick = (event) => {
    hideTabAndContent(activeServiceTab, tabsItemsContent, 'our-services-activetitle', "data-content", event);

    activeServiceTab = makeTabActive('our-services-activetitle', event);

    tabsItemsContent.forEach((elem) => {
        if (activeServiceTab.getAttribute("data-content") === elem.getAttribute("data-content")) {
            elem.style.display = "flex";
        }
    })
};

/*
 Our Amazing Work Section script
 */
addDataAtrToTabs(document.querySelectorAll(".amazing-work-titles"), "data-img");

const amazingWorkTabs = document.querySelector(".amazing-work-tabs");

//Work Tabs onclick listener
let activeWorkTab = document.querySelector(".amazing-work-titles[data-img='all']");
activeWorkTab.classList.add("amazing-work-activetitles");

amazingWorkTabs.onclick = (event) => {
    const workGalleryItems = document.querySelectorAll(".work-gallery-item");

    hideTabAndContent(activeWorkTab, workGalleryItems, 'amazing-work-activetitles', "data-img", event);

    activeWorkTab = makeTabActive('amazing-work-activetitles', event);

    workGalleryItems.forEach((elem) => {
        if (activeWorkTab.getAttribute("data-img") === elem.getAttribute("data-img") && elem.style.display !== "block") {
            elem.style.display = "block";
        } else if (activeWorkTab.getAttribute("data-img") === "all") {
            elem.style.display = "block";
        }
    })
};

//Work Load More Btn onclick listener
const loadMoreBtn = document.querySelector(".load-more-btn"),
      amazingWorkGallery = document.querySelector(".amazing-work-gallery");

loadMoreBtn.onclick = () => {
    const additionImgAttributes = [{"src": "img/Amazing_work/amazing-work-13.png", "data-img": "wordpress"},
                                   {"src": "img/Amazing_work/amazing-work-17.png", "data-img": "wordpress"},
                                   {"src": "img/Amazing_work/amazing-work-23.png", "data-img": "wordpress"},
                                   {"src": "img/Amazing_work/amazing-work-16.png", "data-img": "landing pages"},
                                   {"src": "img/Amazing_work/amazing-work-21.png", "data-img": "landing pages"},
                                   {"src": "img/Amazing_work/amazing-work-22.png", "data-img": "landing pages"},
                                   {"src": "img/Amazing_work/amazing-work-15.png", "data-img": "web design"},
                                   {"src": "img/Amazing_work/amazing-work-18.png", "data-img": "web design"},
                                   {"src": "img/Amazing_work/amazing-work-19.png", "data-img": "web design"},
                                   {"src": "img/Amazing_work/amazing-work-14.png", "data-img": "graphic design"},
                                   {"src": "img/Amazing_work/amazing-work-20.png", "data-img": "graphic design"},
                                   {"src": "img/Amazing_work/amazing-work-24.png", "data-img": "graphic design"}];

    additionImgAttributes.forEach((elem) => {
        let img = document.createElement("img");

        img.setAttribute("alt", "amazing work img NOT FOUND");
        img.setAttribute("class", "work-gallery-item");

        for (let key in elem) {
            img.setAttribute(key, elem[key]);
        }

        if (activeWorkTab.getAttribute("data-img") === "all" || activeWorkTab.getAttribute("data-img") === img.getAttribute("data-img")) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

        amazingWorkGallery.appendChild(img);
    });

    loadMoreBtn.style.display = "none";
};

//Work Img hover listener
const workGalleryItemHover = document.createElement("div");

workGalleryItemHover.classList.add("work-gallery-item-hover");
workGalleryItemHover.insertAdjacentHTML("afterBegin", '<div class="gallery-item-hover-link"></div>' +
    '<div class="gallery-item-hover-zoom">' +
    '</div><p class="green-bold-text pad-t30-b12">CREATIVE DESIGN</p>' +
    '<p class="gallery-item-hover-text"></p>');

let hoveredImg = null;

amazingWorkGallery.addEventListener("mouseover", function (event) {
    if (hoveredImg) {
        return;
    }

    hoveredImg = event.target;

    this.replaceChild(workGalleryItemHover, hoveredImg);
    document.querySelector(".gallery-item-hover-text").innerText = hoveredImg.getAttribute("data-img");
});

amazingWorkGallery.addEventListener("mouseout", function (event) {
    if (!hoveredImg) {
        return;
    }

    let relatedTarget = event.relatedTarget;

    if (relatedTarget !== workGalleryItemHover && relatedTarget.parentNode !== workGalleryItemHover) {
        this.replaceChild(hoveredImg, workGalleryItemHover);
        hoveredImg = null;
    }
});

/*
 What People Say About theHam Section script
 */
//Carousel
const peopleSayCarousel = document.querySelector(".people-say-carousel"),
      peopleSeyItem = document.querySelectorAll(".people-say-item");

const carouselLeftButton = document.querySelector(".carousel-left-button"),
    carouselRightButton = document.querySelector(".carousel-right-button");

carouselLeftButton.style.display = "none";

let carouselActivePhoto = document.querySelector(".carousel-photo"),
    carouselActiveComment = peopleSeyItem[0];
carouselActivePhoto.classList.add("carousel-active-photo");
carouselActiveComment.style.display = "block";
carouselActiveComment.style.opacity = "1";

const hideCarouselComment = () => {
    carouselActiveComment.style.display = "none";
    carouselActiveComment.style.opacity = "0";
};

const showCarouselComment = () => {
    peopleSeyItem.forEach((elem) => {
        if (elem.getAttribute("data-photo") === carouselActivePhoto.getAttribute("data-photo")) {
            carouselActiveComment = elem;
        }
    });

    carouselActiveComment.style.display = "block";
    let opacity = 0;
    let timerId = setInterval(() => {
        opacity += 0.1;
        if (opacity > 0.9) {
            Math.round(opacity);
            clearInterval(timerId);
        }
        carouselActiveComment.style.opacity = `${opacity}`;
    }, 50)
};

const clickOnCarouselButtons = (button) => {
    button.style.backgroundColor = "#18cfab";
    button.style.borderColor = "#18cfab";
    setTimeout(() => {
        button.style.backgroundColor = "";
        button.style.borderColor = "";
    }, 150)
};

peopleSayCarousel.onclick = (event) => {
    if (event.target.classList.contains("carousel-left-button")) {
        if (carouselActivePhoto.previousElementSibling && !carouselActivePhoto.previousElementSibling.classList.contains("carousel-left-button")) {
            carouselActivePhoto.classList.remove("carousel-active-photo");
            hideCarouselComment();

            carouselActivePhoto.previousElementSibling.classList.add("carousel-active-photo");
            carouselActivePhoto = carouselActivePhoto.previousElementSibling;
            showCarouselComment();
        }
        clickOnCarouselButtons(event.target);
    }

    if (event.target.classList.contains("carousel-right-button")) {
        if (carouselActivePhoto.nextElementSibling && !carouselActivePhoto.nextElementSibling.classList.contains("carousel-right-button")) {
            carouselActivePhoto.classList.remove("carousel-active-photo");
            hideCarouselComment();

            carouselActivePhoto.nextElementSibling.classList.add("carousel-active-photo");
            carouselActivePhoto = carouselActivePhoto.nextElementSibling;
            showCarouselComment();
        }
        clickOnCarouselButtons(event.target);
    }

    if (event.target.classList.contains("carousel-photo")) {
        carouselActivePhoto.classList.remove("carousel-active-photo");
        hideCarouselComment();

        event.target.classList.add("carousel-active-photo");
        carouselActivePhoto = event.target;
        showCarouselComment();
    }

    if (carouselActivePhoto.classList.contains("photo-1") && carouselLeftButton.style.display !== "none") {
        carouselLeftButton.style.display = "none";
    } else {
        carouselLeftButton.style.display = "block";
    }

    if (carouselActivePhoto.classList.contains("photo-4") && carouselRightButton.style.display !== "none") {
        carouselRightButton.style.display = "none";
    } else {
        carouselRightButton.style.display = "block";
    }
};