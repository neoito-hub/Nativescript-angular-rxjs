"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // this.items = this.itemService.getItems();
        console.log('fhgdkngkdjngkdngng kjdngkjen');
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'ns-items',
            moduleId: module.id,
            templateUrl: './items.component.html'
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQU83QztJQUdFLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVoRCxpQ0FBUSxHQUFSO1FBQ0UsNENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBVlUsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQzt5Q0FNaUMsMEJBQVc7T0FMakMsY0FBYyxDQVcxQjtJQUFELHFCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1pdGVtcycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpdGVtczogSXRlbVtdO1xuXG4gIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIGNvbnNvbGUubG9nKCdmaGdka25na2RqbmdrZG5nbmcga2pkbmdramVuJyk7XG4gIH1cbn1cbiJdfQ==