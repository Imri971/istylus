//Animation toTop button
 $(window).on("scroll", function() {
    if($(window).scrollTop() > 700){
       
        $('.toTop').css("display","block");
    }
    else {
        $('.toTop').css("display","none");
    }
});
//Page : index
let estActif = false;
  
	$('.navbar-toggle').on('click', function (){
		if (estActif){
			$('.collapse').css('display','block');
			
		} else{
			$('.collapse').css('display', 'none');
			
		}
		estActif = !estActif;
  });
  
  //Page: Poids idéal
		function calculLorentz(lorentz) { 
		
		let sizeLorentz=document.lorentzForm.sizeLorentz.value; //valeur de la taille
		let lorentzletiable;
		
		for (i=0;i<document.lorentzForm.sexLorentz.length;i++)
		{
			if (document.lorentzForm.sexLorentz[i].checked==true) /*<!--si un sexe est sélectionné-->*/
			lorentzletiable=i;
		}
		
		if (lorentzletiable ==1) /*- Si le sexe Homme est sélectionné-->*/
			{
      document.lorentzForm.weightLorentz.value= (sizeLorentz-100-((sizeLorentz-150)/4)).toFixed(0); //<!--Poids idéal (Homme), Formule: H-100-((H-15)/4)-->
			document.lorentzForm.excessiveLorentz.value= ((sizeLorentz-100-((sizeLorentz-150)/4))+(sizeLorentz-100-((sizeLorentz-150)/4))*0.1).toFixed(0); // <!--Poids excessif(Homme)-->
		
		}else{
			document.lorentzForm.weightLorentz.value = (sizeLorentz-100-((sizeLorentz-150)/2.5)).toFixed(0); //<!--Poids idéal (femme), Formule: H-100-((H-150)/2,5)-->
			document.lorentzForm.excessiveLorentz.value=((sizeLorentz-100-((sizeLorentz-150)/2.5))+(sizeLorentz-100-((sizeLorentz-150)/2.5))*0.1).toFixed(0); //<!--Poids excessif(femme)-->
			}
		}  
		
		function clearvaluesWeight(form)
		{
			form.sizeLorentz.value= "";
			form.weightLorentz.value= " ";
			form.excessiveLorentz.value= "";
		}
		
//*********************** */

//Page: Depenses énergétiques

    function calcul(formulaire)
    {
    var lenSx = formulaire.sexe.length;
    var Sxchecked = true;
    var blnCheckedsex = false;
    var intSx = 0;
    var message='';
    var intValPoid = formulaire.txtPoid.value;
    var intValTaille = formulaire.txtTaille.value;
    var intValAge = formulaire.txtAge.value; 
    
    for(intSx=0; intSx < lenSx; intSx++)
    {
    if (formulaire.sexe[intSx].checked == true && formulaire.sexe[intSx].value == 'f') /*Si vous avez sélectionner femme*/
    {
    var intPoid = 9.6;
    var intTaille = 1.8;
    var intAge = 4.7;
    var intMB = 655;  //metabolisme de base femme
    blnCheckedsex = true;
    break;
    }
    else if (formulaire.sexe[intSx].checked == true && formulaire.sexe[intSx].value == 'h') /*Si vous avez sélectionner homme*/
    {
    var intPoid = 13.7;
    var intTaille = 5;
    var intAge = 6.8; 
    var intMB = 66; //metabolisme de base homme
    blnCheckedsex = true;
    break; 
    }
    } 
    
    if (blnCheckedsex == false) /*-- Si le  sexe n'est pas sélectionné*/
    {
    message = 'Veuillez sélectionner un sexe !'; /*<!-- afficher-->*/
    Sxchecked = false;
    }
    
    if (intValPoid.length < 1 && Sxchecked) /*<!--si l'âge n'est pas choisi et que vous avez lancé le calcul-->*/
    {
    message = 'Veuillez saisir un poids !'; /*<!-- afficher-->*/
    Sxchecked = false;
    }
    
    if (intValTaille.length < 1 && Sxchecked)/* <!--si  la taille n'est pas choisi et que vous avez lancé le calcul-->*/
    {
    message = 'Veuillez saisir une taille !'; /*<!-- afficher-->*/
    Sxchecked = false;
    }
    
    if(intValAge.length < 1 && Sxchecked) /*<!--si l'âge n'est pas choisi et que vous avez lancé le calcul-->*/
    {
    message = 'Veuillez saisir un âge !'; 
    Sxchecked = false;
    }
    
    
    if (Sxchecked)
    { 
    var lenAct = formulaire.rdAction.length; /*<!-- Vous êtes sédentaire ou actif?-->*/
    var intAction = 0; /*<!-- Si vous n'avez pas sélectionné d'action :sédentaire ou actif-->*/
    var blnCheckedsex = false; 
    
    for(intAction=0; intAction < lenAct; intAction++) 
    {
    if (formulaire.rdAction[intAction].checked == true && formulaire.rdAction[intAction].value == 's')/* <!--Si vous avez sélectionné "Vous êtes plutôt inactif"-->*/
    {
    //sedentaire  
    var intPosition = 1.375;
    blnCheckedsex = true; 
    break;
    }
    else if (formulaire.rdAction[intAction].checked == true && formulaire.rdAction[intAction].value == 'a') /* <!--Si vous avez sélectionné "Vous pratiquez régulièrement du sport ou des activités physiques"-->*/
    {
    //actif  
    var intPosition = 1.55;
    blnCheckedsex = true;
    break;
    }
    }
    
    if (blnCheckedsex == false)
    {
    message = 'Veuillez sélectionner une activité sportive!';
    Sxchecked = false;
    } 
    }if(Sxchecked)
    {
    var intPTA=0; //Poids taille age
    var intValMB = 0; //metabolisme de base
    var intCalorie = 0; 
    
    intPTA = (intPoid*intValPoid) + (intTaille*intValTaille) - (intAge*intValAge);
    intValMB = intMB + intPTA;
    formulaire.txtMeta.value = intValMB;
    
    intCalorie = intPosition * intValMB;
    formulaire.txtCalorie.value = Math.round(intCalorie);
    }
    else
    {
    alert(message);
    } 
    } 

//Page: Indice de masse corporelle

    function imccalculate()
        {

        let taille = document.imc.taille.value;
        let poids = document.imc.poids.value;

        let indice = poids/(taille*taille);
        indice = indice.toFixed(1);
        document.imc.indice.value = indice;
        
        let text_imc = document.getElementById("text_imc");
        let infos_imc = document.getElementById("infos_imc");
     
      if(document.imc.indice.value <= 16.5 ){
          text_imc.innerHTML= "<i class='fas fa-exclamation-triangle'></i> Attention, un IMC de "+ document.imc.indice.value+" signifie que vous êtes en état de dénutrition.";
          infos_imc.innerHTML= "<i class='fas fa-info-circle text-primary'></i> Visitez la page concernant <a href='energyRequirement.html'>les besoins énergétiques</a>.";
        } else if(document.imc.indice.value > 16.5 &&  document.imc.indice.value <= 18.5){
          text_imc.textContent=  "Un IMC de "+ document.imc.indice.value + " signifie que vous êtes maigre au sens médical du terme.";
          infos_imc.innerHTML= "<i class='fas fa-info-circle text-primary'></i> Visitez la page concernant <a href='energyRequirement.html'>les besoins énergétiques</a>.";
      }else if (document.imc.indice.value >18.5 && document.imc.indice.value <= 25 ){
          text_imc.textContent = " Tout va bien, votre IMC de "+document.imc.indice.value+ " indique que vous êtes de corpulence normale.";
      }else if (document.imc.indice.value > 25 && document.imc.indice.value <= 30){
          text_imc.textContent = "Votre IMC de " +document.imc.indice.value+ " indique que vous commencez à être en surpoids.";
          infos_imc.innerHTML= "<i class='fas fa-info-circle text-primary'></i> Visitez les pages concernant <a href='alimentation.html'>l' alimentation</a>, le <a href='poids.html'>poids idéal</a> et les <a href='calorie.html'>dépenses caloriques </a>.";
      }else if (document.imc.indice.value >30 && document.imc.indice.value <= 35){
          text_imc.innerHTML= "<i class='fas fa-exclamation-triangle'></i> Attention, un IMC de "+document.imc.indice.value+ " indique que vous entrez dans un état d'obésité modérée. Une alimentation saine et une pratique sportive sont vivement conseillés.";
          infos_imc.innerHTML= "<i class='fas fa-info-circle text-primary'></i> Visitez les pages concernant <a href='alimentation.html'>l' alimentation</a>, le <a href='poids.html'>poids idéal</a> et les <a href='calorie.html'>dépenses caloriques </a>.";
        }else if (document.imc.indice.value >35 && document.imc.indice.value <= 40){
        text_imc.textContent= "Vous êtes en état d'obésité sévère avec un IMC de "+document.imc.indice.value+". Il faut consulter un médecin pour demander un traitement.";
        infos_imc.innerHTML= "<i class='fas fa-info-circle text-primary'></i> Visitez les pages concernant <a href='alimentation.html'>l' alimentation</a>, le <a href='poids.html'>poids idéal</a> et les <a href='calorie.html'>dépenses caloriques </a>.";
    }else if (document.imc.indice.value >40 ){
            text_imc.textContent= "Cet IMC de "+document.imc.indice.value+ " indique un état d'obésité morbide.";
            infos_imc.innerHTML= "<i class='fas fa-info-circle text-primary'></i> Visitez les pages concernant <a href='alimentation.html'>l' alimentation</a>, le <a href='poids.html'>poids idéal</a> et les <a href='calorie.html'>dépenses caloriques </a>.";
        }
      
      else if (document.imc.indice.value == " " ) {
          text_imc.textContent = "";
          infos_imc.innerHTML = "";
      }
        }

    function indiceclear(form)
        {
        let text_imc = document.getElementById("text_imc");
        let infos_imc = document.getElementById("infos_imc");
        form.indice.value = "";
        form.poids.value= "";
        form.taille.value= "";
        text_imc.textContent = " ";
        infos_imc.innerHTML= "";
        }

//Page: Calculateur de vitesse par km/h

    function course(form){
    // test input for error values and make zero if wrong
    if (form.heure.value==null||form.heure.value.length==0){
        form.heure.value=0;
    }
        if (form.minute.value==null||form.minute.value.length==0){
        form.minute.value=0;
    }
        if (form.seconde.value==null||form.seconde.value.length==0){
        form.seconde.value=0;
    }
    
    let et =  (form.distance.value);
    // make sure we've got everything we need...
    if (et != 0 && form.distance.value.length != 0){	
        // total seconds/km
        let t1 = et/(form.heure.value*3600+form.minute.value*60+form.seconde.value*1);
        form.vitesse.value= (t1*3600).toFixed(2);
  
        }
    return ;
       }
    
    function clear(form){
    // set it all to null
    form.distance.value = "";
    form.heure.value = "";
    form.minute.value = "";
    form.seconde.value = "";
    form.vitesse.value = "";
       }

//Page Calories par sport


function calculCalorie(weight,minutes,scalefactor)  /*-- poids,minute,facteur d'échelle par sport-->*/
{

calories=(Math.round(weight*minutes*scalefactor));
return calories;

}

function compute(form)

{

let w=form.weight.value*2.204
let m=form.minutes.value*1


form.marche.value=calculCalorie(w,m,0.0188)
form.marcheF.value=calculCalorie(w,m,0.0178)
form.marche1.value=calculCalorie(w,m,0.0292)
form.marche1F.value=calculCalorie(w,m,0.0277)
form.jogging.value=calculCalorie(w,m,0.0786)
form.joggingF.value=calculCalorie(w,m,0.075)
form.jogging1.value=calculCalorie(w,m,0.0968)
form.jogging1F.value=calculCalorie(w,m,0.0924)
form.jogging2.value=calculCalorie(w,m,0.11495)
form.jogging2F.value=calculCalorie(w,m,0.1097)
form.jogging3.value=calculCalorie(w,m,0.2238)
form.jogging3F.value=calculCalorie(w,m,0.2136)
form.stepper.value=calculCalorie(w,m,0.0236)
form.stepperF.value=calculCalorie(w,m,0.0165)
form.stepper1.value=calculCalorie(w,m,0.0605)
form.stepper1F.value=calculCalorie(w,m,0.0577)
form.velo.value=calculCalorie(w,m,0.0399)
form.veloF.value=calculCalorie(w,m,0.038)
form.velo1.value=calculCalorie(w,m,0.04175)
form.velo1F.value=calculCalorie(w,m,0.0398)
form.aerobic.value=calculCalorie(w,m,0.088)
form.aerobicF.value=calculCalorie(w,m,0.0867)
form.natation.value=calculCalorie(w,m,0.04085)
form.natationF.value=calculCalorie(w,m,0.0388)
form.natation1.value=calculCalorie(w,m,0.121)
form.natation1F.value=calculCalorie(w,m,0.1154)
form.ski.value=calculCalorie(w,m,0.0544)
form.skiF.value=calculCalorie(w,m,0.0519)
form.tennis.value=calculCalorie(w,m,0.050)
form.tennisF.value=calculCalorie(w,m,0.0476)
form.alpinisme.value=calculCalorie(w,m,0.0605)
form.alpinismeF.value=calculCalorie(w,m,0.0577)
form.basketball.value=calculCalorie(w,m,0.063)
form.basketballF.value=calculCalorie(w,m,0.0603)
form.danse.value=calculCalorie(w,m,0.0343)
form.danseF.value=calculCalorie(w,m,0.0327)
form.lutte.value=calculCalorie(w,m,0.0786)
form.lutteF.value=calculCalorie(w,m,0.075)
form.couper.value=calculCalorie(w,m,0.0484)
form.couperF.value=calculCalorie(w,m,0.0462)
form.bowling.value=calculCalorie(w,m,0.021)
form.bowlingF.value=calculCalorie(w,m,0.0178)
form.musculation.value=calculCalorie(w,m,0.041)
form.musculationF.value=calculCalorie(w,m,0.030)
form.pingpong.value=calculCalorie(w,m,0.0348)
form.pingpongF.value=calculCalorie(w,m,0.0331)
form.aviron.value=calculCalorie(w,m,0.0968)
form.avironF.value=calculCalorie(w,m,0.0924)
form.football.value=calculCalorie(w,m,0.0968)
form.footballF.value=calculCalorie(w,m,0.0924)
form.course.value=calculCalorie(w,m,0.028)
form.courseF.value=calculCalorie(w,m,0.0251)
form.assis.value=calculCalorie(w,m,0.009)
form.assisF.value=calculCalorie(w,m,0.0084)
form.sommeil.value=calculCalorie(w,m,0.00705)
form.sommeilF.value=calculCalorie(w,m,0.006702)   
form.bureau.value=calculCalorie(w,m,0.0106)
form.bureauF.value=calculCalorie(w,m,0.01)
form.conduire.value=calculCalorie(w,m,0.0141)
form.conduireF.value=calculCalorie(w,m,0.0134)
form.bricolage.value=calculCalorie(w,m,0.0218)
form.bricolageF.value=calculCalorie(w,m,0.0207)

}

function clearvalues(form)

{

form.weight.value= ""
form.minutes.value=60
form.marche.value=""
form.marcheF.value=""
form.marche1.value=""
form.marche1F.value=""
form.jogging.value=""
form.joggingF.value=""   
form.jogging1.value=""
form.jogging1F.value=""
form.jogging2.value=""
form.jogging2F.value=""
form.jogging3.value=""
form.jogging3F.value=""
form.stepper.value=""
form.stepperF.value=""
form.stepper1.value=""
form.stepper1F.value=""
form.velo.value=""
form.veloF.value=""
form.velo1.value=""
form.velo1F.value=""
form.aerobic.value=""
form.aerobicF.value=""
form.natation.value=""
form.natationF.value=""
form.natation1.value=""
form.natation1F.value=""
form.ski.value=""
form.skiF.value=""
form.tennis.value=""
form.tennisF.value=""
form.alpinisme.value=""
form.alpinismeF.value=""
form.basketball.value=""
form.basketballF.value=""
form.danse.value=""
form.danseF.value=""
form.lutte.value=""
form.lutteF.value=""
form.couper.value=""
form.couperF.value=""
form.bowling.value=""
form.bowlingF.value=""
form.musculation.value=""
form.musculationF.value=""
form.pingpong.value=""
form.pingpongF.value=""
form.aviron.value=""
form.avironF.value=""
form.football.value=""
form.footballF.value=""
form.course.value=""
form.courseF.value=""
form.assis.value=""
form.assisF.value=""
form.sommeil.value=""
form.sommeilF.value=""
form.bureau.value=""
form.bureauF.value=""
form.conduire.value=""
form.conduireF.value=""
form.bricolage.value=""
form.bricolageF.value=""

}

//Page Vitesse 60m

function calculateVitesse()
{
let temps = document.stride.temps.value;
    r1=(7.3829894+(temps*-0.431975)+(temps*temps*0.1394189)).toFixed(2);
    r2= (13.795573+(temps*-0.720532)+(temps*temps*0.2806044)).toFixed(2);

    document.stride.r1.value = r1;
    document.stride.r2.value = r2;
}
function valclear()
{
    r1="";
    r2="";

    document.stride.r1.value = r1;
    document.stride.r2.value = r2;
    document.stride.temps.value= "";
}

//Page VMA

function getmin(time) {
if (time/60<1) mins = 0;
 else {
 mins = parseInt(time/60)};   
 return mins; 
}

function getsec(time) {
if (time/60<1) mins = 0;
 else {
 mins = parseInt(time/60)};   
  secs = parseInt(time-60*mins);
  return secs;    
}

function computeFor(form){ 

 let vma = form.vitma.value*1000;
 let pourcent =form.pcent.value/100;
 let dist = form.distance.value;
 let vit = vma*pourcent;
 let tmps = dist/vit*3600;
 let tmpskm = (3600/(vit/1000));

tm = getmin(tmps);
ts =getsec(tmps);

tm1 = getmin(tmpskm);
ts1 =getsec(tmpskm);


form.minutes.value = getmin(tmps);
form.secondes.value = getsec(tmps);

form.minute0.value = getmin(tmpskm);
form.seconde0.value = getsec(tmpskm);
 } 

function clearForm(form) { 
}