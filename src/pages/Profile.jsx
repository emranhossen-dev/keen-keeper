import { useLoaderData, useParams } from "react-router";
import { Phone, MessageSquare, Video, Clock, Archive, Trash2 } from "lucide-react";

const Profile = () => {
    const data = useLoaderData();
    const { id } = useParams();
    
    // Find user based on URL ID
    const user = data?.find((item) => item.id === parseInt(id));

    // Handle case where user isn't found
    if (!user) {
        return <div className="text-center p-10 text-red-500 font-semibold">User not found</div>;
    }

    // Format date string beautifully (e.g., "Feb 27, 2026")
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8 text-gray-800 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* LEFT SIDEBAR: PROFILE CARD & ACTIONS */}
                <div className="flex flex-col gap-4">
                    {/* Main Profile Info Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
                        <img 
                            src={user.picture} 
                            alt={user.name} 
                            className="w-24 h-24 rounded-full object-cover border border-gray-200 mb-4"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150" }} // fallback if img breaks
                        />
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h2>
                        
                        {/* Status Tag */}
                        <span className={`px-4 py-1 text-xs font-semibold rounded-full uppercase tracking-wider mb-2 ${
                            user.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                        }`}>
                            {user.status}
                        </span>

                        {/* Custom tags map */}
                        <div className="flex flex-wrap gap-1 justify-center mb-4">
                            {user.tags.map((tag, idx) => (
                                <span key={idx} className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full uppercase font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Bio / Description */}
                        <p className="text-sm italic text-gray-500 mb-4 px-2">
                            "{user.bio}"
                        </p>
                        
                        <p className="text-xs text-gray-400">
                            Preferred: {user.email}
                        </p>
                    </div>

                    {/* Action Sidebar Buttons */}
                    <div className="flex flex-col gap-2">
                        <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition text-gray-700 shadow-sm">
                            <Clock size={18} />
                            Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition text-gray-700 shadow-sm">
                            <Archive size={18} />
                            Archive
                        </button>
                        <button className="w-full bg-white hover:bg-red-50 border border-gray-200 py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition text-red-500 shadow-sm">
                            <Trash2 size={18} />
                            Delete
                        </button>
                    </div>
                </div>

                {/* RIGHT CONTENT AREA: METRICS & DETAILS */}
                <div className="md:col-span-2 flex flex-col gap-6">
                    
                    {/* Top Stats Trio Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{user.days_since_contact}</h3>
                            <p className="text-sm text-slate-500 font-medium">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{user.goal}</h3>
                            <p className="text-sm text-slate-500 font-medium">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                            <h3 className="text-2xl font-extrabold text-emerald-800 mt-2 mb-3">{formatDate(user.next_due_date)}</h3>
                            <p className="text-sm text-slate-500 font-medium">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-bold text-emerald-950">Relationship Goal</h4>
                            <button className="px-4 py-1.5 bg-gray-50 hover:bg-gray-100 text-xs font-semibold rounded-lg border border-gray-200 text-gray-600 transition">
                                Edit
                            </button>
                        </div>
                        <p className="text-gray-600">
                            Connect every <span className="font-bold text-gray-900">{user.goal} days</span>
                        </p>
                    </div>

                    {/* Quick Check-In Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-emerald-950 mb-4">Quick Check-In</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center p-5 border border-gray-100 bg-slate-50/50 hover:bg-slate-50 rounded-xl transition gap-2 text-gray-700">
                                <Phone size={24} className="text-slate-800" />
                                <span className="text-sm font-medium">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-5 border border-gray-100 bg-slate-50/50 hover:bg-slate-50 rounded-xl transition gap-2 text-gray-700">
                                <MessageSquare size={24} className="text-slate-800" />
                                <span className="text-sm font-medium">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-5 border border-gray-100 bg-slate-50/50 hover:bg-slate-50 rounded-xl transition gap-2 text-gray-700">
                                <Video size={24} className="text-slate-800" />
                                <span className="text-sm font-medium">Video</span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;