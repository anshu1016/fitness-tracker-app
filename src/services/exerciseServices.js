let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const addExerciseDataService = async (exData) => {
  try {
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(exData),
      redirect: "follow",
    };

    const response = await fetch(
      "https://fitness-tracker-api-xz70.onrender.com/exercises",
      requestOptions
    );
    if (response) {
      const data = await response.json();
      return data;
    } else console.log("something is wrong in adding the exercise data");
  } catch (error) {
    throw error;
  }
};

export const getExercisesService = async () => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      "https://fitness-tracker-api-xz70.onrender.com/exercises",
      requestOptions
    );

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Something went wrong while returning exercise data");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteExerciseService = async (id) => {
  try {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(
      `https://fitness-tracker-api-xz70.onrender.com/exercises/${id}`,
      requestOptions
    );

    if (response) {
      const result = await response.json();
      return result;
    } else {
      console.error("Something went wrong while deleting exercise data");
    }
  } catch (error) {
    throw error;
  }
};