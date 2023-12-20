let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export const addFoodDataService =async(foodData) =>{
  try {
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(foodData),
      redirect: 'follow'
    };

    const response = await fetch("https://fitness-tracker-api-xz70.onrender.com/foods", requestOptions);
    if (response) {
      const data = await response.json()
      return data;
    }
    else console.log("something is wrong in adding the data")
  } catch (error) {
    throw error
  }
}
export const getFoodsService = async () => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      "https://fitness-tracker-api-xz70.onrender.com/foods",
      requestOptions
    );

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Something went wrong while returning food data");
    }
  } catch (error) {
    throw error;
  }
};
export const deleteFoodService = async (id) => {
  try {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(
      `https://fitness-tracker-api-xz70.onrender.com/foods/${id}`,
      requestOptions
    );

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Something went wrong while deleting Foods data");
    }
  } catch (error) {
    throw error;
  }
};