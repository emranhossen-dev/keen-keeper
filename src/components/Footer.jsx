const Footer = () => {
    return (
        <footer className="bg-[#1E4633] text-white/80 py-12 px-6 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                    KeenKeeper
                </h2>
                
                <p className="text-sm md:text-base text-white/70 max-w-2xl mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-10">
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-4">
                        Social Links
                    </h4>
                    <div className="flex items-center justify-center gap-4">
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E4633] hover:bg-white/90 transition shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                        
                        {/* Facebook */}
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E4633] hover:bg-white/90 transition shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                            </svg>
                        </a>
                        
                        {/* X (Twitter) */}
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E4633] hover:bg-white/90 transition shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
                    <div>
                        &copy; 2026 KeenKeeper. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="#" className="hover:text-white transition">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;