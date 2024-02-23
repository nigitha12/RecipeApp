import React from 'react';
import Recipecard from '../components/Recipecard';

export default function Recipes() 
{
  const recipes = [
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
      <br></br>
        <h1>Vegetarian</h1>
      <div className="recipes-container">
      {/* <Recipecard /> */}
      {recipes.map((recipe, index) => (
        <Recipecard Key ={index} recipe={recipe} />
      ))}
      </div>
    </div>
  )
}