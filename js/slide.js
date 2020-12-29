export default class slide{
  constructor(slide, wrapper){
    this.slide =  document.querySelectorAll(slide);
    this.wrapper = document.querySelectorAll(wrapper);

  }

  onStart(event){
    event.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  onMove(event){

  }

  onEnd(event){
    this.wrapper.removeEventListener('mousemove', this.onMove)
  }

  addSlideEvents(){
    this.wrapper.addEventListener('mouseDown', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onEnd)
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init(){
    this.bindEvents();
    this.addSlideEvents();
    return this
  }
}