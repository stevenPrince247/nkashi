
import React from "react";
import { useNavigate } from "react-router-dom";
import { Headphones, Globe, DollarSign, User } from "lucide-react";

const MoreServices = () => {
  const navigate = useNavigate();

  const moreServices = [
    {
      id: 'support',
      title: 'Support',
      icon: Headphones,
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      onClick: () => navigate("/support")
    },
    {
      id: 'group',
      title: 'Group',
      icon: Globe,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      onClick: () => navigate("/platform")
    },
    {
      id: 'earn',
      title: 'Earn',
      icon: DollarSign,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      onClick: () => navigate("/earn-more")
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      onClick: () => navigate("/profile")
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <h3 className="font-bold text-lg mb-3 text-gray-800">More Services</h3>
      <div className="grid grid-cols-4 gap-3">
        {moreServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={service.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={service.onClick}
            >
              <div className={`h-12 w-12 ${service.bgColor} rounded-xl mb-2 flex items-center justify-center`}>
                <IconComponent className={`h-5 w-5 ${service.iconColor}`} />
              </div>
              <p className="text-xs font-medium text-center text-gray-800">{service.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreServices;
