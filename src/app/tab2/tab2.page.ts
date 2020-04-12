import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  data:any={};
  constructor()
  {
   this.data=[
    {"toogle":0,"question":"What is Covid-19?","answer":"COVID-19 is the infectious disease caused by the most recently discovered coronavirus. The new virus and disease were unknown before the outbreak began in in Wuhan, China, in December 2019.","zipped":true},
    {"toogle":0,"question":"What is Coronavirus?","answer":"Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome(MERS) and Severe Acute Respiratory Syndrome(SARS). The most recently discovered coronavirus causes COVID-19.","zipped":true},
    {"toogle":0,"question":"How does COVID-19 spread?","answer":"People can catch COVID-19 from otheres who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects or surfaces around the person. Other people can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. That is why it is advisable to stay more than 1 metre away from the infected person.","zipped":true},
    {"toogle":0,"question":"What is the incubation period for COVID-19?","answer":"The inccubation period means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around 5 days.","zipped":true},
    {"toogle":0,"question":"Who is at risk of developing severe illness?","answer":"While we are still learning about how COVID-19 affects people, older persons and persons with pre-existing medical conditions (such as high blood-pressure, heart disease, lung disease, cancer or diabetes) appear to develop serious illness more often than others","zipped":true},
    {"toogle":0,"question":"Are antibiotics effective in preventing or treating the COVID-19?","answer":"No, Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work.","zipped":true},
    {"toogle":0,"question":"Is there a vaccine, drug or treatment for COVID-19?","answer":"Not yet. To date, there is no vaccine and no specific antiviral medicine to prreven or treat COVID-19. However, those affected should receive care to releive symptoms. People with serious illness should be hospitalized. Most patients recover thanks to the supportive care. Possible vaccines and some specific drug treatment are under investigation. They are being tested through clinical trials.","zipped":true},
    {"toogle":0,"question":"Should I wear a mask to protect myself?","answer":"Only wear a mask if you are ill with COVID-19 symptoms or looking after someone who may have COVID-19. There is a world-wide shortage of masks, so World Health Organization urges people to use masks wisely.","zipped":true}
  ];
  }
  ngOnInit()
  {
    
  }
  popdown(data)
  {
    if (data.toogle==0)
    {
      data.toogle=1;
      data.zipped=false;
    }
    else
    {
      data.toogle=0;
      data.zipped=true;
    }
  }
 
}
