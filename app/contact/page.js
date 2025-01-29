import ContactSection from "@/components/home/ContactSection";
import PageTitle from "@/components/PageTitle";

export default function ContactPage() {
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
            title="GET IN"
            highlight="TOUCH"
            description="Connect with our experienced team to discuss your next project"
            image="/images/contact-hero-bg.webp"
          />
        </div>
        <ContactSection />
      </div>
    </div>
  );
}
