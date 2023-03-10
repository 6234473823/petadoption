import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import PetsIcon from '@material-ui/icons/Pets';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export const SidebarData = [
  {
    title: 'การรับเลี้ยงสัตว์',
    path: '/หน้าหลัก',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์',
        path: '/การรับเลี้ยงสัตว์/ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'การรับเลี้ยงแมว',
        path: '/การรับเลี้ยงสัตว์/การรับเลี้ยงแมว',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'การรับเลี้ยงสุนัข',
        path: '/การรับเลี้ยงสัตว์/การรับเลี้ยงสุนัข',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'การดูแลสุนัข',
    path: '/การดูแลสุนัข',
    icon: <PetsIcon/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'การให้อาหารสุนัข',
        path: '/การดูแลสุนัข/การให้อาหารสุนัข',
        icon: <FiberManualRecordIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'ปัญหาพฤติกรรมสุนัข',
        path: '/การดูแลสุนัข/ปัญหาพฤติกรรมสุนัข',
        icon: <FiberManualRecordIcon/>,
        cName: 'sub-nav'
      },
      {
        title: 'การฝึกสุนัข',
        path: '/การดูแลสุนัข/การฝึกสุนัข',
        icon: <FiberManualRecordIcon />
      },
      {
        title: 'การทำความสะอาดสุนัข',
        path: '/การดูแลสุนัข/การทำความสะอาดสุนัข',
        icon: <FiberManualRecordIcon />
      }
    ]
  },
  {
    title: 'การดูแลแมว',
    path: '/หน้าหลัก',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'การให้อาหารแมว',
        path: '/การดูแลแมว/การให้อาหารแมว',
        icon: <FiberManualRecordIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'ปัญหาพฤติกรรมแมว',
        path: '/การดูแลแมว/ปัญหาพฤติกรรมแมว',
        icon: <FiberManualRecordIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'การฝึกแมว',
        path: '/การดูแลแมว/การฝึกแมว',
        icon: <FiberManualRecordIcon />
      },
      {
        title: 'การทำความสะอาดแมว',
        path: '/การดูแลแมว/การทำความสะอาดแมว',
        icon: <FiberManualRecordIcon />
      }
    ]
  },
  {
    title: 'สถานสงเคราะห์',
    path: '/หน้าหลัก',
    icon: <LocationCityIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'ค้นหาสถานสงเคราะห์',
        path: '/สถานสงเคราะห์/ค้นหาสถานสงเคราะห์',
        icon: <SearchIcon/>,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ช่วยเหลือ',
    path: '/หน้าหลัก',
    icon: <IoIcons.IoMdHelpCircle />,
    subNav: [
      {
        title: 'Q&A',
        path: '/ช่วยเหลือ/Q&A',
        // icon: <SearchIcon/>,
        cName: 'sub-nav'
      }
    ]
  }
];
