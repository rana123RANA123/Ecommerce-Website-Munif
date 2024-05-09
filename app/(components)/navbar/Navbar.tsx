// "use client";
// import React from "react";
// import Link from "next/link";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-center h-16">
//           <div className="hidden md:block flex items-center justify-center">
//             <div className="flex space-x-4">
//               <DropdownNav title="Shop">
//                 <div>
//                   <p className="block px-3 py-2 rounded-md text-base font-medium">
//                     Category 1
//                   </p>
//                 </div>
//                 <div>
//                   <p className="block px-3 py-2 rounded-md text-base font-medium">
//                     Category 2
//                   </p>
//                 </div>
//                 <div>
//                   <p className="block px-3 py-2 rounded-md text-base font-medium">
//                     Category 3
//                   </p>
//                 </div>
//               </DropdownNav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// type DropdownProps = {
//   title: string;
//   children: React.ReactNode;
// };

// const DropdownNav: React.FC<DropdownProps> = ({ title, children }) => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleHover = () => {
//     setIsOpen(true);
//   };

//   const handleLeave = () => {
//     setIsOpen(false);
//   };

//   // Add mouse event handlers for the dropdown menu
//   const handleDropdownHover = () => {
//     setIsOpen(true);
//   };

//   const handleDropdownLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className="relative"
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//     >
//       <button className="px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none">
//         {title}
//       </button>
//       {isOpen && (
//         <div
//           className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
//           onMouseEnter={handleDropdownHover}
//           onMouseLeave={handleDropdownLeave}
//         >
//           <div
//             className="py-1"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu"
//           >
//             {children}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
