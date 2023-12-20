let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export const addGoalDataService =async(goalData) =>{
  try {
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(goalData),
      redirect: 'follow'
    };

    const response = await fetch("https://fitness-tracker-api-xz70.onrender.com/goals", requestOptions);
    if (response) {
      const data = await response.json()
      return data;
    }
    else console.log("something is wrong in adding the data")
  } catch (error) {
    throw error
  }
}
export const getGoalService = async () => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      "https://fitness-tracker-api-xz70.onrender.com/goals",
      requestOptions
    );
    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Something went wrong while returning goals data");
    }
  } catch (error) {
    throw error;
  }
};
export const deleteGoalService = async (id) => {
  try {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(
      `https://fitness-tracker-api-xz70.onrender.com/goals/${id}`,
      requestOptions
    );

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Something went wrong while deleting goals data");
    }
  } catch (error) {
    throw error;
  }
};