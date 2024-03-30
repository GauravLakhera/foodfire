import { useState, useEffect } from "react";

const useRestaurantMenuInfo = (Resid) => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.0869281&lng=78.2676116&restaurantId=" + Resid + "&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Optionally, you can handle the error here, e.g., setResInfo(null) or show an error message to the user
        }
    };

    return ResInfo;
};

export default useRestaurantMenuInfo;
