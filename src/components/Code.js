import React from 'react'
// import { CodeSnippet } from '@carbon/react'


const Code = () => {
  return (
    <div className='Code'>
        <pre className='border rounded bg-grey p-3'>
            {`
 <!DOCTYPE HTML>
 <html>
     <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <title>PORTFOLIO_FirstName's Website</title>
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <meta name="description" content="PORTFOLIO_Description" />
     <meta name="keywords" content="PORTFOLIO_KeyWords" />
     <meta name="author" content="PORTFOLIO_FullName" />
 
   <!-- Facebook and Twitter integration -->
     <meta property="og:title" content="PORTFOLIO_FullName"/>
     <meta property="og:image" content="PORTFOLIO_Thumbnail"/>
     <meta property="og:url" content="PORTFOLIO_URL"/>
     <meta property="og:site_name" content=""/>
     <meta property="og:description" content=""/>
     <meta name="twitter:title" content="PORTFOLIO_FullName" />
     <meta name="twitter:image" content="PORTFOLIO_Thumbnail" />
     <meta name="twitter:url" content="PORTFOLIO_URL" />
     <meta name="twitter:card" content="" />
 
     <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
     <link rel="shortcut icon" href="favicon.ico">
 
     <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet">
     
     <!-- Animate.css -->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/animate.css">
     <!-- Icomoon Icon Fonts-->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/icomoon.css">
     <!-- Bootstrap  -->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/bootstrap.css">
     <!-- Flexslider  -->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/flexslider.css">
     <!-- Flaticons  -->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/fonts/flaticon/font/flaticon.css">
     <!-- Owl Carousel -->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/owl.carousel.min.css">
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/owl.theme.default.min.css">
     <!-- Theme style  -->
     <link rel="stylesheet" href="https://themewagon.github.io/jackson/css/style.css">
 
     <!-- Modernizr JS -->
     <script src="https://themewagon.github.io/jackson/js/modernizr-2.6.2.min.js"></script>
     <!-- FOR IE9 below -->
     <!--[if lt IE 9]>
     <script src="js/respond.min.js"></script>
     <![endif]-->
 
     </head>
     <body>
     <div id="colorlib-page">
         <div class="container-wrap">
         <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
         <aside id="colorlib-aside" class="border js-fullheight">
             <div class="text-center">
                 <div class="author-img" style="background-image: url(https://i.imgur.com/eKA8zjR.jpg);"></div>
                 <h1 id="colorlib-logo"><a href="#">PORTFOLIO_FullName</a></h1>
                 <span class="position"><a href="#">PORTFOLIO_Occupation</a> PORTFOLIO_Address</span>
             </div>
             <nav id="colorlib-main-menu" class="navbar">
                 <div id="navbar" class="collapse">
                     <ul>
                         <li class="active"><a href="#" data-nav-section="home">Home</a></li>
                         <li><a href="#" data-nav-section="skills">Skills</a></li>
                         <li><a href="#" data-nav-section="experience">Experience</a></li>
                         <li><a href="#" data-nav-section="work">Projects</a></li>
                         <li><a href="#" data-nav-section="education">Education</a></li>
                     </ul>
                 </div>
             </nav>
 
             <div class="colorlib-footer">
                 <p><small> <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                 Copyright <script>document.write(new Date().getFullYear());</script> All rights reserved. Made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                 <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> <span>Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></span> <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
                 <ul style="background-color: #2c98f0;">
                     <li><a href="PORTFOLIO_Github"><i class="icon-github"></i></a></li>
                     <li><a href="#"><i class="icon-twitter2"></i></a></li>
                     <li><a href="PORTFOLIO_Email"><i class="icon-mail"></i></a></li>
                     <li><a href="PORTFOLIO_LinkedIn"><i class="icon-linkedin2"></i></a></li>
                 </ul>
             </div>
 
         </aside>
 
         <div id="colorlib-main">
 
             <!-- Home / About -->
             <section id="colorlib-hero" class="js-fullheight" data-section="home">
                 <div class="flexslider js-fullheight">
                     <ul class="slides">
                        <li style="background-image: url(https://i.imgur.com/qVMYDFh.jpg);">
                            <div class="overlay"></div>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div class="slider-text-inner js-fullheight">
                                            <div class="desc">
                                                <h1>Hi! <br>I'm PORTFOLIO_FirstName</h1>
                                                <h2>PORTFOLIO_Description
                                             </h2>
                                                 <p><a class="btn btn-primary btn-learn">View Resume <i class="icon-download4"></i></a></p>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                       </ul>
                   </div>
             </section>
             
             <!-- skills -->
             <section class="colorlib-skills" data-section="skills">
                 <div class="colorlib-narrow-content">
                     <div class="row">
                         <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                             <h2 class="colorlib-heading animate-box">My Skills</h2>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-12 animate-box">
                             <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                         </div>
                         <div class="col-md-6 animate-box">
                             <div class="progress-wrap">
                                 <h3>Photoshop</h3>
                                 <div class="progress">
                                      <div class="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                       aria-valuemin="0" aria-valuemax="100" style="width:75%">
                                     <span>75%</span>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                             <div class="progress-wrap">
                                 <h3>jQuery</h3>
                                 <div class="progress">
                                      <div class="progress-bar color-2" role="progressbar" aria-valuenow="60"
                                       aria-valuemin="0" aria-valuemax="100" style="width:60%">
                                     <span>60%</span>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box">
                             <div class="progress-wrap">
                                 <h3>HTML5</h3>
                                 <div class="progress">
                                      <div class="progress-bar color-3" role="progressbar" aria-valuenow="85"
                                       aria-valuemin="0" aria-valuemax="100" style="width:85%">
                                     <span>85%</span>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                             <div class="progress-wrap">
                                 <h3>CSS3</h3>
                                 <div class="progress">
                                      <div class="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                       aria-valuemin="0" aria-valuemax="100" style="width:90%">
                                     <span>90%</span>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box">
                             <div class="progress-wrap">
                                 <h3>WordPress</h3>
                                 <div class="progress">
                                      <div class="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                       aria-valuemin="0" aria-valuemax="100" style="width:70%">
                                     <span>70%</span>
                                       </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                             <div class="progress-wrap">
                                 <h3>SEO</h3>
                                 <div class="progress">
                                      <div class="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                       aria-valuemin="0" aria-valuemax="100" style="width:80%">
                                     <span>80%</span>
                                       </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
 
             <!-- work experience -->
             <section class="colorlib-experience" data-section="experience">
                 <div class="colorlib-narrow-content">
                     <div class="row">
                         <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                             <span class="heading-meta">Experience</span>
                             <h2 class="colorlib-heading animate-box">Work Experience</h2>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-12">
                          <div class="timeline-centered">
                              <article class="timeline-entry animate-box">
                                 <div class="timeline-entry-inner">
 
                                    <div class="timeline-icon color-1">
                                       <i class="icon-pen2"></i>
                                    </div>
 
                                    <div class="timeline-label">
                                       <h2><a href="#">CEO - Pipernet </a> <span>2017-Present</span></h2>
                                       <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                    </div>
                                 </div>
                              </article>
 
 
                              <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                 <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-2">
                                       <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#">Full Stack Developer at Pied Piper</a> <span>2017-2018</span></h2>
                                       <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                 </div>
                              </article>
 
                              <article class="timeline-entry animate-box">
                                 <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-3">
                                       <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#">Developer at Hooli</a> <span>2017-2018</span></h2>
                                       <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    </div>
                                 </div>
                              </article>
 
                              <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                 <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-none">
                                    </div>
                                 </div>
                              </article>
                           </div>
                        </div>
                    </div>
                 </div>
             </section>
 
             <!-- projects -->
             <section class="colorlib-work" data-section="work">
                 <div class="colorlib-narrow-content">
                     <div class="row">
                         <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                             <h2 class="colorlib-heading animate-box">My Projects</h2>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-6 animate-box">
                             <div class="project" style="background-image: url(https://i.imgur.com/WxRpDLN.jpg);">
                                 <div class="desc">
                                     <div class="con">
                                         <h3><a href="#">Project 01</a></h3>
                                         <span>Website</span>
                                         <p class="icon">
                                             <span><a href="#"><i class="icon-share3"></i> Github</a></span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                             <div class="project" style="background-image: url(https://i.imgur.com/H1IVzHx.jpg);">
                                 <div class="desc">
                                     <div class="con">
                                         <h3><a href="#">Project 02</a></h3>
                                         <span>Animation</span>
                                         <p class="icon">
                                             <span><a href="#"><i class="icon-share3"></i> Github</a></span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
                             <div class="project" style="background-image: url(https://i.imgur.com/Ed6Hbt6.jpg);">
                                 <div class="desc">
                                     <div class="con">
                                         <h3><a href="#">Project 03</a></h3>
                                         <span>Illustration</span>
                                         <p class="icon">
                                             <span><a href="#"><i class="icon-share3"></i> Github</a></span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                             <div class="project" style="background-image: url(https://i.imgur.com/8A6FHKa.jpg);">
                                 <div class="desc">
                                     <div class="con">
                                         <h3><a href="#">Project 04</a></h3>
                                         <span>Application</span>
                                         <p class="icon">
                                             <span><a href="#"><i class="icon-share3"></i> Github</a></span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box">
                             <div class="project" style="background-image: url(https://i.imgur.com/fWZmBvs.jpg);">
                                 <div class="desc">
                                     <div class="con">
                                         <h3><a href="#">Project 05</a></h3>
                                         <span>Graphic, Logo</span>
                                         <p class="icon">
                                             <span><a href="#"><i class="icon-share3"></i> Github</a></span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                             <div class="project" style="background-image: url(https://i.imgur.com/EFnzX1V.jpg);">
                                 <div class="desc">
                                     <div class="con">
                                         <h3><a href="#">Project 06</a></h3>
                                         <span>Web Design</span>
                                         <p class="icon">
                                             <span><a href="#"><i class="icon-share3"></i> Github</a></span>
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                 </div>
             </section>
 
             <!-- education -->
             <section class="colorlib-education" data-section="education">
                 <div class="colorlib-narrow-content">
                     <div class="row">
                         <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                             <span class="heading-meta">Education</span>
                             <h2 class="colorlib-heading animate-box">Education</h2>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-12 animate-box">
                             <div class="fancy-collapse-panel">
                                 <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                     <div class="panel panel-default">
                                         <div class="panel-heading" role="tab" id="headingOne">
                                             <h4 class="panel-title">
                                                 <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master in Computer Science
                                                 </a>
                                             </h4>
                                         </div>
                                         <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                              <div class="panel-body">
                                                 <div class="row">
                                                       <div class="col-md-6">
                                                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                                       </div>
                                                       <div class="col-md-6">
                                                           <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                       </div>
                                                   </div>
                                              </div>
                                         </div>
                                     </div>
                                     <div class="panel panel-default">
                                         <div class="panel-heading" role="tab" id="headingTwo">
                                             <h4 class="panel-title">
                                                 <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor in Computer Science
                                                 </a>
                                             </h4>
                                         </div>
                                         <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                             <div class="panel-body">
                                                 <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                     <ul>
                                                         <li>Separated they live in Bookmarksgrove right</li>
                                                         <li>Separated they live in Bookmarksgrove right</li>
                                                     </ul>
                                             </div>
                                         </div>
                                     </div>
 
                                     <div class="panel panel-default">
                                         <div class="panel-heading" role="tab" id="headingThree">
                                             <h4 class="panel-title">
                                                 <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">High School Secondary Education
                                                 </a>
                                             </h4>
                                         </div>
                                         <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                             <div class="panel-body">
                                                 <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
 
 
 
         </div><!-- end:colorlib-main -->
     </div><!-- end:container-wrap -->
     </div><!-- end:colorlib-page -->
 
     <!-- jQuery -->
     <script src="https://themewagon.github.io/jackson/js/jquery.min.js"></script>
     <!-- jQuery Easing -->
     <script src="https://themewagon.github.io/jackson/js/jquery.easing.1.3.js"></script>
     <!-- Bootstrap -->
     <script src="https://themewagon.github.io/jackson/js/bootstrap.min.js"></script>
     <!-- Waypoints -->
     <script src="https://themewagon.github.io/jackson/js/jquery.waypoints.min.js"></script>
     <!-- Flexslider -->
     <script src="https://themewagon.github.io/jackson/js/jquery.flexslider-min.js"></script>
     <!-- Owl carousel -->
     <script src="https://themewagon.github.io/jackson/js/owl.carousel.min.js"></script>
     <!-- Counters -->
     <script src="https://themewagon.github.io/jackson/js/jquery.countTo.js"></script>
     
     
     <!-- MAIN JS -->
     <script src="https://themewagon.github.io/jackson/js/main.js"></script>
 
     </body>
 </html>
                
                
            `}
        </pre>

    </div>
  )
}

export default Code
