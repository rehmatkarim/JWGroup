import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public name = {
    'Machinery' : 'Machinery Value',
    'Trade' : 'Trade Value',
    'Construction & Building Material' : 'Construction & Building Material values',
    'Agriculture' : 'Agriculture values',
    'Import & Export' : 'Import & Export values',
    'Construction' : 'Construction value'
  };
  public heading: string;
  constructor(private modalService: NgbModal){

  }


  open(content, type) {
      this.heading = type;


      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      }, (reason) => {

      });
    }
  ngOnInit() {
    }



}


