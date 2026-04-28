import React from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  TrendingUp, 
  ShieldCheck, 
  Droplet, 
  BrainCircuit, 
  FileText, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  Building, 
  Truck, 
  Award 
} from 'lucide-react';
import type { Product } from '@/lib/sanity/queries';

interface ProductDetailsExtraProps {
  product: Product;
  lang: string;
}

export const ProductDetailsExtra: React.FC<ProductDetailsExtraProps> = ({ product, lang }) => {
  // Logic to determine if we show the GHK-Cu specific chart
  const isGHKCu = product.name.toLowerCase().includes('ghk-cu') || product.name.toLowerCase().includes('copper peptide');

  return (
    <div className="space-y-24 mt-16 pb-24">
      {/* 1. Efficacy Comparison (Chart) */}
      {isGHKCu && (
        <section className="relative">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <BrainCircuit size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-8 relative z-10 text-blue-200">
              Skin Firmness Improvement (12 Weeks)
            </h3>
            <div className="space-y-8 relative z-10">
              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-400">
                  <span>Ordinary Peptides</span>
                  <span>+15%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-slate-600 h-full rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-bold text-blue-300">
                  <span>{product.name}</span>
                  <span>+45%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                  />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 mt-6 text-center italic">
              *Based on comparative clinical studies of Copper Tripeptide-1 against standard peptide complexes.
            </p>
          </div>
        </section>
      )}

      {/* 2. Specifications Table */}
      <section>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 w-full">
            <div className="bg-[#0F1612] rounded-3xl shadow-xl overflow-hidden border border-white/10">
              <div className="p-8 bg-slate-900/50 text-white flex items-center gap-3 border-b border-white/10">
                <Beaker className="text-[#B8FF00] w-6 h-6" />
                <h2 className="text-2xl font-bold">Technical Specifications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    {[
                      ["INCI Name", product.inciName || "N/A"],
                      ["CAS Number", product.casNumber || "N/A"],
                      ["Appearance", "Deep Blue Powder"],
                      ["Purity (HPLC)", product.purity || "≥99.0%"]
                    ].map(([label, val], i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <th className="py-4 px-8 font-semibold text-gray-400 bg-white/[0.02] w-1/3 text-sm">{label}</th>
                        <td className="py-4 px-8 text-gray-200 font-medium text-sm">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3. Compliance Documents */}
          <div className="lg:w-1/3 w-full">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Compliance Documents</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  Download professional safety and technical documentation for your regulatory needs.
                </p>
              </div>
              
              <div className="space-y-3">
                {product.documents && product.documents.length > 0 ? (
                  product.documents.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={doc.file.asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#B8FF00] hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-gray-400 group-hover:text-[#B8FF00] transition-colors w-5 h-5" />
                        <span className="font-semibold text-gray-300 group-hover:text-white transition-colors text-sm">{doc.title}</span>
                      </div>
                      <Download className="text-gray-500 group-hover:text-[#B8FF00] transition-colors w-5 h-5" />
                    </a>
                  ))
                ) : (
                  <>
                    <button className="w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl opacity-60 cursor-not-allowed">
                       <span className="font-semibold text-gray-300 text-sm">SDS (GHS Version)</span>
                       <Download className="text-gray-500 w-5 h-5" />
                    </button>
                    <button className="w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl opacity-60 cursor-not-allowed">
                       <span className="font-semibold text-gray-300 text-sm">Technical Data Sheet</span>
                       <Download className="text-gray-500 w-5 h-5" />
                    </button>
                    <button className="w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl opacity-60 cursor-not-allowed">
                       <span className="font-semibold text-gray-300 text-sm">COA Batch Sample</span>
                       <Download className="text-gray-500 w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. Formulation Guide (Best Practices & Don'ts) */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Best Practices */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F1612] rounded-3xl p-10 border border-[#B8FF00]/10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8FF00]/5 blur-3xl rounded-full" />
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <CheckCircle2 className="text-[#B8FF00]" /> Best Practices
            </h3>
            <ul className="space-y-6 text-gray-300">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Dosage</strong>
                  <p className="text-sm">0.05% - 0.2% is the optimal concentration for topical applications.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">pH Level</strong>
                  <p className="text-sm">Must maintain between 5.0 - 7.0 for maximum molecular stability.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">Phase</strong>
                  <p className="text-sm">Add to the aqueous phase at temperatures below 40°C to avoid degradation.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Crucial Don'ts */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-3xl p-10 border border-red-500/10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <AlertTriangle className="text-red-400" /> Crucial Don'ts
            </h3>
            <ul className="space-y-6 text-gray-300">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">No Vit C</strong>
                  <p className="text-sm">Direct contact with Ascorbic Acid causes rapid oxidation and deactivation.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">No Acids</strong>
                  <p className="text-sm">Low pH environments (AHAs/BHAs) hydrolyze the delicate peptide chain.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block mb-1">No EDTA</strong>
                  <p className="text-sm">Chelating agents will strip the essential copper ions from the peptide.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. Reliable Global Supply Chain */}
      <section className="pt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Reliable Global Supply Chain</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            We ensure consistent quality and rapid delivery through our certified facilities and specialized logistics network.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { 
              icon: <Building className="text-[#B8FF00]" size={32} />, 
              title: "GMP Facility", 
              desc: "Synthesized in strictly controlled ISO-certified cleanrooms." 
            },
            { 
              icon: <Truck className="text-[#B8FF00]" size={32} />, 
              title: "Express Logistics", 
              desc: "Global shipping in specialized oxygen-free, temperature-controlled containers." 
            },
            { 
              icon: <Award className="text-[#B8FF00]" size={32} />, 
              title: "Quality Assurance", 
              desc: "Consistent high purity (99%+) verified by HPLC across every single batch." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 glass rounded-3xl border border-white/5 hover:border-[#B8FF00]/20 transition-colors group"
            >
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#B8FF00]/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
