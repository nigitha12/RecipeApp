import React from 'react';
import Recipecard from '../components/Recipecard';

export default function NonVegetarian() 
{
  const recipes = [
    {
      title:"Chicken Uppukari",
      img:"https://3.bp.blogspot.com/-glLWc6UxmEA/WSBVmjW-LfI/AAAAAAAAZQI/7LFtTN3JkaA8WX-gq24rX_kRvecMlbWZACPcB/s1600/6218.jpg",
      description:"Chicken uppu kari is an easy and tasty side dish which can be made in few mins.It needs just basic ingredients..",
    },
    {
      title:"Mutton Gravy",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrtXFAy0RFIWD-tr1iZq0aw8WSMTem7460g&usqp=CAU",
      description:"Soft tender chunks of meat in Indian style onion tomato masala gravy known as mutton masala.",
    },
    {
      title:"chicken Gravy",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_Z7ernH1QlKH6-TzV1n5wNxDDs2SOVWtqQ&usqp=CAU",
      description:"Chicken Gravy, A family favorite recipe made with onion, tomato,spices, ginger & garlic..",
    },
    {
      title:"Eral Thokku",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JwueQAsuVhWrOj7M68J419q0zIUoSnsuOPU9Rbtl6zMEsRlBniddo4yx-HVpv45dJBs&usqp=CAU",
      description:"Eral Thokku or Prawn thokku is a spicy onion tomato and tamarind based curry made with lots of spices.",
    },
    {
      title:"Chicken Escalope",
      img:"https://i.ndtvimg.com/i/2015-12/grilled-chicken-625_625x350_71451368942.jpg",
      description:"Chicken marinated in home-made spice powder and green paste,Grilled to perfection and served with spring onion."
    },
    {
      title:"Mutton Korma",
      img:"https://i.ndtvimg.com/i/2015-03/badam-korma_625x350_41426244081.jpg ",
      description:"A flavourful mutton curry,where the meat is stirred with curd,garlic-ginger paste,cloves,cardamom."
    },
    {
      title:"TandooriLambChops",
      img:"https://i.ndtvimg.com/i/2016-06/lamb-chops_625x350_51466768845.jpg",
      description:"Lamb chops marinated in strained yogurt and flavoursome masalas and Cooked till tender."
    },
    {
      title:"Malabar Fish Briyani",
      img:"https://i.ndtvimg.com/i/2016-11/biryani-620_620x350_41478678907.jpg",
      description:"This classic Malabar Fish Biryani can be devoured at all times of ever-charming dish. "
    },
    {
      title:"Fish Fingers",
      img:"https://i.ndtvimg.com/i/2016-03/fish-finger_625x350_51458388088.jpg",
      description:"Tender fish pieces are cut into pieces, wrapped in batter and fried to perfection."
    },
    {
      title:"Chicken 65",
      img:"https://i.ndtvimg.com/i/2015-07/chicken-65_625x350_61436162562.jpg",
      description:"Chicken 65 is said to have originated in Madras.This fried recipe of Chicken 65 is from Tamil Nadu.  "
    },
    {
      title:"Nihari Gosht",
      img:"https://i.ndtvimg.com/i/2015-09/nihari_625x350_41443159772.jpg",
      description:"A traditional Muslim dish, where the meat almost blends with gravy,traditionally means a slow cooked mutton-stew."
    },
    {
      title:"Butter Chicken",
      img:"https://i.ndtvimg.com/i/2018-01/butter-chicken_620x350_51517373579.jpg",
      description:"Butter chicken is a kind recipe that's been passed down from one generation to another and holds on India's menu. "
    },
    {
      title:"Hyderabadi-Chicken",
      img:"https://i.ndtvimg.com/i/2018-01/fried-chicken_696x400_51514877919.jpg",
      description:"The Hyderabadi chicken fry is the perfect appetizer for impromptu guest gatherings or any special occasion. "
    },
    {
      title:"Hyderabadi Keema",
      img:"https://c.ndtvimg.com/2019-12/o1l745m8_keema-matar_625x300_11_December_19.jpg",
      description:"his Hyderabadi mutton keema recipe accentuates the taste of keema and makes a mouth-watering masaledaar dish.  "
    },
    {
      title:"Chettinad Chicken ",
      img:"https://cdn.shopify.com/s/files/1/0261/7960/0481/files/chicken_chettinand_made_from_non-veg_spices_480x480.jpg?v=1693671559 ",
      description:"Chettinad the popular cuisine in India.This cuisine uses various spices,flavour for the taste of food. "
    },
    {
      title:"Nethili Fish-fry",
      img:"https://cdn.shopify.com/s/files/1/0261/7960/0481/files/Nethili_Fish_fry_480x480.jpg ",
      description:"Nethili is the tastiest of the fish varieties.If you are a fish lover,then nethili fish fry will definitely be a best dish."
    },{
      title:" Egg Bhurji",
      img:"https://cdn.shopify.com/s/files/1/0261/7960/0481/files/spicy_egg_bhurji_480x480.jpg?v=1693672157 ",
      description:"Egg bhurji is the easiest and yummiest non-veg dish that can be cooked. Egg, in general, is easy to cook. "
    },
    {
      title:"Murgh Dum Biryani ",
      img:"https://cdn.shopify.com/s/files/1/0261/7960/0481/files/murgh_dum_biryani_made_with_biryani_masalas_480x480.jpg?v=1693672447",
      description:"Who doesn’t love a soothing murgh biryani? Although it is time-consuming on the list of easy to cook dishes. "
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <br></br>
        <h1>NON VEGETARIAN</h1>
      <div className="recipes-container">
      {recipes.map((recipe, index) => (
        <Recipecard Key ={index} recipe={recipe} />
      ))}
      </div>
    </div>
  )
}