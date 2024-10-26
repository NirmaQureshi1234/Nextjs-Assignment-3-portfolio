// src/app/page.tsx

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Full-Screen Banner Section */}
      <section className="relative h-screen scroll-m-11">
        <Image
          src="/pic3.jpg"
          alt="Banner Image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl font-mono sm:text-3xl md:text-5xl font-bold text-center text-white px-4">
            THAT&apos;S ME NIRMA QURESHI, A FRONTEND DEVELOPER
          </h1>
        </div>
      </section>

      <main className="container mx-auto my-8 space-y-16">
        {/* About Section */}
        <section id="about" className="text-center px-4">
          <h2 className="text-4xl font-extrabold mb-4">About Us</h2>
          <p className="text-gray-600 font-extrabold">
            &quot;I am Nirma Qureshi, a committed and detail-oriented graduate
            in Web Development from Tech Force Pakistan. Currently, I am
            furthering my knowledge in the field of Artificial Intelligence at
            GIAIC, where I am engaged in advanced studies that enhance my
            technical acumen. I possess a robust foundation in TypeScript,
            underscored by my recent achievements in the Quarter 1 examinations.
            At present, my focus is directed towards mastering Next.js, a
            pivotal framework in modern web development. My diverse academic
            background in pre-medical studies enriches my perspective, allowing
            me to blend analytical skills with creative problem-solving. This
            unique combination enables me to harness my capabilities in web
            development and AI, positioning me to make meaningful contributions
            to innovative and impactful projects.&quot;
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="text-center px-4">
          <h2 className="text-3xl font-extrabold mb-2 ">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <a
              href="https://animated-portfolio-3kei.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 h-64 md:h-64"
            >
              <Image
                src="/pic1.png"
                alt="Project 1"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Project 1</p>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://next-js-class-assignment-peach.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 h-64 md:h-64"
            >
              <Image
                src="/pic.png"
                alt="Project 2"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Project 2</p>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="https://nextjs-class-assignment-2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-100 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 h-64 md:h-64"
            >
              <Image
                src="/pic2.png"
                alt="Project 3"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Project 3</p>
              </div>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center px-4">
          <h2 className="text-3xl font-extrabold mb-4">Contact</h2>
          <p className="text-gray-600 font-extrabold">
            Get in touch with us for more information or collaborations!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
