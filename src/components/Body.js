import RestaurantCard from "./RestaurantCard";
// import { resList } from "../../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
//NORMAL JS VARAIABLE
// let listofrestaurants=[{
//     "info": {
//       "id": "539287",
//       "name": "New York Waffles & Dinges",
//       "cloudinaryImageId": "x5zgvziz11pennbj8wwq",
//       "locality": "90 ft Road",
//       "areaName": "Ghatkopar East, Mumbai",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Waffle",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 3.9,
//       "veg": true,
//       "parentId": "148410",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "960",
//       "sla": {
//           "deliveryTime": 54,
//           "lastMileTravel": 2.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "50-55 mins",
//           "lastMileTravelString": "2.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         }
//     },
      
//   },
//   {"info": {
//     "id": "539289",
//     "name": "KFC",
//     "cloudinaryImageId": "x5zgvziz11pennbj8wwq",
//     "locality": "90 ft Road",
//     "areaName": "Ghatkopar East, Mumbai",
//     "costForTwo": "₹250 for two",
//     "cuisines": [
//       "Waffle",
//       "Desserts",
//       "Beverages"
//     ],
//     "avgRating": 4.9,
//     "veg": true,
//     "parentId": "148410",
//     "avgRatingString": "3.9",
//     "totalRatingsString": "960",
//     "sla": {
//           "deliveryTime": 54,
//           "lastMileTravel": 2.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "50-55 mins",
//           "lastMileTravelString": "2.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         }
//   }},]

const Body=()=>{
  // const [listofrestaurants,setListofrestaurants]=useState( [
  //   {
  //     "info": {
  //       "id": "539287",
  //       "name": "New York Waffles & Dinges",
  //       "cloudinaryImageId": "x5zgvziz11pennbj8wwq",
  //       "locality": "90 ft Road",
  //       "areaName": "Ghatkopar East, Mumbai",
  //       "costForTwo": "₹250 for two",
  //       "cuisines": [
  //         "Waffle",
  //         "Desserts",
  //         "Beverages"
  //       ],
  //       "avgRating": 3.9,
  //       "veg": true,
  //       "parentId": "148410",
  //       "avgRatingString": "3.9",
  //       "totalRatingsString": "960",
  //       "sla": {
  //         "deliveryTime": 46,
  //         "lastMileTravel": 5,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "45-50 mins",
  //         "lastMileTravelString": "5.0 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-03 23:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "v1695133679/badges/Pure_Veg111.png",
  //             "description": "pureveg"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "pureveg",
  //                   "imageId": "v1695133679/badges/Pure_Veg111.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹69"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY",
  //         "exclusiveOfferMessage": "EXTRA 10% OFF"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/new-york-waffles-and-dinges-90-ft-road-ghatkopar-east-mumbai-rest539287",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "387646",
  //       "name": "Nayaab Biryani",
  //       "cloudinaryImageId": "8176bef0fa809c9608c7687eeac98f93",
  //       "locality": "Marol Sakinaka",
  //       "areaName": "Saki Naka",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": [
  //         "Biryani",
  //         "Mughlai"
  //       ],
  //       "avgRating": 4.1,
  //       "parentId": "145145",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "1.2K+",
  //       "sla": {
  //         "deliveryTime": 50,
  //         "lastMileTravel": 3.9,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "50-55 mins",
  //         "lastMileTravelString": "3.9 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-04 02:00:00",
  //         "opened": true
  //       },
  //       "badges": {
          
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
              
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "50% OFF",
  //         "subHeader": "UPTO ₹100"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY",
  //         "exclusiveOfferMessage": "EXTRA 10% OFF"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/nayaab-biryani-marol-sakinaka-saki-naka-rest387646",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "62894",
  //       "name": "LunchBox - Meals and Thalis",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/18c72ba7-961a-471e-bdd3-8fec18a4f7f6_62894.jpg",
  //       "locality": "Kalina",
  //       "areaName": "Santacruz East",
  //       "costForTwo": "₹200 for two",
  //       "cuisines": [
  //         "Thalis",
  //         "North Indian",
  //         "Biryani"
  //       ],
  //       "avgRating": 4.4,
  //       "parentId": "4925",
  //       "avgRatingString": "4.4",
  //       "totalRatingsString": "10K+",
  //       "sla": {
  //         "deliveryTime": 29,
  //         "lastMileTravel": 1.9,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "25-30 mins",
  //         "lastMileTravelString": "1.9 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-03 23:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹149"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/lunchbox-meals-and-thalis-kalina-santacruz-east-rest62894",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "47833",
  //       "name": "Persian Darbar",
  //       "cloudinaryImageId": "7aeb2bbff29d99d6e986240911ce0e71",
  //       "locality": "Bandra Kurla Complex",
  //       "areaName": "Bandra Kurla Complex",
  //       "costForTwo": "₹1800 for two",
  //       "cuisines": [
  //         "North Indian",
  //         "Biryani",
  //         "Mughlai",
  //         "Kebabs",
  //         "Seafood",
  //         "Chinese",
  //         "Desserts",
  //         "Beverages"
  //       ],
  //       "avgRating": 4.3,
  //       "parentId": "711",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "17K+",
  //       "sla": {
  //         "deliveryTime": 31,
  //         "lastMileTravel": 0.3,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "0.3 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-04 03:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Rxawards/_CATEGORY-Biryani.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Rxawards/_CATEGORY-Biryani.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "60% OFF",
  //         "subHeader": "UPTO ₹120"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "4.2",
  //           "ratingCount": "6.0K+"
  //         },
  //         "source": "GOOGLE",
  //         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/persian-darbar-bandra-kurla-complex-rest47833",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "9862",
  //       "name": "Pizza Hut",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c08ef470-8561-436d-81ec-b119dfc997fa_9862.jpg",
  //       "locality": "Bandra",
  //       "areaName": "Bandra Kurla Complex",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Pizzas"
  //       ],
  //       "avgRating": 4.2,
  //       "parentId": "721",
  //       "avgRatingString": "4.2",
  //       "totalRatingsString": "16K+",
  //       "sla": {
  //         "deliveryTime": 42,
  //         "lastMileTravel": 2.3,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "40-45 mins",
  //         "lastMileTravelString": "2.3 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-04 03:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Rxawards/_CATEGORY-Pizza.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "40% OFF",
  //         "subHeader": "UPTO ₹80"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "3.8",
  //           "ratingCount": "1.8K+"
  //         },
  //         "source": "GOOGLE",
  //         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/pizza-hut-bandra-bandra-kurla-complex-rest9862",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "41471",
  //       "name": "Wow! Momo",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/6fb3216d-8866-4aeb-8bc0-a25e9fe464fc_41471.JPG",
  //       "locality": "Kurla West",
  //       "areaName": "Kurla West",
  //       "costForTwo": "₹300 for two",
  //       "cuisines": [
  //         "Tibetan",
  //         "Healthy Food",
  //         "Asian",
  //         "Chinese",
  //         "Snacks",
  //         "Continental",
  //         "Desserts",
  //         "Beverages"
  //       ],
  //       "avgRating": 4.1,
  //       "parentId": "1776",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "2.5K+",
  //       "sla": {
  //         "deliveryTime": 54,
  //         "lastMileTravel": 2.8,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "50-55 mins",
  //         "lastMileTravelString": "2.8 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-04 00:00:00",
  //         "opened": true
  //       },
  //       "badges": {
          
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
              
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹89"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "4.2",
  //           "ratingCount": "991"
  //         },
  //         "source": "GOOGLE",
  //         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/wow-momo-kurla-west-rest41471",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "650753",
  //       "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
  //       "cloudinaryImageId": "53f88d009d0528792249fb282ef2e17b",
  //       "locality": "Kalina",
  //       "areaName": "Scruz Bandra East",
  //       "costForTwo": "₹150 for two",
  //       "cuisines": [
  //         "North Indian",
  //         "Home Food",
  //         "Thalis"
  //       ],
  //       "avgRating": 4.5,
  //       "veg": true,
  //       "parentId": "67608",
  //       "avgRatingString": "4.5",
  //       "totalRatingsString": "5.2K+",
  //       "sla": {
  //         "deliveryTime": 29,
  //         "lastMileTravel": 2.5,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "25-30 mins",
  //         "lastMileTravelString": "2.5 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-03 22:50:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "v1695133679/badges/Pure_Veg111.png",
  //             "description": "pureveg"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "pureveg",
  //                   "imageId": "v1695133679/badges/Pure_Veg111.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "20% OFF",
  //         "subHeader": "UPTO ₹50"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY",
  //         "exclusiveOfferMessage": "EXTRA 10% OFF"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/dabba-garam-homestyle-combo-thali-and-more-kalina-scruz-bandra-east-rest650753",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   },
  //   {
  //     "info": {
  //       "id": "675950",
  //       "name": "Goila Butter Chicken",
  //       "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
  //       "locality": "ANDHERI EAST",
  //       "areaName": "ANDHERI KURLA ROAD",
  //       "costForTwo": "₹600 for two",
  //       "cuisines": [
  //         "North Indian",
  //         "Biryani",
  //         "Kebabs",
  //         "Desserts"
  //       ],
  //       "avgRating": 4.3,
  //       "parentId": "322587",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "1.6K+",
  //       "sla": {
  //         "deliveryTime": 49,
  //         "lastMileTravel": 5,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "45-50 mins",
  //         "lastMileTravelString": "5.0 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-03-03 23:59:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "newg.png",
  //             "description": "Gourmet"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Gourmet",
  //                   "imageId": "newg.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {
              
  //           },
  //           "textExtendedBadges": {
              
  //           }
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "₹125 OFF",
  //         "subHeader": "ABOVE ₹249",
  //         "discountTag": "FLAT DEAL"
  //       },
  //       "loyaltyDiscoverPresentationInfo": {
  //         "logoCtx": {
  //           "text": "BENEFITS",
  //           "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
  //         },
  //         "freedelMessage": "FREE DELIVERY"
  //       },
  //       "orderabilityCommunication": {
  //         "title": {
            
  //         },
  //         "subTitle": {
            
  //         },
  //         "message": {
            
  //         },
  //         "customIcon": {
            
  //         }
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  //           "lottie": {
              
  //           },
  //           "video": {
              
  //           }
  //         }
  //       },
  //       "reviewsSummary": {
          
  //       },
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {
          
  //       },
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-8dce7a14-2f17-4ef0-ac47-ae5ee3fe17b1"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/mumbai/goila-butter-chicken-andheri-east-andheri-kurla-road-rest675950",
  //       "text": "RESTAURANT_MENU",
  //       "type": "WEBLINK"
  //     },
  //     "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  //   }
  // ]);
 const [listofrestaurants,setListofrestaurants]=useState([])
 const [searchText,setSearchText]=useState("");
 const [filterRestaurants,setFilterRestaurants]=useState([])
// 1.when the dependency array is empty==> it will be called only after initial render
  useEffect(()=>{
    console.log("useEffect is called")
    fetchData();
  },[])
  
  const fetchData=async()=>{
    const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.1187379&lng=72.84637839999999&carousel=true&third_party_vendor=1")
   
    const json=await data.json();
    console.log(json);
    setListofrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

  }
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false){
    return <h1>oh oooo!!!! it seems that your internet is not connected...please check your internet connection</h1>
  }
  if(listofrestaurants.length===0){
    return <Shimmer/>
  }
    return(
    <div className="body">
    <div className="filter flex flex-wrap ">
        {/* <button className="filter-btn" onClick={
          listofrestaurants=listofrestaurants.filter((res)=>{
            return res.info.avgRating>4
          })
        } >
            top rated restaurants</button> */}
            {/* u cant modify the data inside the state variable like u do with the nrml variable for that u make use of setstatevariabe name */}
           
            <div className="search flex">
              <input className="border border-black px-2 mx-2 my-2 rounded-md" type="text " value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>
              <button className="bg-green-100 px-2 mx-2 " onClick={()=>{
                const filteredrestaurants=listofrestaurants.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText)
                })
                setFilterRestaurants(filteredrestaurants)
              }}>search</button>
            </div>

            <button className="filter-btn" onClick={()=>{
              const filteredlist=listofrestaurants.filter((res)=>{
                return res.info.avgRating>4
              }
             
    )
    setListofrestaurants(filteredlist)}}>
              top rated restaurants
            </button>
   
    </div>
    <div className="res-container">
        {/* props example(here we are rendrrring that means calling the function[component]) */}
        {/* <RestaurantCard resname="meghana foods" cuisines="Biryani,Andhra,South Indian" rating="4.3" delivery_time="38 minutes"/>
        <RestaurantCard resname="KFC" cuisines="fast food,chicken" rating="4.1" delivery_time="20 minutes"/> */}
        {
                filterRestaurants.map((resList)=>{
                return(
                  <Link className="links" to={"/restaurants/"+resList.info.id} key={resList.info.id} >
                <RestaurantCard  resobj={resList} /></Link>
            )})

        }
    </div>
        {/* <RestaurantCard resobj={resList[0]}/>
        <RestaurantCard resobj={resList[1]}/> */}
    </div>
    )
}
export default Body;

//it is a conflict driven ui...means it listnes to the data and accordig to the data it will make changes now if we introduce nrml js variable like list of restaurants as it doesnt have anything at first it will render ntg...so im this our objective is when i click on top rated restuarnats it has to show only restuarnats above 4 star rating....in normal variable when u change the things it wiont be able to re render the component....
//whenever u want to change the things in the ui u can use the hook called as USESTATE .....
// hooks are the normal js functions thats it which are predefined and written by facebook users...state is a powerful variable which remembers the prev data and whenever the data changes it automatically rerenders the page...u cant simply modify the existing data u use the function(hook) called usestate....it is already will be in our react packages...
//when u call usestate() function it will return a state varaible which should be written inside an array and if u want to modify the data u should be using the setSTATE functio which is passed as second arguement and it will be re rendering the page.....
//whenever the react sees the setState menthod it will automatically rerender the page based on the reconciliation algorithm

//RECONCILIATION ALGORITHM(REACT FIBRE) REACT CORE CONCEPT
//it comes into picture when the qestion like why do u use react...then our anserr will be like react is fast...then if they ask why it is fast..the answer will be due to its efficent dom manipulation react is fast....so let us understand how all this is done...to know that u have to know termd actual dom and virtual dom...actual dom is the tree like struxtire of ur html....virtual dom is the light weight copy of that actual dom....instead of modifying entire actual dom...what react does is that it will be using diff algorithm which will look after the prev virtual dom and present changed virtual dom as soon as it knows something is changed it will be making changes only at that position/place in the actual dom instead of rendering entire DOM...got it????????