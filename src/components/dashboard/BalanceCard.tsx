
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-bluepay-blue text-white rounded-xl p-4 mb-4">
      <p className="text-base mb-1">Available Balance</p>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-3xl font-bold">₦{balance.toLocaleString()}</h3>
        <Button 
          className="bg-white text-bluepay-blue hover:bg-gray-100 font-semibold text-sm px-3 py-2"
          onClick={() => navigate("/withdraw")}
        >
          Withdraw
        </Button>
      </div>
      <div className="bg-white/10 rounded-lg p-2">
        <div className="flex justify-between items-center">
          <p className="text-xs">Daily spend target</p>
          <p className="text-xs font-semibold">₦200,000</p>
        </div>
        <div className="w-full bg-white/20 h-1.5 rounded-full mt-1">
          <div className="bg-white h-1.5 rounded-full" style={{width: "35%"}}></div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
