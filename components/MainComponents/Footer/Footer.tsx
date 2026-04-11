const Footer = () => {
  return (
    <footer className="bg-[#f5f7fb] text-gray-600 px-6 py-12 mt-16 rounded-xl border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold tracking-widest text-blue-700">
            ARCHITECT
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Precision Fluidity in every structure. Elevating the standard of
            collaborative architecture.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 tracking-wide">
            PRODUCT
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Dashboard</li>
            <li className="hover:text-black cursor-pointer">Projects</li>
            <li className="hover:text-black cursor-pointer">
              Team Management
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 tracking-wide">
            RESOURCES
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Documentation</li>
            <li className="hover:text-black cursor-pointer">Help Center</li>
            <li className="hover:text-black cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 tracking-wide">
            LEGAL
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">Terms of Service</li>
            <li className="hover:text-black cursor-pointer">Cookie Settings</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t text-sm">
        <p>
          © {new Date().getFullYear()} Architect Precision Fluidity. All rights
          reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          <span className="cursor-pointer hover:text-black">🌐</span>
          <span className="cursor-pointer hover:text-black">🔗</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;