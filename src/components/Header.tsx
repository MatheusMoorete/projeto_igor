'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import DevelopmentDialog from './DevelopmentDialog';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState('');

  const handleFeatureClick = (feature: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentFeature(feature);
    setDialogOpen(true);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="w-full bg-[#0b0014]/80 backdrop-blur-md fixed top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative w-20 h-12">
            <span className="text-purple-500 font-bold text-2xl">MAFIA</span>
          </Link>

          {/* Menu para desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-purple-400 transition">
              Home
            </Link>
            <Link href="/#pricing" className="text-white hover:text-purple-400 transition">
              Comprar
            </Link>
            <Link 
              href="#" 
              onClick={handleFeatureClick("Guias")}
              className="text-white hover:text-purple-400 transition"
            >
              Guias
            </Link>
            <Link 
              href="#" 
              onClick={handleFeatureClick("Status")}
              className="text-white hover:text-purple-400 transition"
            >
              Status
            </Link>
            <Link 
              href="#" 
              onClick={handleFeatureClick("Downloads")}
              className="text-white hover:text-purple-400 transition"
            >
              Downloads
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleFeatureClick("Suporte")}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center px-5 py-2.5 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
            >
              <MessageCircle size={18} className="mr-2 group-hover:animate-pulse" />
              <span>Suporte 24/7</span>
            </button>
          </div>

          {/* Botão de menu móvel */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu móvel */}
          {isMenuOpen && (
            <div className="fixed inset-0 top-16 bg-[#0b0014] flex flex-col p-4 md:hidden z-40">
              <nav className="flex flex-col space-y-4 py-8">
                <Link 
                  href="/" 
                  className="text-white text-lg font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/#pricing" 
                  className="text-white text-lg font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comprar
                </Link>
                <Link 
                  href="#" 
                  className="text-white text-lg font-medium py-2"
                  onClick={(e) => {
                    handleFeatureClick("Guias")(e);
                  }}
                >
                  Guias
                </Link>
                <Link 
                  href="#" 
                  className="text-white text-lg font-medium py-2"
                  onClick={(e) => {
                    handleFeatureClick("Status")(e);
                  }}
                >
                  Status
                </Link>
                <Link 
                  href="#" 
                  className="text-white text-lg font-medium py-2"
                  onClick={(e) => {
                    handleFeatureClick("Downloads")(e);
                  }}
                >
                  Downloads
                </Link>
                <div className="pt-4 flex flex-col space-y-4">
                  <button
                    onClick={(e) => {
                      handleFeatureClick("Suporte")(e);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>Suporte 24/7</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Dialog para recursos em desenvolvimento */}
      <DevelopmentDialog 
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        feature={currentFeature}
      />
    </>
  );
} 