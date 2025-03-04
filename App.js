// const heading=React.createElement("h1",{id:"heading",xyz:"hello"},"hello world from react!!!");//Here it will take 3 paramteres 
// const root=ReactDOM.createRoot(document.getElementById("root"));//here we will be creating the root and now look up.... in div id root should have the heading inside it...generally we use append chil but here we will be using root.render before taht we will be creating the root element like a fragment.... 
// root.render(heading)

{/* <div id="parent">
    <div id="child">
        <h1>i am h1 heading</h1>
        <h2>i am h2 heading</h2>
    </div>
    <div id="child2">
        <h1>i am h1 heading</h1>
        <h2>i am h2 heading</h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",{id:"parent"},[//here if we wnat to add the child tags we will open an array ok...if u have siblings then also u will open an array....so it is becoming so hard right...that is the reason we use JSX.
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"i am h1 heading"),
//         React.createElement("h2",{},"i am h2 heading"),
//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"i am h1 heading"),
//             React.createElement("h2",{},"i am h2 heading"),
//         ])
//     ]);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);

// const jsxheading=<h1>i am sayeed</h1>;
// const sayeed=(<h1>ewww

// </h1>);
// console.log(jsxheading)
// //REACT ELEMENT=>react elememnt is the jsx that is assigned to the variable
// const eww=(
//     <>
//     <h1>i am superhero</h1>
//     <div>
//         i am stronger
//     </div>
//     </>);

// const Eww=()=>(
//     <>
//     <h1>i am superhero</h1>
//     <div>
//         i am stronger
//     </div>
//     </>);

// //FUNCTIONAL COMPONENT => whereas the fc is the component that is a js function that returns the JSX and it should start with captal letters when u inject one coponent in anorher component it is called as component composition.
// const HeadingComponent=()=>(
//     <>
//     <Eww/>  
//     <Eww></Eww>
//     {Eww()}
//     {1234+234}
//     {/* as we are on the same component page no  need to export and import */}
//     <h1>i am superhero</h1>
//     <div>
//         i am stronger
//     </div>
//     </>

// );
//APPLAYOUT
// -header
//     -logo
//     -nav links
// -body
//     -search
//     -cardcontainer
//     -Cards
//         -Image
//         -name
//         -cuisine
//         -rating
// -footer
//     -copyright
//     -links

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" alt="app logo" />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}



const RestaurantCard=({resobj})=>{
    return(
        <div className="res-card">
            <img className="res-logo"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+resobj.info.cloudinaryImageId} alt="food logo" />
            {/* <h3>Meghana Foods</h3>
            <h3>Biryani,Andhra,South Indian</h3>
            <h3>4.3 stars</h3>
            <h3>38 mins</h3> */}
            {/* <h3>{props.resname}</h3>
            <h3>{props.cuisines}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.delivery_time}</h3> */}

<h3>{resobj.info.name}</h3>
<h3>{resobj.info.cuisines.join(",")}</h3>
<h3>{resobj.info.avgRating} stars</h3>
<h3>{resobj.info.sla.deliveryTime} minutes</h3>

           
        </div>
    )

}

const resList= [
    {
      "info": {
        "id": "539287",
        "name": "New York Waffles & Dinges",
        "cloudinaryImageId": "x5zgvziz11pennbj8wwq",
        "locality": "90 ft Road",
        "areaName": "Ghatkopar East, Mumbai",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "148410",
        "avgRatingString": "3.9",
        "totalRatingsString": "960",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹69"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": "EXTRA 10% OFF"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/new-york-waffles-and-dinges-90-ft-road-ghatkopar-east-mumbai-rest539287",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "387646",
        "name": "Nayaab Biryani",
        "cloudinaryImageId": "8176bef0fa809c9608c7687eeac98f93",
        "locality": "Marol Sakinaka",
        "areaName": "Saki Naka",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Mughlai"
        ],
        "avgRating": 4.1,
        "parentId": "145145",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": "EXTRA 10% OFF"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/nayaab-biryani-marol-sakinaka-saki-naka-rest387646",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "62894",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/18c72ba7-961a-471e-bdd3-8fec18a4f7f6_62894.jpg",
        "locality": "Kalina",
        "areaName": "Santacruz East",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Thalis",
          "North Indian",
          "Biryani"
        ],
        "avgRating": 4.4,
        "parentId": "4925",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/lunchbox-meals-and-thalis-kalina-santacruz-east-rest62894",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "47833",
        "name": "Persian Darbar",
        "cloudinaryImageId": "7aeb2bbff29d99d6e986240911ce0e71",
        "locality": "Bandra Kurla Complex",
        "areaName": "Bandra Kurla Complex",
        "costForTwo": "₹1800 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Mughlai",
          "Kebabs",
          "Seafood",
          "Chinese",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "711",
        "avgRatingString": "4.3",
        "totalRatingsString": "17K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "6.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/persian-darbar-bandra-kurla-complex-rest47833",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "9862",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c08ef470-8561-436d-81ec-b119dfc997fa_9862.jpg",
        "locality": "Bandra",
        "areaName": "Bandra Kurla Complex",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "16K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "1.8K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/pizza-hut-bandra-bandra-kurla-complex-rest9862",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "41471",
        "name": "Wow! Momo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/6fb3216d-8866-4aeb-8bc0-a25e9fe464fc_41471.JPG",
        "locality": "Kurla West",
        "areaName": "Kurla West",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "1776",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-04 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "991"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/wow-momo-kurla-west-rest41471",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "650753",
        "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
        "cloudinaryImageId": "53f88d009d0528792249fb282ef2e17b",
        "locality": "Kalina",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "67608",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.2K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 22:50:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": "EXTRA 10% OFF"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/dabba-garam-homestyle-combo-thali-and-more-kalina-scruz-bandra-east-rest650753",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "675950",
        "name": "Goila Butter Chicken",
        "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
        "locality": "ANDHERI EAST",
        "areaName": "ANDHERI KURLA ROAD",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Kebabs",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "322587",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mumbai/goila-butter-chicken-andheri-east-andheri-kurla-road-rest675950",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]
const Body=()=>{
    return(
    <div className="body">
    <div className="search">search</div>
    <div className="res-container">
        {/* props example(here we are rendrrring that means calling the function[component]) */}
        {/* <RestaurantCard resname="meghana foods" cuisines="Biryani,Andhra,South Indian" rating="4.3" delivery_time="38 minutes"/>
        <RestaurantCard resname="KFC" cuisines="fast food,chicken" rating="4.1" delivery_time="20 minutes"/> */}
        {
            resList.map((resList)=>{
                return(
                <RestaurantCard key={resList.info.id} resobj={resList} />
            )})

        }
    </div>
        {/* <RestaurantCard resobj={resList[0]}/>
        <RestaurantCard resobj={resList[1]}/> */}
    </div>
    )
}
const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Body/>
        </>
        
        
    )
}

// ReactDOM.createRoot(<AppLayout/>, document.getElementById("root"));
console.log('document.getElementById(root)', document.getElementById('root'));
const rootElement = document.getElementById('root');
if(rootElement){
    const root = ReactDOM.createRoot(rootElement);
    root.render(<AppLayout/>);
}
else{
    console.log("cant get root element");
}






// we will create a div tag with ud root and in that we will render everything that we want to render...its like creating the html that is not there intailly by writing the js code...om manipulation....

//react.createElement means it doesnt create a html tag....when we see it in a console it is just a pure JS object....root.render() function will convert it to html tags of the pure js object(intailly it takes js object (which we wrote ) and convert it into the html tags which browswer understands...)....did u get it now.....


//the sequence of the lines is very important u can write react code only after u import the cdn links otherwise it will throw an reference error...
//HERE root we will decide.... like with the div tag whose id is root that will be our root and in that we are going to rendr the things......
// if there is already content written inside the div tag with id=root what happens is that it will replace the data.....and if anything that is written outside of the div tag with id=root that will also gets rendered..... if u want to change the root then u can do it that also like div tag with id="header"...u can set this as root...  



//Babel is a package which is used to transpile the code(from jsx) into pure js which browser understnds...

//jsx is html written inside the js but we cant say it like that...it is a html look a like thats it...
//React.createEement does not create  a html element ...it is a pure js object....react will make it render as the html tag on te browsere
//in the same way jsx (babael converts) it to=> createElement=>js object=>html(renders)

//COMPONENTS ARE NOTHING BUT THE JS FUNCTION WHICH RETURNS JSX

//react elements are the js which is assigned to the varaible and using {} u can write js inside of thiis...inside functional components  you can use the another component let us we want to use the Title component we can use it in 3 ways like 1)<Title/>  2)<Title><Title/> 3){Title()}...as the EOD it is js function...jsx makes ur code readable and the jsx will not blindly fetc e data and give iut to you it has a special quality like crossorigin thing which will sanitize the data and give u the correct data if data is coming from api ...like it eleiminates the malicious data .... and and u  can render another react element under the react element and at the same time u can render component under reactelement and vice versa using {})(curly braces)



//props are the shortform of properties....teh data that u pass to the components is called as props....we sue props when we want to dynamically send the data to teh components...in simple terms components are nrml js functions and props are the arguemnets that we pass to the functions thats it.....when we write the props this will be bundles as object inside the props...so when we want to access them we pass props in the parent function and as props is a obj we access it as props.prop_name like that 


//  CONFLICT DRIVEN UI is teh ui which is friven by teh conflict that is data from teh backend.....