import "ng-redux";
import {reducers} from "./reducer/index";

const devToolsExtension = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f;

export const app = angular.module('ReduxTable', ['ngRedux'])
    .config(function ($ngReduxProvider) {
        $ngReduxProvider.createStoreWith(
            reducers,
            [],
            [devToolsExtension]
        );
    });
