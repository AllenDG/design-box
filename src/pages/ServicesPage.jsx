import Reviews from "@/components/ui/services/Reviews";
import Services from "@/components/ui/services/Services";
import PaymentMethod from "@/components/ui/services/PaymentMethod";

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 lg:px-8 mt-14">
      {/* Service Categories */}
      <Services />

      {/* Payment Method Section */}
      <PaymentMethod />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
