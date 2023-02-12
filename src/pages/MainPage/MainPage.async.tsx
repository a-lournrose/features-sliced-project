import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Для тестов
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));