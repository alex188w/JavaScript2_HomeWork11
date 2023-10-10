"use strict";
fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const productContent = document.querySelector(".top-content");
    data.forEach(
      ({
        imgUrl,
        linkProduct,
        nameProduct,
        textProduct,
        priceProduct,
        cardLink,
        cartImg,
      }) => {
        const productElem = `
                <div class="product">
                    <img
                    src="${imgUrl}"
                    alt="product"
                    class="product__img"/>
                    <div class="product__content">
                    <a href="${linkProduct}" class="product__heading"
                        >${nameProduct}</a>
                    <p class="product__text">
                        ${textProduct}
                    </p>
                    <p class="product__price">${priceProduct}</p>
                    </div>
                    <a href="${cardLink}" class="product__add"
                    ><img src="${cartImg}" alt="cart" />Add to Cart
                    </a>
                </div>`;
        productContent.insertAdjacentHTML("beforeend", productElem);
      }
    );
  });
