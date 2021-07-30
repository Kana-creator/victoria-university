import React, { Component } from 'react';
import BreadNavBar from './breadNav';
import NavBar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import WilNav from './wil_nav';
import BottomWil from './bottomWil';
import WilBanner from './wil_banner';

class HowWilWorks extends Component{
    render(){
        return(
            <React.Fragment>
                <BreadNavBar />
                <NavBar />
                <section className="w3l-top-header-content">
	<div className="hny-top-menu">
		<div className="top-hd" style={{padding: '5px 0px 5px 0px', backgroundColor:'#024c74'}}>
			<div className="container-fluid">
				<div className=""  style={{color: '#EEE'}}>
				<Link to="/"><span className="underline" style={{color: "#EEE"}}>
					Victoria University 
					</span></Link>&nbsp;/&nbsp;
                    <Link to="/wil"><span className="underline" style={{color: "#EEE"}}>
					Work Integrated Learning 
					</span></Link>&nbsp;
					<span style={{color: '#EEE'}}>/ How WIL Works</span>
				</div>
			</div>
		</div>
	</div>
</section>
<WilBanner />
<section className="w3l-team-main">
	<div className="team py-5">
		<div className="container py-lg-5" >
			<div className="justify-content-center"  style={{display: 'flex'}}>
				<div className="col-lg-3">
					<WilNav />
				</div>
				<div className="col-lg-9"   style={{padding: '0  px', backgroundColor: '#FFF', borderTopLeftRadius: '15px'}}>
					<div className="search_results">
						<h6 style={{color: '#076ea5', fontSize: '34px'}}><b>How WIL Works</b></h6>
                        <div style={{width: '10%', border: '#f04545 3px solid'}} className="text-left"></div>
                        <br/>
                        <br/>
                        <p className="my-4" style={{fontSize: '30px'}}>What is WIL?</p>
						<p className="my-4">WIL is a new education system in Uganda introduced by Victoria University .You may have heard of WIL as practicum, clinical placement, internship or fieldwork, to name a few.</p>
						<p className="my-4">
							WIL also occurs in various types. While placement is the most known form, WIL can also be project-based learning, simulation activities, clinic-based, fieldwork and even virtual.
						</p>
                        <p className="my-4">
                        WIL opportunities are aligned with the curriculum of hundreds of courses offered by Victoria University and are delivered at different times of the year.
                        </p>
                        <p className="my-4">
                            <ul style={{listStyle: 'none'}}>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;WIL can be real or simulated, provided on or off campus, a compulsory or optional part of a program.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;WIL can be designed to meet the needs of an industry, business or community partner to achieve real-world outcomes.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;WIL students are expected to exemplify the skills, attitudes and attributes of a professional in their field of expertise.</li>
                                <li className="" style={{marginBottom: '.5rem !important'}}>&emsp;<span className="fa fa-angle-right"></span>&emsp;WIL involves clearly stated outcomes and assessment, and should be consistent with quality teaching and learning.</li>
                            </ul>
                        </p>
                        <p style={{fontSize: '30px'}}><b>How WIL Works</b></p>
                        <p className="my-4">
                            WIL courses and industry experience are available to domestic and international students enrolled in most undergraduate, postgraduate or research higher degrees.
                        </p>
                        <p className="my-4">
                            The majority of the undergraduate degree programs offered by Victoria University include an opportunity for students to take part in some type of WIL. Tens of thousands of students from across the University take part in a diverse range of core, compulsory, elective, and directed WIL courses opportunities each year.
                        </p>
                        <p className="my-4">
                            It is not just teachers, nurses, doctors and engineers that can take part in these meaningful workplace learning opportunities, with WIL courses being offered as part of degree programs in diverse fields such as Information Technology, Communications and Design, Humanities, Business, Commerce and Marketing.
                        </p>
                        <p className="my-4">
                            As WIL is predominantly part of courses within degrees, WIL opportunities are delivered at different times of the year, depending on the course and semester timetable and annual course structures.
                        </p>
                        <table style={{width: '100%', height: '100%'}}>
							<tr>
								<td className="text-left" style={{backgroundColor: '#0077b5', textAlign: 'center', color: '#FFF', padding: '20px', fontSize: '30px'}}><Link to="/contactwil" className="underline" style={{color: '#FFF'}}><b>CONTACT US</b></Link><br/>Get in touch if you're interested in hosting WIL</td>
								<td style={{width: '5%', textAlign: 'center', backgroundColor: '#0077b5'}}><Link to="/contactwil" className="underline" style={{color: '#FFF'}}><span className="fa fa-angle-right" style={{fontSize: '20px', color: '#fff'}}></span></Link></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
                <BottomWil />
                <Footer />
            </React.Fragment>
        )
    }
}

export default HowWilWorks;