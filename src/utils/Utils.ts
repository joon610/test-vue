

export default class ScreenInfo {

    public static isMobile(standardPx: number = 425): boolean {
        if (window.screen.width <= standardPx) {
            return true;
        }
        return false;
    }
}
