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