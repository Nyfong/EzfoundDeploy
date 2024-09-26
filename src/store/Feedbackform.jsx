import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = ({ shopename, id }) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  const [showAlert, setShowAlert] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const svcid = id;

  const fetchReviewsFromAPI = async () => {
    if (!svcid) {
      console.error("Service ID is undefined. Cannot fetch reviews.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://easyfound.automatex.dev/api/reviews/${svcid}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const reviewsArray = Array.isArray(data) ? data : [data];
      setReviews(reviewsArray);
      localStorage.setItem(`reviews_${svcid}`, JSON.stringify(reviewsArray));
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (svcid) {
      const storedReviews = localStorage.getItem(`reviews_${svcid}`);
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      } else {
        fetchReviewsFromAPI();
      }
    } else {
      console.error("Service ID is undefined.");
    }
  }, [svcid, accessToken]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitReview = async (reviewData) => {
    try {
      const response = await fetch(
        "https://easyfound.automatex.dev/api/reviews/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(reviewData),
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error submitting review:", error);
      return { error: "An error occurred while submitting the review." };
    }
  };

  const handleSubmit = async () => {
    if (!accessToken) {
      setShowAlert(true);
      return;
    }

    const reviewData = {
      comment: feedback,
      rate_star: 5,
      service: svcid,
      user_id: userId,
    };

    const result = await submitReview(reviewData);

    if (result.error) {
      console.log("Review submission failed:", result.error);
    } else {
      setReviews((prevReviews) => {
        const updatedReviews = [
          ...prevReviews,
          { ...result.data, user_id: userId },
        ];
        localStorage.setItem(
          `reviews_${svcid}`,
          JSON.stringify(updatedReviews)
        );
        return updatedReviews;
      });
      setFeedback("");
      setSubmissionMessage("Thank you for your feedback!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">
          Send Feedback to
          <span className="text-amber-500"> {shopename}</span>
        </h1>
        <p className="text-gray-500 mb-4">We value your feedback!</p>
      </div>

      <textarea
        placeholder="Share your experience with this service..."
        className="w-full h-28 p-4 text-sm bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500 transition"
        value={feedback}
        onChange={handleFeedbackChange}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-2 bg-amber-500 text-white font-bold rounded-lg shadow hover:bg-amber-600 transition"
      >
        Submit Feedback
      </button>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-lg shadow-lg p-4 w-80 text-center">
            <p className="text-red-600 font-bold mb-2">
              Please log in to submit feedback!
            </p>
            <button
              onClick={handleCloseAlert}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        {loading ? (
          <p className="text-center">Loading reviews...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {/* item1 */}
            {reviews.map((review, index) => (
              <div key={index} className="border-2 rounded-xl">
                <div className="max-w-lg px-6 py-4 rounded-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={
                        review.userImage ||
                        "https://easyfound.automatex.dev/media/uploads/category_0a492b09-90d5-4a29-b21c-944f54693dab.png"
                      }
                      alt="Avatar"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-pacifico text-lg font-medium">
                        {review.userProfileName}
                      </div>
                      <div className="text-gray-500">
                        {new Date(review.created_at).toISOString().slice(0, 10)}
                      </div>
                    </div>
                  </div>
                  <p className="font-poppins text-quote leading-relaxed mb-6 line-clamp-3 md:line-clamp-5 lg:line-clamp-none">
                    {review.comment}
                  </p>
                  <div className="flex justify-between items-center"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {submissionMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 text-center rounded-lg">
          {submissionMessage}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
