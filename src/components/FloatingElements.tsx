import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingElements = () => {
  const [recentApprovals, setRecentApprovals] = useState([
    { name: 'Julia M.', time: '2 minutos atrás' },
    { name: 'Mariana S.', time: '5 minutos atrás' },
    { name: 'Gabriela L.', time: '7 minutos atrás' }
  ]);

  const [remainingSpots, setRemainingSpots] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingSpots > 1) {
        setRemainingSpots(spots => spots - 1);
      }
    }, 300000); // Every 5 minutes

    return () => clearInterval(interval);
  }, [remainingSpots]);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Remaining Spots Counter */}
      <div className="fixed top-6 right-6 z-50 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
        Apenas {remainingSpots} vagas restantes!
      </div>

      {/* Recent Approvals */}
      <div className="fixed bottom-24 left-6 z-50 space-y-2">
        {recentApprovals.map((approval, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg max-w-xs animate-slide-in"
          >
            <p className="font-bold">{approval.name}</p>
            <p className="text-sm text-gray-400">{approval.time}</p>
          </div>
        ))}
      </div>
    </>
  );
};