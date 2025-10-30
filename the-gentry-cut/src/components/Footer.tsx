import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-8 bg-deep-black text-subtle-off-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl font-bold text-gold-accent mb-4">The Gentry Cut</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} The Gentry Cut. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-semibold mb-2">Navigation</p>
          <a href="#home" className="text-sm hover:text-gold-accent transition-colors duration-300">Home</a>
          <a href="#services" className="text-sm hover:text-gold-accent transition-colors duration-300">Services</a>
          <a href="#gallery" className="text-sm hover:text-gold-accent transition-colors duration-300">Gallery</a>
          <a href="#booking" className="text-sm hover:text-gold-accent transition-colors duration-300">Book</a>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" className="text-subtle-off-white hover:text-gold-accent transition-colors duration-300">
              {/* Replace with actual SVG icons for social media */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-subtle-off-white hover:text-gold-accent transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.797.048.843.038 1.48.15 2.07.355.6.206 1.057.49 1.518.95.46.461.744.918.95 1.518.204.59.317 1.227.354 2.07.046 1.013.048 1.371.048 3.797s-.002 2.784-.048 3.797c-.038.843-.15 1.48-.355 2.07-.206.6-.49 1.057-.95 1.518-.461.46-.918.744-1.518.95-.59.204-1.227.317-2.07.354-1.013.046-1.371.048-3.797.048s-2.784-.002-3.797-.048c-.843-.038-1.48-.15-2.07-.355-.6-.206-1.057-.49-1.518-.95-.46-.461-.744-.918-.95-1.518-.204-.59-.317-1.227-.354-2.07-.046-1.013-.048-1.371-.048-3.797s.002-2.784.048-3.797c.038-.843.15-1.48.355-2.07.206-.6.49-1.057.95-1.518.46-.461.918-.744 1.518-.95.59-.204 1.227-.317 2.07-.354C9.537 2.002 9.9 2 12.315 2zm0 2.161c-2.105 0-2.37.008-3.2.046-.787.036-1.202.14-1.45.23-.409.148-.68.319-.92.569-.249.248-.42.52-.569.92-.09.248-.194.663-.23 1.45-.038.83-.046 1.096-.046 3.2s.008 2.37.046 3.2c.036.787.14 1.202.23 1.45.148.409.319.68.569.92.248.249.52.42.92.569.248.09.663.194 1.45.23.83.038 1.096.046 3.2.046s2.37-.008 3.2-.046c.787-.036 1.202-.14 1.45-.23.409-.148.68-.319.92-.569.249-.248.42-.52.569-.92.09-.248.194-.663.23-1.45.038-.83.046-1.096.046-3.2s-.008-2.37-.046-3.2c-.036-.787-.14-1.202-.23-1.45-.148-.409-.319-.68-.569-.92-.248-.249-.52-.42-.92-.569-.248-.09-.663-.194-1.45-.23-.83-.038-1.096-.046-3.2-.046zM12.315 7.375c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55 4.55-2.04 4.55-4.55-2.04-4.55-4.55-4.55zm0 7.47a2.92 2.92 0 110-5.84 2.92 2.92 0 010 5.84z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
