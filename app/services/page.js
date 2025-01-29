import PageTitle from "@/components/PageTitle";

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative">
      {/* Global background image with overlay */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/images/hero-bg.avif')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-customBlue/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section with PageTitle */}
        <div className="relative">
          <PageTitle
            title="OUR"
            highlight="SERVICES"
            description="Explore our portfolio of successful construction project deliveries"
            image="/images/service-hero-bg.png"
          />
        </div>
      </div>
    </div>
  );
}
