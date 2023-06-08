const Data = ({foods}) => {
    return(
        <div className="data">
            
        {foods.map((food, index) => (
            <div key={index} >
                <div className="food">
                    <p>{food.food_name}</p>
                    <img src={food.photo.thumb} alt="" />
                    <button className="addFoodButton">Add Food</button>
                </div>
            </div>
        ))}
    </div>
    )
}

export default Data;