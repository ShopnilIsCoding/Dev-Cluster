import { useState } from "react";
import UseDateTime from "../Hooks/UseDateTime";
import { toast } from 'react-toastify';


const AddStudents = () => {
  const formattedDateTime = UseDateTime(60000);
  const [profilePicture, setProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    rollNumber: '',
    pincode: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      console.log(profilePicture)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { rollNumber, pincode } = formData;

    if (rollNumber.length !== 2) {
      toast.error("Roll number must be exactly 2 digits.");
      return;
    }

    if (pincode.length < 4 || pincode.length > 6) {
      toast.error("Pincode must be between 4 to 6 digits.");
      return;
    }

    toast.success("Student added successfully!");
    
  };

  return (
    <div className="font-ibm">
      <div className="flex justify-between items-center w-full mb-8 gap-4 flex-wrap lg:flex-nowrap flex-1">
        <p className="text-[16px] font-semibold">Add Student</p>
        <div className="text-[#000000] text-sm">
          {formattedDateTime}
        </div>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#00000080] text-sm" onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" className="input input-bordered w-full" />
        <input type="text" placeholder="Middle Name" className="input input-bordered w-full" />
        <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
        
        <select className="select select-bordered w-full">
          <option disabled selected>Select Class</option>
          {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((roman, index) => (
            <option key={index} value={roman}>{roman}</option>
          ))}
        </select>
        
        <select className="select select-bordered w-full">
          <option disabled selected>Select Division</option>
          {['A', 'B', 'C', 'D', 'E'].map((division) => (
            <option key={division}>{division}</option>
          ))}
        </select>
        
        <input
          type="text"
          placeholder="Enter Roll Number in Digits"
          className="input input-bordered w-full"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleInputChange}
          maxLength={2}
          pattern="\d*"
        />
        
        <div className="col-span-3 flex flex-col lg:flex-row gap-4 mt-12">
          <input
            type="text"
            placeholder="Address Line 1"
            className="input input-bordered lg:w-1/2"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            className="input input-bordered lg:w-1/2"
          />
        </div>
        
        <input type="text" placeholder="Landmark" className="input input-bordered w-full" />
        <input type="text" placeholder="City" className="input input-bordered w-full" />
        
        <input
          type="text"
          placeholder="Pincode"
          className="input input-bordered w-full"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          minLength={4}
          maxLength={6}
          pattern="\d*"
        />
        
        <div className="col-span-3">
          <label className="block text-sm font-medium mb-4">Profile Picture</label>
          {profilePicture && <img src={profilePicture} alt="Profile Preview" className="mb-4 h-24 w-24 object-cover rounded-full" />}
          <input type="file" onChange={handleImageUpload} className="file-input file-input-bordered w-full" />
          
        </div>
        
        <button type="submit" className="btn bg-core text-[#FFFF] col-span-1 lg:min-w-[303px] text-sm">Add Student</button>
      </form>
      
    </div>
  );
};

export default AddStudents;
