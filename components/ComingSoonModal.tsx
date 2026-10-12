'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ReactDOM from 'react-dom';

interface ComingSoonModalProps {
  isOpen: boolean;
  title: string;
  category?: string;
  description?: string;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  title,
  category,
  description,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 250);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'bg-black/60 backdrop-blur-sm opacity-100' : 'bg-black/0 opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-7 text-center transition-all duration-300 transform ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <Icon icon="solar:close-circle-bold" className="text-2xl" />
        </button>

        {/* Icon & Badge */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
          <Icon icon="solar:rocket-2-bold-duotone" className="text-3xl" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007AFF] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
          <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-ping" />
          Coming Soon
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {title || 'Coming Soon'}
        </h3>

        {category && (
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {category}
          </p>
        )}

        <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
          {description ||
            'This project is currently under active development. We are fine-tuning the experience and will launch it very soon!'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <a
            href={`mailto:pureumsoftware@gmail.com?subject=${encodeURIComponent(`Inquiry regarding ${title} (Coming Soon)`)}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-gray-900 hover:bg-black text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Icon icon="solar:letter-bold" className="text-base" />
            Contact for Early Access
          </a>
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ComingSoonModal;
