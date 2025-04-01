import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <p className="text-black">4095 Southern BLVD Suite #207, WEST PALM BEACH, FL 33406</p>
            <p className="text-black">(877) 307-8131</p>
            <p className="text-black">info@nextgenmepfp.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <p className="text-black text-sm">
              © {new Date().getFullYear()} NEXTGEN MEPfp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}