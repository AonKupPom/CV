import React from 'react'
import './cv.component.css'
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CVComponent = () => {
    return (
        <>
            <div id="cv-relative">
                <Row className="height-100">
                    <Col id="cv-container">
                        <Row id='row-100'>
                            <Col id='left-side' lg='4' className='p-5'>
                                <div>
                                    <img src={require('./../assets/images/Aon.png')} width="100%" draggable="false" alt="" />
                                </div>
                                <div className='fs-5 my-3'>แนะนำตัว</div>
                                <div className='leftIn1'>
                                    Full stack developer ผู้ชื่นชอบการเขียน
                                    โปรแกรม มีทักษะด้านการเขียนโปรแกรมเพื่อพัฒนาระบบทั้งในฝั่ง Front-end และ Back-end สามารถวิเคราะห์ข้อมูลและวางแผนจัดการปัญหาได้ในระยะเวลาอันสั้น
                                    มักใช้เวลาว่างในการศึกษาเทคโนโลยีที่น่าสนใจ
                                    เพื่อนำมาสร้างผลงานใหม่ๆ
                                </div>
                                <div className="border-bottom my-4"></div>
                                <div className='fs-5 mb-3'>ข้อมูลส่วนตัว</div>
                                <div className='mb-3 leftIn2'>
                                    <div>วันเกิด</div>
                                    <div>17 กรกฎาคม 2540</div>
                                </div>
                                <div className='mb-3 leftIn2'>
                                    <div>สัญชาติ</div>
                                    <div>ไทย</div>
                                </div>
                                <div className='mb-3 leftIn2'>
                                    <div>น้ำหนัก</div>
                                    <div>60 กก.</div>
                                </div>
                                <div className='mb-3 leftIn2'>
                                    <div>ส่วนสูง</div>
                                    <div>166 ซม.</div>
                                </div>
                                <div className='leftIn2'>
                                    <div>ที่อยู่</div>
                                    <div>26/461 อาคารT12 ถ.ป็อปปูล่า ต.บ้านใหม่</div>
                                    <div>อ.ปากเกร็ด จ.นนทบุรี 11120</div>
                                </div>
                                <div className="border-bottom my-4"></div>
                                <div className='fs-5 mb-3'>เว็บไซต์</div>
                                <div className='mb-3'>
                                    <div>Github</div>
                                    <div className='link' onClick={() => { window.open("https://github.com/AonKupPom") }}>
                                        https://github.com/AonKupPom
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div>Portfolio</div>
                                    <p className='link' onClick={() => { window.open("https://aonkuppom.github.io/Portfolio") }}>
                                        https://aonkuppom.github.io/Portfolio
                                    </p>
                                </div>
                                <div className='mb-5'>
                                    <img src={require('./../assets/images/qrcode-portfolio.jpg')} width="70%" draggable="false" alt="" />
                                </div>
                            </Col>
                            <Col id='right-side' lg='8' className='p-5'>
                                <Row className='my-5'>
                                    <Col xl='12' xxl='7'>
                                        <div className='name leftIn3'>ศาศวัต</div>
                                        <div className='name rightIn3'>ทรัพย์สินโยธิน</div>
                                        <div className='fs-4'>Full stack developer</div>
                                    </Col>
                                    <Col xl='12' xxl='5' className='pt-4 pe-0'>
                                        <Row className='align-items-center mb-2'>
                                            <div className='icon d-flex justify-content-center'>
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>
                                            <Col xs='8'>098-8290464</Col>
                                        </Row>
                                        <Row className='align-items-center email'>
                                            <div className='icon d-flex justify-content-center'>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <Col id='email' xs='8'>Finaldipthank@gmail.com</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div className='fs-5 pt-4 pb-3 border-bottom-black'>
                                    ประสบการณ์การทำงาน
                                </div>
                                <Row className='my-4'>
                                    <Col xl='4'>
                                        <div className='subject'>National telecom public company limited</div>
                                        <div>กรุงเทพมหานครฯ</div>
                                        <div>2563 - ปัจจุบัน</div>
                                    </Col>
                                    <Col xl='1' className='space-line'>
                                        <div className='vertical-line-ball'>
                                        </div>
                                        <div className='vertical-line'></div>
                                    </Col>
                                    <Col xl='7' className='rightIn1'>
                                        <div className='subject'>Full stack developer</div>
                                        <div>
                                            ทำหน้าที่พัฒนาระบบในรูปแบบ web application
                                            ทั้งส่วนของ Front-end และ Back-end
                                            ให้ตอบสนองกับความต้องการของลูกค้าและองค์กร
                                            โดยมีทั้งโปรเจคภายนอกและภายในบริษัท
                                        </div>
                                    </Col>
                                </Row>
                                <div className='fs-5 mt-5 pt-4 pb-3 border-bottom-black'>
                                    การศึกษา
                                </div>
                                <Row className='my-4'>
                                    <Col xl='4'>
                                        <div className='subject'>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</div>
                                        <div>ปทุมธานี</div>
                                        <div>2563</div>
                                    </Col>
                                    <Col xl='1' className='space-line'>
                                        <div className='vertical-line-ball'>
                                        </div>
                                        <div className='vertical-line'></div>
                                    </Col>
                                    <Col xl='7' className='rightIn2'>
                                        <div className='subject'>วิศวกรรมศาสตร์บัณฑิต</div>
                                        <div>
                                            จบการศึกษาในระดับปริญญาตรี คณะวิศวกรรมศาสตร์
                                            ภาควิชาวิศวกรรมคอมพิวเตอร์ มีความถนัดในด้าน
                                            Programming เป็นพิเศษ โดยมีโปรเจคก่อนจบการศึกษา
                                            คือ ระบบประมวลผลผังงานด้วยหลักการประมวลผลภาพ
                                            ซึ่งเป็นแอปพลิเคชัน ที่สามารถแปลงรูปภาพผังงานให้เป็น
                                            โปรแกรมภาษา C ได้
                                        </div>
                                    </Col>
                                </Row>
                                <div className='fs-5 mt-5 mb-4 pt-4 pb-3 border-bottom-black'>
                                    เครื่องมือและภาษาที่ใช้งานเป็นหลัก
                                </div>
                                <img src={require('./../assets/images/all-stack.jpg')} width="100%" draggable="false" alt="" />
                                <div className='fs-5 mt-5 mb-3 pt-4 pb-3 border-bottom-black'>
                                    งานอดิเรก
                                </div>
                                <div>
                                    ใช้เวลาว่างหลังเลิกงานวางระบบและพัฒนาเซิฟเวอร์เกมออนไลน์ของตัวเอง
                                </div>
                                <div className='fs-5 mt-5 mb-3 pt-4 pb-3 border-bottom-black'>
                                    จุดมุ่งหมายในการทำงาน
                                </div>
                                <div className='mb-5 pb-5'>
                                    พัฒนาความรู้ความสามารถในด้านการเขียนโปรแกรมเพื่อให้สามารถสร้างระบบที่มี
                                    ความซับซ้อนและท้าทายมากขึ้นเพื่อรองรับเทคโนโลยีใหม่ๆที่จะเกิดขึ้นในอนาคต
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CVComponent