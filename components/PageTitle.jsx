export default function PageTitle({ 
    title, // Main title text
    highlight, // Highlighted/colored part of the title
    description, // Description text
    image = "/images/about-us.jpeg", // Default image with ability to override
  }) {
    return (
      <section className="relative h-[80vh]">
        {/* Hero Section */}
        <div className="absolute inset-0 md:rounded-br-[400px] overflow-hidden">
          <img
            src={image}
            alt={`${title} ${highlight} background`}
            className="object-cover w-full h-full"
          />
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
            <div className="container mx-auto px-4 h-full">
              <div className="flex flex-col justify-center h-full max-w-2xl pt-20 md:pt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white block sm:inline">{title}</span>
                  <span className="text-customGreen ml-0 sm:ml-4">{highlight}</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }