// SELECT ALL USEFULL ELEMENTS
// sections
'use strict';
const mainHeader = document.querySelector('.main-header');
const navigationBar = document.querySelector('.navigation-bar');
const pageBody = document.querySelector('.pageBody');
const searchErrorMsg = document.querySelector('.search-error');
const homePageSection = document.querySelector('.homePageSection');
const userInfo = document.querySelector('.main-section');
const loadingModal = document.querySelector('.loadin-section');
const searchPersonPage = document.querySelector('.search-person-section');
const classRepsSection = document.querySelector('.class-reps-section');
const aboutTeamSection = document.querySelector('.about-section');
const contactTeamsection = document.querySelector('.contact-section');

// user info
const profilePicture = document.querySelector('.profile-picture');
const userFullName = document.querySelector('.name-value');
const userRegistrationNumber = document.querySelector('.ug-value');
const userDateOfBirth = document.querySelector('.year-value');
const userPhoneNumber = document.querySelector('.phone');
const userEmail = document.querySelector('.email-address');
const userMaritalStatus = document.querySelector('.marital-status');
const userOccupation = document.querySelector('.occupation-status');
const userFriedList = document.querySelector('.friends-list');
const userSchoolAddress = document.querySelector('.school-physical-address');
const userLocalAddress = document.querySelector('.main-address');
// reps information
const searchField = document.querySelector('.search');
const searchBtn = document.querySelector('.find-friend');
// console.log(searchField);

let navBars = document.querySelector('.nav-bars');
let openMenuBar = document.getElementById('openMenuBar');
function showBar() {
  navBars.classList.remove('hideNav');
  openMenuBar.style.opacity = '0';
  navBars.classList.remove('unslize-menu');
  navBars.classList.add('slize-menu');
}
function hideBar() {
  openMenuBar.style.opacity = '1';
  navBars.classList.remove('slize-menu');

  navBars.classList.add('unslize-menu');
  setTimeout(function () {
    navBars.classList.add('hideNav');
  }, 500);
}
hideBar();
document.addEventListener('scroll', hideBar);

// pageBody.addEventListener('click', e => {
//   e.stopPropagation();
//   hideBar();
// });
// pageBody.addEventListener('mouseover', () => hideBar());
/// HERE NOW I WILL PROGRAM IT SO THAT BY SPECIFYNING THE UG NUMBER IT WILL AUTOMATIACALL DETECT AND DISPLAY
//THE INFORMATION OF REQUIRED PERSON LETS GO INSHAALLA

// function _1082() {
//   document.querySelector(".year-value").textContent = " 6th MAY 2002";
//   document.querySelector(".email-address").textContent =
//     " suhaya1082@gmail.com";
//   document.querySelector(".phone").textContent = " +2349075898883";
//   document.querySelector(".marital-status").textContent = " Single";
//   document.querySelector(".occupation-status").textContent = " Student";
//   document.querySelector(".friends-list").textContent = " musa abba so so";
//   document.querySelector(".school-physical-address").textContent =
//     " Dangote hostel, room 52";
//   document.querySelector(".main-address").textContent =
//     "Kadigawa kibiya kano nigeria";
//   let navBars = document.querySelector(".nav-bars");
// }

// //     DYNAmiCALLY RENDERE WEBPAGE BASED ON USER"S CHOICE

// function showHome() {}

//let create objects of our colligues

const _1001 = {
  name: 'Maryam Saleh Usman',
  registrationNumber: 'UG21/SCED/1001',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1002 = {
  name: 'Ibrahim Shu’aibu ',
  registrationNumber: 'UG21/SCED/1002',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1003 = {
  name: 'Halimatu Shu’aibu',
  registrationNumber: 'UG21/SCED/1003',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1004 = {
  name: 'Rukayya Inuwa ',
  registrationNumber: 'UG21/SCED/1004',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1007 = {
  name: 'Ibrahim Nnakaboye Hajarat',
  registrationNumber: 'UG21/SCED/1007',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1010 = {
  name: 'Rabi’atu Isa Yusha’u',
  registrationNumber: 'UG21/SCED/1010',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1013 = {
  name: 'Yahaya Tanimu Abdulhamid ',
  registrationNumber: 'UG21/SCED/1013',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1014 = {
  name: 'Abba Sabi’u Musa ',
  registrationNumber: 'UG21/SCED/1014',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1019 = {
  name: 'Aisha Abdulkarim',
  registrationNumber: 'UG21/SCED/1019',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1020 = {
  name: 'Muhammad Salisu Tijjani ',
  registrationNumber: 'UG21/SCED/1020',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1021 = {
  name: ' Hassan Sa’idu Miko ',
  registrationNumber: 'UG21/SCED/1021',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1022 = {
  name: 'Dalhat Ahmad Sada ',
  registrationNumber: 'UG21/SCED/1022',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1025 = {
  name: 'Abubakar Auwal',
  registrationNumber: 'UG21/SCED/1025',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1026 = {
  name: 'Abba Umar Yaro',
  registrationNumber: 'UG21/SCED/1026',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1031 = {
  name: 'Hussaini Danladi',
  registrationNumber: 'UG21/SCED/1031',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1032 = {
  name: 'Zainab Ya’u Sulaiman',
  registrationNumber: 'UG21/SCED/1032',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1033 = {
  name: 'Habiba Musa Yakubu',
  registrationNumber: 'UG21/SCED/1033',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1036 = {
  name: 'Abubakar Bello',
  registrationNumber: 'UG21/SCED/1036',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
// const _1037 = {
//   name: 'Abdulhadi Aliyu',
//   registrationNumber: 'UG21/SCED/1037',
//   phoneNumber: '+234*********',
//   email: 'student@gmail.com',
//   dateOfBirth: '6/5/2002',
//   maritalStatus: 'single',
//   occupation: 'student',
//   friends: [],
//   userSchoolAddress: 'hostel A room B',
//   localAddress: 'kano',
// };
const _1038 = {
  name: 'Muhammad Bashir',
  registrationNumber: 'UG21/SCED/1038',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1040 = {
  name: 'Aminu Balarabe Adam',
  registrationNumber: 'UG21/SCED/1040',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1041 = {
  name: 'Nusaiba Yusif Ibrahim',
  registrationNumber: 'UG21/SCED/1041',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1043 = {
  name: 'Tasi’u Rabilu Abdu',
  registrationNumber: 'UG21/SCED/1043',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1044 = {
  name: 'Sani Barra’u Muhammad',
  registrationNumber: 'UG21/SCED/1044',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1045 = {
  name: 'Zaharaddin Tukur',
  registrationNumber: 'UG21/SCED/1045',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1047 = {
  name: 'Idris Abdullahi',
  registrationNumber: 'UG21/SCED/1047',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1048 = {
  name: 'Sani Salisu Musa',
  registrationNumber: 'UG21/SCED/1048',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1049 = {
  name: 'Kareem Semiat Ajale',
  registrationNumber: 'UG21/SCED/1049',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1052 = {
  name: 'Sadik Musa Badamasi',
  registrationNumber: 'UG21/SCED/1052',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1053 = {
  name: 'Abdulkadir Aminu Haruna',
  registrationNumber: 'UG21/SCED/1053',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1054 = {
  name: 'Isah Abdulaziz Adam',
  registrationNumber: 'UG21/SCED/1054',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1057 = {
  name: 'Abubakar Maimur Sulaiman',
  registrationNumber: 'UG21/SCED/1057',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1059 = {
  name: 'Sa’adatu Ado Haruna',
  registrationNumber: 'UG21/SCED/1059',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1063 = {
  name: 'Isyaku Gambo Musa',
  registrationNumber: 'UG21/SCED/1063',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1064 = {
  name: 'Said Abdulkadir',
  registrationNumber: 'UG21/SCED/1064',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1065 = {
  name: 'Ukashatu Musa Bawa',
  registrationNumber: 'UG21/SCED/1065',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1066 = {
  name: 'Mudansir Musa Khalid',
  registrationNumber: 'UG21/SCED/1066',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1071 = {
  name: 'Usman Sulaiman Abubakar',
  registrationNumber: 'UG21/SCED/1071',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1072 = {
  name: 'Usman Ashiru Haladu',
  registrationNumber: 'UG21/SCED/1072',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1073 = {
  name: 'Khadija Iliyasu Abdullahi',
  registrationNumber: 'UG21/SCED/1073',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1075 = {
  name: 'Muhammad Kabir Ibrahim',
  registrationNumber: 'UG21/SCED/1075',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1077 = {
  name: 'Ummussalama Haruna',
  registrationNumber: 'UG21/SCED/1077',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1081 = {
  name: 'Bilkisu Ibrahim ',
  registrationNumber: 'UG21/SCED/1081',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1082 = {
  name: 'Sulaiman Haladu Ya’u ',
  registrationNumber: 'UG21/SCED/1082',
  phoneNumber: '+2349075898883',
  email: 'suhaya1082@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kadigawa , kibiya kano',
};
const _1083 = {
  name: 'Saifullahi Abubakar',
  registrationNumber: 'UG21/SCED/1083',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1087 = {
  name: 'Sani Hassan ',
  registrationNumber: 'UG21/SCED/1087',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1088 = {
  name: 'Aisha Bello Abubakar',
  registrationNumber: 'UG21/SCED/1088',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1089 = {
  name: 'Sulaiman Iliyasu Sulaiman ',
  registrationNumber: 'UG21/SCED/1089',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1090 = {
  name: 'Nusaiba Sa’id Isah',
  registrationNumber: 'UG21/SCED/1090',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1092 = {
  name: 'Auwal Bello Abdullahi ',
  registrationNumber: 'UG21/SCED/1092',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1095 = {
  name: 'Hamza Abubakar Adam ',
  registrationNumber: 'UG21/SCED/1095',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1097 = {
  name: 'Hudu Mubarak Musa',
  registrationNumber: 'UG21/SCED/1097',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1102 = {
  name: 'Halima Ahmad Gambo',
  registrationNumber: 'UG21/SCED/1102',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1103 = {
  name: 'Musa Abubakar Yusif',
  registrationNumber: 'UG21/SCED/1103',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1104 = {
  name: 'Muhammad Mustapha Wada',
  registrationNumber: 'UG21/SCED/1104',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1105 = {
  name: 'Nafisatu Musa Tanko',
  registrationNumber: 'UG21/SCED/1105',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1106 = {
  name: 'Muhammad Umar Doguwa',
  registrationNumber: 'UG21/SCED/1106',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1107 = {
  name: 'Saifullahi Sadi Suleiman',
  registrationNumber: 'UG21/SCED/1107',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1112 = {
  name: 'Fatima Usman Aliyu',
  registrationNumber: 'UG21/SCED/1112',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1115 = {
  name: 'Amina Adam Hamza',
  registrationNumber: 'UG21/SCED/1115',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1116 = {
  name: 'Ahmad Ibrahim Yakasai',
  registrationNumber: 'UG21/SCED/1116',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1117 = {
  name: 'Abdulkadir Bala Isa',
  registrationNumber: 'UG21/SCED/1117',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1119 = {
  name: 'Ahmad Aminu Muhammad',
  registrationNumber: 'UG21/SCED/1119',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: ['suhay', 'suhay'],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1120 = {
  name: 'Ardo Usman Dayyabu',
  registrationNumber: 'UG21/SCED/1120',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1121 = {
  name: 'Aisha Abdullahi',
  registrationNumber: 'UG21/SCED/1121',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1124 = {
  name: 'Ahmad Ibrahim Muhammad',
  registrationNumber: 'UG21/SCED/1124',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1125 = {
  name: 'Nusaiba Alto Garba',
  registrationNumber: 'UG21/SCED/1125',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1130 = {
  name: 'Hussaina Abdullahi',
  registrationNumber: 'UG21/SCED/1130',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1131 = {
  name: 'Rufa’I Abubakar',
  registrationNumber: 'UG21/SCED/1131',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1133 = {
  name: 'Tasi’u Yusuf',
  registrationNumber: 'UG21/SCED/1133',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1134 = {
  name: 'Abubakar Muhammad Ali',
  registrationNumber: 'UG21/SCED/1134',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _1137 = {
  name: 'Auwal Umar Algazali',
  registrationNumber: 'UG21/SCED/1137',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _2001 = {
  name: 'Kabiru Garba Faruruwa',
  registrationNumber: 'UG21/SCED/2001',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};
const _2002 = {
  name: 'Umar Yahuza Abdullahi',
  registrationNumber: 'UG21/SCED/2002',
  phoneNumber: '+234*********',
  email: 'student@gmail.com',
  dateOfBirth: '6/5/2002',
  maritalStatus: 'single',
  occupation: 'student',
  friends: [],
  userSchoolAddress: 'hostel A room B',
  localAddress: 'kano',
};

const allStudents = [
  _1001,
  _1002,
  _1003,
  _1004,
  _1007,
  _1010,
  _1013,
  _1014,
  _1019,
  _1020,
  _1021,
  _1022,
  _1025,
  _1026,
  _1031,
  _1032,
  _1033,
  _1036,
  _1038,
  _1040,
  _1041,
  _1043,
  _1044,
  _1045,
  _1047,
  _1048,
  _1049,
  _1052,
  _1053,
  _1054,
  _1057,
  _1059,
  _1063,
  _1064,
  _1065,
  _1066,
  _1071,
  _1072,
  _1073,
  _1075,
  _1077,
  _1081,
  _1082,
  _1083,
  _1087,
  _1088,
  _1089,
  _1090,
  _1092,
  _1095,
  _1097,
  _1102,
  _1103,
  _1104,
  _1105,
  _1106,
  _1107,
  _1112,
  _1115,
  _1116,
  _1117,
  _1119,
  _1120,
  _1121,
  _1124,
  _1125,
  _1130,
  _1131,
  _1133,
  _1134,
  _1137,
  _2001,
  _2002,
];
allStudents.forEach(a => (a.friends = new Set(...a.friends)));

_1117.friends.add('suhaia');
_1117.friends.add('suhai');
// console.log(_1117);
const searchedUser = {};
const loading = () => {
  loadingModal.classList.remove('hideModal');
  setTimeout(() => loadingModal.classList.add('hideModal'), 30);
};
loading();
// console.log(searchBtn);
function dispayUser(myStd) {
  if (myStd) {
    userFullName.textContent = myStd?.name;
    userRegistrationNumber.textContent = myStd?.registrationNumber;
    userPhoneNumber.textContent = myStd?.phoneNumber;

    userEmail.textContent = myStd?.email;
    userDateOfBirth.textContent = myStd?.dateOfBirth;
    userMaritalStatus.textContent = myStd?.maritalStatus;
    userOccupation.textContent = myStd?.occupation;

    myStd.friends = [...myStd?.friends].join();
    userFriedList.textContent = myStd?.friends;

    userSchoolAddress.textContent = myStd?.userSchoolAddress;
    userLocalAddress.textContent = myStd?.localAddress;
    searchPersonPage.classList.toggle('find-friend-calc');
    userInfo.classList.toggle('find-friend-calc');
  } else {
    searchErrorMsg.textContent = 'Wrong input';
  }
}
searchBtn?.addEventListener('click', students => {
  students.preventDefault();
  let myStd = allStudents.find(
    student =>
      student.registrationNumber === searchField.value.toUpperCase() ||
      student.registrationNumber.slice(-4) === searchField.value
  );
  dispayUser(myStd);
  // myStd.textContent = searchedUser?.name;
});

const searchingSuggestion = document.querySelector('.seaching');
// console.log(searchingSuggestion);

function searchTemplate() {
  if (
    searchField.value != 0 &&
    searchField.value.trim() != '' &&
    searchField.value != ' '
  ) {
    searchingSuggestion.innerHTML = '';
    searchErrorMsg.textContent = '';
    allStudents.forEach(a => {
      if (
        a.name
          .toUpperCase()
          .trim()
          .includes(searchField.value.trim().toUpperCase()) ||
        a.registrationNumber.includes(searchField.value)
      ) {
        let suggestedSearches = `<div class="searches">
                                <span class="name">${
                                  a.name.split(' ').at(0) +
                                  ' ' +
                                  a.name.split(' ').at(1)
                                }</span> <span class="number">${
          a.registrationNumber
        }</span>
                            </div>`;
        // searchNames.push(a.name);
        // searchNumber.push(a.registrationNumber);

        searchingSuggestion.insertAdjacentHTML('afterbegin', suggestedSearches);
      } else {
        // searchErrorMsg.textContent = 'Friend not found';
      }
    });
    // console.log(searchingSuggestion);
  } else {
    searchErrorMsg.textContent = 'Friend not found';
    searchingSuggestion.innerHTML = '';
  }

  let suggestedFriend = document.querySelectorAll('.name');
  // console.log(suggestedFriend);

  let m = [...suggestedFriend];
  m.forEach(element => {
    element.addEventListener('click', function () {
      allStudents.find(a => {
        if (a.name.includes(element.textContent)) {
          dispayUser(a);
        }
      });
    });
  });

  // console.log(m);
  let individual = m.map(a => a.innerText);
  let originalNames = allStudents.map(a => a.name);
  // console.log(originalNames);

  // console.log(individual);
  individual.forEach(a => {});
}
searchBtn.addEventListener('click', searchTemplate);
searchField.addEventListener('input', searchTemplate);
searchField.addEventListener('input', () => {
  if (searchField.value.trim() === '') {
    searchErrorMsg.textContent = '';
  } else {
    searchTemplate();
  }
});
console.log(searchField.value);
