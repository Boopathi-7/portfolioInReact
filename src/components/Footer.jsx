const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold text-center mb-4">Boopathi M</h1>
    <p className="text-center mb-8">
      I am Boopathi, and this is my personal website, consult me here.
    </p>
    <div className="flex justify-center space-x-6 mb-8">
      <a 
        href="https://www.linkedin.com/in/boopathi-m-34012724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="text-gray-400 hover:text-white">
        <i className="bx bxl-linkedin text-2xl"></i>
      </a>
      <a 
        href="https://github.com/Boopathi-7"
        className="text-gray-400 hover:text-white">
        <i className="bx bxl-github text-2xl"></i>
      </a>
    </div>
    <p className="text-center text-gray-400">
      &#169; 2024 Boopathi. All rights reserved.
    </p>
  </div>
</footer>

    </>
  );
};

export default Footer;
