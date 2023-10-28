import { useState } from 'react';
import BarIcon from '../assets/bar';
import '../styles/Home.scss'

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='container'>
                <img src="bg-bottom.png" alt="" className='bg-bottom' />
                <img src="bg-top.png" alt="" className='bg-top' />

                <div className={`navbar ${isOpen ? 'expanded' : ''}`}>
                    <div className='bar-icon'>
                        <button className='bar-button' onClick={()=>setIsOpen(!isOpen)}>
                            <BarIcon />
                        </button>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'expanded' : ''}`}>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#pricing">PRICING</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <li>
                            <button><a href="/login" id='login-btn'>Login</a></button>
                        </li>
                    </ul>
                </div>

                <div className='banner'>
                    <h1>ERP WEBSITE</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, numquam harum quisquam placeat obcaecati tempora aliquid iure doloremque dolorum</p>
                    <button><a href="/login">TRY NOW</a></button>
                </div>

                <div className='about' id='about'>
                    <div className='about-img'>
                        <img src="aboutImg.png" alt="" />
                    </div>
                    <div className='about-desc'>
                        <h1>ABOUT US</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit laboriosam totam alias accusantium ea! Repellendus eius nulla amet. Sapiente sed dolores similique soluta aliquam placeat culpa velit dolore praesentium.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque inventore quibusdam accusamus ex minima, totam deserunt. Facere quam aliquid numquam, ducimus libero iste assumenda odio aperiam, nihil, animi quaerat.</p>
                    </div>
                </div>

                <div className='pricing' id='pricing'>
                    <div className='pricing-cards'>
                        <div className='each-card'>
                            <h1>Tier 1 - Basic</h1>
                            <div className='card-desc'>
                                <div className='card-price'>
                                    <h2>25$</h2>
                                    <p>PER MONTH</p>
                                </div>
                                <div className='card-list'>
                                    <ul>
                                        <li>Mencatat Barang Masuk</li>
                                        <li>Mencatat Barang Keluar</li>
                                        <li>Mencatat Hasil Keuntungan</li>
                                    </ul>
                                </div>
                            </div>
                            <button>CHOOSE PLAN</button>
                        </div>
                        <div className='each-card'>
                            <h1>Tier 2 - Business</h1>
                            <div className='card-desc'>
                                <div className='card-price'>
                                    <h2>50$</h2>
                                    <p>PER MONTH</p>
                                </div>
                                <div className='card-list'>
                                    <ul>
                                        <li>Mencatat barang masuk dan keluar</li>
                                        <li>Mencatat Keuntungan</li>
                                        <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                                        <li>Support 7x24 Jam</li>
                                    </ul>
                                </div>
                            </div>
                            <button>CHOOSE PLAN</button>
                        </div>
                        <div className='each-card'>
                            <h1>Tier 3 - Entrepreneur</h1>
                            <div className='card-desc'>
                                <div className='card-price'>
                                    <h2>100$</h2>
                                    <p>PER MONTH</p>
                                </div>
                                <div className='card-list'>
                                    <ul>
                                        <li>Mencatat barang masuk dan keluar</li>
                                        <li>Mencatat Keuntungan</li>
                                        <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                                        <li>Support 7x24 Jam</li>
                                        <li>Export data ke Excel</li>
                                        <li>AI Prediksi penghasilan</li>
                                    </ul>
                                </div>
                            </div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </div>
                </div>

                <div className='contact' id='contact'>
                    <div className='contact-content'>
                        <h1>CONTACT US</h1>
                        <form action="">
                            <input type="text" placeholder='Your name...' />
                            <input type="email" placeholder='Your email...' />
                            <input type="text" placeholder='Your message...' />
                            <button>SUBMIT</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;