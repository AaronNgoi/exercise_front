import React from 'react';


const EquipmentOptions = () => {
  return (
          <div className="ButtonContainer">
          {equipmentList.map((equipment) => (
              <button
                key={equipment}
                className={selectedEquipment.includes(equipment) ? 'ActiveFilterButton' : 'FilterButton'}
                onClick={() => handleEquipmentSelection(equipment)}
              >
                {equipment}
              </button>
            ))}
          </div>
  );
};

export default EquipmentOptions;