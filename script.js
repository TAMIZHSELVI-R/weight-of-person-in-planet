let cal=document.querySelector('#cal')
cal.addEventListener('click',e=>{
    let mass=document.querySelector('#mass').value
    let planet=document.querySelector('#planetss').value
    let weight
switch(planet){ 
    case 'Mercury':
       document.querySelector('#planetpic').innerHTML='<img src="mercury.jpg">';
       weight=(parseFloat(mass)/9.8)*3.7;
       document.querySelector('#weight').innerHTML='Your Weight on MERCURY is '+Math.floor(weight);
       break;
    case 'Venus':
        document.querySelector('#planetpic').innerHTML='<img src="venus.jpg" width="250px">';
        weight=(parseFloat(mass)/9.8)*8.87;
       document.querySelector('#weight').innerHTML='Your Weight on VENUS is '+Math.floor(weight);
        break;
    case 'Earth':
         document.querySelector('#planetpic').innerHTML='<img src="earth.jpg">';
        
       document.querySelector('#weight').innerHTML='Your Weight on EARTH is '+Math.floor(mass);
        break;    
    case 'Mars':
         document.querySelector('#planetpic').innerHTML='<img src="mars.jpg"style="400px">';
         weight=(parseFloat(mass)/9.8)*3.721;
       document.querySelector('#weight').innerHTML='Your Weight on MARS is '+Math.floor(weight);
         break;
     case 'Jupiter':
       document.querySelector('#planetpic').innerHTML='<img src="jupiter.jpg">';
       weight=(parseFloat(mass)/9.8)*24.79;
       document.querySelector('#weight').innerHTML='Your Weight on JUPITER is '+Math.floor(weight);
       break;
     case 'Saturn':
       document.querySelector('#planetpic').innerHTML='<img src="saturn.jpg">';
       weight=(parseFloat(mass)/9.8)*10.44;
       document.querySelector('#weight').innerHTML='Your Weight on SATURN is '+Math.floor(weight);
       break;
    case 'Uranus':
       document.querySelector('#planetpic').innerHTML='<img src="uranus.jpg">';
       weight=(parseFloat(mass)/9.8)*8.87;
       document.querySelector('#weight').innerHTML='Your Weight on URANUS is '+Math.floor(weight);
       break;
     case 'Neptune':
       document.querySelector('#planetpic').innerHTML='<img src="neptune.jpg">';
       weight=(parseFloat(mass)/9.8)*11.15;
       document.querySelector('#weight').innerHTML='Your Weight on NEPTUNE is '+Math.floor(weight);
       
       break;
    case 'Pluto':
       document.querySelector('#planetpic').innerHTML='<img src="pluto.jpg">';
       weight=(parseFloat(mass)/9.8)*0.62;
       document.querySelector('#weight').innerHTML='Your Weight on PLUTO is '+Math.floor(weight);
       break;

}
  

   
   console.log(planet)
   console.log(mass)
})