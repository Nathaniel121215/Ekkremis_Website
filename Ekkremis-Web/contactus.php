<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- ===== CSS ===== -->
        

        
        <link rel="stylesheet" href="assets/css/style4.css">

        <!--=============== Small Icon ===============-->

        <link rel="shortcut icon" href="assets/images/illustration folder/company logos/Elogo.png" type="image/x-icon">


        <!--=============== REMIX ICONS ===============-->
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel="stylesheet">
        

        <title>Ekkremis</title>
    </head>
    <body>

        <!--===== HEADER =====-->
        <header class="l-header" id="header">
            <nav class="nav bd-grid">
                <a href="#" class="nav__logo">EKKREMIS INC.</a>
                <div class="nav__logo2" id="nav-nav__logo2">
                    <a href="#"><img src="assets/images/illustration folder/company logos/EkkremisLogo.png" alt="" class="home__img__logo"></a>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bxs-grid'></i>
                </div>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
                        <li class="nav__item"><a href="index.html" class="nav__link">About Us</a></li>
                        <li class="nav__item"><a href="services.html" class="nav__link">Services</a></li>
                        <li class="nav__item"><a href="meettheteam.html" class="nav__link">Meet the Team</a></li>
                        <li class="nav__item"><a href="#" class="nav__link  active">Contact Us</a></li>
                    </ul>
                </div>
            </nav>   
        </header>
        

        <main class="l-main">
            
        <section class="contactus section">
            <div class="contactus__container bd-grid">

                <div class="contactus__box">
                    <h2 class="contactus__title">
                        Reach out to us today<br>
                        via any of the given<br>
                        information
                    </h2>

                    <div class="contact__data">

                        <div class="contactus__information">
                            <h4 class="contact__subtitle">Call us for instant support</h4>
                            <span class="contact__description">
                                <i class="ri-phone-line contact__icon"></i>
                                (02) 8403-0133
                            </span>
                        </div>
                        
                        <div class="contactus__information">
                            <h4 class="contact__subtitle">Write us by mail</h4>
                            <span class="contact__description">
                                <i class="ri-mail-line contact__icon"></i>
                                info@ekkremis.com
                            </span>
                        </div>
                    </div>
                </div>

                
               
                    <form class="contact__form" id="myForm" onsubmit="return false">

                        <h4 class="sent-notification"></h4>    
        
                            <div class="contact__inputs">
                                <div class="contact__content">
                                    <input type="email" placeholder=" " class="contact__input" id="email" required>
                                    <label for="" class="contact__label">Email</label>
                                </div>
                                
        
                                <div class="contact__content">
                                    <input type="text" placeholder=" " class="contact__input" id="subject" required>
                                    <label for="" class="contact__label">Subject</label>
                                </div>
        
                                <div class="contact__content contact__area">
                                    <textarea placeholder=" " class="contact__input" id="message" required></textarea>
                                    <label for="" class="contact__label">Message</label>
                                </div>
                            </div>
        
                            <button class="sendbutton" type="submit" onclick="sendEmail()" value="Send An Email">
                                Send Message
                                <i class="ri-arrow-right-up-line button__icon"></i>
        
                            </button>
        
                        </form>

                
                



            </div>
        </section>

        <section class="mapsec  bd-grid">
            <div id="map">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3612798493879!2d121.02069943037654!3d14.554542404494452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90f96855555%3A0x121614a5de5b74c1!2sEKKREMIS%20SOLUTIONS%20INC.!5e0!3m2!1sen!2sph!4v1649501719282!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>
            


        <footer class="footer">    
                <div class="footer__container bd-grid">

                    <div class="footer__box">
                        <h3 class="footer__title">EKKREMIS SOLUTIONS INC.</h3>
                        <p class="footer__description">Unit 706, 7th Floor,Greenbelt<br> 
                            Mansion, #106 Perea Street <br>
                            Legaspi Village, Makati City, Philippines 1226</p>
                    </div>
    
                    <div class="footer__box">
                        <h3 class="footer__title">EXPLORE</h3>
                        <ul>
                            <li><a href="index.html" class="footer__link">Home</a></li>
                            <li><a href="index.html" class="footer__link">About Us</a></li>
                            <li><a href="services.html" class="footer__link">Services</a></li>
                            <li><a href="meettheteam.html" class="footer__link">Meet the Team</a></li>
                            <li><a href="#" class="footer__link">Contact Us</a></li>
                        </ul>
                    </div>
    
    
                    <div class="footer__box">
                        <h3 class="footer__title">SUPPORT</h3>
                        <ul>
                            <p class="footer__link">info@ekkremis.com</p>  
                            <p class="footer__link">(02) 8403-0133</p>  
                        </ul>
                    </div>
    
    
                    <div class="footer__box">
                        <a href="https://www.facebook.com/ekkremissolutions" class="footer__social"><i class="bx bxl-facebook-square" id="icon-hover"></i></a>
                        <a href="https://www.instagram.com/ekkremisolutionsinc/" class="footer__social"><i class="bx bxl-instagram-alt" id="icon-hover"></i></a>
                        <a href="https://www.linkedin.com/company/ekkremis-solutions-incorporated" class="footer__social"><i class="bx bxl-linkedin-square" id="icon-hover"></i></a>
                        <br>
                        <script language="JavaScript" src="https://dunsregistered.dnb.com" type="text/javascript"></script> 
                    </div>

    
                </div>

                <p class="footer__copy">EXCELLENT SOLUTIONS MADE POSSIBLE <br>
                    ©COPYRIGHT 2022.ALL RIGHTS RESERVED.</p>

              </footer>

              <a href="#" class="scrollup" id="scroll-up"> 
                <i class="ri-arrow-up-fill scrollup__icon"></i>
              </a>    
           
  

              



        </main>


      
        

        <!--===== MAIN JS =====-->
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="assets/js/main.js"></script>
        <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script> 
        <script type="text/javascript">
           
        function sendEmail() {
            var email = $("#email");
            var subject = $("#subject");
            var message = $("#message");

      
            if (isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message)) {
                $.ajax({
                   url: 'sendmessage.php',
                   method: 'POST',
                   dataType: 'json',
                   data: {
                       email: email.val(),
                       subject: subject.val(),
                       message: message.val()
                   }, 
                   success: function (response) 
                   {
                        $('#myForm')[0].reset();
                        $('.sent-notification').css('display', 'block');
                        $('.sent-notification').text("Message Sent Successfully.");
                        $('.sent-notification').css('background-color', '#E7FAF0');
                        $('.sent-notification').css('color', '#5CDD96');
                   },
                   error: function (response) 
                   {
                        $('#myForm')[0].reset();
                        $('.sent-notification').css('display', 'block');
                        $('.sent-notification').text("Failed to send mail.");
                        $('.sent-notification').css('background-color', '#FFEEEE');
                        $('.sent-notification').css('color', '#CE4A48');
                   }



                });
            }
        }

        function isNotEmpty(caller) 
        {
            if (caller.val() == "") 
            {
                $('.sent-notification').css('display', 'block');
                $('.sent-notification').text("Fill up all the required fields.");
                $('.sent-notification').css('background-color', '#FFEEEE');
                $('.sent-notification').css('color', '#CE4A48');
                return false;
            } 
            else

               
                

            return true;
        }
    </script>
    


       

        
    </body>
</html>
