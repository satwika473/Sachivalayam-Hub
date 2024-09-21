import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    'https://www.woodburn-or.gov/sites/default/files/styles/full_node_primary_extra_wide/public/imageattachments/community-services/page/1271/cs_banner.png?itok=U6qGBZzc',
    'https://www.makemyassignments.com/blog/wp-content/uploads/2024/05/community.png',
    'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1700596365/yorkcountyschoolsorg/lhd4mremmdqqspohnpju/communityservicebanner.jpg'
  ];
  currentIndex: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const transformValue = `translateX(-${this.currentIndex * 100}%)`;
      this.renderer.setStyle(this.el.nativeElement.querySelector('.slides'), 'transform', transformValue);
    }, 3000); // Interval for changing the image, 3000ms = 3 seconds
  }
}
