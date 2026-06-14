export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} StyleStore. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-gray-500">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
