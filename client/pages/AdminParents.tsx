import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

interface Parent {
  id: string;
  name: string;
  email: string;
  linkedStudent: string;
  billingStatus: 'Active' | 'N/A';
  nextPayment: string;
}

const mockParents: Parent[] = [
  {
    id: '1',
    name: 'Michael Johnson',
    email: 'm.johnson@email.com',
    linkedStudent: 'Emma Johnson',
    billingStatus: 'Active',
    nextPayment: 'Jan 15, 2025'
  },
  {
    id: '2',
    name: 'Lisa Chen',
    email: 'l.chen@email.com',
    linkedStudent: 'Liam Chen',
    billingStatus: 'Active',
    nextPayment: 'Feb 12, 2025'
  },
  {
    id: '3',
    name: 'Carlos Rodriguez',
    email: 'c.rodriguez@email.com',
    linkedStudent: 'Sophia Rodriguez',
    billingStatus: 'Active',
    nextPayment: 'Mar 10, 2025'
  },
  {
    id: '4',
    name: 'Jennifer Williams',
    email: 'j.williams@email.com',
    linkedStudent: 'Noah Williams',
    billingStatus: 'Active',
    nextPayment: 'Apr 22, 2025'
  },
  {
    id: '5',
    name: 'Robert Davis',
    email: 'r.davis@email.com',
    linkedStudent: 'Olivia Davis',
    billingStatus: 'N/A',
    nextPayment: 'May 30, 2025'
  },
  {
    id: '6',
    name: 'Olivia Rhye',
    email: 'oliva@email.com',
    linkedStudent: 'Rhye Amark',
    billingStatus: 'Active',
    nextPayment: 'Jun 15, 2025'
  }
];

export default function AdminParents() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-[#1E3006] p-3 sm:p-6">
      {/* Top Navigation */}
      <div className="mx-auto mb-6 flex max-w-[1416px] items-center justify-between px-4 sm:px-16">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9bc7f4c3957329926c45ba3e1d6104debeb9620d?width=112"
          alt="Logo"
          className="h-14 w-14 flex-shrink-0"
        />

        {/* Navigation Links */}
        <div className="flex items-start justify-center gap-6">
          <a href="/admin-dashboard" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 8.9922V10.875C2.25 13.3498 2.25 14.5873 3.01885 15.3562C3.78769 16.125 5.02513 16.125 7.5 16.125H10.5C12.9748 16.125 14.2123 16.125 14.9812 15.3562C15.75 14.5873 15.75 13.3498 15.75 10.875V8.9922C15.75 7.73123 15.75 7.1008 15.4831 6.55504C15.2162 6.00928 14.7185 5.62221 13.7232 4.84808L12.2232 3.68141C10.6748 2.47714 9.90067 1.875 9 1.875C8.09933 1.875 7.32517 2.47714 5.77682 3.68141L4.27681 4.84808C3.2815 5.62221 2.78384 6.00928 2.51693 6.55504C2.25 7.1008 2.25 7.73123 2.25 8.9922Z" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.25 12.75C10.6504 13.2168 9.86266 13.5 9.00001 13.5C8.13729 13.5 7.34965 13.2168 6.75 12.75" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-medium leading-6 tracking-[-0.14px] text-[#CFD6C9]">Dashboard</span>
          </a>

          <a href="/admin-students" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 6C11.25 7.24264 10.2427 8.25 9 8.25C7.75732 8.25 6.75 7.24264 6.75 6C6.75 4.75736 7.75732 3.75 9 3.75C10.2427 3.75 11.25 4.75736 11.25 6Z" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3C13.2426 3 14.25 4.00736 14.25 5.25C14.25 6.16732 13.701 6.95642 12.9137 7.30673" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.2857 10.5H7.71429C5.93908 10.5 4.5 11.9391 4.5 13.7143C4.5 14.4244 5.07563 15 5.78571 15H12.2143C12.9244 15 13.5 14.4244 13.5 13.7143C13.5 11.9391 12.0609 10.5 10.2857 10.5Z" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.2858 9.75C15.0609 9.75 16.5 11.1891 16.5 12.9643C16.5 13.6744 15.9244 14.25 15.2143 14.25" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 3C4.75736 3 3.75 4.00736 3.75 5.25C3.75 6.16732 4.29895 6.95642 5.08626 7.30673" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.78572 14.25C2.07563 14.25 1.5 13.6744 1.5 12.9643C1.5 11.1891 2.93908 9.75 4.71428 9.75" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-medium leading-6 tracking-[-0.14px] text-[#CFD6C9]">Students</span>
          </a>

          <a href="/admin-mentors" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6925 13.3056C11.2209 13.6215 9.98447 14.2666 10.7375 15.0737C11.1054 15.468 11.5152 15.75 12.0303 15.75H13.5H14.9697C15.4848 15.75 15.8946 15.468 16.2625 15.0737C17.0156 14.2666 15.7791 13.6215 15.3075 13.3056C14.2016 12.5648 12.7984 12.5648 11.6925 13.3056Z" stroke="#CFD6C9" strokeWidth="1.125"/>
              <path d="M15 9.375C15 10.2034 14.3284 10.875 13.5 10.875C12.6716 10.875 12 10.2034 12 9.375C12 8.54655 12.6716 7.875 13.5 7.875C14.3284 7.875 15 8.54655 15 9.375Z" stroke="#CFD6C9" strokeWidth="1.125"/>
              <path d="M7.5 4.5H11.25M7.5 2.25H13.5" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.25 7.125V10.5C5.25 11.2071 5.25 11.5607 5.03033 11.7804C4.81066 12 4.45711 12 3.75 12H3C2.29289 12 1.93934 12 1.71967 11.7804C1.5 11.5607 1.5 11.2071 1.5 10.5V8.62503C1.5 7.91793 1.5 7.56438 1.71967 7.34467C1.93934 7.125 2.29289 7.125 3 7.125H5.25ZM5.25 7.125H9" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.875 3.75C4.875 4.57843 4.20343 5.25 3.375 5.25C2.54657 5.25 1.875 4.57843 1.875 3.75C1.875 2.92157 2.54657 2.25 3.375 2.25C4.20343 2.25 4.875 2.92157 4.875 3.75Z" stroke="#CFD6C9" strokeWidth="1.125"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-medium leading-6 tracking-[-0.14px] text-[#CFD6C9]">Mentors</span>
          </a>

          <div className="flex h-12 items-center gap-1 rounded-full bg-[rgba(159,232,112,0.20)] px-4 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.875 5.625C10.875 3.55393 9.19605 1.875 7.125 1.875C5.05393 1.875 3.375 3.55393 3.375 5.625C3.375 7.69605 5.05393 9.375 7.125 9.375C9.19605 9.375 10.875 7.69605 10.875 5.625Z" stroke="#B1FA63" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.875 14.625C1.875 11.7255 4.22551 9.375 7.125 9.375C7.9302 9.375 8.69302 9.55628 9.375 9.8802" stroke="#B1FA63" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.125 16.125C13.125 16.125 16.125 14.7353 16.125 12.4792C16.125 11.5932 15.4934 10.875 14.625 10.875C13.9145 10.875 13.4408 11.1839 13.125 11.8015C12.8092 11.1839 12.3355 10.875 11.625 10.875C10.7566 10.875 10.125 11.5932 10.125 12.4792C10.125 14.7353 13.125 16.125 13.125 16.125Z" stroke="#B1FA63" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-bold leading-6 tracking-[-0.14px] text-[#B1FA63]">Parents</span>
          </div>

          <a href="/admin-programs" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1291 1.51406C9.62168 2.12591 9 5.625 9 5.625V16.5C9 16.5 9.66503 12.8454 13.5003 12.4191C13.912 12.3734 14.25 12.0432 14.25 11.6294V2.54482C14.25 1.92405 13.7412 1.40729 13.1291 1.51406Z" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 3.75001C5.84534 3.74743 7.62637 4.41532 9 5.625V16.5C7.62637 15.2903 5.84534 14.6224 4 14.625C2.82849 14.625 2.24274 14.625 1.98395 14.4594C1.82858 14.3599 1.76509 14.2964 1.66565 14.141C1.5 13.8823 1.5 13.4206 1.5 12.4972V6.30242C1.5 5.23157 1.5 4.69615 1.91155 4.26214C2.32311 3.82813 2.74442 3.80574 3.58704 3.76095C3.72375 3.75368 3.86144 3.75001 4 3.75001Z" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 16.5007C10.3736 15.2911 12.1547 14.6232 14 14.6257C15.1715 14.6257 15.7573 14.6257 16.016 14.4601C16.1714 14.3607 16.2349 14.2972 16.3343 14.1419C16.5 13.883 16.5 13.4213 16.5 12.4979V6.30318C16.5 5.23234 16.5 4.69692 16.0885 4.26291C15.6769 3.8289 15.0926 3.79479 14.25 3.75" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-medium leading-6 tracking-[-0.14px] text-[#CFD6C9]">Programs</span>
          </a>

          <a href="/admin-logs" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4444 9.58312L8.83313 7.9719C8.61353 7.7523 8.50373 7.6425 8.38523 7.58377C8.15985 7.47208 7.89525 7.47208 7.6698 7.58377C7.55138 7.6425 7.44155 7.7523 7.22192 7.9719C7.00228 8.19157 6.89247 8.30137 6.83377 8.4198C6.72208 8.64525 6.72208 8.90985 6.83377 9.13522C6.89247 9.25372 7.00228 9.36352 7.22192 9.58312L8.83313 11.1943M10.4444 9.58312L15.2781 14.4169C15.4977 14.6365 15.6075 14.7463 15.6662 14.8648C15.7779 15.0901 15.7779 15.3547 15.6662 15.5802C15.6075 15.6986 15.4977 15.8084 15.2781 16.0281C15.0584 16.2477 14.9486 16.3575 14.8302 16.4162C14.6047 16.5279 14.3401 16.5279 14.1148 16.4162C13.9963 16.3575 13.8865 16.2477 13.6669 16.0281L8.83313 11.1943M10.4444 9.58312L8.83313 11.1943" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.75 1.5L12.9711 2.09745C13.261 2.88088 13.4059 3.27259 13.6917 3.55834C13.9774 3.84409 14.3691 3.98903 15.1525 4.27892L15.75 4.5L15.1525 4.72108C14.3691 5.01097 13.9774 5.15592 13.6917 5.44166C13.4059 5.72741 13.261 6.11912 12.9711 6.90255L12.75 7.5L12.5289 6.90255C12.239 6.11913 12.0941 5.72741 11.8083 5.44166C11.5226 5.15591 11.1309 5.01097 10.3475 4.72108L9.75 4.5L10.3475 4.27892C11.1309 3.98903 11.5226 3.84409 11.8083 3.55834C12.0941 3.27259 12.239 2.88088 12.5289 2.09745L12.75 1.5Z" stroke="#CFD6C9" strokeWidth="1.125" strokeLinejoin="round"/>
              <path d="M4.5 3L4.66581 3.44809C4.88323 4.03565 4.99194 4.32944 5.20625 4.54376C5.42056 4.75806 5.71435 4.86677 6.30191 5.08419L6.75 5.25L6.30191 5.41581C5.71435 5.63323 5.42056 5.74194 5.20624 5.95625C4.99194 6.17056 4.88323 6.46435 4.66581 7.05191L4.5 7.5L4.33419 7.05191C4.11677 6.46435 4.00806 6.17056 3.79375 5.95625C3.57944 5.74194 3.28565 5.63323 2.69809 5.41581L2.25 5.25L2.69809 5.08419C3.28565 4.86677 3.57944 4.75806 3.79375 4.54375C4.00806 4.32944 4.11677 4.03565 4.33419 3.44809L4.5 3Z" stroke="#CFD6C9" strokeWidth="1.125" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-medium leading-6 tracking-[-0.14px] text-[#CFD6C9]">Ai System Logs</span>
          </a>

          <a href="/admin-reports" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 13.5V12M9 13.5V11.25M12.75 13.5V9.75M1.875 9C1.875 5.64124 1.875 3.96187 2.91843 2.91843C3.96187 1.875 5.64124 1.875 9 1.875C12.3587 1.875 14.0381 1.875 15.0816 2.91843C16.125 3.96187 16.125 5.64124 16.125 9C16.125 12.3587 16.125 14.0381 15.0816 15.0816C14.0381 16.125 12.3587 16.125 9 16.125C5.64124 16.125 3.96187 16.125 2.91843 15.0816C1.875 14.0381 1.875 12.3587 1.875 9Z" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.49414 8.61473C6.11047 8.66858 9.77557 8.4246 11.8603 5.11599M10.4942 4.71626L11.9008 4.48987C12.0723 4.46804 12.324 4.60339 12.3859 4.76474L12.7578 5.99357" stroke="#CFD6C9" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-bold leading-6 tracking-[-0.14px] text-[#CFD6C9]">Reports</span>
          </a>

          <a href="/admin-settings" className="flex h-12 items-center gap-1 rounded-full px-1 py-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9881 5.35604L15.6179 4.71359C15.3379 4.22772 15.198 3.98479 14.9598 3.88791C14.7216 3.79104 14.4522 3.86748 13.9135 4.02036L12.9983 4.27814C12.6544 4.35746 12.2935 4.31246 11.9794 4.15109L11.7268 4.00532C11.4574 3.83282 11.2503 3.5785 11.1356 3.27956L10.8852 2.53152C10.7205 2.03651 10.6381 1.789 10.4421 1.64743C10.2461 1.50586 9.98572 1.50586 9.46492 1.50586H8.62882C8.1081 1.50586 7.8477 1.50586 7.65165 1.64743C7.45564 1.789 7.37329 2.03651 7.20862 2.53152L6.95815 3.27956C6.84349 3.5785 6.63634 3.83282 6.36703 4.00532L6.11437 4.15109C5.8003 4.31246 5.43944 4.35746 5.09548 4.27814L4.18031 4.02036C3.64156 3.86748 3.37219 3.79104 3.134 3.88791C2.89582 3.98479 2.75584 4.22772 2.47586 4.71359L2.10568 5.35604C1.84324 5.81148 1.71202 6.0392 1.73749 6.28162C1.76296 6.52403 1.93862 6.71939 2.28994 7.11009L3.06322 7.9746C3.25222 8.21385 3.38641 8.63085 3.38641 9.00578C3.38641 9.38085 3.25227 9.7977 3.06325 10.037L2.28994 10.9016C1.93862 11.2923 1.76296 11.4876 1.73749 11.7301C1.71202 11.9725 1.84324 12.2002 2.10568 12.6556L2.47585 13.298C2.75582 13.7839 2.89582 14.0269 3.134 14.1237C3.37219 14.2206 3.64156 14.1442 4.18033 13.9913L5.09545 13.7335C5.43947 13.6541 5.8004 13.6992 6.1145 13.8606L6.36712 14.0064C6.63638 14.1789 6.84348 14.4331 6.95812 14.7321L7.20862 15.4802C7.37329 15.9752 7.45564 16.2227 7.65165 16.3643C7.8477 16.5058 8.1081 16.5058 8.62882 16.5058H9.46492C9.98572 16.5058 10.2461 16.5058 10.4421 16.3643C10.6381 16.2227 10.7205 15.9752 10.8852 15.4802L11.1357 14.7321C11.2503 14.4331 11.4574 14.1789 11.7267 14.0064L11.9793 13.8606C12.2934 13.6992 12.6543 13.6541 12.9983 13.7335L13.9135 13.9913C14.4522 14.1442 14.7216 14.2206 14.9598 14.1237C15.198 14.0269 15.3379 13.7839 15.6179 13.298L15.9881 12.6556C16.2505 12.2002 16.3817 11.9725 16.3563 11.7301C16.3308 11.4876 16.1551 11.2923 15.8038 10.9016L15.0305 10.037C14.8415 9.7977 14.7073 9.38085 14.7073 9.00578C14.7073 8.63085 14.8416 8.21385 15.0305 7.9746L15.8038 7.11009C16.1551 6.71939 16.3308 6.52403 16.3563 6.28162C16.3817 6.0392 16.2505 5.81148 15.9881 5.35604Z" stroke="#CFD6C9" strokeWidth="1.25" strokeLinecap="round"/>
              <path d="M11.6396 9C11.6396 10.4497 10.4644 11.625 9.01463 11.625C7.56488 11.625 6.38965 10.4497 6.38965 9C6.38965 7.55025 7.56488 6.375 9.01463 6.375C10.4644 6.375 11.6396 7.55025 11.6396 9Z" stroke="#CFD6C9" strokeWidth="1.25"/>
            </svg>
            <span className="font-['Satoshi'] text-sm font-bold leading-6 tracking-[-0.14px] text-[#CFD6C9]">Settings</span>
          </a>
        </div>

        {/* User Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7469593e83fba7a0c1099e16258d02c681f57b7f?width=80"
              alt="Avatar"
              className="h-10 w-10 rounded-full border-2 border-white"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-['Satoshi'] text-base font-bold leading-6 tracking-[-0.16px] text-[#EDEFEB]">
              Adam Mid
            </div>
            <div className="font-['DM_Sans'] text-[13px] font-normal leading-4 tracking-[-0.13px] text-[#EDEFEB]">
              Mentor
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-[1416px] flex-1 flex-col items-center gap-8 rounded-[32px] bg-white px-8 py-8 sm:px-16">
        {/* Page Header */}
        <div className="flex w-full flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <h1 className="font-['Random_Grotesque_Standard_Bold'] text-[30px] font-bold leading-[34px] tracking-[-0.75px] text-black">
                Parents
              </h1>
              <p className="font-['Satoshi'] text-base font-normal leading-6 tracking-[-0.16px] text-[#404040]">
                Manage parent accounts and billing information
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-full border border-[#9FE870] bg-[#9FE870] px-4 py-2.5 transition-colors hover:bg-[#8fd75f]">
              <Plus className="h-5 w-5 text-[#1E3006]" strokeWidth={1.67} />
              <span className="font-['Satoshi'] text-sm font-bold leading-5 text-[#1E3006]">Send Update</span>
            </button>
          </div>
          <div className="h-px w-full bg-[rgba(0,0,0,0.10)]" />
        </div>

        {/* Table Container */}
        <div className="flex w-full flex-col items-end justify-end gap-4 rounded-[32px] border border-[rgba(230,234,241,0.60)] bg-[#F9FAF9] p-4">
          <div className="w-full overflow-hidden rounded-[20px] border border-[#EAECF0] bg-white">
            <div className="overflow-x-auto px-6 pb-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#EAECF0] bg-white">
                    <th className="h-11 px-6 py-3 text-left">
                      <span className="font-['Satoshi'] text-xs font-bold leading-[18px] text-[#21231D]">
                        Parent Name
                      </span>
                    </th>
                    <th className="h-11 px-6 py-3 text-left">
                      <span className="font-['Satoshi'] text-xs font-bold leading-[18px] text-[#21231D]">
                        Email
                      </span>
                    </th>
                    <th className="h-11 px-6 py-3 text-left">
                      <span className="font-['Satoshi'] text-xs font-bold leading-[18px] text-[#21231D]">
                        Linked Students
                      </span>
                    </th>
                    <th className="h-11 px-6 py-3 text-left">
                      <span className="font-['Satoshi'] text-xs font-bold leading-[18px] text-[#21231D]">
                        Billing Status
                      </span>
                    </th>
                    <th className="h-11 px-6 py-3 text-left">
                      <span className="font-['Satoshi'] text-xs font-bold leading-[18px] text-[#21231D]">
                        Next Payment
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockParents.map((parent, index) => (
                    <tr key={parent.id} className={index % 2 === 0 ? 'bg-[#F9FAF9]' : 'bg-white'}>
                      <td className={`h-[72px] px-6 py-4 ${index % 2 === 0 ? 'rounded-l-full' : ''}`}>
                        <span className="font-['Satoshi'] text-sm font-medium leading-5 text-[#21231D]">
                          {parent.name}
                        </span>
                      </td>
                      <td className="h-[72px] px-2 py-4 pl-6">
                        <span className="inline-flex items-center rounded-2xl bg-[#F2F4F7] px-2 py-0.5 font-['Satoshi'] text-xs font-medium leading-[18px] text-[#21231D]">
                          {parent.email}
                        </span>
                      </td>
                      <td className="h-[72px] px-2 py-4 pl-6">
                        <span className="font-['Satoshi'] text-sm font-medium leading-5 text-[#21231D]">
                          {parent.linkedStudent}
                        </span>
                      </td>
                      <td className="h-[72px] px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-2xl px-2 py-0.5 font-['Satoshi'] text-xs font-medium leading-[18px] ${
                            parent.billingStatus === 'Active'
                              ? 'bg-[rgba(159,232,112,0.20)] text-[#008915]'
                              : 'bg-[#F2F4F7] text-[#344054]'
                          }`}
                        >
                          {parent.billingStatus}
                        </span>
                      </td>
                      <td className={`h-[72px] px-6 py-4 ${index % 2 === 0 ? 'rounded-r-full' : ''}`}>
                        <span className="font-['Satoshi'] text-sm font-medium leading-5 text-[#21231D]">
                          {parent.nextPayment}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex h-[82px] w-full items-center justify-center gap-2 rounded-full border border-[rgba(230,234,241,0.60)] bg-white px-4 py-2">
            <div className="flex flex-1 items-center justify-between">
              <button
                disabled
                className="flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-5 w-5 text-[#D0D5DD]" strokeWidth={1.67} />
                <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#D0D5DD]">
                  Previous
                </span>
              </button>

              <div className="flex items-start gap-0.5">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F9FAFB]">
                  <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                    1
                  </span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#F9FAFB]">
                  <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                    2
                  </span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#F9FAFB]">
                  <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                    3
                  </span>
                </button>
                <div className="flex h-10 w-10 items-center justify-center">
                  <span className="font-['Inter'] text-sm font-medium leading-5 text-[#475467]">...</span>
                </div>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#F9FAFB]">
                  <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                    8
                  </span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#F9FAFB]">
                  <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                    9
                  </span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-[#F9FAFB]">
                  <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                    10
                  </span>
                </button>
              </div>

              <button className="flex items-center justify-center gap-2">
                <span className="font-['Random_Grotesque_Standard_Medium'] text-base font-medium leading-[19px] tracking-[-0.16px] text-[#404040]">
                  Next
                </span>
                <ArrowRight className="h-5 w-5 text-[#475467]" strokeWidth={1.67} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
