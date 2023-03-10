import React , {useState,useEffect}from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter , Route, Routes,useLocation,Link} from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import HeaderUser from "./ui/HeaderUser";
import Footer from "../components/ui/Footer";
//main not login
import หน้าหลัก from "./ui/Home";
import สมัครสมาชิก from "./ui/pages/SignUp";
import เข้าสู่ระบบ from "./ui/pages/Login";
import สุนัข from "./ui/pages/Dog/Dog";
import แมว from "./ui/pages/Cat/Cat";
import สถานสงเคราะห์ from "./ui/pages/Shelter/Shelter";
//user
import ข้อมูลส่วนตัวของฉัน from "./ui/pages/User/UserInfo.";
import การตั้งค่าบัญชีผู้ใช้ from "./ui/pages/User/UserSetting";

import แบบทดสอบ from "./ui/pages/QuizForm/QuizForm";
import ข้อมูลสัตว์เลี้ยง from "./ui/pages/CardInfo";
//article
//adoption
import ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์ from "./ui/pages/AdoptInfo/infoAdoption";
import การรับเลี้ยงสุนัข from "./ui/pages/AdoptInfo/dogAdoption";
import การรับเลี้ยงแมว from "./ui/pages/AdoptInfo/catAdoption";
//dog
import DogFeeding from "./ui/pages/DogArticle/DogFeeding";
import DogProblem from "./ui/pages/DogArticle/DogProblem";
import DogCleaning from "./ui/pages/DogArticle/DogCleaning";
import DogTraining from "./ui/pages/DogArticle/DogTraining";
//cat
import CatFeeding from "./ui/pages/CatArticle/CatFeeding";
import CatProblem from "./ui/pages/CatArticle/CatProblem";
import CatTraining from "./ui/pages/CatArticle/CatTraining";
import CatCleaning from "./ui/pages/CatArticle/CatCleaning";
//help
import Help from "./ui/pages/Help";

import Layout from "./Layout";
import Favorite from "./ui/pages/Favorite";


 function App() {
  return (
    <ThemeProvider theme ={theme}>

        <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  {/* withheader2 */}
                  <Route path="/หน้าหลัก" element={<หน้าหลัก/>} />
                  <Route path="/หน้าหลัก/สุนัข" element={<สุนัข/>} />
                  <Route path="/หน้าหลัก/แมว" element={<แมว/>} />
                  <Route path="/หน้าหลัก/สถานสงเคราะห์" element={<สถานสงเคราะห์/>} />


                  {/*article*/}
                  {/*adoptionarticle*/}
                  <Route path="/การรับเลี้ยงสัตว์/ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์" element={<ข้อมูลเบื้องต้นการรับเลี้ยงสัตว์/>} />
                  <Route path="/การรับเลี้ยงสัตว์/การรับเลี้ยงสุนัข" element={<การรับเลี้ยงสุนัข/>} />
                  <Route path="/การรับเลี้ยงสัตว์/การรับเลี้ยงแมว" element={<การรับเลี้ยงแมว/>} />
                  {/*dogarticle*/}
                  <Route path="/การดูแลสุนัข/การให้อาหารสุนัข" element={<DogFeeding/>} />
                  <Route path="/การดูแลสุนัข/ปัญหาพฤติกรรมสุนัข" element={<DogProblem/>} />
                  <Route path="/การดูแลสุนัข/การฝึกสุนัข" element={<DogTraining/>} />
                  <Route path="/การดูแลสุนัข/การทำความสะอาดสุนัข" element={<DogCleaning/>} />
                  {/*catarticle*/}
                  <Route path="/การดูแลแมว/การให้อาหารแมว" element={<CatFeeding/>} />
                  <Route path="/การดูแลแมว/ปัญหาพฤติกรรมแมว" element={<CatProblem/>} />
                  <Route path="/การดูแลแมว/การฝึกแมว" element={<CatTraining/>} />
                  <Route path="/การดูแลแมว/การทำความสะอาดแมว" element={<CatCleaning/>} />

                  {/*help*/}
                  <Route path="/ช่วยเหลือ/Q&A" element={<Help/>} />
                  {/*Favorite*/}
                  <Route path="/รายการสัตว์ที่ชื่นชอบ" element={<Favorite/>} />
                  
                  {/*user with headerUser*/}
                  <Route path="/ข้อมูลส่วนตัวของฉัน" element={<ข้อมูลส่วนตัวของฉัน/>} />
                  <Route path="/การตั้งค่าบัญชีผู้ใช้" element={<การตั้งค่าบัญชีผู้ใช้/>} />
                  {/*cairdinfo*/}
                  <Route path="/ข้อมูลสัตว์เลี้ยง" element={<ข้อมูลสัตว์เลี้ยง/>} />
                  {/*quizform*/}
                  <Route path="/แบบทดสอบ" element={<แบบทดสอบ/>} />

                  </Route>
              <Route path="/สมัครสมาชิก" element={<สมัครสมาชิก />} /> 
              <Route path="/เข้าสู่ระบบ" element={<เข้าสู่ระบบ />} /> 

          </Routes>
        </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
