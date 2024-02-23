import React from "react";
import CustomImage from "./Customimage";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Herosection() {
  const navigate = useNavigate();
  const images = [
    "https://www.ruchiskitchen.com/wp-content/uploads/2016/02/Thai-basil-chicken-2.jpg.webp",
    "https://img.freepik.com/free-photo/top-view-caesar-salad-with-chicken-shrimp-grilled-chicken-breasts-shrimp-tomato-fresh-salad-plate_176474-2529.jpg?w=900&t=st=1705989579~exp=1705990179~hmac=f958e0fbb7f18739b2ad36cdf345ccc109202f7766dab853215cf211290152e0",
    "https://healthyvibeshub.com/wp-content/uploads/2023/10/Tofu-Stir-Fry.jpg",
    "https://tourismquest.com/wp-content/uploads/2024/01/Maharashtrian-Food.jpg",
    "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTkwNTgwOTYzMzk0NTI5MTQ4/semiya-upma-recipe.webp",
    "https://www.lacademie.com/wp-content/uploads/2022/04/vegetarian-recipes.webp",
    "https://priyascurrynation.com/wp-content/uploads/2019/07/jeera_rice_recipe_3.webp",
    "https://www.cookingcarnival.com/wp-content/uploads/2016/04/Maharashtrian-style-Bhindi-Masala-683x1024.jpg",
    "https://c.ndtvimg.com/2020-06/spbf80l_breakfast_625x300_05_June_20.jpg",
  ];

  const handleclick = () => {
    navigate('/vegetarian');
  }

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">VEGANS</h1>
        <p className="info">
          'Would you pour sand into the gas tank of your car? Of course not,
          your car was meant to run on good gasoline. Well, your body works the
          same way. Your body was meant to run on good food: fruits,
          vegetables, lean protein, and lots of water. Eat good food!'
        </p>
        <button className="btn" onClick={handleclick}>Explore now</button>
      </div>
      <div className="col gallery">
      { images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
      )) }
      </div>
    </div>
  );
}