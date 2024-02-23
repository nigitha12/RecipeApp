import React from 'react';
import Recipecard from '../components/Recipecard';

export default function Recipes() 
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
    },
    {
      title:"Dosa",
      img:"https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg",
      description:"A dosa is a thin savory crepe in South Indian cuisine made from a black gram and rice.",
    },
    {
      title:"Mushroom Gravy",
      img:"https://theflavoursofkitchen.com/wp-content/uploads/2022/07/Mushroom-Gravy-4-scaled.jpg",
      description:"Mushroom Masala is a delicious Indian curry made with mushrooms, onions, tomatoes, spices & herbs.",
    },
    {
      title:"Vegetable Briyani",
      img:"https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg",
      description:"Loaded with veggies,cashews,spices,herbs and this biryani is a delight to the taste buds in every bite!",
    },
    {
      title:"Curd Rice",
      img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam.jpg",
      description:"Curd rice is a South Indian traditional dish made with rice,fresh yogurt,tempering spices & curry leaves.",
    },
    {
      title:"Rava Roast",
      img:"https://www.yummytummyaarthi.com/wp-content/uploads/2012/03/1-1.jpg",
      description:"The trick is to roast the dosa on a low flame.In addition,I have added 1tbsp of sour curd helps for the golden-color.",
    },
    {
      title:"Sambar",
      img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar.jpg",
      description:"Learn how to make the best South indian sambar that tastes delicious & is very flavorful.",
    },
    {
      title:"Jeera Rice",
      img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.jpg",
      description:"Make perfect, non-sticky and fluffy jeera rice with this easy, one pot recipe.",
    },
    {
      title:"Brinjal Kari",
      img:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Madhuri_Aggarwal/Badanekaayi_Gojju__Brinjal_Curry.jpg",
      description:"Brinjal Curry aka Eggplant Curry is an everyday Indian curried dish made with eggplants, onions and spices.",
    },
    {
      title:"PannerbutterMasala",
      img:"https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
      description:"Make the best, delicious & creamy restaurant style butter paneer at home with this super easy recipe!!",
    },
    {
      title:"Puri",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lYPvo1MnZphSEL2XrhyfTkkSqdqdw_c6PmBFhcvBPeL8tNj6itvWJbuMfh5pCsdPA8Y&usqp=CAU",
      description:"In southern India, puri is almost always made for breakfast,and on the east coast it's rarely eaten.",
    },
    {
      title:"Idly",
      img:"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg",
      description:"Idli is a type of savoury rice cake,originating from South India, popular as a breakfast food also in Sri Lanka.",
    },
    {
      title:"uthapam",
      img:"https://i0.wp.com/15minmom.com/wp-content/uploads/2020/06/Instant-Semolina-Uttapam-scaled.jpeg",
      description:"Uttapam recipe-It is a thick pancake made with fermented lentil rice batter.",
    },
    {
      title:"Tomato briyani",
      img:"https://www.cookclickndevour.com/wp-content/uploads/2017/10/tomato-rice-recipe-thakkali-sadham-1.jpg",
      description:"Delicious tomato biryani recipe which taste super yummy is very nutritious too.",
    },
    {
      title:"Chappathi",
      img:"https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
      description:"Chapati is a traditional unleavened Indian flatbread made with just 3 ingredients-wheat flour,oil & water.",
    },
    {
      title:"GreenPeaceMasala",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAjWz4WDJWKXJnFkVFxzRAo1pO9YWVeHEB2612KxwaZyVmYnrinSIfNP-e70XMfMKLOk&usqp=CAU",
      description:"Green peas masala recipe- an almost restaurant style delicious and a bit spicy recipe.",
    },
    {
      title:"Naan",
      img:"https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
      description:"Naan recipe - Make the perfect soft, fluffy & delicious butter naan.",
    },
    {
      title:"Kadai Mushroom  ",
      img:"https://www.vegrecipesofindia.com/wp-content/uploads/2012/09/kadai-mushroom-recipe-final.jpg ",
      description:"Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms.",
    },
    {
      title:"Manchurian Recipe ",
      img:"https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-recipe-1.jpg ",
      description:"Veg Manchurian is tasty Indo Chinese dish of fried veggie balls in a spicy,sweet and tangy sauce.",
    }
    
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <div className="recipes-container">
      {recipes.map((recipe, index) => (
        <Recipecard Key ={index} recipe={recipe} />
      ))}
      </div>
    </div>
  )
}