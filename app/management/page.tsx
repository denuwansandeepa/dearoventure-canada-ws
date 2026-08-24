export const metadata = {
  title: "Dearo Venture Canada Corporate Management",
};

export default function ManagementPage() {
  const management = [
    {
      name: "Mr. Prasanna Sanjeewa Ranasinghe",
      title: " Executive Director / Chief Executive Officer",
      img: "/images/derector/prasanna 1.png",
    },
    // {
    //   name: "Mr. Niranjan Warnasooriya",
    //   title: "Non Board Director / Deputy Chief Executive Officer",
    //   img: "/images/derector/nerangen.png",
    // },
    // {
    //   name: "Mr. Upul Edirisooriya",
    //   title: "Non Independent Non Executive Director",
    //   img: "/images/derector/upul.png",
    // },
   
    // {
    //   name: "Mr.Pushparaj Arun Kumar",
    //   title: "Director / Chief Operating Officer",
    //   img: "/images/derector/arun.jpg",
    // },
    // {
    //   name: "Mr. Tharindu Dananjaya",
    //   title: "Non Board Director/ Chief Information Officer",
    //   img: "/images/derector/tharindu.png",
    // },
     {
      name: "Mr. Seiichirou Ukegawa",
      title: "Non-Independent Director",
      img: "/images/derector/Seiichirou-Ukegawa.webp",
    },
     {
      name: "Mr.Jūzō Sakai",
      title: "Non-Independent Director",
      img: "/images/derector/Iwatsuka-Sangyo.jpeg",
    },
    {
      name: "Mr. As Shek Moulavi Abdul Jabbar Bahji",
      title: "Islamic Investment Consultant",
      img: "/images/derector/ms.jpeg",
    },
  ];

  return (
    <>
      {/* 🔹 HERO IMAGE */}
      <div className="relative w-full h-[350px] md:h-[420px] mt-23">
        <img
          src="/images/director.png"
          alt="Board of Directors"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 HERO TEXT BELOW IMAGE */}
      <div className="text-center mt-6 px-4 sm:px-6 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Board of Directors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Guided by vision and innovation, our leaders have played a key role in
          driving Dearo Venture Canada Ltd's growth and success.
        </p>
      </div>

      {/* 🔹 MEMBERS SECTION */}
      <main className="max-w-6xl mx-auto p-6 mt-14 space-y-16">

        {/* 🔹 FIRST ROW – 3 MEMBERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {management.slice(0, 3).map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {person.name}
              </h2>
              <p className="text-gray-600 font-medium">
                {person.title}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 SECOND ROW – 2 MEMBERS CENTERED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {management.slice(3, 6).map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center text-center"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {person.name}
              </h2>
              <p className="text-gray-600 font-medium">
                {person.title}
              </p>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}
