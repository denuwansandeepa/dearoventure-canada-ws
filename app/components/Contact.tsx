"use client";
 
import LeafletMap from "./Map";
export default function ContactSection() {
   
  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4">

        {/* ONE ROW LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

         {/* CONTACT INFO */}
<div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-start">
  <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
    Contact Information
  </h3>


  

  {/* Office Details */}
  <div className="space-y-3 text-gray-700">
    <p>
      <strong>Address:</strong>  8ᵗʰ Floor, Ceylinco House, No. 69, Janadhipathi Mawatha, Colombo 01
    </p>
    <p>
      <strong>Phone:</strong>{" "}
      <span className="text-blue-600 font-medium">011 478 2400</span>
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <span className="text-blue-600 font-medium">
        info@dearoinvestment.com
      </span>
    </p><br/>
  </div>
  {/* Divider */}
  <hr className="my-2" /> 
  
  {/* Department Contacts */}
  <div className="space-y-3 mb-6 text-gray-700">
    
    <p>
      <strong>General Inquiries:</strong>{" "}
      <span className="text-blue-600 font-medium">+94 74 390 8274</span>
    </p>
    <p>
      <strong>Treasury Services:</strong>{" "}
      <span className="text-blue-600 font-medium">+94 74 987 6543</span>
    </p>
    <strong>Financing Services :</strong>{" "}
      <span className="text-blue-600 font-medium">+94 74 390 8274</span>
    <p>
      
    </p>
  </div>
</div>



          {/* MAP – CENTER BOX */}
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="w-full h-[450px] rounded-xl overflow-hidden ">
              <LeafletMap />
            </div>
          </div>

          {/* SEND MESSAGE */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center">
  <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
    Send Us a Message
  </h3>

  <form className="space-y-4">
    <input
      className="w-full border border-gray-300 p-3 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition"
      placeholder="Name"
    />

    <input
      className="w-full border border-gray-300 p-3 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition"
      placeholder="Email"
    />

    <textarea
      rows={4}
      className="w-full border border-gray-300 p-3 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition"
      placeholder="Message"
    />

    <button
      className="w-full bg-blue-600 text-white py-3 rounded-lg
                 hover:bg-blue-700 transition font-semibold"
    >
      Send Message
    </button>
  </form>
</div>


        </div>
      </div>

    </section>
  );
}