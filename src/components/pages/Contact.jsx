import { useState } from 'react';
import Banner from '../Partials/Banner'

export default function Contact(){
    const pagename ='Contact us'
    const pagetitle ='Contact us'

    const [formValues, setFormValues] = useState({});

    const hundleInputs = (e) => {
        const id = e.currentTarget.id; 
        const value = e.currentTarget.value;
        setFormValues((prevState) => {
            return { ...prevState, [id]: value }; 
        });
        console.log(formValues);
    };

    const hundleSubmit= (e)=>{
        e.preventDefault();
    }
    return(
        <>
            <Banner pageName={pagename} title={pagetitle}></Banner>
            <div className="page-contact">
                <div className="contact-boxes">
                <div className="formulaire">
                {JSON.stringify(formValues)}
                    <h2>Contact form</h2>
                    <p className='sub-form'>Please fill out this form to let us know your requests.</p>
                    <form  className='form' onSubmit={hundleSubmit}>
                        <div className="form-group">
                            <span className='form-span'>Full name</span>
                            <input type="text" placeholder='John wick' onChange={hundleInputs} id='nameInput'/>
                        </div>
                        <div className="form-group">
                            <span className='form-span'>Mail</span>
                            <input type="mail" placeholder='example@gmail.com'  onChange={hundleInputs} id='mailInput'/>
                        </div>
                        <div className="form-group">
                            <span className='form-span'>Phone number</span>
                            <input type="number" maxLength={10} placeholder='01 02 05 78 52'  onChange={hundleInputs}id='phoneInput'/>
                        </div>
                        <div className="form-group">
                            <span className='form-span'>Message</span>
                            <textarea type="Message" placeholder='John wick' onChange={hundleInputs} id='messageInput' />
                        </div>
                        <div className="form-group">
                            <span className='form-span'>test </span>
                            <select name="" id="selectInput" onChange={hundleInputs}>
                                <option value="one">one</option>
                                <option value="two">two</option>
                                <option value="three">three</option>
                                <option value="four">four</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <span className='form-span'>checkbox</span>
                            <input type="checkbox"  placeholder='John wick' name='checkbox'  onChange={hundleInputs} id='checkboxInput' />
                            <input type="checkbox"  placeholder='John wick' name='checkbox'  onChange={hundleInputs} id='checkboxInput2' />
                        </div>
                        <div className="form-group">
                            <input type="submit" className='btn-principal' />
                        </div>
                    </form>
                </div>
                <div className="map">
                    <div className="map-boxes">
                        <div className="box1 box">
                            <h3 className='title'>OUR LOCATIONS</h3>
                            <p>Adresse : 45 Hudson Street <br/>
                            Villa Rica, GA 30180</p>
                        </div>
                        <div className="box2 box">
                            <h3 className='title'>CONNECT WITH US</h3>
                            <p>Call : + (713) 534 - 2319</p>
                            <p>Call : + (733) 364 - 5123</p>
                        </div>
                        <div className="box3 box">
                            <h3 className='title'>VISITING HOURS</h3>
                            <p>Monday to Saturday <br />
                                8 am to 5 pm <br />
                                Sunday – Closed</p>
                            <p>Call : + (733) 364 - 5123</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}