import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black text-center py-4 flex justify-around">
      <nav className="flex">
        <a href="#" className="mx-4 text-black no-underline">Home</a>
        <a href="#" className="mx-4 text-black no-underline">About</a>
        <a href="#" className="mx-4 text-black no-underline">Contact</a>
      </nav>
    </header>
  );
};

const SearchBar = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex items-center w-52 h-10 max-w-xs border-2 border-gray-500 rounded-full overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border-none outline-none"
        />
        <button className="bg-gray-500 text-white py-6 px-5 cursor-pointer rounded-r-full hover:bg-black">
          Search
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="text-white text-center text-4xl py-32 w-full h-[500px] text-shadow-lg bg-cover bg-center" style={{ backgroundImage: "url('your-image-url')" }}>
      Welcome to Our School
    </section>
  );
};

const FacilityCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[800px] h-[300px] transform hover:-translate-y-2 hover:shadow-2xl transition ease-in-out duration-300 relative z-20">
      <img src={imageUrl} alt={title} className="w-2/5 object-cover" />
      <div className="p-5 w-3/5">
        <h2 className="text-2xl mt-0 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeedbackForm = () => {
  return (
    <div className="flex flex-col max-w-xs mx-auto bg-white p-5 shadow-lg">
      <input
        type="text"
        placeholder="Your Name"
        className="mb-2 p-2 text-base border border-gray-300 rounded"
      />
      <textarea
        placeholder="Your Feedback"
        className="mb-2 p-2 text-base border border-gray-300 rounded"
      ></textarea>
      <select className="mb-2 p-2 text-base border border-gray-300 rounded">
        <option value="">Select a Topic</option>
        <option value="facility">Facility</option>
        <option value="teaching">Teaching</option>
        <option value="other">Other</option>
      </select>
      <button className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700">
        Submit Feedback
      </button>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="my-12 mx-auto text-center">
      <h1 className="text-4xl mb-10 opacity-60">Frequently Asked Questions</h1>
      <div className="border-solid border-2 p-2 mb-2">
        <div className="flex justify-between p-2 cursor-pointer rounded bg-gray-200 hover:bg-gray-300">
          <span>What is the school timing?</span>
          <img src="your-arrow-image-url" alt="Toggle" className="w-5 h-5 opacity-60" />
        </div>
        <div className="text-left p-2 hidden">The school starts at 8 AM and ends at 2 PM.</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white text-center py-4">
      &copy; 2024 School Feedback System
    </footer>
  );
};

const Home = () => {
  return (
    <div className="font-sans m-0 p-0 bg-gray-100">
      <Header />
      <SearchBar />
      <HeroSection />
      
      <div className="p-5 px-96 mx-72">
        <FacilityCard
          title="Library"
          description="A well-equipped library with thousands of books."
          imageUrl="your-library-image-url"
        />
        </div>
        <div className='p-5 px-12'>
        <FacilityCard
          title="Sports Complex"
          description="State-of-the-art sports facilities."
          imageUrl="your-sports-complex-image-url"
        />
      </div>
      <FeedbackForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
