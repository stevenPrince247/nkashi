
import React from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Tv, Phone, BarChart3 } from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const handleWatch = () => {
    window.open("https://whatsapp.com/channel/0029Vb5rpnuEQIaxA7taFz1r", "_blank");
  };

  const quickActions = [
    {
      id: 'buy-bpc',
      title: 'Buy BPC',
      icon: CreditCard,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      onClick: () => navigate("/buy-bpc")
    },
    {
      id: 'watch',
      title: 'Watch',
      icon: Tv,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      onClick: handleWatch
    },
    {
      id: 'airtime',
      title: 'Airtime',
      icon: Phone,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      onClick: () => navigate("/airtime")
    },
    {
      id: 'data',
      title: 'Data',
      icon: BarChart3,
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      onClick: () => navigate("/data")
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <div className="grid grid-cols-4 gap-3">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <div 
              key={action.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={action.onClick}
            >
              <div className={`h-12 w-12 ${action.bgColor} rounded-xl mb-2 flex items-center justify-center`}>
                <IconComponent className={`h-5 w-5 ${action.iconColor}`} />
              </div>
              <p className="text-xs font-medium text-center text-gray-800">{action.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
