import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbProgressbarModule,
  NgbRatingModule,
  NgbTimepickerModule,
  NgbToastModule,
  NgbTooltipModule,
  NgbTypeaheadModule
} from "@ng-bootstrap/ng-bootstrap";
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import {allIcons} from "ng-bootstrap-icons/icons";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbAccordionModule,
    NgbAlertModule,
    NgbButtonsModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbTimepickerModule,
    NgbToastModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    BootstrapIconsModule.pick(allIcons)
  ],
  exports: [
    NgbAccordionModule,
    NgbAlertModule,
    NgbButtonsModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbTimepickerModule,
    NgbToastModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    BootstrapIconsModule
  ]
})
export class GuiModule { }
