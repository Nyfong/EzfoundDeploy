export async function submitReview(reviewData) {
  // Convert review data to JSON
  const body = JSON.stringify(reviewData);
  const token = localStorage.getItem("accessToken");
  try {
    // Perform the fetch request to submit the review
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}api/reviews/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body,
      }
    );

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response data as JSON
    return await response.json();
  } catch (error) {
    // Log the error
    console.error("Error during review submission:", error);
    // Return a specific error message or object
    return { error: error.message };
  }
}
