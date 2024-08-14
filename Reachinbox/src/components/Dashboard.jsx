import { useState } from 'react';
import {
    FaSun, FaMoon, FaBars, FaHome, FaUser, FaEnvelope, FaTelegramPlane,
    FaListUl, FaInbox, FaChartBar
} from 'react-icons/fa';
import Onepagedata from './Onepagedata';

const Dashboard = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const username = "Subhasis Sahoo";  // Replace with dynamic username if needed

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            {/* Sidebar */}
            <div className={`flex flex-col w-16 bg-gray-800 h-full p-2 items-center justify-between`}>
                <div>
                    <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-white mb-4">
                        <FaBars />
                    </button>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-center">
                            <FaHome />
                        </li>
                        <li className="flex items-center justify-center">
                            <FaUser />
                        </li>
                        <li className="flex items-center justify-center">
                            <FaEnvelope />
                        </li>
                        <li className="flex items-center justify-center">
                            <FaTelegramPlane />
                        </li>
                        <li className="flex items-center justify-center">
                            <FaListUl />
                        </li>
                        <li className="flex items-center justify-center">
                            <FaInbox />
                        </li>
                        <li className="flex items-center justify-center">
                            <FaChartBar />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                        S
                    </div>
                    <span className="text-xs mt-2">{username.split(" ")[0]}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col">
                {/* Top Bar */}
                <div className="flex justify-between items-center bg-gray-800 text-white h-12 px-4">
                    <div className="flex items-center space-x-4">
                        <FaEnvelope />
                        <span>Onebox</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button className="flex items-center bg-gray-700 px-2 py-1 rounded text-sm">
                                Tim's Workspace
                                <FaBars className="ml-2" />
                            </button>
                        </div>
                        <button onClick={toggleTheme}>
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-4">
                    <Onepagedata />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
