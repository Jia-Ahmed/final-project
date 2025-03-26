import { useNavigate } from "react-router-dom";

const BookingDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <button
                onClick={() => navigate(-1)}
                className="bg-gray-200 px-4 py-2 rounded-md mb-4"
            >
                ← Back
            </button>
            <h1 className="text-2xl font-bold">Booking Details</h1>
            <p>Here you can display detailed booking information...</p>
        </div>
    );
};

export default BookingDetails;
