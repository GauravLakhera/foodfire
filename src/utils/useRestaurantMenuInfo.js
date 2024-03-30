import { useState, useEffect } from "react";

const useRestaurantMenuInfo = (Resid) => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + Resid + "&catalog_qa=undefined&submitAction=ENTER");
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
