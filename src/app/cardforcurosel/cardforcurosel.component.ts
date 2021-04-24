import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { gsap, TweenLite, TimelineMax } from 'gsap'
import { Draggable,  } from 'gsap/Draggable'
@Component({
  selector: 'app-cardforcurosel',
  templateUrl: './cardforcurosel.component.html',
  styleUrls: ['./cardforcurosel.component.css']
})
export class CardforcuroselComponent implements OnInit ,AfterViewInit{

  proxy: Element;
  cellWidth = 456;
  numCells: number;
  cellStep: number;
  wrapWidth: number;
  baseTL: TimelineMax;
  tweenLite: TweenLite;
  animation;
  draggable: Draggable;
  picker: Element;

  constructor(private render: Renderer2) {}

  @ViewChild("container", { static: false }) container: ElementRef;
  @ViewChildren("cell") cell: QueryList<ElementRef>;

  ngOnInit() {
    gsap.registerPlugin(Draggable);
    gsap.defaults({ ease: "none" });

  }

  ngAfterViewInit() {
    this.init();
    this.createBase();
  }

  init() {
    this.numCells = this.cell.length;
    this.cellStep = 1 / 5;
    this.wrapWidth = this.cellWidth * 3.5;
    this.proxy = this.render.createElement("div");
    TweenLite.set(this.proxy, { x: "+=0" });
    this.picker = this.container.nativeElement;
  }

  createBase() {
    this.baseTL = new TimelineMax({ paused: true });
    this.createTimeline();
    this.initialCellPosition();
    this.animate();
    this.drag();
  }

  createTimeline() {
    TweenLite.set(this.picker, {
      width: (this.wrapWidth - this.cellWidth) * 1.05
    });
  }

  initialCellPosition() {
    this.cell.forEach((ele, index) => {
      this.initCell(ele.nativeElement, index);
    });
  }

  animate() {
    this.animation = new TimelineMax({ repeat: -1, paused: true }).add(
      this.baseTL.tweenFromTo(1, 2, { immediateRender: true })
    );
  }

  drag() {
    console.log("draging");
    
    this.draggable = new Draggable(this.proxy, {
      type: "x",
      trigger: this.picker,
      // bounds: this.picker,
      throwProps: true,
      callbackScope: this,
      cursor: "pointer",
      onDrag: this.updateProgress,
      onThrowUpdate: this.updateProgress,
      snap: this.snapX,
      onThrowComplete: () => {
        console.log("onThrowComplete");
      }
    });
  }

  initCell(ele: Element, index: number) {
    TweenLite.set(ele, {
      width: this.cellWidth ,
      scale: 0.45,
      x: -this.cellWidth
    });

    const tlm = new TimelineMax({ repeat: 1 })
      .to(ele, 1, { x: `+=${this.wrapWidth}` /*, rotationX: -rotationX*/ }, 0)
      .to(ele,this.cellStep,
        {
          color: "#000000",
          scale: 0.7,
          repeat: 1,
          yoyo: true,
          borderColor: "#FFC000"
        },
        0.5 - this.cellStep
      );
    this.baseTL.add(tlm, index * -this.cellStep);
  }

  snapX(x): number {
    return Math.round(x / this.cellWidth) * this.cellWidth;
  }

  updateProgress() {
    console.log('updaetd');
    
    this.animation.progress(
      gsap.utils.wrap(0, 1, (this.draggable.x as number) / this.wrapWidth)
    );
  }
  
  animateSlides(direction: number) {
    debugger
    let position = gsap.getProperty(this.proxy, 'x')
    console.log(position);
    
    var x = this.snapX( ( position as number) + direction * this.cellWidth  );
    console.log(x);
    TweenLite.to(this.proxy, 1, {
      x: x,
      onUpdate: () => {
        this.animation.progress( ( position as number) / this.wrapWidth);
      }
    });
  }

}
