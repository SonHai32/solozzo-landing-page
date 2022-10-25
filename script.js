const productOwnerList = [{
        productName: "Pad chuột",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
    {
        productName: "Áo thun",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
    {
        productName: "Móc khóa",
        productUrl: "https://drive.google.com/file/d/11zUGxyptGVGAAjgGzE9F3m3T9dHoNOgT/view?fbclid=IwAR11jtPWj6EGyGflthG1aP2lbi2C1MpJx60jfnf5QMHt_2F_dCYkCIfNo5U",
    },
];

$(document).ready(function() {
    const productOwnerCard = $("#productOwnerCard");
    productOwnerList.forEach((product) => {
        productOwnerCard.append(
            createProductOwner(product.productName, product.productUrl)
        );
    });
});

function createProductOwner(productName, productUrl) {
    const product = `<div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" class="flex justify-center items-end p-4 w-full aspect-square bg-secondary-1 transition-all duration-150 delay-75">
        <div class="flex flex-col w-100">
            <span id="ownerProductName" class="text-2xl text-primary-1 font-medium">${productName}</span>
            <div class="flex items-center justify-center">
                <a href="${productUrl}" id="ownerProductLink" class="text-sm text-primary-1 font-thin mr-1">MUA NGAY</a>
                <svg class="h-4 w-4 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.6 38.13">
                    <defs>
                        <style>
                            .cls-2 {
                                fill: #003e2a !important;
                                width: 100%;
                                height: 100%;
                            }
                        </style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class="cls-2"
                                d="M2,38.13a2,2,0,0,1-1.41-.59,2,2,0,0,1,0-2.83L35.3,0,70,34.71a2,2,0,0,1-2.82,2.83L35.3,5.66,3.41,37.54A2,2,0,0,1,2,38.13Z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>`;

    return product;
}