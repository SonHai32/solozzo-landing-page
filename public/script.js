const productOwnerList = [{
        isFirst: true,
        productName: "Tranh để bàn",
        productImage: "./assets/images/carr.png",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
    {
        isFirst: false,
        productName: "Áo thun",
        productImage: "./assets/images/carr.png",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
    {
        isFirst: false,
        productName: "Áo thun",
        productImage: "./assets/images/carr.png",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
    {
        isFirst: false,
        productName: "Móc khóa",
        productImage: "./assets/images/carr.png",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
];

const HEADER_PRODUCTS_URL = "https://shopee.vn/";
const HEADER_ABOUT_URL = "https://shopee.vn/";
const HEADER_SHOP_URL = "https://shopee.vn/";
const SHOPEE_URL = "https://shopee.vn/";
const CHAT_URL = "https://shopee.vn/";
const FACEBOOK_URL = "https://shopee.vn/";
const INS_URL = "https://shopee.vn/";
const YOUTUBE_URL = "https://shopee.vn/";

const BANNER_URLS = [
    "./assets/images/banner1.png",
    "./assets/images/banner2.png",
    "./assets/images/banner2.png",
];

function navigateTo(url) {
    window.open(url);
}

$(document).ready(function() {
    const productOwnerCard = $("#productOwnerCard");
    productOwnerList.forEach((product) => {
        productOwnerCard.append(
            createProductOwner(
                product.productName,
                product.productUrl,
                product.productImage,
                product.isFirst
            )
        );
    });

    $("#scrollTopButton").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: 0,
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
    init();

    function init() {
        setBanner();
        setFooterIconLink();
        setChatButton();
        setHeaderLink();
    }

    function setHeaderLink() {
        $("#headerProduct").on("click", () => {
            window.open(HEADER_PRODUCTS_URL);
        });
        $("#headerAboutUs").on("click", () => {
            window.open(HEADER_ABOUT_URL);
        });
        $("#headerShop").on("click", () => {
            window.open(HEADER_SHOP_URL);
        });
    }

    function setChatButton() {
        $("#chatBox").on("click", () => {
            window.open(CHAT_URL);
        });
    }

    function setBanner() {
        $("#banner1").css("background-image", `url('${BANNER_URLS[0]}`);
        $("#banner2").css("background-image", `url('${BANNER_URLS[1]}`);
        $("#banner3").css("background-image", `url('${BANNER_URLS[2]}`);
    }

    function setFooterIconLink() {
        $("#shopeeLink").on("click", () => {
            window.open(SHOPEE_URL);
        });

        $("#facebookLink").on("click", () => {
            window.open(FACEBOOK_URL);
        });

        $("#insLink").on("click", () => {
            window.open(INS_URL);
        });

        $("#youtubeLink").on("click", () => {
            window.open(YOUTUBE_URL);
        });
    }
});

function createProductOwner(productName, productUrl, productImage, isFirst) {
    const product = `<div onclick="navigateTo('${productUrl}')" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" class="cursor-pointer flex justify-center items-end p-4 w-full aspect-square ${
    isFirst
      ? "bg-primary-2 hover:bg-primary-3 transition-all duration-150 delay-75"
      : "bg-secondary-1"
  }  transition-all duration-150 delay-75">
        <div class="w-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="${productImage}" alt="product">
        </div>
        <div class="flex flex-col w-100">
            <span id="ownerProductName" class="text-2xl ${
              isFirst ? "text-white" : "text-primary-1"
            } font-medium">${productName}</span>
            <div class="flex items-center justify-center">
                <a href="${productUrl}" id="ownerProductLink" class="text-sm ${
    isFirst ? "text-white" : "text-primary-1"
  } font-thin mr-1">MUA NGAY</a>
                <svg class="h-4 w-4 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.6 38.13">
                    <defs>
                        <style>
                            .cls-${isFirst ? "1" : "2"} {
                                fill: #${
                                  isFirst ? "ffffff" : "003e2a"
                                } !important;
                                width: 100%;
                                height: 100%;
                            }
                        </style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class="cls-${isFirst ? "1" : "2"}"
                                d="M2,38.13a2,2,0,0,1-1.41-.59,2,2,0,0,1,0-2.83L35.3,0,70,34.71a2,2,0,0,1-2.82,2.83L35.3,5.66,3.41,37.54A2,2,0,0,1,2,38.13Z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>`;

    return product;
}