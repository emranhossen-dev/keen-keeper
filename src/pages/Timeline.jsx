import { useContext, useState } from "react";
import { TimelineContext } from "../context/Context";
import { Phone, MessageSquare, Video, HelpCircle } from "lucide-react";

const Timeline = () => {
    const { timeline } = useContext(TimelineContext);
    const [filter, setFilter] = useState("all");


    const getActionDetails = (action) => {
        switch (action?.toLowerCase()) {
            case "call":
                return {
                    icon: <Phone size={22} className="text-amber-600" />,
                    bg: "bg-amber-50 border-amber-100",
                    label: "Call"
                };
            case "text":
                return {
                    icon: <MessageSquare size={22} className="text-sky-600" />,
                    bg: "bg-sky-50 border-sky-100",
                    label: "Text"
                };
            case "video":
                return {
                    icon: <Video size={22} className="text-indigo-600" />,
                    bg: "bg-indigo-50 border-indigo-100",
                    label: "Video"
                };
            default:
                return {
                    icon: <HelpCircle size={22} className="text-gray-500" />,
                    bg: "bg-gray-50 border-gray-100",
                    label: "Interaction"
                };
        }
    };

    const formatTimelineDate = (isoString) => {
        if (!isoString) return "";
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(isoString).toLocaleDateString("en-US", options);
    };


    const filteredTimeline = timeline?.filter((item) => {
        if (filter === "all") return true;
        return item.action?.toLowerCase() === filter.toLowerCase();
    }) || [];


    const displayTimeline = [...filteredTimeline].reverse();

    return (
        <div className="bg-slate-50/50 min-h-screen p-8 text-slate-800 font-sans">
            <div className="max-w-4xl mx-auto">
                

                <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Timeline
                </h1>


                <div className="mb-10">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer min-w-45"
                    >
                        <option value="all">Filter timeline</option>
                        <option value="call">Calls Only</option>
                        <option value="text">Texts Only</option>
                        <option value="video">Videos Only</option>
                    </select>
                </div>


                {displayTimeline.length === 0 ? (
                    <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
                        <p className="text-slate-400 font-medium">No check-in history found.</p>
                    </div>
                ) : (
                    <div className="relative flex flex-col items-center">
                        {displayTimeline.map((item, index) => {
                            const details = getActionDetails(item.action);
                            
                            return (
                                <div key={index} className="w-full flex flex-col items-center relative">
                                    

                                    {index > 0 && (
                                        <div className="w-7.5 h-0.75 bg-pink-400 my-1 rounded-full opacity-60"></div>
                                    )}


                                    <div className="w-full bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex items-center gap-5">
                                        

                                        <div className={`p-3.5 rounded-xl border ${details.bg} flex items-center justify-center shrink-0`}>
                                            {details.icon}
                                        </div>


                                        <div className="flex flex-col gap-0.5">
                                            <h3 className="text-base text-slate-500 font-medium">
                                                <span className="font-bold text-slate-800">{details.label}</span> with {item.name || "Unknown User"}
                                            </h3>
                                            <span className="text-sm text-slate-400">
                                                {formatTimelineDate(item.time)}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Timeline;