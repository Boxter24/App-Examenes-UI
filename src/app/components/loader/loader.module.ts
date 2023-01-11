import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule],
    exports: [LoaderComponent]
})
export class LoaderModule {}