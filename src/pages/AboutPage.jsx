import React from 'react';

const AboutPage = () => {
  return (
    <div className=" mt-18 min-h-screen text-white flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-semibold text-center text-white mb-8">
        About Our Community
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://as1.ftcdn.net/v2/jpg/04/84/17/72/1000_F_484177243_XHjGlhU1nk9qyFdxL3JKSDISieijDt0H.jpg"
            alt="Community"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 md:pl-10">
          <p className="text-xl text-gray-300 mb-8">
            Our community is a place where people from diverse backgrounds can come together, share experiences, and support each other in both personal and professional growth. We believe in collaboration, innovation, and fostering a culture of mutual respect and encouragement.
          </p>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our mission is to connect individuals from all walks of life and provide them with a platform for sharing knowledge, offering support, and collaborating on meaningful projects. We strive to create an inclusive environment where everyone’s voice is heard, and where personal and collective growth is nurtured.
          </p>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-300 mb-8">
            <li>Inclusivity: Embracing diverse perspectives and backgrounds.</li>
            <li>Collaboration: Working together to achieve common goals.</li>
            <li>Respect: Honoring each other's contributions and viewpoints.</li>
            <li>Growth: Empowering personal and collective development.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Why Join Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            When you join our community, you become part of a network that values your voice and contribution. Whether you're looking to learn, share knowledge, or connect with like-minded individuals, you’ll find a welcoming space here. Our community provides tools, resources, and opportunities for everyone to thrive.
          </p>

          <button class="btn"><span>Join Our Community</span><span>Thanks!</span></button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
