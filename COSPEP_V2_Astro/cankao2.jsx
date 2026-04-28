import React, { useState, useEffect, useRef } from 'react';
import {
    Beaker,
    ShieldCheck,
    FileText,
    Download,
    Droplet,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
    Award,
    Truck,
    Building,
    MessageSquare,
    X,
    Sparkles,
    Send,
    Loader2,
    ChevronRight,
    BrainCircuit
} from 'lucide-react';

// --- Gemini API Configuration ---
const apiKey = ""; // The environment provides the key at runtime
const MODEL_NAME = "gemini-2.5-flash-preview-09-2025";

async function callGemini(prompt, systemInstruction = "") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] }
    };

    const fetchWithRetry = async (retries = 0) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error('API request failed');
            return await response.json();
        } catch (error) {
            if (retries < 5) {
                const delay = Math.pow(2, retries) * 1000;
                await new Promise(res => setTimeout(res, delay));
                return fetchWithRetry(retries + 1);
            }
            throw error;
        }
    };

    return fetchWithRetry();
}

// --- Reusable Modal Component ---
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center p-5 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function App() {
    const [isDocModalOpen, setDocModalOpen] = useState(false);
    const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
    const [isAiModalOpen, setAiModalOpen] = useState(false);
    const [requestedDoc, setRequestedDoc] = useState('');

    // AI Formulation Lab State
    const [ingredients, setIngredients] = useState('');
    const [aiResult, setAiResult] = useState(null);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [aiError, setAiError] = useState(null);

    // Chat AI State
    const [chatOpen, setChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { role: 'ai', text: 'Hello! I am your GHK-Cu Technical Assistant. How can I help you with our peptide science or formulations today?' }
    ]);
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatEndRef = useRef(null);

    const handleDownloadClick = (docName) => {
        setRequestedDoc(docName);
        setDocModalOpen(true);
    };

    // AI Formulation Logic
    const handleAiFormulation = async () => {
        if (!ingredients.trim()) return;
        setIsAiLoading(true);
        setAiError(null);
        setAiResult(null);

        const systemPrompt = "You are a professional Cosmetic Chemist specializing in Copper Peptides (GHK-Cu). Analyze the compatibility of the provided ingredients with GHK-Cu. Provide a structured response with: 1. Compatibility Score (0-100), 2. Potential Risks, 3. Suggested Usage Level for GHK-Cu, and 4. Formulation Tips. Keep it professional and concise.";
        const userPrompt = `I want to combine GHK-Cu with these ingredients: ${ingredients}. Please analyze the compatibility.`;

        try {
            const data = await callGemini(userPrompt, systemPrompt);
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            setAiResult(text);
        } catch (err) {
            setAiError("Sorry, we couldn't process your request. Please try again later.");
        } finally {
            setIsAiLoading(false);
        }
    };

    // AI Chat Logic
    const handleChat = async () => {
        if (!chatInput.trim() || isChatLoading) return;
        const newMessage = { role: 'user', text: chatInput };
        setChatHistory(prev => [...prev, newMessage]);
        setChatInput('');
        setIsChatLoading(true);

        const systemPrompt = "You are an expert sales and technical representative for a high-end Copper Peptide supplier. Answer questions about GHK-Cu (Copper Tripeptide-1) regarding its chemistry, benefits (collagen, repair), stability (pH 5-7), and supply chain. Use a professional, helpful tone.";

        try {
            const data = await callGemini(chatInput, systemPrompt);
            const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            setChatHistory(prev => [...prev, { role: 'ai', text: responseText }]);
        } catch (err) {
            setChatHistory(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting to the lab right now. Please try again in a moment." }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

            {/* 1. HERO SECTION */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[100px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-8 border border-blue-500/30">
                            <Beaker size={16} /> Premium Raw Ingredients
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            High-Purity GHK-Cu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                The Gold Standard
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light">
                            Purity &gt;99% | HPLC Tested | Bulk Supply Available
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setQuoteModalOpen(true)}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 text-lg"
                            >
                                Request Bulk Quote
                            </button>
                            <button
                                onClick={() => setAiModalOpen(true)}
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg backdrop-blur-md"
                            >
                                <Sparkles className="text-cyan-300" /> ✨ AI Formulation Lab
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. MECHANISM & EFFICACY */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 italic text-blue-600">The "Hermès" of Peptides</h2>
                        <p className="text-lg text-slate-600">Pure GHK-Cu isn't just an ingredient; it's a scientific breakthrough in tissue remodeling and cellular health.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { icon: <TrendingUp />, title: "Boosts Collagen", text: "Stimulates type I collagen synthesis more effectively than Retinol." },
                            { icon: <ShieldCheck />, title: "Advanced Repair", text: "Drastically reduces post-procedural inflammation and redness." },
                            { icon: <Droplet />, title: "Copper Delivery", text: "Unique peptide chain carries copper directly to cellular targets." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Clinical Data Chart */}
                    <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><BrainCircuit size={120} /></div>
                        <h3 className="text-2xl font-bold mb-8 relative z-10 text-blue-200">Skin Firmness Improvement (12 Weeks)</h3>
                        <div className="space-y-6 relative z-10">
                            <div>
                                <div className="flex justify-between text-sm mb-2 text-slate-300"><span>Ordinary Peptides</span><span>+15%</span></div>
                                <div className="w-full bg-slate-800 rounded-full h-4"><div className="bg-slate-500 h-4 rounded-full" style={{ width: '30%' }}></div></div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2 font-bold text-blue-300"><span>GHK-Cu (Copper Tripeptide-1)</span><span>+45%</span></div>
                                <div className="w-full bg-slate-800 rounded-full h-4"><div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]" style={{ width: '85%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✨ AI ASSISTANT SECTION ✨ */}
            <section className="py-24 bg-gradient-to-b from-blue-950 to-slate-900 text-white relative">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-bold mb-4 border border-cyan-500/30">
                                <Sparkles size={14} /> POWERED BY GEMINI AI
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Smart ✨ AI Formulation Lab</h2>
                            <p className="text-slate-300 mb-8 text-lg">Unsure about compatibility? Our AI chemist analyzes your planned ingredients against GHK-Cu stability standards instantly.</p>

                            <div className="space-y-4 text-left">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-lg">
                                    <p className="text-sm text-slate-400 mb-2">Enter planned ingredients (e.g., Vitamin C, EDTA, Peptides):</p>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={ingredients}
                                            onChange={(e) => setIngredients(e.target.value)}
                                            placeholder="Vitamin C, Hyaluronic Acid, Niacinamide..."
                                            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder-slate-500"
                                        />
                                        <button
                                            onClick={handleAiFormulation}
                                            disabled={isAiLoading}
                                            className="bg-blue-600 hover:bg-blue-500 p-4 rounded-xl transition-all disabled:opacity-50 shadow-lg"
                                        >
                                            {isAiLoading ? <Loader2 className="animate-spin" /> : <ChevronRight />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full text-left">
                            <div className="bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 p-8 min-h-[300px] flex flex-col justify-center shadow-2xl">
                                {isAiLoading ? (
                                    <div className="text-center animate-pulse">
                                        <Loader2 className="mx-auto mb-4 animate-spin text-blue-400" size={40} />
                                        <p className="text-blue-300">Consulting Scientific Database...</p>
                                    </div>
                                ) : aiResult ? (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
                                            <CheckCircle2 size={18} /> Analysis Complete
                                        </h4>
                                        <div className="prose prose-invert prose-sm max-w-none">
                                            <p className="whitespace-pre-wrap text-slate-200 leading-relaxed text-sm">{aiResult}</p>
                                        </div>
                                    </div>
                                ) : aiError ? (
                                    <div className="text-center text-amber-400">
                                        <AlertTriangle className="mx-auto mb-2" />
                                        <p>{aiError}</p>
                                    </div>
                                ) : (
                                    <div className="text-center text-slate-500 py-10">
                                        <Beaker size={48} className="mx-auto mb-4 opacity-20" />
                                        <p className="text-lg italic">Enter ingredients on the left to start the ✨ AI Analysis.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SPECS & COMPLIANCE */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                                <div className="p-8 bg-slate-900 text-white flex justify-between items-center">
                                    <h2 className="text-2xl font-bold flex items-center gap-2"><Beaker className="text-blue-400" /> Specifications</h2>
                                </div>
                                <div className="p-0">
                                    <table className="w-full text-left">
                                        <tbody>
                                            {[
                                                ["INCI Name", "Copper Tripeptide-1"],
                                                ["CAS Number", "89030-95-5"],
                                                ["Appearance", "Deep Blue Powder"],
                                                ["Purity (HPLC)", "≥99.0%"]
                                            ].map(([label, val], i) => (
                                                <tr key={i} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                                                    <th className="py-4 px-8 font-semibold text-slate-500 bg-slate-50/50 w-1/3">{label}</th>
                                                    <td className="py-4 px-8 text-slate-800 font-medium">{val}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 max-w-md">
                            <h3 className="text-3xl font-bold mb-4">Compliance Documents</h3>
                            <p className="text-slate-600 mb-8">Download professional safety and technical documentation for your regulatory needs.</p>
                            <div className="space-y-3">
                                {['SDS (GHS Version)', 'Technical Data Sheet', 'COA Batch Sample'].map((doc, idx) => (
                                    <button key={idx} onClick={() => handleDownloadClick(doc)} className="w-full flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group">
                                        <span className="font-semibold text-slate-700">{doc}</span>
                                        <Download className="text-slate-300 group-hover:text-blue-600" size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FORMULATION GUIDE */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center lg:text-left">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-blue-50/50 rounded-3xl p-10 border border-blue-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-2"><CheckCircle2 className="text-blue-600" /> Best Practices</h3>
                            <ul className="space-y-4 text-slate-700 text-left">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                                    <span><strong>Dosage:</strong> 0.05% - 0.2% is the optimal concentration.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                                    <span><strong>pH Level:</strong> Must maintain between 5.0 - 7.0 for stability.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                                    <span><strong>Phase:</strong> Add to the aqueous phase at temperatures &lt; 40°C.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/50 rounded-3xl p-10 border border-amber-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-amber-900 flex items-center gap-2"><AlertTriangle className="text-amber-500" /> Crucial Don'ts</h3>
                            <ul className="space-y-4 text-slate-700 text-left">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                    <span><strong>No Vit C:</strong> Direct contact causes rapid oxidation and deactivation.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                    <span><strong>No Acids:</strong> Low pH environments hydrolyze the peptide chain.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                                    <span><strong>No EDTA:</strong> This chelating agent will strip the copper ions.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRUST SIGNALS */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-16">Reliable Global Supply Chain</h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-6 border border-blue-600/30">
                                <Building className="text-blue-400" size={36} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">GMP Facility</h3>
                            <p className="text-slate-400 text-sm">Synthesized in strictly controlled cleanrooms.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-6 border border-blue-600/30">
                                <Truck className="text-blue-400" size={36} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Express Logistics</h3>
                            <p className="text-slate-400 text-sm">Global shipping in specialized oxygen-free containers.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-6 border border-blue-600/30">
                                <Award className="text-blue-400" size={36} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">ISO Certified</h3>
                            <p className="text-slate-400 text-sm">Consistent high purity (99%+) across every single batch.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-950 text-slate-600 py-12 text-center text-sm pb-24 md:pb-12 border-t border-white/5">
                <p>© {new Date().getFullYear()} Peptide Science Solutions. Specialized in Premium GHK-Cu Synthesis.</p>
            </footer>

            {/* --- FLOATING CHAT WIDGET --- */}
            <div className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 z-50 border border-slate-200 ${chatOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-0 translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="text-blue-400" size={18} />
                        <span className="font-bold">✨ AI Technical Expert</span>
                    </div>
                    <button onClick={() => setChatOpen(false)} className="hover:bg-white/10 rounded-lg p-1 transition-colors"><X size={18} /></button>
                </div>
                <div className="h-[400px] overflow-y-auto p-4 bg-slate-50 space-y-4 flex flex-col scroll-smooth">
                    {chatHistory.map((msg, i) => (
                        <div key={i} className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai' ? 'bg-white text-slate-800 self-start shadow-sm rounded-tl-none border border-slate-100' : 'bg-blue-600 text-white self-end rounded-tr-none shadow-md'}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isChatLoading && (
                        <div className="self-start bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                            <Loader2 className="animate-spin" size={14} /> Processing expert response...
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <div className="p-4 border-t border-slate-100 bg-white shadow-inner">
                    <form onSubmit={(e) => { e.preventDefault(); handleChat(); }} className="flex gap-2">
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Ask about stability or benefits..."
                            className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isChatLoading}
                            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50 shadow-md"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

            {/* FLOATING ACTION BUTTONS */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
                <button
                    onClick={() => setChatOpen(!chatOpen)}
                    className={`flex items-center gap-3 bg-slate-900 text-white p-5 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${chatOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}
                >
                    <Sparkles className="text-blue-400 animate-pulse" />
                    <span className="font-bold hidden md:block">✨ Peptide Expert</span>
                </button>
                <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="flex items-center gap-3 bg-blue-600 text-white p-5 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95"
                >
                    <MessageSquare />
                    <span className="font-bold hidden md:block">Get Pricing</span>
                </button>
            </div>

            {/* MODALS */}
            <Modal isOpen={isQuoteModalOpen} onClose={() => setQuoteModalOpen(false)} title="Bulk Quote Request">
                <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); setQuoteModalOpen(false); alert('Inquiry Sent Successfully!'); }}>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Company Name</label>
                        <input type="text" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Acme Cosmetics" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Work Email</label>
                        <input type="email" required className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="purchasing@company.com" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Quantity</label>
                        <select className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option>Sample ({"<10g"})</option>
                            <option>Medium (10g - 1kg)</option>
                            <option>Bulk ({"1kg+"})</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Additional Requirements</label>
                        <textarea rows="3" className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Target price, Lead time, etc."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-500 transition-colors mt-2">Send Inquiry</button>
                </form>
            </Modal>

            <Modal isOpen={isDocModalOpen} onClose={() => setDocModalOpen(false)} title={`Secure Download: ${requestedDoc}`}>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">Safety first. Please verify your work email address to receive the direct download link for the technical files.</p>
                <form onSubmit={(e) => { e.preventDefault(); setDocModalOpen(false); alert('Verification link sent to your email!'); }}>
                    <div className="mb-6">
                        <input type="email" required className="w-full px-4 py-4 border border-slate-200 rounded-xl text-center focus:ring-2 focus:ring-blue-500 outline-none" placeholder="name@company.com" />
                    </div>
                    <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-colors">Verify & Download</button>
                </form>
            </Modal>

            <Modal isOpen={isAiModalOpen} onClose={() => setAiModalOpen(false)} title="✨ AI Formulation Lab">
                <div className="space-y-6 text-left">
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-3">
                        <BrainCircuit className="text-blue-600 flex-shrink-0" />
                        <p className="text-sm text-blue-900">Predict compatibility with active ingredients, stabilizers, and preservatives instantly.</p>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Target Formulation Components</label>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                className="w-full px-4 py-4 border border-slate-200 rounded-xl shadow-inner focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="List ingredients here..."
                            />
                            <button
                                onClick={handleAiFormulation}
                                disabled={isAiLoading}
                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-blue-500 transition-all active:scale-95 disabled:opacity-50"
                            >
                                {isAiLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                                {isAiLoading ? "Consulting Chemist AI..." : "Analyze Compatibility"}
                            </button>
                        </div>
                    </div>
                    {aiResult && (
                        <div className="p-6 bg-slate-900 text-slate-100 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed shadow-xl max-h-60 overflow-y-auto border border-blue-500/30">
                            <div className="flex items-center gap-2 text-blue-400 mb-3 border-b border-blue-500/20 pb-2">
                                <CheckCircle2 size={16} />
                                <span className="font-bold">Scientific Analysis</span>
                            </div>
                            {aiResult}
                        </div>
                    )}
                </div>
            </Modal>

        </div>
    );
}