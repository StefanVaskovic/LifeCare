
let nizVreme = new Array("Time","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","13:00 PM","14:00 PM","15:00 PM","16:00 PM","17:00 PM","18:00 PM","19:00 PM","20:00 PM");
window.onload = function(){
   
    document.getElementById("btnSubmit").addEventListener("click",provera);
    document.getElementById("name").addEventListener("blur",proveraImena);
    document.getElementById("email").addEventListener("blur",proveraEmail);
    document.getElementById("Dani").addEventListener("change",proveraDana);
    document.getElementById("Vreme").addEventListener("change",proveraVreme)
    document.getElementById("Doktori").addEventListener("change",proveraDoktor);

    document.getElementById("name1").addEventListener("blur",proveraImena1);
    document.getElementById("email1").addEventListener("blur",proveraEmail1);
    document.getElementById("phone").addEventListener("blur",proveraTelefona);
    document.getElementById("phone").addEventListener("keyup",dodajKosuCrtu);
    document.getElementById("message").addEventListener("blur",proveraPoruke);
    document.getElementById("subject").addEventListener("blur",proveraSubject);
    document.getElementById("submitButton").addEventListener("click",provera1);

    document.getElementById("mc-email").addEventListener("blur",proveraSubEmail);
    document.getElementById("subEmailBtn").addEventListener("click",provera2);
    subEmailBtn
    
    //slajdTekstova
    let nizTekstovi=["Welcome to our clinic", "We are not expensive", "Come!"];
    let brojac = 0;
    let dodjiBezi =  document.getElementById("spanTekst");
    let interval = setInterval(promeni,2500);
    function promeni(){
        dodjiBezi.innerHTML=nizTekstovi[brojac];
        brojac++;
        if(brojac==nizTekstovi.length){
            brojac=0;
        } 
    }




    //Lista za dane
    let nizDana = new Array("Day","Monday","Wednesday","Thursday","Friday","Saturday","Sunday");
    
    let html1="";
    for(let dan of nizDana){
        html1+=`<option value=${dan}>${dan}</option>`;
    }
    document.getElementById("Dani").innerHTML+=html1;

    //Lista za vreme
    
    
    let html2="";
    for(let vreme of nizVreme){
        html2+=`<option value=${vreme}>${vreme}</option>`;
    }
    document.getElementById("Vreme").innerHTML+=html2;

    //Lista za doktore
    let nizDoktori = new Array("Doctor Name","Mr.Dragan","Mr.Paskec","Mrs.Gloria","Mrs.Natalia","Mrs.Bryan","Mrs.Matthew");
    
    let html3="";
    for(let doktor of nizDoktori){
        html3+=`<option value=${doktor}>${doktor}</option>`;
    }
    document.getElementById("Doktori").innerHTML+=html3;
}

function proveraImena(){
    
    let vrednostImena = document.getElementById("name").value.trim();
    let reIme = /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/;

    if(vrednostImena==""){
        document.getElementById("spanName").classList.add("crvena");
        document.getElementById("spanName").innerHTML="Field must not be blank!";
    }
    else if(!reIme.test(vrednostImena)){
        document.getElementById("spanName").classList.add("crvena");
        document.getElementById("spanName").innerHTML="Name is not in good format!";
    }else{
        document.getElementById("spanName").classList.remove("crvena");
        document.getElementById("spanName").innerHTML="";
    }
}
function proveraImena1(){
    
    let vrednostImena = document.getElementById("name1").value.trim();
    let reIme = /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/;

    if(vrednostImena==""){
        document.getElementById("name1").style.borderBottomColor="red";
        
    }
    else if(!reIme.test(vrednostImena)){
        document.getElementById("name1").style.borderBottomColor="red";
        
    }else{
        document.getElementById("name1").style.borderBottomColor="green";
        
    }
}





function proveraEmail(){

    let vrednostEmail = document.getElementById("email").value.trim();
    let reEmail = /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/;

    if(vrednostEmail==""){
        document.getElementById("spanEmail").classList.add("crvena");
        document.getElementById("spanEmail").innerHTML="Field must not be blank!";
    }
    else if(!reEmail.test(vrednostEmail)){
        document.getElementById("spanEmail").classList.add("crvena");
        document.getElementById("spanEmail").innerHTML="Email is not in good format!";
    }else{
        document.getElementById("spanEmail").classList.remove("crvena");
        document.getElementById("spanEmail").innerHTML="";
    }
}
function proveraEmail1(){

    let vrednostEmail = document.getElementById("email1").value.trim();
    let reEmail = /^[a-zA-Zčćđžš \.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/;

    if(vrednostEmail==""){
        document.getElementById("email1").style.borderBottomColor="red";
        
    }
    else if(!reEmail.test(vrednostEmail)){
        document.getElementById("email1").style.borderBottomColor="red";
        
    }else{
        document.getElementById("email1").style.borderBottomColor="green";
        
    }
}
function  proveraPoruke(){
    let taMessage = document.getElementById("message");
    if(taMessage.value==""){
        document.getElementById("message").style.borderBottomColor="red";
    }else{
        document.getElementById("message").style.borderBottomColor="green";
    }
}

function proveraTelefona(){
    let vrednostTelefon = document.getElementById("phone").value.trim();
    let reTelefon = /^06[0123459]\/([\d][\d][\d])\/([\d][\d][\d][\d]?)$/;
    
    if(!reTelefon.test(vrednostTelefon)){
        document.getElementById("phone").style.borderBottomColor="red";
    }else{
        document.getElementById("phone").style.borderBottomColor="green";
    }
    
}
function dodajKosuCrtu(){
    let vrednostTelefon = document.getElementById("phone").value.trim();
    if(vrednostTelefon.length==3 || vrednostTelefon.length==7 ){
        vrednostTelefon+="/";
    }
    document.getElementById("phone").value=vrednostTelefon;
}
function proveraSubject(){
    let vrednostSubject = document.getElementById("subject").value.trim();
    

    if(vrednostSubject==""){
        document.getElementById("subject").style.borderBottomColor="red";
    }else{
        document.getElementById("subject").style.borderBottomColor="green";
    }
}







function proveraDana(){
    let poljeDan = document.getElementById("Dani");
    if(poljeDan.selectedIndex==0){
        document.getElementById("spanDani").classList.add("crvena");
        document.getElementById("spanDani").innerHTML="Choose...";

    }else if(poljeDan.selectedIndex==5){
        let nizVreme = new Array("Time","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","13:00 PM","14:00 PM","15:00 PM","16:00 PM","17:00 PM");
        let html2="";
        for(let vreme of nizVreme){
            html2+=`<option value=${vreme}>${vreme}</option>`;
        }
        document.getElementById("Vreme").innerHTML=html2;
            
    }else if(poljeDan.selectedIndex==6){
        let nizVreme = new Array("Time","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","13:00 PM");
        let html2="";
        for(let vreme of nizVreme){
            html2+=`<option value=${vreme}>${vreme}</option>`;
        }
        document.getElementById("Vreme").innerHTML=html2;
    }else if(poljeDan.selectedIndex==1 || poljeDan.selectedIndex==2 || poljeDan.selectedIndex==3 || poljeDan.selectedIndex==4 ||poljeDan.selectedIndex==5){
        let nizVreme = new Array("Time","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","13:00 PM","14:00 PM","15:00 PM","16:00 PM","17:00 PM","18:00 PM","19:00 PM","20:00 PM");
        let html2="";
        for(let vreme of nizVreme){
            html2+=`<option value=${vreme}>${vreme}</option>`;
        }
        document.getElementById("Vreme").innerHTML=html2;
    }
    else{
        document.getElementById("spanDani").classList.remove("crvena");
        document.getElementById("spanDani").innerHTML="";
    }
}
function proveraVreme(){
    let poljeVreme = document.getElementById("Vreme");
    if(poljeVreme.selectedIndex==0){
        document.getElementById("spanVreme").classList.add("crvena");
        document.getElementById("spanVreme").innerHTML="Choose...";
        validno=false;
    }else{
        document.getElementById("spanVreme").classList.remove("crvena");
        document.getElementById("spanVreme").innerHTML="";
    }
}
function proveraDoktor(){
    let poljeDoktor = document.getElementById("Doktori");
    if(poljeDoktor.selectedIndex==0){
        document.getElementById("spanDoktori").classList.add("crvena");
        document.getElementById("spanDoktori").innerHTML="Choose...";
        validno=false;
    }else{
        document.getElementById("spanDoktori").classList.remove("crvena");
        document.getElementById("spanDoktori").innerHTML="";
    }
    if(!poljeDoktor.selectedIndex==0){
        document.getElementById('textarea_message').innerHTML='Greetings '+poljeDoktor.value;
    }
    else{
        document.getElementById('textarea_message').innerHTML='';
    }
    
}






function proveraSubEmail(){
    let vrednostEmail = document.getElementById("mc-email").value.trim();
    let reEmail = /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/;

    if(vrednostEmail==""){
        document.getElementById("subEmail").classList.add("crvena");
        document.getElementById("subEmail").innerHTML="Field must not be blank!";
    }
    else if(!reEmail.test(vrednostEmail)){
        document.getElementById("subEmail").classList.add("crvena");
        document.getElementById("subEmail").innerHTML="Email is not in good format!";
    }else{
        document.getElementById("subEmail").classList.remove("crvena");
        document.getElementById("subEmail").innerHTML="";
    }
}


function provera(){

    let validno=true;
    let niz=[];
    //proveraImena
    let vrednostImena = document.getElementById("name").value.trim();
    let reIme = /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/;;
    
    if(vrednostImena==""){
        document.getElementById("spanName").classList.add("crvena");
        document.getElementById("spanName").innerHTML="Field must not be blank!";
        validno=false;
    }
    else if(!reIme.test(vrednostImena)){
        document.getElementById("spanName").classList.add("crvena");
        document.getElementById("spanName").innerHTML="Name is not in good format!";
        validno=false;
    }else{
        document.getElementById("spanName").classList.remove("crvena");
        document.getElementById("spanName").innerHTML="";
    }
    //proveraEmail
    let vrednostEmail = document.getElementById("email").value.trim();
    let reEmail = /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/;

    if(vrednostEmail==""){
        document.getElementById("spanEmail").classList.add("crvena");
        document.getElementById("spanEmail").innerHTML="Field must not be blank!";
        validno=false;
    }
    else if(!reEmail.test(vrednostEmail)){
        document.getElementById("spanEmail").classList.add("crvena");
        document.getElementById("spanEmail").innerHTML="Email is not in good format!";
        validno=false;
    }else{
        document.getElementById("spanEmail").classList.remove("crvena");
        document.getElementById("spanEmail").innerHTML="";
    }
    //poljeDan
    let poljeDan = document.getElementById("Dani");
    if(poljeDan.selectedIndex==0){
        document.getElementById("spanDani").classList.add("crvena");
        document.getElementById("spanDani").innerHTML="Choose...";
        validno=false;
    }else{
        document.getElementById("spanDani").classList.remove("crvena");
        document.getElementById("spanDani").innerHTML="";
    }
    //poljeVreme
    let poljeVreme = document.getElementById("Vreme");
    if(poljeVreme.selectedIndex==0){
        document.getElementById("spanVreme").classList.add("crvena");
        document.getElementById("spanVreme").innerHTML="Choose...";
        validno=false;
    }else{
        document.getElementById("spanVreme").classList.remove("crvena");
        document.getElementById("spanVreme").innerHTML="";
    }
    //poljeDoktor
    let poljeDoktor = document.getElementById("Doktori");
    if(poljeDoktor.selectedIndex==0){
        document.getElementById("spanDoktori").classList.add("crvena");
        document.getElementById("spanDoktori").innerHTML="Choose...";
        validno=false;
    }else{
        document.getElementById("spanDoktori").classList.remove("crvena");
        document.getElementById("spanDoktori").innerHTML="";
    }
    //taMessage
    let taMessage = document.getElementById("textarea_message");
    if(taMessage.value==""){
        document.getElementById("spanMessage").classList.add("crvena");
        document.getElementById("spanMessage").innerHTML="Field must not be blank!";
        validno=false;
    }else{
        document.getElementById("spanMessage").classList.remove("crvena");
        document.getElementById("spanMessage").innerHTML="";
    }
    //proveraPrilikomKlikaNaTaster
    if(validno){
        niz.push(vrednostImena);
        niz.push(vrednostEmail);
        niz.push(poljeDan.value);
        niz.push(poljeVreme.value);
        niz.push(poljeDoktor.value);
        niz.push(taMessage.value);
        console.log(niz);
        alert("Successfuly sent!");
    }
}
function provera1(){
    let validno=true;

    let vrednostImena = document.getElementById("name1").value.trim();
    let reIme = /^([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)\s?([A-ZČĆŽŠĐŠЧЋШЂЉЖ][a-zčćđšž]+)?$/;;

    if(vrednostImena==""){
        document.getElementById("name1").style.borderBottomColor="red";
        validno = false;
    }
    else if(!reIme.test(vrednostImena)){
        document.getElementById("name1").style.borderBottomColor="red";
        validno = false;
    }else{
        document.getElementById("name1").style.borderBottomColor="green";
        
    }


    let vrednostEmail = document.getElementById("email1").value.trim();
    let reEmail = /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/;

    if(vrednostEmail==""){
        document.getElementById("email1").style.borderBottomColor="red";
        validno = false;
    }
    else if(!reEmail.test(vrednostEmail)){
        document.getElementById("email1").style.borderBottomColor="red";
        validno = false;
    }else{
        document.getElementById("email1").style.borderBottomColor="green";
        
    }


    let taMessage = document.getElementById("message");
    if(taMessage.value==""){
        document.getElementById("message").style.borderBottomColor="red";
        validno = false;
    }else{
        document.getElementById("message").style.borderBottomColor="green";
    }

    let vrednostSubject = document.getElementById("subject").value.trim();
    let reSubject = /^[A-ZČĆŽĐŠŽ][a-zčćšđžš]+$/;

    if(!reSubject.test(vrednostSubject)){
        document.getElementById("subject").style.borderBottomColor="red";
        validno = false;
    }else{
        document.getElementById("subject").style.borderBottomColor="green";
    }

    let vrednostTelefon = document.getElementById("phone").value.trim();
    let reTelefon = /^06[0123459]\/([\d][\d][\d])\/([\d][\d][\d][\d]?)$/;
    
    if(!reTelefon.test(vrednostTelefon)){
        document.getElementById("phone").style.borderBottomColor="red";
        validno = false;
    }else{
        document.getElementById("phone").style.borderBottomColor="green";
    }

    if(validno){
        alert("Message is successufly sent!");
    }
    
}

function provera2(){
    let validno=true;

    let vrednostEmail = document.getElementById("mc-email").value.trim();
    let reEmail = /^[a-zA-Zčćđžš\.\_\!\d\#\$\%\^\&\*\-]+[\.\_\!\d\#\$\%\^\&\*\-]*\@[a-zA-Z0-9.-]{2,10}(\.[a-z]{2,3}){1,2}$/;

    if(vrednostEmail==""){
        document.getElementById("subEmail").classList.add("crvena");
        document.getElementById("subEmail").innerHTML="Field must not be blank!";
        validno=false;
    }
    else if(!reEmail.test(vrednostEmail)){
        document.getElementById("subEmail").classList.add("crvena");
        document.getElementById("subEmail").innerHTML="Email is not in good format!";
        validno=false;
    }else{
        document.getElementById("subEmail").classList.remove("crvena");
        document.getElementById("subEmail").innerHTML="";
      
    }

    if(validno){
        alert("You are subscribed!");
    }
}