import "../node_modules/angular/angular";
// import "ng-redux";
import "./app/index.js";

angular.bootstrap(document.getElementById('ng-view'), [
    // 'ngRedux',
    'ReduxTable',
]);

