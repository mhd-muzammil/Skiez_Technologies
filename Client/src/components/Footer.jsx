import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Rayon-style Footer matching the reference provided by user
const Footer = () => {
    return (
        <footer className="relative bg-[#050505] text-white overflow-hidden font-sans border-t border-[#333]">
            {/* 
              GRID BACKGROUND 
              Using a linear gradient to create the architectural grid lines. 
              The reference has a subtle reddish/orange tint to the grid lines.
            */}
            <div 
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ff3333 1px, transparent 1px),
                        linear-gradient(to bottom, #ff3333 1px, transparent 1px)
                    `,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' // Fade out slightly at bottom if needed, but Rayon is sharp. Kept minimal.
                }}
            />

            {/* TOP BAR / BANNER */}
            <div className="relative z-10 border-b border-[#222] bg-[#050505] backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>System Operational</span>
                    </div>
                    <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                        See latest version <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-12 pb-24">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8 text-[13px] leading-tight">
                    
                    {/* COL 1 - SKIEZ BRAND */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-[#666] uppercase tracking-widest text-[11px] mb-1">Skiez</h4>
                        <Link to="/services" className="font-semibold text-white hover:text-gray-300 transition-colors">Services</Link>
                        <Link to="/pricing" className="font-semibold text-white hover:text-gray-300 transition-colors">Pricing</Link>
                        <Link to="/use-cases" className="font-semibold text-white hover:text-gray-300 transition-colors">Use cases</Link>
                        <Link to="/roles" className="font-semibold text-white hover:text-gray-300 transition-colors">Roles</Link>
                    </div>

                    {/* COL 2 - RESOURCES */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-[#666] uppercase tracking-widest text-[11px] mb-1">Resources</h4>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Documentation</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Tutorials</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Blog</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Space Planning Guide</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Free Assets</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Student Signup</Link>
                    </div>

                    {/* COL 3 - COMPANY */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-[#666] uppercase tracking-widest text-[11px] mb-1">Company</h4>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Team</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Manifesto</Link>
                        <Link to="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Careers</Link>
                    </div>

                    {/* COL 4 - SOCIALS */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-[#666] uppercase tracking-widest text-[11px] mb-1">Socials</h4>
                        <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Instagram</a>
                        <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">YouTube</a>
                        <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">TikTok</a>
                        <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">LinkedIn</a>
                        <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">Pinterest</a>
                        <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">X</a>
                    </div>

                    {/* COL 5 - ALTERNATIVES / TECH */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-[#666] uppercase tracking-widest text-[11px] mb-1">Alternative to</h4>
                        <span className="font-semibold text-white">AutoCAD</span>
                        <span className="font-semibold text-white">Sketchup</span>
                        <span className="font-semibold text-white">Vectorworks</span>
                        <span className="font-semibold text-white">Revit</span>
                        <span className="font-semibold text-white">ArchiCAD</span>
                        <span className="font-semibold text-white">FloorPlanner</span>
                        <span className="font-semibold text-white">Planner 5D</span>
                        <span className="font-semibold text-white">Cedreo</span>
                    </div>

                </div>
            </div>

            {/* MASSIVE TYPOGRAPHY HERO */}
            <div className="relative w-full overflow-hidden border-t border-[#222]">
                 {/* 
                   We position the text to be cut off at the bottom just like Rayon often does, 
                   or full. The reference shows full text "RAYON".
                   We use "SKIEZ".
                 */}
                 <div aria-hidden="true" className="select-none flex justify-center items-end leading-none">
                    <h1 className="text-[26vw] font-black tracking-tighter text-white translate-y-[18%]">
                        SKIEZ
                    </h1>
                 </div>
            </div>

            {/* COPYRIGHT BAR */}
            <div className="absolute bottom-6 left-8 z-20 text-[10px] text-[#444] font-medium tracking-wide">
                ©2026 Skiez
            </div>
            
             <div className="absolute bottom-6 right-8 z-20 text-[10px] text-[#444] font-medium tracking-wide flex gap-4">
                <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
                <Link to="#" className="hover:text-gray-300">Terms</Link>
            </div>

        </footer>
    );
};

export default Footer;
