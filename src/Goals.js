import { useState } from "react";

const Goals = () => {

    const [carbs, setCarbs] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fats, setFats] = useState(0);

    const handleCarbs = (e) => {
        setCarbs(e.target.value);
        e.preventDefault();
    };

    const handleProtein = (e) => {
        setProtein(e.target.value);
        e.preventDefault();
    };

    const handleFats = (e) => {
        setFats(e.target.value);
        e.preventDefault();
    };

    return (
        <div className="goals">
            
            <div className="goalsForm">
            <h1 className="goalsTitle">Let's set your goals:</h1>
                <div><input
                    className="inputGoals"
                    type="number"
                    placeholder="CARBO IN GRAMS"
                    onChange={handleCarbs}
                /></div>
                <div><input
                    className="inputGoals"
                    type="number"
                    placeholder="FAT IN GRAMS"
                    onChange={handleFats}
                /></div>

                <div><input
                    className="inputGoals"
                    type="number"
                    placeholder="PROTEIN IN GRAMS"
                    onChange={handleProtein}
                /></div>

                <div>
                    <p className="inputTotal">Total Calories: <span className="bold">{(carbs * 4) + (protein * 4) + (fats * 9)}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Goals;