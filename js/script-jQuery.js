/*
 Our Services Section script
 */
const $ourServicesTitles = $(".our-services-title");

$ourServicesTitles.each(function() {
    $(this).attr("data-content", $(this).text().toLowerCase())
});

//Services Tabs onclick listener
let $activeServiceTab;

$ourServicesTitles.click(function (event) {
    if ($activeServiceTab && $activeServiceTab !== event.target) {
        $activeServiceTab.removeClass('our-services-activetitle');

        $('.tabs-item-content[data-content=' + '"' + $activeServiceTab.attr("data-content") + '"' + ']').hide();
    }

    $activeServiceTab = $(event.target);
    $activeServiceTab.addClass('our-services-activetitle');

    $('.tabs-item-content[data-content=' + '"' + $activeServiceTab.attr('data-content') + '"' + ']').css("display", "flex");
});

/*
 Our Amazing Work Section script
 */
const $amazingWorkTitles = $(".amazing-work-titles");

$amazingWorkTitles.each(function () {
    $(this).attr("data-img", $(this).text().toLowerCase())
});

//Work Tabs onclick listener
let $activeWorkTab = $(".amazing-work-titles[data-img='all']");
$activeWorkTab.addClass("amazing-work-activetitles");

$amazingWorkTitles.click(function (event) {
    if ($activeWorkTab && $activeWorkTab !== event.target) {
        $activeWorkTab.removeClass('amazing-work-activetitles');

        $(".work-gallery-item").not("[data-img=" + "'" + $(event.target).attr('data-img') + "'" + "], :hidden").hide();
    }

    $activeWorkTab = $(event.target);
    $activeWorkTab.addClass('amazing-work-activetitles');

    if ($activeWorkTab.attr("data-img") === "all") {
        $('.work-gallery-item').show()
    } else {
        $('.work-gallery-item[data-img=' + '"' + $activeWorkTab.attr("data-img") + '"' + ']').show();
    }
});

//Work Load More Btn onclick listener
const $loadMoreBtn = $(".load-more-btn"),
    $amazingWorkGallery = $(".amazing-work-gallery");

let $imgToBeAdded;

$loadMoreBtn.click(function () {
    for (let i = 13; i < 25; i++) {
        switch (i) {
            case 13:
            case 17:
            case 23:
                $amazingWorkGallery.append(`<img src="img/Amazing_work/amazing-work-${i}.png" alt="amazing work img NOT FOUND" class="work-gallery-item" data-img="wordpress">`);
                break;
            case 16:
            case 21:
            case 22:
                $amazingWorkGallery.append(`<img src="img/Amazing_work/amazing-work-${i}.png" alt="amazing work img NOT FOUND" class="work-gallery-item" data-img="landing pages">`);
                break;
            case 15:
            case 18:
            case 19:
                $amazingWorkGallery.append(`<img src="img/Amazing_work/amazing-work-${i}.png" alt="amazing work img NOT FOUND" class="work-gallery-item" data-img="web design">`);
                break;
            case 14:
            case 20:
            case 24:
                $amazingWorkGallery.append(`<img src="img/Amazing_work/amazing-work-${i}.png" alt="amazing work img NOT FOUND" class="work-gallery-item" data-img="graphic design">`);
                break;
        }

        if ($activeWorkTab.attr("data-img") === "all" || $activeWorkTab.attr("data-img") === $(".amazing-work-gallery img:last").attr("data-img")) {
            $(".amazing-work-gallery img:last").show();
        } else {
            $(".amazing-work-gallery img:last").hide();
        }
    }

    $loadMoreBtn.hide();
});

//Work Img hover listener
let $hoveredImg = null;

$amazingWorkGallery.mouseover(function (event) {
    if ($hoveredImg) {
        return;
    }

    $hoveredImg = $(event.target);
    let dataImgAttrOfHoveredImg = $hoveredImg.attr("data-img"),
        workGalleryItemHover = `<div class="work-gallery-item-hover">` +
            `<div class="gallery-item-hover-link"></div>` +
            `<div class="gallery-item-hover-zoom"></div>` +
            `<p class="green-bold-text pad-t30-b12" >CREATIVE DESIGN</p>` +
            `<p class="gallery-item-hover-text">` + `${dataImgAttrOfHoveredImg}` + `</p>` +
            `</div>`;
    if ($hoveredImg.is(".work-gallery-item")) {
        $hoveredImg.replaceWith(workGalleryItemHover);
    }
});

$amazingWorkGallery.mouseout(function (event) {
    if (!$hoveredImg) {
        return;
    }

    let $relatedTarget = $(event.relatedTarget);

    if ($relatedTarget !== $(".work-gallery-item-hover") && $relatedTarget.parent() !== $(".work-gallery-item-hover")) {
        $(".work-gallery-item-hover").replaceWith($hoveredImg);
        $hoveredImg = null;
    }
});

/*
 What People Say About theHam Section script
 */
//Carousel
let $carouselActivePhoto = $(".carousel-photo[data-photo='photo-1']"),
    $carouselActiveComment = $(".people-say-item[data-photo='photo-1']");

$carouselActivePhoto.addClass("carousel-active-photo");
$carouselActiveComment.show();

const clickOnCarouselButtons = ($button) => {
    $button.css({"background-color": "#18cfab", "border-color": "#18cfab"});
    setTimeout(() => {
        $button.css({"background-color": "", "border-color": ""});
    }, 150)
};

const hideCarouselItem = () => {
    $carouselActivePhoto.removeClass("carousel-active-photo");
    $carouselActiveComment.fadeOut(500);
};

const showCarouselItem = () => {
    $carouselActiveComment = $('.people-say-item[data-photo=' + '"' + $carouselActivePhoto.attr("data-photo") + '"' + ']');
    $carouselActiveComment.delay(500).fadeIn(500);
};

$(".carousel-button").click(function (event) {
    if ($(event.target).hasClass("carousel-left-button")) {
        if ($carouselActivePhoto.prev() && $carouselActivePhoto.prev().hasClass("carousel-photo")) {
            hideCarouselItem();

            $carouselActivePhoto.prev().addClass("carousel-active-photo");
            $carouselActivePhoto = $carouselActivePhoto.prev();
            showCarouselItem();
        }
        clickOnCarouselButtons($(event.target));
    }

    if ($(event.target).hasClass("carousel-right-button")) {
        if ($carouselActivePhoto.next() && $carouselActivePhoto.next().hasClass("carousel-photo")) {
            hideCarouselItem();

            $carouselActivePhoto.next().addClass("carousel-active-photo");
            $carouselActivePhoto = $carouselActivePhoto.next();
            showCarouselItem();
        }
        clickOnCarouselButtons($(event.target));
    }
});

$(".carousel-photo").click(function (event) {
    hideCarouselItem();

    $(event.target).addClass("carousel-active-photo");
    $carouselActivePhoto = $(event.target);
    showCarouselItem();
});

