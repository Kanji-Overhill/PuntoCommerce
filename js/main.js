const data = {
    "products": [
        {
            "id": 234,
            "name": "Same day Delivery",
            "price": 450,
            "specialPrice": 250,
            "category": "Wedding Flower"     
        },
        {
            "id": 237,
            "name": "Basket of Gladness",
            "price": 99,
            "specialPrice": 70,
            "category": "Bouquet"   
        },
        {
            "id": 236,
            "name": "Triple Pleasures",
            "price": 290,
            "specialPrice": 110,
            "category": "Wedding Flower"   
        },
        {
            "id": 235,
            "name": "Tulip Flower Bouquet",
            "price": 110,
            "specialPrice": 50,
            "category": "Flower Bouquet"     
        },
        {
            "id": 235,
            "name": "Tulip Flower Bouquet",
            "price": 110,
            "specialPrice": 50,
            "category": "Flower Bouquet"     
        }
    ],
    "reseñas": [
        {
            "id": 234,
            "stars": 5
        },
        {
            "id": 234,
            "stars": 2
        },
        {
            "id": 234,
            "stars": 2
        },
        {
            "id": 236,
            "stars": 4
        },
        {
            "id": 236,
            "stars": 2
        },
        {
            "id": 237,
            "stars": 5
        }
    ]
}
new Vue({
  el: '#slider',
  data() {
    var products = data.products;
    var reviews = data.reseñas;
    for (var i = 0; i < products.length; i++) {
        var discount = ((products[i].price - products[i].specialPrice)/products[i].price)*100;
        var count = 0;
        var stars = 0;
        for (var r = 0; r < reviews.length; r++){
            if (reviews[r].id == products[i].id) {
                stars = stars + reviews[r].stars;
                count++;
            }
        }

        var average = stars/count;
        products[i].review = Math.trunc(average);
        products[i].discount = Math.trunc(discount)+"%";
        products[i].image = "images/"+products[i].id+".jpg";
    }

    return {
      products: data.products
    }
  }
})

//JQuery
//Slider Slick
$( document ).ready(function() {
    $('.slider-home').slick({
      infinite: true,
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      arrows: true,
    });
    $('.slider-products').slick({
      infinite: true,
      slidesToShow: 4,
      dots: false,
      slidesToScroll: 1,
      arrows: true,
    });
    $('.slider-exclusive').slick({
      infinite: true,
      slidesToShow: 3,
      dots: false,
      slidesToScroll: 1,
      arrows: true,
    });
    $('.slider-4').slick({
      infinite: true,
      slidesToShow: 4,
      dots: false,
      slidesToScroll: 1,
      arrows: true,
    });
});