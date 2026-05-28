import { use } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const dataPromise = fetch("/data.json").then((res) => res.json());

const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
        case "active":
            return "bg-green-500";
        case "pending":
            return "bg-yellow-500";
        case "overdue":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
};

const Home = () => {
    const friends = use(dataPromise);

    const notify = () => toast("Wow so easy!");

    return (
        <div className="w-full min-h-screen bg-gray-100 py-10">
            <div className="max-w-400 mx-auto px-6">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Friends Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage and track your connections
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {friends.map((friend) => (
                        <Link to={`details/${friend.id}`}>
                            <div
                                key={friend.id}
                                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center"
                            >
                                <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
                                />

                                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                                    {friend.name}
                                </h2>

                                <p className="mt-2 text-gray-500 text-lg">
                                    {friend.days_since_contact}d ago
                                </p>

                                <div className="mt-4">
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold uppercase">
                                        {friend.tags?.[0]}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <span
                                        className={`${getStatusColor(
                                            friend.status
                                        )} text-white px-5 py-2 rounded-full text-sm font-semibold capitalize`}
                                    >
                                        {friend.status}
                                    </span>
                                </div>

                                <p className="mt-4 text-sm text-blue-500 break-all">
                                    {friend.email}
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    {friend.bio}
                                </p>

                                <div className="mt-4 text-sm text-gray-600">
                                    Goal: Every {friend.goal} days
                                </div>

                                <div className="mt-2 text-sm text-gray-400">
                                    Next Due: {friend.next_due_date}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-gray-700">
                        Hello World, this is homepage
                    </h1>

                    <button
                        className="btn btn-primary"
                        onClick={notify}
                    >
                        Notify!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;