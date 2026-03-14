import React, { useState } from 'react';
import './App.css'; // Assuming you have Tailwind CSS set up

const motorcycles = [
    { id: 1, name: 'Motorcycle A', cc: 600, ps: 70, weight: 180, seatHeight: 80, price: 10000 },
    { id: 2, name: 'Motorcycle B', cc: 750, ps: 95, weight: 200, seatHeight: 85, price: 12000 },
    // add more motorcycle data here
];

const App = () => {
    const [quizAnswers, setQuizAnswers] = useState({ height: '', budget: '', psRange: '', experience: '', style: '' });
    const [matchedMotorcycles, setMatchedMotorcycles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMotorcycle, setSelectedMotorcycle] = useState(null);

    const handleQuizChange = (e) => {
        setQuizAnswers({ ...quizAnswers, [e.target.name]: e.target.value });
    };

    const handleQuizSubmit = (e) => {
        e.preventDefault();
        // Implement matching logic here based on quizAnswers
        const matches = motorcycles.filter(motorcycle => 
            motorcycle.ps <= parseInt(quizAnswers.psRange) && 
            motorcycle.price <= parseInt(quizAnswers.budget)
        );
        setMatchedMotorcycles(matches);
    };

    const handleMotorcycleClick = (motorcycle) => {
        setSelectedMotorcycle(motorcycle);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedMotorcycle(null);
    };

    return (
        <div className="app bg-white min-h-screen p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Motorcycle Finder</h1>
            <form onSubmit={handleQuizSubmit} className="mb-4">
                <input type="number" name="height" placeholder="Body Height (cm)" className="border rounded p-2 m-1" onChange={handleQuizChange} />
                <input type="number" name="budget" placeholder="Budget ($)" className="border rounded p-2 m-1" onChange={handleQuizChange} />
                <input type="number" name="psRange" placeholder="PS Range" className="border rounded p-2 m-1" onChange={handleQuizChange} />
                <input type="text" name="experience" placeholder="Riding Experience" className="border rounded p-2 m-1" onChange={handleQuizChange} />
                <select name="style" className="border rounded p-2 m-1" onChange={handleQuizChange}>
                    <option value="">Preferred Riding Style</option>
                    <option value="cruiser">Cruiser</option>
                    <option value="sport">Sport</option>
                    <option value="touring">Touring</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 m-1">Find Motorcycles</button>
            </form>
            <div className="motorcycle-list"> 
                {matchedMotorcycles.map(motorcycle => (
                    <div key={motorcycle.id} className="border rounded p-2 m-2 bg-gray-100 hover:shadow-lg transition-shadow rounded-md" onClick={() => handleMotorcycleClick(motorcycle)}>
                        {motorcycle.name} - {motorcycle.ps} PS
                    </div>
                ))}
            </div>
            {showModal && selectedMotorcycle && (
                <div className="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="modal-content bg-white p-4 rounded shadow">
                        <h2 className="text-2xl font-bold">{selectedMotorcycle.name}</h2>
                        <p>CC: {selectedMotorcycle.cc}</p>
                        <p>PS: {selectedMotorcycle.ps}</p>
                        <p>Weight: {selectedMotorcycle.weight} kg</p>
                        <p>Seat Height: {selectedMotorcycle.seatHeight} cm</p>
                        <p>Price: ${selectedMotorcycle.price}</p>
                        <button className="bg-red-500 text-white rounded p-2 mt-4" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;