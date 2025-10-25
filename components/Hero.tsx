
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Kibo
            </span>{" "}
            Solutions for
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Modern
            </span>{" "}
            Enterprises
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We build intuitive, component-based systems to manage your images, videos, and rich text content with ease.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" className="w-full md:w-1/3">
            <Link to="/about">About Us</Link>
          </Button>
        </div>
      </div>

      {/* Hero Image or Graphic */}
      <div className="z-10">
        <div className="hidden lg:flex justify-center">
            <div className="w-[400px] h-[400px] bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-[300px] h-[300px] bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-[200px] h-[200px] bg-primary/30 rounded-full flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;