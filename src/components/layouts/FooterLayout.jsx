export default function FooterLayout() {
  return (
    <footer className=" py-12">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Footer Content */}
        
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="">
            &copy; {new Date().getFullYear()} Create Box. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
