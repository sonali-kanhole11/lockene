import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="main-container">

        <h1 className="heading">All-in-One platform with <br />
             benefits for every need.</h1>

        <div className="container">

            <div className="cards">
                <div className="icon">
                  <img src="https://lockene.us/wp-content/uploads/2023/11/icon-1-1.png" alt=""/>
                </div>
           

                  <h1>Sales</h1>
                  
             
                <p>Our sales CRM boosts productivity, provides clear pipeline insights, and drives revenue growth.</p>

            </div>

            <div className="cards">
                <img src="https://lockene.us/wp-content/uploads/2023/11/icon-2.png" alt=""/>
                <h1>Service</h1>
                <p>Our customer service solution enables personalized experiences that build loyalty and drive revenue.
                </p>

            </div>

            <div className="cards">
                <img src="https://lockene.us/wp-content/uploads/2023/11/icon-3.png" alt=""/>
                 <h1>Accounts</h1>
                <p>Helps you control finances—track expenses, manage payables, and handle bills easily.</p>

            </div>

            <div className="cards">
                <img src="	https://lockene.us/wp-content/uploads/2023/11/icon-4.png" alt=""/>
                <h1>FSM</h1>
                <p>Manage scheduling, dispatch, and on-site service in one place so your team can focus on the job
                    right.</p>

            </div>

            <div className="cards">
                <img src="https://lockene.us/wp-content/uploads/2023/11/icon-5.png" alt=""/>
                <h1>Inventory</h1>
                <p>Manage orders, track stock, handle GST billing, and control warehouses all in one unified inventory
                    solution</p>

            </div>

            <div className="cards">
                <img src="	https://lockene.us/wp-content/uploads/2023/11/icon-6.png" alt=""/>
                <h1>eCommerce</h1>
                <p>Create, manage, and customize your website easily—no technical skills needed.</p>

            </div>


        </div>




    </div>
  );
};

export default Hero;