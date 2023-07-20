
document.querySelector("button").addEventListener("click",function(){

     CalculateBmi();
     
});
  
     function CalculateBmi(){

     var Weight = document.getElementById("fat").value;
     var Height = document.getElementById("tall").value;
     var bmi = Math.round(((Weight/(Height*Height)) * 10)) /10;

     //SETTING BMI VALUE OF A PERSON.
      document.querySelector("output").innerHTML = "YOUR'S BMI IS : " + bmi + "KG/M2";
     
      //STATUS OF A PERSON BASED ON HIS/HER BMI

       aboutBmi(bmi);//function call

      function aboutBmi(bmi){
          if(bmi < 18.5)
          document.querySelector("suggestions").innerHTML = "UnderWeight";
          else if(bmi >= 18.5  && bmi < 24.9)
          document.querySelector("suggestions").innerHTML = "NormalWeight";
          else if(bmi >= 25 && bmi < 29.9)
          document.querySelector("suggestions").innerHTML = "OverWeight";
          else
          document.querySelector("suggestions").innerHTML = "Obesity";
          return;
     }
      
     document.querySelector("notepoints").innerText = "1.Eat proper food daily\n\n" +
                                                      "2.Walk up early in the morning\n\n" + 
                                                      "3.Do Exercise everyday\n\n"
                                                      "4.Do not eat junk food" ;
}


