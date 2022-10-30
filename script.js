const productOwnerList = [{
        isFirst: true,
        productName: "Tranh để bàn",
        productImage: "./assets/images/ITEM1.png",
        productUrl: "https://shopee.vn/solozzo",
    },
    {
        isFirst: false,
        productName: "Áo thun",
        productImage: "./assets/images/ITEM1.png",
        productUrl: "https://shopee.vn/solozzo",
    },
    {
        isFirst: false,
        productName: "Móc Khóa",
        productImage: "./assets/images/ITEM1.png",
        productUrl: "https://shopee.vn/solozzo",
    },
    {
        isFirst: false,
        productName: "Phụ kiện khác",
        productImage: "./assets/images/ITEM1.png",
        productUrl: "https://shopee.vn/solozzo",
    },
];

const HEADER_PRODUCTS_URL = "https://shopee.vn/solozzo";
const HEADER_ABOUT_URL = "https://shopee.vn/solozzo";
const HEADER_SHOP_URL = "https://shopee.vn/solozzo";
const SHOPEE_URL = "https://shopee.vn/solozzo";
const CHAT_URL = "https://www.facebook.com/solozzooo";
const FACEBOOK_URL = "https://www.facebook.com/solozzooo";
const INS_URL = "https://www.instagram.com/solozzone/";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCtCFOqc_Go4ZOMpc4DYIp_A";

const BANNER_URLS = [
    "./assets/images/banner1.png",
    "./assets/images/BANNER1-1980x634.png",
    "./assets/images/BANNER3-1980x634.png",
];

const BANNER_CUS_URLS = [
    "./assets/images/BANNER6-1980x634.png",
    "./assets/images/BANNER4-1980x634.png",
    "./assets/images/BANNER5-1980x634.png",
];

const VERTICAL_BANNER_IMAGE = "./assets/images/192x500_Banner-Sale-Solozzo.png";
const VERTICAL_BANNER_URL = "https://www.facebook.com/solozzooo/";

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
        event.preventDefault();
        $("html, body").animate({
                scrollTop: 0,
            },
            300
        );
    });
    init();

    function init() {
        setVerticalBanner();
        setBanner();
        setCusBanner();
        setFooterIconLink();
        setChatButton();
        setHeaderLink();
    }

    function setHeaderLink() {
        $("#headerProduct").on("click", () => {
            window.open(HEADER_PRODUCTS_URL);
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
        $(".banner1").attr("src", BANNER_URLS[0]);
        $(".banner2").attr("src", BANNER_URLS[1]);
        $(".banner3").attr("src", BANNER_URLS[2]);
    }

    function setCusBanner() {
        $(".cusBanner1").attr("src", BANNER_CUS_URLS[0]);
        $(".cusBanner2").attr("src", BANNER_CUS_URLS[1]);
        $(".cusBanner3").attr("src", BANNER_CUS_URLS[2]);
    }

    function setVerticalBanner() {
        $("#verticalBanner").attr("src", VERTICAL_BANNER_IMAGE);
        $("#verticalBanner").on("click", () => {
            window.open(VERTICAL_BANNER_URL);
        });
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
    const product = `<div onclick="navigateTo('${productUrl}')" class="group relative product-owner-grid cursor-pointer transition-all duration-300 ease-in-out flex justify-center items-end p-4 w-full aspect-square bg-secondary-1 hover:bg-primary-3 ">
        <div class="w-full flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img class="group-hover:scale-110 group-hover:z-50 transition-all ease-linear duration-300 mb-9" src="${productImage}" alt="product">
        </div>
        <div class="flex flex-col w-100">
            <span id="ownerProductName" class="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-sm text-sms text-primary-1 group-hover:text-white font-medium">${productName}</span>
        </div>
    </div>`;

    return product;
}