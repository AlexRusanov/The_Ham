/*
 Our Services Section script
 */
const ourServicesTabs = document.querySelector(".our-services-tabs");

const addDataAtrToOurServicesTabs = () => {
    const ourServicesTitles = document.querySelectorAll(".our-services-title");

    ourServicesTitles.forEach((elem) => {
        elem.setAttribute("data-content", `${elem.innerText.toLowerCase()}`)
    });
};

addDataAtrToOurServicesTabs();

//Services Tabs onclick listener
let activeServiceTab;

ourServicesTabs.onclick = (event) => {
    const tabsItemsContent = document.querySelectorAll(".tabs-item-content");

    if (activeServiceTab && activeServiceTab !== event.target) {
        activeServiceTab.classList.remove('our-services-activetitle');

        tabsItemsContent.forEach((elem) => {
            if (activeServiceTab.getAttribute("data-content") === elem.getAttribute("data-content")) {
                elem.style.display = "none";
            }
        })
    }

    event.target.classList.add('our-services-activetitle');
    activeServiceTab = event.target;


    tabsItemsContent.forEach((elem) => {
        if (activeServiceTab.getAttribute("data-content") === elem.getAttribute("data-content")) {
            elem.style.display = "flex";
        }
    })
};

/*
 Our Amazing Work Section script
 */
const amazingWorkTabs = document.querySelector(".amazing-work-tabs");

const addDataAtrToAmazingWorkTabs = () => {
    const amazingWorkTitles = document.querySelectorAll(".amazing-work-titles");

    amazingWorkTitles.forEach((elem) => {
        elem.setAttribute("data-img", `${elem.innerText.toLowerCase()}`)
    });
};

addDataAtrToAmazingWorkTabs();

//Work Tabs onclick listener
let activeWorkTab = document.querySelector(".amazing-work-titles[data-img='all']");
activeWorkTab.classList.add("amazing-work-activetitles");

amazingWorkTabs.onclick = (event) => {
    const workGalleryItems = document.querySelectorAll(".work-gallery-item");

    if (activeWorkTab && activeWorkTab !== event.target) {
        activeWorkTab.classList.remove('amazing-work-activetitles');

        workGalleryItems.forEach((elem) => {
            if (elem.getAttribute("data-img") !== event.target.getAttribute("data-img") && elem.style.display !== "none") {
                elem.style.display = "none";
            }
        });
    }

    event.target.classList.add('amazing-work-activetitles');
    activeWorkTab = event.target;

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

loadMoreBtn.onclick = (event) => {
    for (let i = 13; i < 25; i++) {
        let img = document.createElement("img");

        img.setAttribute("src", `img/Amazing_work/amazing-work-${i}.png`);
        img.setAttribute("alt", "amazing work img NOT FOUND");
        img.setAttribute("class", "work-gallery-item");
        switch (i) {
            case 13:
            case 17:
            case 23:
                    img.setAttribute("data-img", "wordpress");
                    break;
            case 16:
            case 21:
            case 22:
                    img.setAttribute("data-img", "landing pages");
                    break;
            case 15:
            case 18:
            case 19:
                    img.setAttribute("data-img", "web design");
                    break;
            case 14:
            case 20:
            case 24:
                    img.setAttribute("data-img", "graphic design");
                    break;
        }

        if (activeWorkTab.getAttribute("data-img") === "all" || activeWorkTab.getAttribute("data-img") === img.getAttribute("data-img")) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

        amazingWorkGallery.appendChild(img);
    }

    loadMoreBtn.style.display = "none";
};

//Work Img hover listener
// const workGalleryItemHover = document.createElement("div"),
//       galleryItemHoverLink = document.createElement("div"),
//       galleryItemHoverZoom = document.createElement("div"),
//       galleryItemHoverBoldText = document.createElement("p"),
//       galleryItemHoverText = document.createElement("p");
//
// workGalleryItemHover.classList.add("work-gallery-item-hover");
// galleryItemHoverLink.classList.add("gallery-item-hover-link");
// galleryItemHoverZoom.classList.add("gallery-item-hover-zoom");
// galleryItemHoverBoldText.classList.add("green-bold-text", "pad-t30-b12");
// galleryItemHoverBoldText.innerText = ("CREATIVE DESIGN");
// galleryItemHoverText.classList.add("gallery-item-hover-text");
//
// workGalleryItemHover.appendChild(galleryItemHoverLink);
// workGalleryItemHover.appendChild(galleryItemHoverZoom);
// workGalleryItemHover.appendChild(galleryItemHoverBoldText);
// workGalleryItemHover.appendChild(galleryItemHoverText);
//
// let hoveredImg = null;
//
// amazingWorkGallery.addEventListener("mouseover", function (event) {
//     if (hoveredImg) {
//         return;
//     }
//
//     let target = event.target;
//
//     while (target === this) {
//         if (target === workGalleryItemHover || target.parentNode === workGalleryItemHover || target.tagName === 'div' || target.tagName === 'p') {
//             break;
//         }
//     }
//
//     hoveredImg = target;
//
//     galleryItemHoverText.innerText = hoveredImg.getAttribute("data-img");
//     this.replaceChild(workGalleryItemHover, hoveredImg);
// });
//
// amazingWorkGallery.addEventListener("mouseout", function (event) {
//     if (!hoveredImg) {
//         return;
//     }
//
//     let relatedTarget = event.relatedTarget;
//     if (relatedTarget) {
//         while (relatedTarget === workGalleryItemHover || relatedTarget.parentNode === workGalleryItemHover || relatedTarget.tagName === 'div' || relatedTarget.tagName === 'p') {
//             break;
//         }
//     }
//
//     this.replaceChild(hoveredImg, workGalleryItemHover);
//     hoveredImg = null;
// });