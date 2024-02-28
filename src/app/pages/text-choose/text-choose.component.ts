import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { log } from 'console';
import Typed from 'typed.js';

@Component({
  selector: 'app-text-choose',
  standalone: true,
  imports: [],
  templateUrl: './text-choose.component.html',
  styleUrl: './text-choose.component.scss'
})
export class TextChooseComponent implements OnInit, AfterViewInit{

  typed:any; 

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.animateExplanation(); 
    }
    
    
    //todo, on complete: preguntas que haces y luego das las opciones una por una. 
  }

  animateExplanation(){
    this.typed = new Typed('#writeText1', {
      strings: ['Despiertas en un mundo en que unos seres sintientes <br> más inteligentes que la media <br>  maltratan y asesinan a otros seres sintientes <br> sin necesidad y siendo conscientes de lo que hacen.'],
      typeSpeed: 30,
      showCursor:false,
      onComplete: this.animateQuestion
    })
  }

  animateQuestion(){

    this.typed = new Typed('#writeText2', {
      strings: [ '¿qué haces?'],
      typeSpeed: 70,
      showCursor:false
    })

    TextChooseComponent.animateAnswers();
  }

  public static animateAnswers(){
    setTimeout(()=>{
      console.log('answerContainer1')
      let answerContiner1 = document.getElementById('answerContainer1')
      answerContiner1?.classList.remove('d-none')
    },1500)
    setTimeout(()=>{
      console.log('answerContainer2')
      let answerContiner2 = document.getElementById('answerContainer2')
      answerContiner2?.classList.remove('d-none')
    },2000)
    setTimeout(()=>{
      console.log('answerContainer3')
      let answerContiner3 = document.getElementById('answerContainer3')
      answerContiner3?.classList.remove('d-none')
    },2500)
  }

}
  // animateAnswer1(){
  //   this.typed = new Typed('#writeText3', {
  //     strings: [ 'Te escandalizas e intentas hacer todo lo posible por evitar que se siga haciendo.'],
  //     typeSpeed: 10,
  //     showCursor:false,
  //     onComplete: this.animateAnswer2
  //   })
  // }

  // animateAnswer2(){
  //   this.typed = new Typed('#writeText4', {
  //     strings: [ 'No te unes a ellos, pero piensas que cada cual haga lo que quiera.'],
  //     typeSpeed: 10,
  //     showCursor:false,
  //     onComplete: this.animateAnswer3
  //   })
  // }

  // animateAnswer3(){
  //   this.typed = new Typed('#writeText5', {
  //     strings: [ 'Te unes a ellos y aprovechas esos privilegios sin darle muchas vueltas. Aunque no está bien, nadie te juzgará.'],
  //     typeSpeed: 10,
  //     showCursor:false
  //   })
  // }




