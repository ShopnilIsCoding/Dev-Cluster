import { useState, useEffect } from "react";
import { IoMdSearch, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import UseDateTime from "../Hooks/UseDateTime";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Swal from 'sweetalert2';

Modal.setAppElement('#root');

const ManageStudents = () => {
  const formattedDateTime = UseDateTime(60000);
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [filterOptions, setFilterOptions] = useState({
    roll: '',
    class: [],
    division: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);
  

  const handleView = (student) => {
    setSelectedStudent(student);
    setIsViewModalOpen(true);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setFormData(student);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        toast.success("Student deleted successfully!");
      }
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedStudents = students.map(student =>
      student.id === selectedStudent.id ? formData : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    toast.success("Student details updated successfully!");
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setFilterOptions(prevState => {
        if (checked) {
          return { ...prevState, class: [...prevState.class, value] };
        } else {
          return { ...prevState, class: prevState.class.filter(item => item !== value) };
        }
      });
    } else {
      setFilterOptions({ ...filterOptions, [name]: value });
    }
  };

  const toggleFilterBox = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handlePrint = () => {
    window.print();
  };

  const applyFilters = (students) => {
    let filtered = students;
    if (filterOptions.roll) {
      if (filterOptions.roll === 'asc') {
        filtered = filtered.sort((a, b) => a.rollNumber - b.rollNumber);
      } else if (filterOptions.roll === 'desc') {
        filtered = filtered.sort((a, b) => b.rollNumber - a.rollNumber);
      }
    }
    if (filterOptions.class.length > 0) {
      filtered = filtered.filter(student => filterOptions.class.includes(student.class));
    }
    return filtered;
  };

  const filteredStudents = applyFilters(students.filter(student =>
    student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toString().toLowerCase().includes(searchQuery.toLowerCase())
  ));

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      background: '#fff',
      maxWidth: '600px',
      width: '90%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'scroll',
      maxHeight: '90%'
    }
  };

  if(currentPage>(Math.ceil(filteredStudents.length / studentsPerPage)))
    {
      setCurrentPage(Math.ceil(filteredStudents.length / studentsPerPage));
    }

  return (
    <div className="font-ibm w-full flex flex-col overflow-x-scroll">
      <div className="flex justify-around items-center w-full lg:min-h-[44px] gap-4 flex-wrap lg:flex-nowrap flex-1">
        <p className="text-[16px] font-semibold">Manage Students</p>
        <div className="bg-[#EFF3F6] flex items-center border-[0.5px_solid_#D4D8DD] h-[44px] rounded-[10px] px-[15px] gap-[3px]">
          <IoMdSearch />
          <input
            type="text"
            placeholder="Search"
            className="text-[#B5B8BF] bg-[#EFF3F6]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button onClick={handlePrint} className="text-[#4E5159] w-[84px] h-[44px] py-[14px] px-[11px] text-[13px] font-light bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300 font-inter">
          Print
        </button>
        <div className="relative">
          <button onClick={toggleFilterBox} className="text-[#4E5159] w-[84px] h-[44px] py-[14px] px-[11px] text-[13px] font-light bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300 font-inter">
            Filter
          </button>
          {isFilterOpen && (
            <div className="absolute overflow-visible right-[0]  z-50 bg-white min-w-[168px] border-[0.5px] bg-base-300 border-[#647887] rounded-[10px] p-4 mt-2 flex gap-2">
              <div className="mb-2 ">
                <div>
                <label className="block text-sm font-medium">Roll</label>
                <select name="roll" onChange={handleFilterChange} className="select select-bordered w-fit">
                  <option value="">Select</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Class</label>
                <div className="grid grid-cols-12 gap-5 px-3">
                {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((classValue, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      value={classValue}
                      onChange={handleFilterChange}
                    /> {classValue}
                  </div>
                ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-[#000000] text-sm">
          {formattedDateTime}
        </div>
      </div>
      <div className="mt-6 overflow-auto rounded-t-[5px]">
        <table className="table overflow-x-scroll">
          <thead className="bg-core text-[#FFFF] text-sm font-ibm">
            <tr>
              <th className="w-1/4">Name</th>
              <th className="w-1/4 text-center">Class</th>
              <th className="w-1/4 text-center">Roll No.</th>
              <th className="w-1/4 text-center">View / Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                students?.length<=0 && <p className="text-core text-center text-xl font-bold w-fit mx-auto py-4">Please add some students first!</p>
            }
            {currentStudents.map(student => (
              <tr key={student.id}>
                <td className="w-1/4">{`${student.firstName} ${student.middleName} ${student.lastName}`}</td>
                <td className="w-1/4 text-center">{`${student.class}-${student.division}`}</td>
                <td className="w-1/4 text-center">{student.rollNumber}</td>
                <td className="w-1/4 text-center text-core">
                  <div className="flex justify-center items-center gap-[25px] text-2xl">
                    <MdOutlineRemoveRedEye className="cursor-pointer" onClick={() => handleView(student)} />
                    <RiEdit2Line className="cursor-pointer" onClick={() => handleEdit(student)} />
                    <RiDeleteBin6Line className="cursor-pointer" onClick={() => handleDelete(student.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center text-[#4E5159] py-2 px-4 bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300"
          >
            <IoMdArrowBack className="mr-1" /> Previous
          </button>
          <span className="text-[#FFFF] font-black bg-core rounded-full size-12 p-3">{currentPage}/{Math.ceil(filteredStudents.length / studentsPerPage)}</span>
          <button
            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredStudents.length / studentsPerPage)))}
            disabled={currentPage === Math.ceil(filteredStudents.length / studentsPerPage)}
            className="flex items-center text-[#4E5159] py-2 px-4 bg-[#F8F9FB] border-[0.5px] border-[#647887] rounded-[10px] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition duration-300"
          >
            Next <IoMdArrowForward className="ml-1" />
          </button>
        </div>
      </div>

      {/* View Modal */}
      <Modal isOpen={isViewModalOpen} style={customStyles} onRequestClose={() => setIsViewModalOpen(false)} >
        {selectedStudent && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Student Details</h2>
            <p>
              Meet <strong className="text-core">{selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</strong>, a diligent and enthusiastic learner at Dev Cluster Academy. Currently enrolled in class <strong className="text-core">{selectedStudent.class}</strong> of division <strong className="text-core">{selectedStudent.division}</strong>, {selectedStudent.firstName} is known for a keen interest in academics and extracurricular activities. With roll number <strong className="text-core">{selectedStudent.rollNumber}</strong>, {selectedStudent.firstName} is a familiar face among peers and teachers alike.
            </p>
            <p>
              Residing at <strong className="text-core">{selectedStudent.addressLine1}</strong>, <strong  className="text-core">{selectedStudent.addressLine2 ? `${selectedStudent.addressLine2},` : ''}</strong> near <strong className="text-core">{selectedStudent.landmark}</strong>, in the bustling city of <strong className="text-core">{selectedStudent.city}</strong>, {selectedStudent.firstName} has created a comfortable space conducive to both study and relaxation. The locality, recognized by the pincode <strong className="text-core">{selectedStudent.pincode}</strong>, is known for its vibrant community and excellent amenities.
            </p>
            {selectedStudent.profilePicture && <img src={selectedStudent.profilePicture} alt={`${selectedStudent.firstName}'s Photo`} className="mt-4 h-24 w-24 object-cover rounded-full" />}
            <p className="mt-4">
              Dev Cluster Academy is proud to have students like {selectedStudent.firstName}, who not only excel in their studies but also embody the values of hard work and integrity. We look forward to witnessing {selectedStudent.firstName}'s continued growth and achievements in the coming years.
            </p>
            <button className="btn mt-4 bg-core text-[#FFFF]" onClick={() => setIsViewModalOpen(false)}>Close</button>
          </div>
        )}
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}  style={customStyles}>
        <h2 className="text-xl font-semibold mb-4">Edit Student Details</h2>
        {selectedStudent && (
          <form onSubmit={handleEditSubmit} className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full mb-2"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              className="input input-bordered w-full mb-2"
              value={formData.middleName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full mb-2"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <select
              name="class"
              className="select select-bordered w-full mb-2"
              value={formData.class}
              onChange={handleInputChange}
              required
            >
              <option disabled>Select Class</option>
              {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((roman, index) => (
                <option key={index} value={roman}>{roman}</option>
              ))}
            </select>
            <select
              name="division"
              className="select select-bordered w-full mb-2"
              value={formData.division}
              onChange={handleInputChange}
              required
            >
              <option disabled>Select Division</option>
              {['A', 'B', 'C', 'D', 'E'].map((division) => (
                <option key={division} value={division}>{division}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter Roll Number in Digits"
              className="input input-bordered w-full mb-2"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleInputChange}
              maxLength={2}
              pattern="\d*"
              required
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="input input-bordered w-full mb-2 col-span-2"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="input input-bordered w-full mb-2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Landmark"
              className="input input-bordered w-full mb-2"
              name="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-full mb-2"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Pincode"
              className="input input-bordered w-full mb-2"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              minLength={4}
              maxLength={6}
              pattern="\d*"
              required
            />
            <button type="submit" className="btn bg-core text-[#FFFF] col-span-1 lg:min-w-[303px] text-sm">Save Changes</button>
          </form>
        )}
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ManageStudents;
