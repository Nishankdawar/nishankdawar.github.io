function toptext(){
    document.getElementById("start").innerHTML="Hello there!!!!!<br>I am  <p class='name'>Nishank Dawar</p> and this is my interactive resume in the form of Terminal<br>Now i am passing to my Bot it will tell you about me...<br><br><p id = 'passedtobot'>..............................Control Passed To Bot..............................</p><br><br> My Name is Mr.Bot I am developed by my master 'Nishank Dawar' <br><br> My job is to tell you about my master...<br><br> Enter Help(case sensitive) for more options<br><br><br><br>";
    // document.getElementById("start").innerHTML = document.getElementById("start").innerHTML + "<br> Press Enter <br>";

}


function codetext(){
    document.getElementById("code").innerHTML="<p class='important'>bot's-Macbook-Pro:  </p>";
}
function editable(){
    document.getElementById("editable").focus();

}

function giveninput(event){
    if(event.which == 13 || event.keyCode == 13){
        
        var topdata = document.getElementById("start").innerHTML+document.getElementById("code").innerHTML;
        var getresultfor = document.getElementById("editable").innerText;
        document.getElementById("start").innerHTML = topdata+getresultfor+"<br>";
        insertresult(getresultfor);
        destroyandgenerate();
    }
}
function destroyandgenerate(){
    var element = document.getElementById("editable");
    element.parentNode.removeChild(element);
    var p = document.createElement('p');
    p.setAttribute("id", "editable");
    p.setAttribute("contenteditable", "true");
    p.setAttribute("onkeypress", "giveninput(event)");
    document.getElementById("data").appendChild(p);
}
function insertresult(result){
    switch(result){
        case "help": {
            var insertdata = "1. <p id = 'start1'>about</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tells you about me<br>";
            insertdata = insertdata+"2. <p id = 'start1'>experience</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tells you about my Experience<br>";
            insertdata = insertdata+"3. <p id = 'start1'>education</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tells you about my  Education <br>";
            insertdata = insertdata+"4. <p id = 'start1'>skills</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tells you about my Skills<br>";
            insertdata = insertdata+"4. <p id = 'start1'>achievements</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tells you about my Achievements<br>";
            insertdata = insertdata+"5. <p id = 'start1'>works</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Tells you about my Interests<br>";
            insertdata = insertdata+"6. <p id = 'start1'>languages</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp--Human languages I can speak<br>";
            insertdata = insertdata+"7. <p id = 'start1'>contact</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Contact me...<br>";
            insertdata = insertdata+"8. <p id = 'start1'>interests</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--My interests<br>";
            insertdata = insertdata+"8. <p id = 'start1'>reset</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--To reset this page<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "about": {
            var insertdata = "<p id = 'main'> About </p> <br> Hi, I am <p id = 'name'>Nishank</p><br>";
            insertdata = insertdata+"I am a computer programmer and is currently pursuing B.Tech from NSIT<br>";
            /*insertdata = insertdata+"Some of my qualities includes : <br><ul><li> Energetic </li><li> Dynamic </li><li> Excellent Presentation skills </li><li> Future Focused </li><li> Excellent Executor and leadership qualities </li><li> Goal Oriented </li><li> Excellent Communication Skills </li><li> Excellent Technical Skills</li><li> Efficient Programming Skill and experience </li><li> Excellent Time Management</li></ul>";
            insertdata = insertdata+"<p class='importantdata' align = 'justify'> Motive <br><br> <li>Aiming to reduce global warming through sustainable energy production and consumption and reducing the risk of human extinction by making the life multiplanetary</li><br>";
            insertdata = insertdata+"<p class='idata' align = 'left' ><li>Aiming to innovate the education sector so that every student can get equal opportunities...</li></p><br>";
            insertdata = insertdata+"<p class='idata' align = 'left' ><li>Aiming to innovate the e-commerce sector so as to make shoppign experince of the users like never before and that to sitting at their homes, and delivery of their products within least time possible thus making use of drones an dither technologies to deliver the products to the users and hence saving their time!!!</li><br></p><br>"*/

            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "experience": {
            var insertdata = "<p id = 'main'> Experience </p> <br><br> <p id = 'exp'>Founding Member</p><br><p id = 'org'> Coincase </p><br><p id = 'achieve'> Accomplishments <br><p id = 'achabout'>Conceptualised as well as developed the first and the most secure multi-cryptocurrency wallet in the world in the team of two. Currently the wallet accepts bitcoins, litecoins, ripple, ethereum , bitcoin cash, bitcoin gold and dogecoins for transactions. Appreciated by Hindustan times campus journalist.</p> </p><br><br>";
            insertdata = insertdata+"<p id = 'exp'>Founding Member</p><br><p id = 'org'> Neighbor </p><br><p id = 'achieve'> Accomplishments <br> <p id = 'achabout'>Created a social networking site based on location which provides freedom to the users to express their views by going anonymous. Developed and provided the initial concept and financial support.</p></p><br><br>";
            insertdata = insertdata+"<p id = 'exp'>Teaching Assistant</p><br><p id = 'org'> Coding Ninjas </p><br><p id = 'achieve'> Accomplishments <br><p id = 'achabout'>Helped students to clear their doubts so that they are able to build projects that they wanted and enjoy the courses by giving them various insights about how different markets works.</p></p><br><br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "education": {
            var insertdata = "<p id = 'main'> Education </p> <br><br> Current <br>";
            insertdata = insertdata+"Netaji Subhas Institute of Technology <p class='importantdata'>NSIT</p><br>";
            insertdata = insertdata+"Computer Engineering <p class='importantdata'>COE</p><br>"
            insertdata = insertdata+"Graduation Year <p class='importantdata'>2019</p><br>"
            insertdata = insertdata+"School :- Shaheed Rajpal D.A.V Public School Dayanand Vihar<p class='importantdata'>SRDAV</p><br><br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "skills": {
            var insertdata = "<p id = 'main'> Skills </p> <br><br> <p id  = 'skills'> <li> Good Knowledge of Data Structures and Algorithms </li><li> <b> Languages Known : </b><p> C++, Ruby, Javascript, Python </p></li><li> <b> Frameworks : </b> <p> Ruby on Rails, Android, express, Sinatra </p></li><li> Future Focused  <p id = 'mark'>[10/10]</p> </li><li> Critical Thinking  <p id = 'mark'>[8/10]</p> </li><li>Resiliency  <p id = 'mark'>[10/10]</p> </li><li>Verbal and Written Communication <p id = 'mark'>[8/10]</p> </li><li>Leadership  <p id = 'mark'>[10/10]</p> </li><li>Creativity <p id = 'mark'>[9/10]</p> </li><li>Time Management <p id = 'mark'>[10/10]</p></li></p><br><br>"; 
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;    
            break;
        }
        case "achievements": {
            var insertdata = "<p id = 'main'> Achievements </p> <br><br> <p id  = achievements> <li>10th(2013) :  9.8 cgpa</li><li> 12th(2015) : 90.4% </li><li>JEE MAINS : AIR(1121) </li> <li> JEE ADVANCED : AIR(3293) </li><li> College Cgpa : 7.7 cgpa </li><li> Active Member of various societies of college <li> Bullet Hawk Racing</li><li> Entrepreneurship Development cell of NSIT</li><li> Finance and Economic society of NSIT</li><li> Algorithm society of NSIT</li><p>"; 
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;    
            break;
        }
        case "works": {
            var insertdata = "<p id = 'main'>Works</p> <br><br> <p id = 'achieve'> GITHUB Handle </p> <a class='siteinfo' href='https://github.com/Nishankdawar'>https://github.com/Nishankdawar</a><br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;
        }
        case "contact": {
            var insertdata = "<p id = 'main'> Contact </p><br><br>";
            insertdata = insertdata+"Drop me a mail <br> 19nishank@gmail.com<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;            
        }
        case "languages": {
            var insertdata = "<p id = 'main'> Languages </p><br><li> English </li><li> Hindi </li><br>"
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;            
        }
        case "interests": {
            var insertdata = "<p id = 'main'> Interests </p><br><br> Mathematics | Physics | Sustainability | Philanthropy | Video games | Development | Stocks | Reading | Astronomy | E-commerce<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
            break;            
        }
        case "reset": {
            document.getElementById("start").innerHTML="Hello there!!!!!<br>I am  <p class='name'>Nishank Dawar</p> and this is my interactive resume in the form of Terminal<br>Now i am passing to my Bot it will tell you about me...<br><br><p id = 'passedtobot'>..............................Control Passed To Bot..............................</p><br><br> My Name is Mr.Bot I am developed by my master 'Nishank Dawar' <br><br> My job is to tell you about my master...<br><br> Enter Help(case sensitive) for more options<br><br><br><br>";
            document.getElementById("code").innerHTML="<p class='important'>bot's @ Macbook-Pro</p>:~$ ";
            break;
        }
        default: {
            var insertdata = "Sorry invalid entry!!! see help for commands"+"<br>";
            var topdata = document.getElementById("start").innerHTML;
            document.getElementById("start").innerHTML = topdata+insertdata;
        }
    }

}