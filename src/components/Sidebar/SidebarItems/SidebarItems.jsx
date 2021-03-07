import React from 'react'

import './SidebarItems.css'

export const manage = {
  title: 'จัดการระบบ',
  link: '/'
};

export const centralManage = {
  title: 'จัดการข้อมูลส่วนกลาง',
  content: [
    {
      contentTitle: 'ภาควิชา/หลักสูตร',
      link: '/course',
    },
    {
      contentTitle: 'ฝ่าย/งาน',
      link: '/department',
    },
    {
      contentTitle: 'พันธกิจ',
      link: '/mission',
    },
    {
      contentTitle: 'หมวดค่าใช้จ่าย/ส่วนประกอบต้นทุน',
      link: '/budget',
    },
  ]
};

export const minorManage = {
  title: 'จัดการข้อมูลระบบย่อย',
  content: [
    {
      contentTitle: 'ระบบบริหารงบประมาณ (ภาคฯ)',
      link: '/e',
      subMenu: [
        {
          subTitle: 'ศูนย์ต้นทุน/เขตตามหน้าที่',
          link:'/e1'
        },
        {
          subTitle: 'ยุทธศาสตร์/เป้าประสงค์/ตัวชี้วัด',
          link:'/e2'
        },
        {
          subTitle: 'ต้นแบบชื่อโครงการ',
          link:'/e3'
        },
      ]
    },
    {
      contentTitle: 'ระบบบริหารงบประมาณ (สนง.)',
      link: '/f',
      subMenu: [
        {
          subTitle: 'ศูนย์ต้นทุน/เขตตามหน้าที่',
          link:'/f1'
        },
        {
          subTitle: 'ยุทธศาสตร์/เป้าประสงค์/ตัวชี้วัด',
          link:'/f2'
        },
        {
          subTitle: 'ต้นแบบชื่อโครงการ',
          link:'/f3'
        },
      ]
    },
  ]
};




// {
//   id: 1,
//   title: 'จัดการระบบ',
//   link: '/',
// },
// {
//   id: 2,
//   title: 'ภาควิชา/หลักสูตร',
//   link: '/a',
// },
// {
//   id: 3,
//   title: 'ฝ่าย/งาน',
//   link: '/b',
// },
// {
//   id: 4,
//   title: 'พันธกิจ',
//   link: '/c',
// },
// {
//   id: 5,
//   title: 'หมวดค่าใช้จ่าย/ส่วนประกอบต้นทุน',
//   link: '/d',
// },
// {
//   id: 6,
//   title: 'ระบบบริหารงบประมาณ (ภาคฯ)',
//   link: '/e',
// },
// {
//   id: 7,
//   title: 'ระบบบริหารงบประมาณ (สนง.)',
//   link: '/f',
// },