import CustomImage from './Customimage';

export default function Recipecard({recipe}) {
  const handleViewRecipe = () => {
  };
  return (
    <div className="recipe-card-container">
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.img} pt="65%" />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
            </div>
        </div>
        <button className="view-btn" onClick={handleViewRecipe}>
            VIEW RECIPE
        </button>
    </div>
);
}
