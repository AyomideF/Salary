function salaryCalculator(){
    var normalHour = parseFloat(document.getElementById('normal').value);
 
    var salary = (normalHour) =>  { 
        if(normalHour > 4){
            return (normalHour * 1000) + ((normalHour - 4) * 200); 
        }
        return (normalHour * 1000);
      }

    document.getElementById('answer').textContent = salary(normalHour);
}; 

