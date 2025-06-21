import React from "react"
import profileData from "../Data/data.js"

const Header = () => {
  return (
    <div className="w-full bg-white shadow rounded-md overflow-hidden">
      <div className="relative">
      <img
    src="/bg.jpg"
    alt="Background Banner"
    className="w-full h-40 object-cover md:h-60"
    style={{ objectPosition: "center" }} 
  />
  <div className="absolute -bottom-12 left-4 flex items-center">
    <img
      src="/khushveer.jpg"
      alt="Profile"
      className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
      style={{ objectFit: "cover" }} 
    />
        </div>
      </div>

      <div className="pt-16 px-4 md:px-6 pb-4">
        <h2 className="text-xl md:text-2xl font-semibold">{profileData.name} <span className="text-gray-400 text-sm">· 2nd</span></h2>
        <p className="text-sm text-gray-700 mt-2">{profileData.title}</p>
        <p className="text-sm text-gray-500 mt-1">{profileData.location} · <span className="text-blue-600">{profileData.contactInfo}</span></p>
        <a href="https://edusystem.tech" className="text-sm text-blue-600 mt-1">{profileData.website}</a>

        <p className="text-sm text-gray-600 mt-2">{profileData.connections}</p>
        <div className="flex items-center mt-2 space-x-2">
          {profileData.mutualConnections.map((person, index) => (
            <span key={index} className="text-xs text-gray-600">{person.name}{index < profileData.mutualConnections.length - 1 ? "," : ""}</span>
          ))}
        </div>

        <div className="flex mt-4 gap-2">

        <a href="https://www.linkedin.com/in/khushveermalviya/" target="_blank" rel="noopener noreferrer">
  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700">
    Connect
  </button>
</a>   <button className="border border-gray-400 text-sm px-4 py-2 rounded-full">Message</button>
          <button className="border border-gray-400 text-sm px-4 py-2 rounded-full">More</button>
        </div>
      </div>
    </div>
  )
}

export default Header
