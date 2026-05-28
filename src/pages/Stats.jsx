import { useContext } from "react";
import { TimelineContext } from "../context/Context";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const Stats = () => {
    const { timeline } = useContext(TimelineContext);

    const textCount = timeline?.filter(item => item.action?.toLowerCase() === 'text').length || 0;
    const callCount = timeline?.filter(item => item.action?.toLowerCase() === 'call').length || 0;
    const videoCount = timeline?.filter(item => item.action?.toLowerCase() === 'video').length || 0;

    const totalInteractions = textCount + callCount + videoCount;

    const chartData = [
        { name: "Text", value: textCount },
        { name: "Call", value: callCount },
        { name: "Video", value: videoCount },
    ];

    const COLORS = ["#8B5CF6", "#1E4633", "#34A853"];

    return (
        <div className="bg-slate-50/50 min-h-screen p-8 text-slate-800 font-sans">
            <div className="max-w-5xl mx-auto">
                
                <h1 className="text-4xl font-extrabold text-[#1A2530] mb-8 tracking-tight">
                    Friendship Analytics
                </h1>

                <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                    
                    <h3 className="text-base font-semibold text-[#2C4A3E] mb-6">
                        By Interaction Type
                    </h3>

                    <div className="w-full h-[320px] flex items-center justify-center relative">
                        {totalInteractions === 0 ? (
                            <div className="flex flex-col items-center justify-center w-52 h-52 rounded-full border-4 border-dashed border-slate-200 text-center p-4">
                                <span className="text-3xl font-black text-slate-300">0</span>
                                <span className="text-xs font-medium text-slate-400 mt-1">No Data Available</span>
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: '#fff', 
                                            borderRadius: '12px', 
                                            border: '1px solid #f1f5f9',
                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
                                        }}
                                    />
                                    <Pie
                                        data={chartData.filter(item => item.value > 0)}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={8}
                                        dataKey="value"
                                        cornerRadius={10}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={COLORS[index % COLORS.length]} 
                                                className="focus:outline-none"
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
                            <span>Text ({textCount})</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1E4633]"></span>
                            <span>Call ({callCount})</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
                            <span>Video ({videoCount})</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stats;