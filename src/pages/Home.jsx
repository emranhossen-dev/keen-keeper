import { use, useContext } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { TimelineContext } from "../context/Context";

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
    const { timeline } = useContext(TimelineContext);

    const notify = () => toast("Wow so easy!");

    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status.toLowerCase() === "active").length;
    const needAttentionCount = friends.filter(f => f.status.toLowerCase() === "overdue" || f.status.toLowerCase() === "pending").length;
    const totalInteractions = timeline?.length || 0;

    return (
        <div className="w-full min-h-screen bg-slate-50/50 py-12 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="mt-6 bg-[#163324] hover:bg-[#1e4632] text-white text-sm font-semibold py-2.5 px-5 rounded-xl inline-flex items-center gap-2 transition shadow-sm">
                        <span>+</span> Add a Friend
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
                        <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{totalFriends}</h3>
                        <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Total Friends</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
                        <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{onTrackCount}</h3>
                        <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">On Track</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
                        <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{needAttentionCount}</h3>
                        <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Need Attention</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
                        <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{totalInteractions}</h3>
                        <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Interactions Recorded</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Your Friends</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {friends.map((friend) => (
                        <Link to={`details/${friend.id}`} key={friend.id} className="block group">
                            <div className="bg-white rounded-4xl border border-slate-100 shadow-sm hover:shadow-md transition duration-200 p-6 flex flex-col items-center text-center h-full">
                                <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="w-24 h-24 rounded-full object-cover border border-slate-100 group-hover:scale-105 transition duration-200"
                                />

                                <h2 className="mt-4 text-xl font-bold text-slate-800">
                                    {friend.name}
                                </h2>

                                <p className="mt-1 text-slate-400 text-xs font-medium">
                                    {friend.days_since_contact}d ago
                                </p>

                                <div className="mt-3 flex flex-wrap justify-center gap-1">
                                    {friend.tags?.map((tag, i) => (
                                        <span key={i} className="bg-emerald-50 text-emerald-700 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <span
                                        className={`${getStatusColor(
                                            friend.status
                                        )} text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}
                                    >
                                        {friend.status}
                                    </span>
                                </div>

                                <p className="mt-4 text-xs text-blue-500 break-all px-2 opacity-75">
                                    {friend.email}
                                </p>

                                <p className="mt-2 text-xs text-slate-400 line-clamp-2 px-2 grow">
                                    {friend.bio}
                                </p>

                                <div className="mt-4 pt-3 border-t border-slate-50 w-full flex justify-between text-[11px] font-semibold text-slate-400 px-1">
                                    <span>Goal: {friend.goal}d</span>
                                    <span>Due: {friend.next_due_date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;