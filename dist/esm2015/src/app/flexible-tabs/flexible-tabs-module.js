import * as tslib_1 from "tslib";
/*
* Provides rendering of flexible tabs in a lazy load fashion.
*/
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexibleTabsComponent, FlexibleTabComponent } from './flexible.tabs.component';
let FlexibleTabsModule = class FlexibleTabsModule {
};
FlexibleTabsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            FlexibleTabsComponent,
            FlexibleTabComponent
        ],
        exports: [
            FlexibleTabsComponent,
            FlexibleTabComponent
        ],
        entryComponents: [],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], FlexibleTabsModule);
export { FlexibleTabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleGlibGUtdGFicy1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvZmxleGlibGUtdGFicy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxleGlibGUtdGFicy9mbGV4aWJsZS10YWJzLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0VBRUU7QUFDRixPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXFCeEYsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7Q0FBRyxDQUFBO0FBQXJCLGtCQUFrQjtJQW5COUIsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsWUFBWTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1YscUJBQXFCO1lBQ3JCLG9CQUFvQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNMLHFCQUFxQjtZQUNyQixvQkFBb0I7U0FDdkI7UUFDRCxlQUFlLEVBQUUsRUFDaEI7UUFDRCxTQUFTLEVBQUUsRUFDVjtRQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7R0FFVyxrQkFBa0IsQ0FBRztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIFByb3ZpZGVzIHJlbmRlcmluZyBvZiBmbGV4aWJsZSB0YWJzIGluIGEgbGF6eSBsb2FkIGZhc2hpb24uXHJcbiovXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBGbGV4aWJsZVRhYnNDb21wb25lbnQsIEZsZXhpYmxlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9mbGV4aWJsZS50YWJzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEZsZXhpYmxlVGFic0NvbXBvbmVudCxcclxuICAgICAgICBGbGV4aWJsZVRhYkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBGbGV4aWJsZVRhYnNDb21wb25lbnQsXHJcbiAgICAgICAgRmxleGlibGVUYWJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGV4aWJsZVRhYnNNb2R1bGUge31cclxuIl19