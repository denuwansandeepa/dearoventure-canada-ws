"use client";

export default function BoardMembersPage() {
  const boardMembers = [
    {
      name: "Mr. Asitha Suranjith",
      title: "Head Of Investment and Treasury",
      img: "/assests/management/asith.jpg",
    }, {
      name: "Mr. Chathura Disanayaka",
      title: "Senior Manager - Investment & Treasury",
      img: "/assests/management/chathura.jpg",
    },
    {
      name: "Mr. Nalin Kumara",
      title: "Chief Manager – Branch Operations",
      img: "/assests/management/nalin.png",
    },
     {
      name: "Mr. Dilshan Nuwantha",
      title: "Cheif Manager – Branch Development",
      img: "/assests/management/team-dilshan-nuwantha.jpg",
    },
    {
      name: "Mr. Mahesh Gunarathna",
      title: "Manager Audit",
      img: "/assests/management/Mahesh Gunarathna Manager Audit.jpeg",
    },
    {
      name: "Mr. Rajitha Madushanka",
      title: "Chief Manager Asset Lending – Leasing",
      img: "/assests/management/team-rajitha.jpg",
    },
    {
      name: "Mrs. D.M.N.N Dassanayaka",
      title: "Head Of HR",
      img: "/assests/management/D.M.N.N Dassanayaka.jpeg",
    },
    {
      name: "Mr. Deepal Piris",
      title: "Head Of Finance",
      img: "/assests/management/deepal.jpg",
    }, {
      name: "Mr. M.N.S Samaraweera",
      title: "Operation Manager ",
      img: "/assests/management/samaraweera.jpg",
    },
   {
      name: "Mr. Rex",
      title: "Senior Manager - North & East Region",
      img: "/assests/management/rex1.jpg",
    },
    
    {
      name: "Mr. Sumith Weerawardene",
      title: "Zonal Manager - East Region",
      img: "/assests/management/sumith.png",
    },
    
    {
      name: "Mr. Mohomed Nifri",
      title: "Manager Branch Operation and Development",
      img: "/assests/management/nifri.jpg",
    },
    
    {
      name: "Mr. Chathura Ubesekara",
      title: "Senior Manager Down South Region",
      img: "/assests/management/chathura.jpeg",
    },
   
    
    {
      name: "Mr. Kokularajan",
      title: "Regional Manager  – Batticaloa",
      img: "/assests/management/koku.png",
    },
    
  ];

  return (
    <>
      {/* 🔝 TOP IMAGE SECTION */}
      <div className="w-full h-[300px] md:h-[420px] relative">
        <img
          src="/assests/boardroom1.jpg" 
          alt="Management"
          className="w-full h-full object-cover"
        />
      </div>

      {/* HERO TEXT BELOW IMAGE */}
      <div className="text-center mt-6 px-4 sm:px-6 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Dearo Senior Management
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Driven by experience and vision, Dearo’s Senior Management team provides strong leadership to support innovation, 
          financial inclusion, and sustainable business expansion.
        </p>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {boardMembers.map((member, index) => (
            <div key={index} className="flex gap-6 items-center">
              {/* Profile Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-xl shadow-md"
              />

              {/* Name and Title */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
