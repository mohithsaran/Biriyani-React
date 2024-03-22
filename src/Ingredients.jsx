const Ingredients = ({ ingredients }) => {
  return (
    <>
      <ul className="list-group">
        {ingredients.map((ing) => (
          <li key={ing} className="list-group-item">
            {ing}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ingredients;
